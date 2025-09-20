'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import Image from 'next/image'
import React from 'react'
import { Philosopher, Great_Vibes } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useClientStore } from '@/store/useClientStore'
import MediaSection from '@/components/ui/MediaSection'
import TeamSection from '@/components/landingpage/TeamSection'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

export default function page() {
    const clientInfo = useClientStore((state) => state.clientInfo)

    return (
        <div className=' mt-40 '>
            <div
                className={cn(
                    "justify-center px-3 md:px-10 flex-wrap max-w-4xl mx-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-4xl lg:text-6xl xl:text-8xl flex  items-center font-light text-center text-black",
                    philosopher.className
                )}
            >
                <span className={greatVibes.className}>Discover</span>
                Who
                <div className="overflow-hidden w-20 h-12 border shadow-lg sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-40 lg:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src="/1-Ferrari-F80-review-2025.webp"
                        width={1080}
                        height={1080}
                        alt="Ferrari F80"
                        className="hover:scale-110 ease-in-out transition-all duration-300 w-full h-full object-cover"
                    />
                </div>
                We Are and What
                <div className="overflow-hidden w-20 h-12 border shadow-lg sm:w-28 sm:h-16 md:w-32 md:h-18 lg:w-40 lg:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src="/thumb-1920-1357580.jpeg"
                        width={1080}
                        height={1080}
                        alt="Car interior"
                        className="hover:scale-110 ease-in-out transition-all duration-300 w-full h-full object-cover"
                    />
                </div>
                <span className={greatVibes.className}>Drives</span>
                Us
            </div>
            <Starssection></Starssection>
            <div className="  px-3  md:px-10 grid grid-cols-2 lg:grid-cols-7 gap-4 md:gap-6 mt-14">
                <div className="  col-span-1 lg:col-span-2">
                    {/* Background Image */}
                    {clientInfo?.images[0] && (
                        <Image
                            src={clientInfo?.images[0]}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-xl border-gray-300 hover:ring-1 ring-black/10 transition-all ease-in-out duration-300 shadow-md hover:shadow-xl border object-cover  h-80 w-full overflow-hidden"
                        />
                    )}

                </div>
                <div className=" col-span-2 lg:col-span-3 rounded-xl border shadow-md h-80 w-full overflow-hidden">
                    {/* Background Image */}
                    {clientInfo?.background?.image && (
                        <Image
                            src={clientInfo.background.image}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-xl border shadow-md h-80 w-full overflow-hidden"
                        />
                    )}

                    {/* Background Video */}
                    {clientInfo?.background?.video && (
                        <video
                            width="100%"
                            height="100%"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="rounded-xl border shadow-md h-80 object-cover w-full overflow-hidden"
                        >
                            <source src={clientInfo.background.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <div className=" order-first lg:order-last col-span-1 lg:col-span-2 rounded-xl border shadow-md h-80 w-full overflow-hidden">
                    {clientInfo?.images[1] && (
                        <Image
                            src={clientInfo?.images[1]}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-xl border object-cover shadow-md h-80 w-full overflow-hidden"
                        />
                    )}
                </div>
            </div>
            <div className=' mt-24 '>
                <TeamSection></TeamSection>
            </div>
            <MediaSection></MediaSection>
            <div className=' px-3 md:px-10 mt-10 relative'>
            </div>
        </div>
    )
}


function Starssection() {
    return (
        <div className="  flex justify-between w-full px-3 md:px-10    gap-10 lg:gap-2 tabular-nums font-light  max-w-6xl mx-auto">
            <div className=' lg:-mt-32  '>
                <AnimatedCounter from={0} to={10} />
                <span className=' lg:text-base text-sm text-center'>
                    Years of Experience
                </span>
            </div>

            <div className=' lg:-mt-32 lg:ml-8 '>
                <AnimatedCounter from={0} to={3453} />
                <span className='lg:text-base text-sm text-center '>
                    sold
                </span>
            </div>
        </div>
    )
}





