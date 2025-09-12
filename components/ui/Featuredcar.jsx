'use client';

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { motion, useInView, useScroll } from "framer-motion";
import Link from 'next/link';
import ThreeDPhotoCarousel from './three-d-carousel';
import { LineShadowText } from './line-shadow-text';

// ... rest of your code


export default function Featuredcar({ details }) {
    const vertMargin = 0;

    // Ref for container
    const container = useRef(null);

    // State vars
    const [maxScrollY, setMaxScrollY] = useState(Infinity);
    const [dynamicStyles, setDynamicStyles] = useState({
        scale: 1,
        filter: 0,
    });

    // Framer Motion helpers
    const { scrollY } = useScroll({
        target: container,
    });
    const isInView = useInView(container, {
        margin: `0px 0px -${100 - vertMargin}% 0px`,
        once: true,
    });

    // Scroll tracking
    scrollY.on("change", (scrollY) => {
        // animationValue indicates progress after container hits sticky point, going from 1 to 0
        let animationValue = 1;
        if (scrollY > maxScrollY) {
            animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000);
        }

        setDynamicStyles({
            scale: animationValue,
            filter: (1 - animationValue) * 100,
        });
    });

    useEffect(() => {
        if (isInView) {
            setMaxScrollY(scrollY.get());
        }
    }, [isInView]);

    const [index, setIndex] = useState(0);
    return (
        <motion.div
            ref={container}
            style={{
                scale: dynamicStyles.scale,
                height: `${100 - 2 * vertMargin}vh`,
                top: `${vertMargin}vh`,
            }}
            className='sticky h-full  w-full shadow border   overflow-hidden'>

            <Carousel index={index} onIndexChange={setIndex} className={' h-full w-full'}>
                <CarouselContent className='relative'>
                    {details.images.map((item, i) => {
                        return (
                            <CarouselItem key={item} className='w-full h-[100vh]'>
                                <Image
                                    src={item}
                                    alt={`Slide ${i}`}
                                    width={800}
                                    height={600}
                                    className='object-cover w-full h-full'
                                />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>

            <div className="w-full max-w-4xl  absolute translate-x-[-50%] left-1/2   bottom-0 z-10">
                <div className="  flex flex-col  justify-center items-center">
                    <div className="p-2">
                        <ThreeDPhotoCarousel images={details.images} setIndex={setIndex} index={index} />
                    </div>
                </div>
            </div>
            <div className='backdrop-blur-2xl py-2 px-3 border-white rounded-md absolute top-10 md:top-28 z-30 flex flex-col gap-1 shadow-lg borde   right-4 bg-black/20 text-white w-40'>
                <Image width={100} height={100}
                    loading="lazy" // don’t block page load
                    src={`/${details.make}.png`} alt={details.make} className='size-10 md:size-20 p-2 mx-auto'></Image>
                <p className='text-start  text-xs md:text-sm '>{details.model}</p>
                <p className='text-start  text-xs md:text-sm '>{details.year}</p>
                <p className='text-start  text-xs md:text-sm '>{details.fuelType}</p>
                <p className='text-start  text-xs md:text-sm'>{details.transmission}</p>
                <LineShadowText shadowColor='black' className='text-start text-blue-600 text-xl  md:text-2xl font-mono font-semibold '>{`$${details.price.toLocaleString()}`}</LineShadowText>
                <Link
                    className="text-end  hover:underline underline-offset-4 text-xs md:text-sm "
                    href={`/cars/${details.id}`}
                >
                    View Car
                </Link>
            </div>
        </motion.div>
    )
}