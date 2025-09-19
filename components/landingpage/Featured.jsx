
import React from 'react'
import { cn } from '@/lib/utils'
import { Playfair_Display } from 'next/font/google'
import { CarCard } from '../car-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/landingcarousel';
import { Philosopher } from 'next/font/google'
import { SparklesText } from '../ui/SparklesText';
import Image from 'next/image';

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })


export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',  // ✅ prevents CLS
    preload: true,    // ✅ ensures font is preloaded
});

export default function Featured({ Cars }) {


    return (
        <section className='relative w-full mt-[27rem] md:mt-96 md:mb-5 px-3 md:px-10'>
            <div>
                <div
                    className={cn('  text-4xl md:text-6xl font-semibold text-black  ', philosopher.className)}
                >
                    Special Car <span className=' flex '>Deals  <Image src='/fire-flame.gif' width={30} height={30} alt='sparkle' className=' transition-all ease-in-out duration-200 w-9 h-9 md:w-16 md:h-16'></Image></span> 
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
                        <CarouselItem
                            key={index}
                            className={cn(
                                // Responsive basis widths
                                "basis-full sm:basis-1/2 md:basis-2/3 lg:basis-[28.5%] ",
                            )}
                        >
                            <CarCard
                                showwishlist={false}
                                key={car.id + index}
                                car={car}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className=' absolute flex -top-7 right-5 md:right-10 '>
                    <CarouselPrevious />
                    <CarouselNext className='  size-10' />
                </div>
            </Carousel>
        </section>
    )
}
