"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from 'next/font/google'
import { GlowingEffect } from "../ui/background-gradient";
import { TextAnimate } from "../ui/text-effect";



// Load the font
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})
// Sample FAQ data
const faqList = [
    {
        title: "How's Financing Work?",
        answer:
            "We offer flexible financing options tailored to your budget, including low-interest loans and lease plans. Our team works with top lenders to secure competitive rates, and we guide you through every step, from pre-approval to final paperwork, ensuring a smooth and transparent process.",
    },
    {
        title: "Are Cars Certified?",
        answer:
            "Yes, all our pre-owned vehicles undergo a rigorous multi-point inspection by certified technicians to ensure quality and reliability. Each certified car comes with a detailed history report and a comprehensive warranty for your peace of mind.",
    },
    {
        title: "Can I Trade-In?",
        answer:
            "Absolutely! We make trading in your current vehicle easy and hassle-free. Get a fair, no-obligation appraisal online or in-person, and apply the value toward your new car purchase to lower your costs instantly.",
    },
    {
        title: "What About Warranties?",
        answer:
            "Every car we sell comes with a robust warranty, covering essential components for added security. Extended warranty options are also available, customizable to your needs, so you can drive with confidence long after your purchase.",
    },
    {
        title: "Do You Service Cars?",
        answer:
            "Our state-of-the-art service center provides expert maintenance and repairs, from oil changes to major overhauls. Schedule appointments online, and trust our certified technicians to keep your car running smoothly with genuine parts and top-tier care.",
    },
];

const Faq = () => {


    return (
        <section className="flex w-full flex-col gap-5 items-center py-10 px-5 ">
            <div className={cn("text-5xl pt-20 font-medium mb-10 text-center ", playfair.className)}>
                <div className="flex items-center justify-center relative">
                    <TextAnimate animation="slideLeft" by="character" className="flex items-center text-8xl md:text-9xl justify-center relative">
                        FAQ
                    </TextAnimate>
                </div>
            </div>
            <Accordion className="max-w-2xl">
                {faqList.map((item, index) => (
                    <AccordionItem
                        className="border-b"
                        title={item.title}
                        answer={item.answer}
                        key={index}
                    />
                ))}
            </Accordion>
        </section>
    );
};

const Accordion = ({ children, className }) => {
    return (
        <div className={cn("flex w-full flex-col gap-8", className)}>{children}</div>
    );
};

const AccordionItem = ({ title, answer, className, ...props }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className=" relative bg-white/20 p-2 rounded-2xl border border-white/20">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent ")} />

            <span className={cn("absolute h-px top-0 opacity-100 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-full mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent ")} />
            <div
                className={cn(
                    "relative flex w-full flex-col overflow-hidden rounded-2xl border   hover:opacity-100 hover:shadow-md  border-white/20  bg-black text-white",
                    accordionOpen && "shadow-md opacity-100",
                    className
                )}
                {...props}
            >
                <button
                    onClick={() => setAccordionOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between px-5 py-3 rounded-2xl"
                >
                    <span className="text-lg font-medium">{title}</span>
                    <motion.span
                        initial={false}
                        animate={accordionOpen ? "open" : "close"}
                        variants={{
                            open: { rotate: 45 },
                            close: { rotate: 0 },
                        }}
                        transition={{ duration: 0.5, stiffness: 150, type: "spring" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                    </motion.span>
                </button>
                <AnimatePresence initial={false}>
                    {accordionOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ ease: "easeInOut", duration: 0.5 }}
                            className="overflow-hidden text-wrap"
                        >
                            <p className="m-5 opacity-80">{answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Faq;
