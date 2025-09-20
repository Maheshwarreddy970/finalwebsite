"use client";

import {
    animate,
    useInView,
    useIsomorphicLayoutEffect,
} from "framer-motion";

import { useRef } from "react";


export const AnimatedCounter = ({
    from,
    to,
    animationOptions,
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if (!element) return;
        if (!inView) return;

        // Set initial value
        element.textContent = String(from);

        // If reduced motion is enabled in system's preferences
        if (window.matchMedia("(prefers-reduced-motion)").matches) {
            element.textContent = String(to);
            return;
        }

        const controls = animate(from, to, {
            duration: 10,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            },
        });

        // Cancel on unmount
        return () => {
            controls.stop();
        };
    }, [ref, inView, from, to]);

    return (
        <div className=" text-xl  md:text-6xl font-semibold flex gap-1 mb-2 ">
            <span className=" " ref={ref} ></span>
            <span className="  text-2xl md:text-6xl">+</span>
        </div>
    )
};