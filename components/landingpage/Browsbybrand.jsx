"use client";

import React from 'react'
import { Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TextAnimate } from "../ui/text-effect";
import { useClientStore } from "@/store/useClientStore";
import Image from "next/image";


// Load the font
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',  // ✅ prevents CLS
  preload: true,    // ✅ ensures font is preloaded
});


export default function Browsbybrand() {



  const cards = [
    {
      title: "Tesla",
      image: "/Tesla.png",
    },
    {
      title: "Audi",
      image: "/Audi.png",
    },
    {
      title: "Chevrolet",
      image: "/Chevrolet.png",
    },
    {
      title: "Ferrari",
      image: "/Ferrari.png",
    },
    {
      title: "Cadillac",
      image: "/Cadillac.png",
    },
    {
      title: "Ford",
      image: "/Ford.png",
    },
    {
      title: "BMW",
      image: "/BMW.png",
    },
    {
      title: "GMC",
      image: "/GMC.png",
    },
    {
      title: "Jeep",
      image: "/Jeep.png",
    },
    {
      title: "Kia",
      image: "/Kia.png",
    },
    {
      title: "Lamborghini",
      image: "/Lamborghini.png",
    },

    {
      title: "Mercedes",
      image: "/Mercedes Benz.png",
    },
    {
      title: "Volvo",
      image: "/Volvo.png",
    },
    {
      title: "Toyota",
      image: "/Toyota.png",
    }
  ];
  const clientInfo = useClientStore((state) => state.clientInfo);

  return (
    <section className={cn('overflow-hidden w-full mx-auto   px-4 bg-white ', playfair.className)}>
      <div className={cn(" text-3xl md:text-5xl font-medium mb-16 text-center ")}>
        <TextAnimate animation="slideLeft" by="character" >Browse by </TextAnimate >
        <TextAnimate

          animation="slideLeft" by="character" className="flex items-center text-8xl md:text-9xl justify-center relative">

          Brand
        </TextAnimate>
      </div>
      <div className={cn('flex flex-wrap   justify-center')}>
        {cards.map((card) => (
          <Link className=' h-20 w-20 md:h-32 md:w-32 p-2 hover:scale-[1.2] active:scale-[1] transition-all  duration-300 ease-in-out' href={`${clientInfo?.name}/cars?make=${card.title}`} key={card.title + card.image}>
            <Image
              src={card.image}
              width={128} // matches md:w-32
              height={128} // matches md:h-32
              loading="lazy" // don’t block page load
              className=" h-full w-full    object-contain  md:p-3 group-hover/card:border group-hover/card:shadow-xl"
              alt={card.title}
            />
          </Link>
        ))}

      </div>
    </section>
  )
}
