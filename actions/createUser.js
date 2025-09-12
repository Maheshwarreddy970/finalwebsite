"use server";

import { db } from "@/lib/prisma";
import { UserRole } from "@prisma/client";

export async function syncUserToDatabase(user) {
  try {
    // Validate user data
    if (!user || !user.id || !user.email) {
      throw new Error("Invalid user data");
    }

    const clerkUserId = user.id;
    const email = user.email;
    const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
    const imageUrl = user.imageUrl;

    // Define the role based on the email
    const role = email === "maheshwarreddymutupuri@gmail.com" ? UserRole.ADMIN : UserRole.USER;

    // Upsert the user in the database (create if not exists, update if exists)
    const updatedUser = await db.user.upsert({
      where: { clerkUserId },
      update: {
        email,
        name,
        imageUrl,
        role,
        updatedAt: new Date(),
      },
      create: {
        clerkUserId,
        email,
        name,
        imageUrl,
        role,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Error syncing user to database:", error);
    return { success: false, error: error.message };
  }
}