"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";

// Isomorphic layout effect for SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Hook for responsive media queries
function useMediaQuery(query, { defaultValue = false, initializeWithValue = true } = {}) {
  const IS_SERVER = typeof window === "undefined";

  const getMatches = (query) => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => {
    return initializeWithValue ? getMatches(query) : defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

const keywords = [
  "night",
  "city",
  "sky",
  "sunset",
  "sunrise",
  "winter",
  "skyscraper",
  "building",
  "cityscape",
  "architecture",
  "street",
  "lights",
  "downtown",
  "bridge",
];

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

// Carousel component
const Carousel = memo(({ handleClick, controls, cards, isCarouselActive }) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  );

  return (
    <div
      className="flex  h-full items-center justify-center bg-mauve-dark-2"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={(_, info) =>
          isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 0.1,
            },
          })
        }
        animate={controls}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(i)}
          >
            <Image
              width={500}
              height={500}
              src={imgUrl}
              alt={`keyword_${i} ${imgUrl}`}
              layoutId={`img-${imgUrl}`}
              className="pointer-events-none w-full rounded-xl border border-white shadow-md object-cover aspect-square"
              layout="position"
              transition={transition}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});


// Main component
export default function ThreeDPhotoCarousel({ images, setIndex, index }) {
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const cards = useMemo(
    () => images.map((image) => `${image}`),
    []
  );

  useEffect(() => {
  }, [cards]);



  return (
    <motion.div layout className="relative">
      <div className="relative h-[200px] w-full overflow-hidden">
        <Carousel
          handleClick={setIndex}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}
