import React from 'react'
import { Instrument_Serif } from 'next/font/google'
import Link from "next/link";
import { DotPattern } from '../ui/dot-pattern';
import { Icons } from '@/icons';
import { AnimatedCursor } from '../ui/movingcursor';
import { cn } from '@/lib/utils';
import { SocialProofAvatars } from '../ui/social-proof-avatars';
import Image from 'next/image';

const instrumentserif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    preload: false, // Disable automatic preloading
});

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


export default function Hero() {
    return (
        <section
            id='hero'
            className="relative h-screen bg-[#FCF9F5] overflow-hidden    ">
            {/* Background Image */}
            <Image
                width={1920} height={1080}
                src="/main/R0WVtWCpzNL81eNF5wrZjUj7s0k.png"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 300%)`,
                    WebkitMaskImage: `linear-gradient(to top, transparent, black 300%)`, // for Safari
                }}
                alt="Background"
            />

            {/* DotPattern Overlay */}
            <DotPattern

                className={cn(
                    "absolute inset-0 z-10",
                    "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
                )}
            />
            {/* Text Content */}
            <div className="relative z-20 mt-8 flex flex-col gap-5 items-center justify-center h-full px-4 text-center">
                <h1 className={cn(" text-5xl md:text-7xl  text-black font-black text-center max-w-4xl", instrumentserif.className)}>
                    <span className=" opacity-50">AI-Powered</span> Dealership Websites That Feel Like Premium<span className=" opacity-50"> Showrooms</span>
                </h1>
                <p className=" max-w-2xl md:text-lg">
                    We help dealerships deliver the ultimate online car-buying experience. From smart inventory filters to real-time updates and an AI assistant that builds trust, we turn your website into a showroom that keeps customers engaged longer, inspires confidence, and drives sales.
                </p>
                <Link href='/getstarted' className="group hover:-translate-y-1  relative justify-center items-center flex gap-2 rounded-2xl border-2 shadow-xl border-neutral-950 bg-neutral-900 px-6 py-3 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-neutral-950/50">
                    <span className="absolute left-0 top-0 size-full rounded-2xl border-neutral-500 shadow-inner shadow-white/60 group-active:shadow-white/10"></span>
                    <span className="absolute left-0 top-0 size-full rotate-180 rounded-2xl border-neutral-300 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
                    Get Free Demo
                    <svg stroke="currentColor" fill="currentColor" className=" transition-all duration-300 ease-in-out  group-hover:translate-x-1 group-hover:rotate-2 scale-x-[-1] " strokeWidth="9" viewBox="0 0 256 256" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M216.71,102,199.4,72a24,24,0,0,0-43.57,4.52L134.74,40a24,24,0,0,0-43.69,4.9A24,24,0,0,0,51.61,72l5.31,9.19a24,24,0,0,0-25.71,35.47l40,69.32a83.4,83.4,0,0,0,51,39.14,84.45,84.45,0,0,0,21.88,2.9,84,84,0,0,0,72.6-126Zm.67,61.67A76,76,0,0,1,78.16,182l-40-69.32a16,16,0,0,1,27.71-16L85.09,130A4,4,0,0,0,92,126L58.54,68A16,16,0,1,1,86.25,52l31.17,54a4,4,0,1,0,6.93-4L100.1,60a16,16,0,0,1,27.72-16l35,60.63a44,44,0,0,0-7.28,57.61,4,4,0,1,0,6.62-4.49,36,36,0,0,1,8.22-49,4,4,0,0,0,1.07-5.2L164.76,92a16,16,0,1,1,27.71-16l17.31,30A75.52,75.52,0,0,1,217.38,163.65ZM188.12,32.74A4,4,0,0,1,193,29.9,55.65,55.65,0,0,1,227.11,56l.33.58A4,4,0,0,1,226,62a4,4,0,0,1-5.47-1.46l-.33-.57A47.62,47.62,0,0,0,191,37.63,4,4,0,0,1,188.12,32.74ZM77.75,234.48A4,4,0,0,1,74.61,236a4,4,0,0,1-2.47-.86A115.55,115.55,0,0,1,43.53,202a4,4,0,1,1,6.92-4,107.72,107.72,0,0,0,26.64,30.86A4,4,0,0,1,77.75,234.48Z"></path></svg>
                </Link>
                <div className="flex flex-row items-center justify-center w-full">
                    <SocialProofAvatars avatars={avatars} extraCount={60}>
                        <p className="whitespace-nowrap">
                            +60 <strong className="font-semibold">satisfied</strong> clients
                        </p>
                    </SocialProofAvatars>
                </div>
            </div>
            <Icons.herolines
                color="white"
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 40%)`,
                }}
                className=" border-x border-black/30 h-full absolute -top-40 -left-4 md:left-20"
            ></Icons.herolines>
            <Icons.herolines
                color="white"
                style={{
                    maskImage: `linear-gradient(to top, transparent, black 40%)`,
                }}
                className=" border-x border-black/30 h-full absolute -top-40 -right-4 md:right-20"
            ></Icons.herolines>
            <div className="z-50  absolute bottom-14 md:bottom-[30%] md:left-[15%] ">
                <AnimatedCursor text={'Lead designer'} left={true} />
            </div>
            <div className="z-50  absolute bottom-10 right-0 md:bottom-[45%] md:right-[15%] ">
                <AnimatedCursor text={'Developer'} right={true} />
            </div>
        </section>
    )
}
