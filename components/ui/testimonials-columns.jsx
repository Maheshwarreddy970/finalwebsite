'use client';

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion"; // Corrected import
import { cn } from "@/lib/utils";
import { GlowingEffect } from "./background-gradient";
import Image from "next/image";

export const TestimonialsColumn = React.memo((props) => {
  const shouldReduceMotion = useReducedMotion(); // Accessibility: reduce animations if preferred

  // Memoize the duplicated testimonials to avoid re-computation
  const duplicatedTestimonials = useMemo(() => {
    return [...props.testimonials, ...props.testimonials];
  }, [props.testimonials]);

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: shouldReduceMotion ? 0 : "-50%",
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : (props.duration || 10),
          repeat: shouldReduceMotion ? 0 : Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {duplicatedTestimonials.map(({ text, image, name, role }, i) => (
          <div
            key={i} // Simplified key since duplicated array is memoized
            className="hover:scale-105 ease-in-out duration-300 transition-all p-10 group relative rounded-3xl max-w-sm w-full border bg-white/10 border-white/20"
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <span
              className={cn(
                "absolute h-px top-0 opacity-100 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-full mx-auto from-transparent  via-blue-600 to-transparent"
              )}
            />

            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image
                src={image}
                alt={`${name} image`}
                width={40}
                height={40}
                sizes="40px"
                quality={75} // Balanced quality for small avatars
                placeholder="blur"
                blurDataURL={`${image}?w=10`} // Low-res blur placeholder
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5">
                  {name}
                </div>
                <div className="leading-5 opacity-60 tracking-tight">
                  {role}
                </div>
              </div>
            </div>

            <span
              className={cn(
                "absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent  via-blue-600 to-transparent"
              )}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
});