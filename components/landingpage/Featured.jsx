
import React from 'react'
import { cn } from '@/lib/utils'
import { Playfair_Display } from 'next/font/google'
import { CarCard } from '../car-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/landingcarousel';
import { Philosopher } from 'next/font/google'
import { SparklesText } from '../ui/SparklesText';

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })


export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',  // ✅ prevents CLS
    preload: true,    // ✅ ensures font is preloaded
});

export default function Featured({ Cars }) {


    return (
        <section className='relative w-full mt-96 mb-5 px-3 md:px-10'>
            <div>
                <div
                    className={cn(' flex gap-4 items-center text-6xl font-semibold text-black  ', philosopher.className)}
                >
                    Special Car<SparklesText colors={{ first: "#ffc400", second: "#ff9100" }} className="text-6xl  font-semibold" sparklesCount={5}>Deals</SparklesText> 
                </div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full relative"
            >
                <CarouselContent>
                    {Cars.map((car, index) => (
                        <CarouselItem key={index} className="basis-[28.5%]">
                            <CarCard key={car.id + index} car={car} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className=' absolute flex -top-7  right-10 '>
                    <CarouselPrevious />
                    <CarouselNext className='  size-10' />
                </div>
            </Carousel>
        </section>
    )
}
