"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon, Upload } from "lucide-react";
import AiButton from "../ui/Aibutton";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { processImageSearch } from "@/actions/home";
import { useClientStore } from "@/store/useClientStore";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

export default function Search() {
  const router = useRouter();
  const [searchImage, setSearchImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  // fetch hook for processing image
  const {
    loading: isProcessing,
    fn: processImageFn,
    data: processResult,
    error: processError,
  } = useFetch(processImageSearch);

  const clientInfo = useClientStore((state) => state.clientInfo);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        toast.error("Image size must be less than 50MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };
      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Failed to read the image");
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: { "image/*": [".jpeg", ".jpg", ".png"] },
      maxFiles: 1,
    });

  const handleImageSearch = async (e) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first");
      return;
    }
    await processImageFn(searchImage);
  };

  return (
    <>
      <form className="mt-4 flex gap-2">
        <div className="h-11 rounded-xl border shadow flex items-center overflow-hidden w-full relative">
        
          <Input
          placeholder="What car are you looking for?"
            className="border-none shadow-none h-full w-full focus-visible:ring-0 focus-visible:outline-none"
            type="search"
          />
          <div className="w-14 border-l text-neutral-700 flex justify-center items-center">
            <SearchIcon className="w-7" />
          </div>
        </div>
        <AiButton
          isImageSearchActive={isImageSearchActive}
          setIsImageSearchActive={setIsImageSearchActive}
        />
      </form>

      {isImageSearchActive && (
        <div className="mt-4 z-40 bg-white p-4 rounded-xl transition-all ease-in-out duration-200">
          <form onSubmit={handleImageSearch} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 text-center">
              {imagePreview ? (
                <div className="flex flex-col items-center">
                  <Image
                    width={200}
                    height={200}
                    src={imagePreview}
                    alt="Car preview"
                    className="h-40 object-contain mb-4"
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="cursor-pointer">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-2">
                      {isDragActive && !isDragReject
                        ? "Leave the file here to upload"
                        : "Drag & drop a car image or click to select"}
                    </p>
                    {isDragReject && (
                      <p className="text-red-500 mb-2">Invalid image type</p>
                    )}
                    <p className="text-gray-400 text-sm">
                      Supports: JPG, PNG (max 50MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {imagePreview && (
              <Button
                type="submit"
                className="w-full"
                disabled={isUploading || isProcessing}
              >
                {isUploading
                  ? "Uploading..."
                  : isProcessing
                  ? "Analyzing image..."
                  : "Search with this Image"}
              </Button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
