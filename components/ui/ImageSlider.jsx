'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SparklesText } from "./SparklesText";
import { useClientStore } from "@/store/useClientStore";
import Image from "next/image";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const clientInfo = useClientStore((state) => state.clientInfo);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 4) % 5);
      return updatedIndexes;
    });
  };

  const images = [
    { src: "/Picsart_25-07-24_17-09-12-760.png", alt: "Image 1", body: "SUV" },
    { src: "/Picsart_25-07-24_17-10-52-378.png", alt: "Image 2", body: "Sedan" },
    { src: "/Picsart_25-07-24_17-12-25-450.png", alt: "Image 3", body: "Convertible" },
    { src: "/Picsart_25-07-24_17-14-15-439.png", alt: "Image 4", body: "Pickup" }, // Fixed typo
    { src: "/Picsart_25-07-24_17-15-29-197.png", alt: "Image 5", body: "Hackback" },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-75%", scale: 0.6, zIndex: 3 },
    left: { x: "-130%", scale: 0.4, zIndex: 2 },
    right: { x: "130%", scale: 0.4, zIndex: 1 },
    right1: { x: "75%", scale: 0.6, zIndex: 3 },
  };

  // Find the index of the image in the "center" position
  const centerImageIndex = positionIndexes.findIndex((index) => positions[index] === "center");

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full md:mt-16">
      <SparklesText className=" md:text-[9rem] mb-10  font-bold text-black text-center">{images[centerImageIndex].body}</SparklesText>

      {images.map((image, index) => (
        <motion.a
          className="rounded-[12px]  w-[90%] md:w-[50%] "
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
          href={`${clientInfo?.name}/cars?bodyType=${image.body}`} key={index}>

          <Image
            width={1000}
            height={1000}
            src={image.src}
            alt={image.alt}

          />
        </motion.a>
      ))}
      <div className="flex flex-row z-40 gap-6 mt-[200px]">
        <button
          className="hover:scale-110 active:scale-90 transition-all duration-300 ease-in-out text-white bg-black rounded-full p-2 shadow-sm border size-12 flex justify-center items-center"
          onClick={handleBack}
        >
          <ArrowLeft />
        </button>
        <button
          className="hover:scale-110 active:scale-90 transition-all duration-300 ease-in-out text-white bg-black rounded-full p-2 shadow-sm border size-12 flex justify-center items-center"
          onClick={handleNext}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;