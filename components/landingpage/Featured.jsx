
import React from 'react'
import { cn } from '@/lib/utils'
import { TextAnimate } from '../ui/text-effect'
import Featuredcar from '../ui/Featuredcar'
import { Playfair_Display } from 'next/font/google'



export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',  // ✅ prevents CLS
  preload: true,    // ✅ ensures font is preloaded
});

export default function Featured({ Cars }) {


    return (
        <section className='relative w-full '>
            <div className={cn("text-3xl md:text-5xl pt-20 font-medium mb-10 text-center ", playfair.className)}>
                <TextAnimate className="  " animation="slideLeft" by="character" >Featured </TextAnimate >
                <TextAnimate animation="slideLeft" by="character" className="flex text-8xl md:text-9xl items-center font-semibold justify-center relative">
                    CARS
                </TextAnimate>
            </div>
            <div className="relative flex flex-col gap-[20vh] pt-20">
                {Cars.map((car, index) => (
                    <Featuredcar key={index} details={car}></Featuredcar>
                ))}
            </div>
        </section>
    )
}
