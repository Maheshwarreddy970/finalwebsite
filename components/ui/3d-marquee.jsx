"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Instrument_Serif} from 'next/font/google'
import Link from "next/link";


const instrumentserif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Disable automatic preloading
});

 const images = [
    "/main/7f403d1ec3c71e8312b10d406421c074.jpg",
    "/main/mclaren.jpg",
    "/main/original-2b6f4f79e56c7e7370ad5ebc43f0906f.jpg",
    "/main/original-49e8f43463c293d18b742d4326e68931.webp",
    "/main/original-2275beb972a53e5668a37f018b7fdc04.jpg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (1).jpeg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (2).jpeg",
    "/main/7f403d1ec3c71e8312b10d406421c074.jpg",
    "/main/mclaren.jpg",
    "/main/original-2b6f4f79e56c7e7370ad5ebc43f0906f.jpg",
    "/main/original-49e8f43463c293d18b742d4326e68931.webp",
    "/main/original-2275beb972a53e5668a37f018b7fdc04.jpg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (1).jpeg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (2).jpeg",
    "/main/7f403d1ec3c71e8312b10d406421c074.jpg",
    "/main/mclaren.jpg",
    "/main/original-2b6f4f79e56c7e7370ad5ebc43f0906f.jpg",
    "/main/original-49e8f43463c293d18b742d4326e68931.webp",
    "/main/original-2275beb972a53e5668a37f018b7fdc04.jpg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (1).jpeg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (2).jpeg",
    "/main/7f403d1ec3c71e8312b10d406421c074.jpg",
    "/main/mclaren.jpg",
    "/main/original-2b6f4f79e56c7e7370ad5ebc43f0906f.jpg",
    "/main/original-49e8f43463c293d18b742d4326e68931.webp",
    "/main/original-2275beb972a53e5668a37f018b7fdc04.jpg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (1).jpeg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (2).jpeg",
    "/main/7f403d1ec3c71e8312b10d406421c074.jpg",
    "/main/mclaren.jpg",
    "/main/original-2b6f4f79e56c7e7370ad5ebc43f0906f.jpg",
    "/main/original-49e8f43463c293d18b742d4326e68931.webp",
    "/main/original-2275beb972a53e5668a37f018b7fdc04.jpg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (1).jpeg",
    "/main/WhatsApp Image 2025-07-12 at 11.34.11 AM (2).jpeg",

    //"/main/",
  ];

export const ThreeDMarquee = ({  className }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div

      className={cn(
        " block h-[600px] relative overflow-hidden max-sm:h-100 ",
        "bg-black ", // Default dark background
        className
      )}
    >
      <div className="absolute inset-0 top-0 h-[20%] bg-gradient-to-b from-black to-transparent z-30"></div>
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-96 right-[65%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="aspect-[970/700] rounded-lg object-cover ring ring-white/10 hover:shadow-2xl"
                      width={970}
                      height={700}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div
        className=" flex w-[90%] md:w-auto flex-col z-40 bg-black/10 backdrop-blur-sm py-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5  ">
        <h1 className={cn(" text-xl md:text-5xl   text-white font-black text-center max-w-3xl", instrumentserif.className)}>
          <span className=" opacity-50">Why wait?</span> Get started now. Boost your dealership’s sales with a modern website today.
        </h1>
        <Link href='https://cal.com/maheshwar-reddy-20/15min' className="group hover:-translate-y-1  relative justify-center items-center flex gap-2 rounded-2xl border-2 shadow-xl text-white border-neutral-950 bg-neutral-900 px-6 py-3 font-medium duration-1000 hover:shadow-lg hover:shadow-neutral-950/50">
          <span className="absolute left-0 top-0 size-full rounded-2xl border-neutral-500 shadow-inner shadow-white/60 group-active:shadow-white/10"></span>
          <span className="absolute left-0 top-0 size-full rotate-180 rounded-2xl border-neutral-300 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
          Get Started
          <svg stroke="currentColor" fill="currentColor" className=" transition-all duration-300 ease-in-out  group-hover:translate-x-1 group-hover:rotate-2 scale-x-[-1] " strokeWidth="9" viewBox="0 0 256 256" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M216.71,102,199.4,72a24,24,0,0,0-43.57,4.52L134.74,40a24,24,0,0,0-43.69,4.9A24,24,0,0,0,51.61,72l5.31,9.19a24,24,0,0,0-25.71,35.47l40,69.32a83.4,83.4,0,0,0,51,39.14,84.45,84.45,0,0,0,21.88,2.9,84,84,0,0,0,72.6-126Zm.67,61.67A76,76,0,0,1,78.16,182l-40-69.32a16,16,0,0,1,27.71-16L85.09,130A4,4,0,0,0,92,126L58.54,68A16,16,0,1,1,86.25,52l31.17,54a4,4,0,1,0,6.93-4L100.1,60a16,16,0,0,1,27.72-16l35,60.63a44,44,0,0,0-7.28,57.61,4,4,0,1,0,6.62-4.49,36,36,0,0,1,8.22-49,4,4,0,0,0,1.07-5.2L164.76,92a16,16,0,1,1,27.71-16l17.31,30A75.52,75.52,0,0,1,217.38,163.65ZM188.12,32.74A4,4,0,0,1,193,29.9,55.65,55.65,0,0,1,227.11,56l.33.58A4,4,0,0,1,226,62a4,4,0,0,1-5.47-1.46l-.33-.57A47.62,47.62,0,0,0,191,37.63,4,4,0,0,1,188.12,32.74ZM77.75,234.48A4,4,0,0,1,74.61,236a4,4,0,0,1-2.47-.86A115.55,115.55,0,0,1,43.53,202a4,4,0,1,1,6.92-4,107.72,107.72,0,0,0,26.64,30.86A4,4,0,0,1,77.75,234.48Z"></path></svg>
        </Link>
      </ div>
    </div>
  );
};

const GridLineHorizontal = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#0d0d0d",
        "--color": "rgba(255, 255, 255, 0.2)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",
        "--offset": offset || "200px",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({ className, offset }) => {
  return (
    <div
      style={{
        "--background": "#0d0d0d",
        "--color": "rgba(255, 255, 255, 0.2)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",
        "--offset": offset || "150px",
        maskComposite: "exclude",
      }}
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        className
      )}
    ></div>
  );
};
