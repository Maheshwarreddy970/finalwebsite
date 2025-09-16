"use client";

import { useClientStore } from "@/store/useClientStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const OpenCards = () => {
    const clientInfo = useClientStore((state) => state.clientInfo)

    const [expandedIndex, setExpandedIndex] = useState(1);

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    };

    const cardVariants = {
        expanded: {
            width: "400px",
        },
        collapsed: {
            width: "200px",
        },
    };

    const cardDescriptions = [
        {
            image: "/about/one.jpg",
            title: "sofa",
        },
        {
            image: "/about/two.jpg",
            title: "sofa",
        },
        {
            image: "/about/three.jpg",
            title: "sofa",
        },
    ];

    return (
        <div className="mt-12 lg:hidden flex flex-row justify-center items-center gap-5">
            {cardDescriptions.map((data, index) => (
                <motion.div
                    key={index}
                    className={`card relative cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? "expanded" : ""
                        }`}
                    variants={cardVariants}
                    initial="collapsed"
                    animate={index === expandedIndex ? "expanded" : "collapsed"}
                    transition={{ duration: 0.5 }}
                    onClick={() => handleCardClick(index)}
                >
                    {clientInfo?.background?.image && (
                        <Image
                            src={clientInfo.background.image}
                            alt="Background"
                            width={1080}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="border shadow-md absolute object-cover rounded-3xl h-full w-full "
                        />
                    )}

                    {/* Background Video */}
                    {clientInfo?.background?.video && (
                        <div
                            className="border shadow-md absolute object-cover rounded-3xl h-full w-full "
                        >
                            <video
                                width="100%"
                                height="100%"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="metadata"
                                className="absolute top-0 left-0 h-full w-full object-cover"
                            >
                                <source src={clientInfo.background.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default OpenCards;