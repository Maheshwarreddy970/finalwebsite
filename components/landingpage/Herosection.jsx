'use client'

import { useClientStore } from '@/store/useClientStore'
import Image from 'next/image'
import React from 'react'
import { Philosopher, Great_Vibes } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

export default function Herosection() {
  const clientInfo = useClientStore((state) => state.clientInfo)

  return (
    <section className="px-3 md:px-10 pt-36 h-[60vh] md:h-screen w-full">
      <div
        className={cn(
          // Base responsive text sizing
          "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",

          // Responsive nowrap behavior
          "sm:text-nowrap lg:text-nowrap",

          // Font weight
          "font-light",

          // Responsive text alignment
          "text-center",

          // Text color
          "text-black",

          // Responsive line height for better readability
          "leading-relaxed sm:leading-normal md:leading-tight",

          // Optional: Responsive max-width for very large screens
          "max-w-4xl mx-auto px-4",

          philosopher.className
        )}
      >
        FIND YOUR <br className="hidden sm:block" />
        PERFECT
        <span className={greatVibes.className}>CAR</span> TODAY
      </div>
      <div className="relative rounded-xl mt-1 shadow-md border   h-full w-full overflow-hidden aspect-video">
        {/* Background Image */}
        {clientInfo?.background?.image && (
          <Image
            src={clientInfo.background.image}
            alt="Background"
            width={1920}
            height={1080}
            priority={false}
            loading="lazy"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        )}

        {/* Background Video */}
        {clientInfo?.background?.video && (
          <div
            className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
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


      </div>
      <div className=' flex flex-col md:flex-row   md:justify-between mt-10  '>
        <div
          className={cn(' text-2xl text-black   ', philosopher.className)}
        >
          Quality cars, transparent pricing, <br className=' hidden md:block'></br> personal service.
        </div>
        <div className=' flex  justify-end  '>
          <a href={`/${clientInfo?.name}/cars`} className="group hover:scale-105 transition-all duration-300  ease-in-out relative inline-flex h-[calc(40px+8px)] items-center justify-center rounded-full shadow-md bg-neutral-950 border border-neutral-200   py-0.5 md:py-1 pl-6 pr-14 font-medium text-white">
            <span className="z-10  pr-2 group-hover:text-white">Search Cars</span>
            <div className="absolute right-1 inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
              <div className=" mr-1.5 md:mr-2 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 stroke-white" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}


