'use client'

import { useClientStore } from '@/store/useClientStore'
import Image from 'next/image'
import React  from 'react'
import { Philosopher ,Great_Vibes} from 'next/font/google'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { SparklesText } from '../ui/SparklesText'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

export default function Herosection() {
  const clientInfo = useClientStore((state) => state.clientInfo)

  return (
    <section className="px-3 md:px-10 pt-36 h-screen w-full">
      <SparklesText 
        className={cn("text-8xl lg:text-nowrap font-light  text-center text-black  ", philosopher.className)}>
        FIND YOUR <br></br> PERFECT <span className={greatVibes.className}>CAR</span> TODAY
      </SparklesText >
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
      <div className=' flex justify-between mt-10  '>
        <div
          className={cn(' text-2xl text-black  ', philosopher.className)}
        >
          Quality cars, transparent pricing, <br></br> personal service.
        </div>
        <div className=' flex  '>
          <button className="group hover:scale-105 transition-all duration-300  ease-in-out relative inline-flex h-[calc(40px+8px)] items-center justify-center rounded-full shadow-md bg-neutral-950 border border-neutral-200    py-1 pl-6 pr-14 font-medium text-white">
            <span className="z-10 pr-2 group-hover:text-white">Search Cars</span>
            <div className="absolute right-1 inline-flex h-10 w-10 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
              <div className="mr-2 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 stroke-white" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}


