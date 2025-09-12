"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { GlowingEffect } from "./background-gradient";
import Image from "next/image";



export function MovingImage({ src, xRange, yRange, scaleRange, scrollYProgress }) {
  const x = useTransform(scrollYProgress, [0, 1], xRange);
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 1], [1, scaleRange]);

  return (
    <motion.div style={{ scale, x, y }} className="absolute z-40 h-[27rem] p-3 bg-white/90 backdrop-blur-xl
          rounded-2xl w-[27rem] ">
      <GlowingEffect spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={6} className="h-full w-full rounded-2xl ">
      </GlowingEffect>
      <Image width={40} height={40} className="object-cover h-full w-full rounded-2xl" src={src} alt="image" />
    </motion.div>
  );
}