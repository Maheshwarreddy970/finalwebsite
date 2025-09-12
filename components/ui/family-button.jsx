"use client";

import React, { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FamilyButton = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startingMessage, setStartingMessage] = useState(true);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartingMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("rounded-[24px] z-[9999] shadow-xl overflow-hidden bg-white")}>
      <div className="rounded-[23px] border overflow-hidden border-[#3e362e]/60">
        <div className="rounded-[22px] border overflow-hidden dark:border-stone-800 border-white/50">
          <div className="rounded-[21px] border overflow-hidden border-neutral-950/20 flex items-center justify-center">
            <FamilyButtonContainer isExpanded={isExpanded} toggleExpand={toggleExpand}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="w-full h-full relative"
                >
                  {children}
                </motion.div>
              )}
            </FamilyButtonContainer>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {startingMessage && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.5, ease: "easeInOut", stiffness: 100, type: "spring" }}
            className="absolute w-[16rem] text-sm md:text-base sm:w-96 text-[rgb(0,0,0)] -top-[12.5rem] sm:-top-48 shadow-md right-10 bg-white border-black/60 border rounded-t-2xl rounded-bl-2xl p-4"
          >
            Hey there! 👋😊 Glad to have you here! How’s your day going? I’d love to help you out—just let me know what you need! Oh, and if you’re cool with it, could you share your phone number or email? It’d make staying in touch so much easier! 😊
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FamilyButtonContainer = ({ isExpanded, toggleExpand, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 868);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className={cn(
        "relative z-[9999] shadow-lg flex flex-col w-full h-full space-y-1 items-center text-white cursor-pointer",
        !isExpanded ? "bg-black dark:from-stone-700 dark:to-neutral-800/80" : ""
      )}
      layoutRoot
      layout
      initial={{ borderRadius: 21, width: "4rem", height: "4rem" }}
      animate={
        isExpanded
          ? {
            borderRadius: 20,
            width: isMobile ? "85vw" : 400,
            height: "75vh",
            transition: {
              type: "spring",
              damping: 25,
              stiffness: 400,
              when: "beforeChildren",
            },
          }
          : {
            borderRadius: 21,
            width: "3.5rem",
            height: "3.5rem",
          }
      }
    >
      {children}

      <motion.div
        className="absolute"
        initial={{ x: "-50%" }}
        animate={{
          x: isExpanded ? "0%" : "-50%",
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        style={{
          left: isExpanded ? "" : "50%",
          bottom: 6,
        }}
      >
        {isExpanded ? (
          <motion.div
            className="p-[10px] group bg-black dark:bg-black/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300"
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={false}
            animate={{
              rotate: -360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <XIcon className="h-5 w-5 text-white dark:text-neutral-400/80 transition-colors duration-200" />
          </motion.div>
        ) : (
          <motion.div
            className="p-[3px] group shadow-2xl transition-colors duration-200"
            style={{ borderRadius: 24 }}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={{ rotate: 180 }}
            animate={{
              rotate: 0,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-9 fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2 A 9 9 0 0 0 3 11 A 9 9 0 0 0 12 20 L 12 23 C 12 23 19.39165 19.370314 20.761719 13.015625 A 9 9 0 0 0 20.839844 12.65625 C 20.880821 12.423525 20.923277 12.190914 20.947266 11.951172 A 9 9 0 0 0 20.957031 11.863281 C 20.982749 11.579721 21 11.293169 21 11 A 9 9 0 0 0 12 2 z" />
            </svg>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export { FamilyButton };
