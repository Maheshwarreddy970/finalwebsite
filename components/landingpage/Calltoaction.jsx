'use client'

import { useClientStore } from '@/store/useClientStore';
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { RainbowButton } from '../ui/rainbow-button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SocialProofAvatars } from '../ui/social-proof-avatars';
import { motion } from 'framer-motion'
import Image from 'next/image';

export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',  // ✅ prevents CLS
    preload: true,    // ✅ ensures font is preloaded
});
const initialPositions = [
    { top: "50%", left: "20%" },
    { top: "50%", right: "20%" },
    { bottom: "50%", right: "20%" },
    { bottom: "50%", left: "20%" },
    { bottom: "50%", left: "20%" },
]

const inViewPositions = [
    { top: 0, left: 0, rotate: 5 },
    { top: 0, right: 0, rotate: -5 },
    { bottom: 0, right: 0, rotate: -5 },
    { bottom: 0, left: 0, rotate: -5 },
    { bottom: 30, left: "20%", rotate: -5 },
]

const avatars = [
    {
        alt: "Avatar 1",
        src: "/avatar-1.webp",
    },
    {
        alt: "Avatar 2",
        src: "/avatar-2.webp",
    },
    {
        alt: "Avatar 3",
        src: "/avatar-3.webp",
    },
    {
        alt: "Avatar 4",
        src: "/avatar-4.webp",
    },
    {
        alt: "Avatar 5",
        src: "/avatar-5.webp",
    },
]

export default function Calltoaction() {
    const clientInfo = useClientStore((state) => state.clientInfo);

    return (
        <section className=' relative pt-10 w-full overflow-hidden h-[110vh] flex flex-col items-center justify-center  text-black'>
            <h1
                className={cn(
                    "pointer-events-none py-2 text-black text-4xl md:text-4xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center relative z-30 ",
                    playfair.className
                )}
                style={{
                    color: "black", // force white text
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)", // shadow for contrast
                    WebkitTextStroke: "0.2px white  ", // border around text
                }}
            >
                Ready to Find Your <br /> Dream Car?
            </h1>
            <p
                className="font-gilroy max-w-3xl mx-auto   pointer-events-none z-30 inset-0  flex items-center justify-center  py-2 text-center text-sm md:text-lg ">
                Trusted by thousands of happy drivers, we offer certified quality cars at competitive prices, backed by comprehensive warranties, easy trade-ins, and a team dedicated to making your car-buying experience seamless and stress-free.
            </p>
            <div className="flex flex-row z-20 items-center justify-center w-full">
                <SocialProofAvatars className='gap-1 my-2 text-sm md:text-base' avatars={avatars} extraCount={1000}>
                    <p className="whitespace-nowrap">
                        <strong className="font-semibold">1000+</strong> Happy Customers
                    </p>
                </SocialProofAvatars>
            </div>
            <div className="flex flex-col z-30 sm:flex-row justify-center gap-4">
                <RainbowButton size="lg" className=" z-40">
                    <Link href="/sign-up" >Sign Up Now</Link>
                </RainbowButton>
            </div>
            <div className="w-full px-3 gap-5 py-10 ">
                {clientInfo?.images?.map((img, idx) => (
                    img && (
                        <motion.div
                            key={idx}
                            initial={initialPositions[idx] || { top: 0, left: 0 }}
                            whileHover={{ scale: 1.2 }}
                            whileInView={inViewPositions[idx] || { rotate: 0 }}
                            drag
                            whileDrag={{ scale: 1.2 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                            className="absolute w-[10rem] h-[9rem] md:w-[20rem] md:h-[17rem] p-2 md:p-4 bg-stone-100 backdrop-blur-xl border shadow-xl"
                        >
                            <Image
                                src={img}
                                alt={`Customer ${idx + 1}`}
                                width={200}
                                height={200}
                                sizes="(max-width: 768px) 100px, 200px"
                                priority={false}
                                loading="lazy"
                                className="pointer-events-none z-10 h-full w-full shadow-md object-cover"
                            />
                        </motion.div>
                    )
                ))}
            </div>


        </section>
    )
}
