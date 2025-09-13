"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { serializeCarData } from "@/lib/helpers";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dduwiqu4j",
  api_key: "214725748195245", // Replace with your actual API key
  api_secret: process.env.CLOUDINARY_API_SECRET || "bWK-VpWK1DG8q7u1Q1x3DsYYeDQ", // Replace with your actual API secret
  secure: true,
});

// Function to convert File to base64
async function fileToBase64(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer.toString("base64");
}

// Gemini AI integration for car image processing
export async function processCarImageWithAI(file) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const base64Image = await fileToBase64(file);

    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: file.type,
      },
    };

    const prompt = `
      Analyze this car image and extract the following information:
      1. Make (manufacturer)
      2. Model
      3. Year (approximately)
      4. Color
      5. Body type (SUV, Sedan, Hatchback, etc.)
      6. Mileage (in miles) extract milage base on car
      7. Fuel type (your best guess)
      8. Transmission type (your best guess)
      9. Price (your best guess) not add $ symbol or commas in your response e.g. 10000 just simple number in a string format
      10. Most Attractive Description of the car to create intrest in buyer about the car as to be added to a car listing

      Format your response as a clean JSON object with these fields:
      {
        "make": "",
        "model": "",
        "year": 0,
        "color": "",
        "price": "",
        "mileage": "",
        "bodyType": "",
        "fuelType": "",
        "transmission": "",
        "description": "",
        "confidence": 0.0
      }

      For confidence, provide a value between 0 and 1 representing how confident you are in your overall identification.
      Only respond with the JSON object, nothing else.
    `;

    const result = await model.generateContent([imagePart, prompt]);
    const response = await result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

    try {
      const carDetails = JSON.parse(cleanedText);

      const requiredFields = [
        "make",
        "model",
        "year",
        "color",
        "bodyType",
        "price",
        "mileage",
        "fuelType",
        "transmission",
        "description",
        "confidence",
      ];

      const missingFields = requiredFields.filter(
        (field) => !(field in carDetails)
      );

      if (missingFields.length > 0) {
        throw new Error(
          `AI response missing required fields: ${missingFields.join(", ")}`
        );
      }
      return {
        success: true,
        data: carDetails,
      };
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      console.log("Raw response:", text);
      return {
        success: false,
        error: "Failed to parse AI response",
      };
    }
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error("Gemini API error: " + error.message);
  }
}

// Add a car to the database with images
export async function addCar({ carData, images }) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    // Create a unique folder name for this car's images
    const carId = uuidv4();
    const folderPath = `cars/${carId}`;

    // Upload all images to Cloudinary
    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const base64Data = images[i];

      // Skip if image data is not valid
      if (!base64Data || !base64Data.startsWith("data:image/")) {
        console.warn("Skipping invalid image data");
        continue;
      }

      // Extract the base64 part (remove the data:image/xyz;base64, prefix)
      const base64 = base64Data.split(",")[1];

      // Determine file extension from the data URL
      const mimeMatch = base64Data.match(/data:image\/([a-zA-Z0-9]+);/);
      const fileExtension = mimeMatch ? mimeMatch[1] : "jpeg";

      // Create filename (without extension in public_id)
      const fileName = `image-${Date.now()}-${i}`;
      const publicId = `${folderPath}/${fileName}`;

      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(
        `data:image/${fileExtension};base64,${base64}`,
        {
          folder: folderPath, // Specify folder separately
          public_id: publicId, // Specify public_id without extension
          resource_type: "image",
        }
      );

      if (!uploadResult.secure_url) {
        console.error("Error uploading image to Cloudinary:", uploadResult);
        throw new Error("Failed to upload image to Cloudinary");
      }

      imageUrls.push(uploadResult.secure_url);
    }

    if (imageUrls.length === 0) {
      throw new Error("No valid images were uploaded");
    }

    // Add the car to the database
    const car = await db.car.create({
      data: {
        id: carId,
        make: carData.make,
        model: carData.model,
        year: carData.year,
        price: carData.price,
        mileage: carData.mileage,
        color: carData.color,
        fuelType: carData.fuelType,
        transmission: carData.transmission,
        bodyType: carData.bodyType,
        seats: carData.seats,
        description: carData.description,
        status: carData.status,
        featured: carData.featured,
        images: imageUrls,
      },
    });

    // Revalidate the cars list page
    revalidatePath("/admin/cars");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error adding car:", error);
    throw new Error("Error adding car: " + error.message);
  }
}
// Fetch all cars with simple search
export async function getCars(search = "") {
  try {
    let where = {};

    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
        { color: { contains: search, mode: "insensitive" } },
      ];
    }

    const cars = await db.car.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    const serializedCars = cars.map(serializeCarData);

    return {
      success: true,
      data: serializedCars,
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Delete a car by ID
export async function deleteCar(id) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // Fetch the car to get its images
    const car = await db.car.findUnique({
      where: { id },
      select: { images: true },
    });

    if (!car) {
      return {
        success: false,
        error: "Car not found",
      };
    }

    // Delete the car from the database
    await db.car.delete({
      where: { id },
    });

    // Delete images from Cloudinary
    try {
      const publicIds = car.images
        .map((imageUrl) => {
          // Extract public_id from Cloudinary URL
          // Example URL: https://res.cloudinary.com/dduwiqu4j/image/upload/v1234567890/cars/carId/image-1234567890-0.jpeg
          const urlParts = imageUrl.split("/");
          const publicIdWithExtension = urlParts
            .slice(urlParts.indexOf("cars"))
            .join("/");
          const publicId = publicIdWithExtension.split(".").slice(0, -1).join(".");
          return publicId;
        })
        .filter(Boolean);

      // Delete files from Cloudinary if publicIds were extracted
      if (publicIds.length > 0) {
        for (const publicId of publicIds) {
          await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
        }
      }
    } catch (storageError) {
      console.error("Error deleting images from Cloudinary:", storageError);
      // Continue even if image deletion fails
    }

    // Revalidate the cars list page
    revalidatePath("/admin/cars");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error deleting car:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Update car status or featured status
export async function updateCarStatus(id, { status, featured }) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const updateData = {};

    if (status !== undefined) {
      updateData.status = status;
    }

    if (featured !== undefined) {
      updateData.featured = featured;
    }

    await db.car.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/admin/cars");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error updating car status:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}