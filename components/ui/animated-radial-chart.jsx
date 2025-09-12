"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedRadialChart({
  value = 74,
  size = 300,
  strokeWidth: customStrokeWidth,
  className,
  showLabels = true,
  duration = 2,
}) {
  const strokeWidth = customStrokeWidth ?? Math.max(12, size * 0.06);
  const radius = size * 0.35;
  const center = size / 2;
  const circumference = Math.PI * radius;

  const innerLineRadius = radius - strokeWidth - 4;
  const innerRadius = radius - strokeWidth / 2;

  const animatedValue = useMotionValue(0);
  const offset = useTransform(animatedValue, [0, 100], [circumference, 0]);
  const angle = useTransform(animatedValue, [0, 100], [-Math.PI, 0]);

  const [displayValue, setDisplayValue] = useState(0);
  const [pointer, setPointer] = useState({ x1: center, y1: center, x2: center, y2: center });

  useEffect(() => {
    const controls = animate(animatedValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    const unsubscribe = angle.on("change", (a) => {
      const cx = center + Math.cos(a) * innerRadius;
      const cy = center + Math.sin(a) * innerRadius;
      const x2 = cx - Math.cos(a) * 30;
      const y2 = cy - Math.sin(a) * 30;
      setPointer({ x1: cx, y1: cy, x2, y2 });
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, center, innerRadius, angle]);

  const fontSize = Math.max(16, size * 0.1);
  const labelFontSize = Math.max(12, size * 0.04);

  return (
    <div className={cn("relative mx-auto w-full ", className)} style={{ height: size * 0.7 }}>
      <svg height={size * 0.7} viewBox={`0 0 ${size} ${size * 0.7}`} className="overflow-visible w-full">
        <defs>
          <linearGradient id={`baseGradient-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id={`progressGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>

          <filter id={`dropshadow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Inner thin line */}
        <path
          d={`M ${center - innerLineRadius} ${center} A ${innerLineRadius} ${innerLineRadius} 0 0 1 ${center + innerLineRadius} ${center}`}
          fill="none"
          stroke="#000000"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Base track */}
        <path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke={`url(#baseGradient-${size})`}
          strokeWidth={strokeWidth}
          filter={`url(#dropshadow-${size})`}
        />

        {/* Animated progress track */}
        <motion.path
          d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
          fill="none"
          stroke={`url(#progressGradient-${size})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          filter={`url(#dropshadow-${size})`}
        />

        {/* Smooth animated pointer line */}
        <motion.line
          x1={pointer.x1}
          y1={pointer.y1}
          x2={pointer.x2}
          y2={pointer.y2}
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Center animated number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="font-bold tracking-tight mt-10 text-black text-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: duration * 0.75 }}
        >
          {displayValue}%
        </motion.div>
      </div>

      {/* Optional percentage labels */}
      {showLabels && (
        <>
          <motion.div
            className="absolute left-11 bottom-10 text-gray-800 font-medium"
            style={{
              fontSize: `${labelFontSize}px`,

            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: duration * 0.25 }}
          >
            0%
          </motion.div>
          <motion.div
            className="absolute right-7 bottom-10 text-gray-800 font-medium"

            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: duration * 0.25 }}
          >
            100%
          </motion.div>
        </>
      )}
    </div>
  );
}
