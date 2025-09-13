'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Playfair_Display } from 'next/font/google'
import { CarCard } from '../car-card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/landingcarousel';
import { Philosopher } from 'next/font/google'
import { SparklesText } from '../ui/SparklesText';
import { useClientStore } from '@/store/useClientStore';
import Image from 'next/image'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })


export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',  // ✅ prevents CLS
    preload: true,    // ✅ ensures font is preloaded
});

export default function Customerstories() {
    const clientInfo = useClientStore((state) => state.clientInfo)


    return (
        <section className='relative w-full mt-16 mb-3 px-3 md:px-10'>
            <div>
                <div
                    className={cn(' flex gap-4 items-center text-6xl font-semibold text-black  ', philosopher.className)}
                >
                    Driven by <SparklesText colors={{ first: "#ffc400", second: "#ff9100" }} className="text-6xl  font-semibold" sparklesCount={5}>Deals</SparklesText>customers
                </div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full relative"
            >
                <CarouselContent>
                    {clientInfo?.images?.map((image, index) => (
                        <CarouselItem key={index} className="basis-[25%]">
                            <div>
                                <div className=' h-96 rounded-4xl overflow-hidden border border-neutral-300   bg-white p-1.5'>
                                    <Image src={image} alt="Image" width={1920} height={1080} priority={false} loading="lazy" className="w-full h-full rounded-3xl overflow-hidden  object-cover"></Image>
                                </div>
                                <div className=' px-6 mt-2 items-center flex justify-between bg-white '>
                                    <Image
                                        src={`${clientInfo?.logo ? clientInfo?.logo : "/vehiql-logo.png"}`}
                                        alt="Vehiql Logo"
                                        width={200}
                                        height={60}
                                        className="h-7 w-auto object-contain mt-4 "
                                    />
                                    <div className=' flex gap-2 '>
                                        <div className='w-9 h-9 group  border shadow-md flex justify-center items-center bg-gradient-to-tl   from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  relative  rounded-lg  '>
                                            <span class="svgContainer" className=' z-20  '>
                                                <svg fill="white" class="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                            </span>
                                            <span class="BG"></span>
                                        </div>
                                        <div className='w-9 h-9 p-2 border shadow-md  group flex justify-center items-center bg-blue-600  relative  rounded-lg  '>
                                            <span class="svgContainerstock ml-1">
                                                <svg
                                                    viewBox="0 0 384 512"
                                                    fill="white"
                                                    height="1.3em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <span class="BGstock"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

const ShareButton = ({ variant = 'instagram' }) => {
    const isInstagram = variant === 'instagram';
    const backgroundStyle = isInstagram
        ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
        : '#1877f2';

    return (
        <button
            style={{
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                backgroundColor: 'transparent',
                position: 'relative',
                borderRadius: '7px',
                cursor: 'pointer',
                transition: 'all 0.3s',
            }}
        >
            {/* SVG Container */}
            <span
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    backdropFilter: isInstagram ? 'blur(4px)' : 'blur(0px)',
                    letterSpacing: '0.8px',
                    borderRadius: '10px',
                    transition: 'all 0.3s',
                    border: isInstagram
                        ? '1px solid rgba(156, 156, 156, 0.466)'
                        : '1px solid rgba(156, 156, 156, 0.466)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(204, 204, 204, 0.466)';
                    e.currentTarget.style.border = '1px solid rgba(230, 230, 230, 0.466)';
                    e.currentTarget.style.backdropFilter = 'blur(4px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.border = isInstagram
                        ? '1px solid rgba(156, 156, 156, 0.466)'
                        : '1px solid rgba(156, 156, 156, 0.466)';
                    e.currentTarget.style.backdropFilter = isInstagram ? 'blur(4px)' : 'blur(0px)';
                }}
            >
                <svg
                    viewBox={isInstagram ? '0 0 448 512' : '0 0 320 512'}
                    height={isInstagram ? '1.5em' : '1.3em'}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: 'white' }}
                >
                    <path
                        d={
                            isInstagram
                                ? 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                                : 'M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z'
                        }
                    />
                </svg>
            </span>
            {/* Background Layer */}
            <span
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: backgroundStyle,
                    zIndex: -1,
                    borderRadius: '9px',
                    pointerEvents: 'none',
                    transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(35deg)';
                    e.currentTarget.style.transformOrigin = 'bottom';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg)';
                    e.currentTarget.style.transformOrigin = 'bottom';
                }}
            />
        </button>
    );
};