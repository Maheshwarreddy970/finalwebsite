'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


export function DestructiveButton({
  className,
  children,
  ...props
}) {
  return (
    <motion.button
      className={cn(
        "relative font-mono text-sm",
        "text-neutral-500 ",
        "hover:text-red-500/90 ",
        "transition-all duration-300",
        className
      )}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        tap: {
          scale: 0.98,
          transition: {
            duration: 0.1,
            ease: [0.23, 1, 0.32, 1]
          }
        }
      }}
      {...props}
    >
      <span className="relative inline-flex flex-col items-center gap-1">
        {/* Texte avec tremblement */}
        <motion.span
          className="relative z-10 flex justify-center text-sm items-center gap-1"
          variants={{
            initial: {
              x: 0,
              letterSpacing: "0em"
            },
            hover: {
              x: [0, -1.5, 1.5, -1.5, 0],
              letterSpacing: "0.02em",
              transition: {
                x: {
                  duration: 0.15,
                  repeat: 2,
                  repeatType: "mirror",
                  ease: "linear"
                },
                letterSpacing: {
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }
              }
            }
          }}
        >
          {children}
        </motion.span>

      </span>
    </motion.button>
  );
}