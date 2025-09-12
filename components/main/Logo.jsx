import Link from 'next/link'
import React from 'react'
import AnimatedLogoCloud from '../ui/AnimatedLogoCloud'
import { cn } from '@/lib/utils'
import { Instrument_Serif, Gloria_Hallelujah } from 'next/font/google'
import Image from 'next/image'
import { sub } from 'date-fns'

const instrumentserif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Disable automatic preloading
});

const gloriahallelujah = Gloria_Hallelujah({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const reviews = [
  {

    text: `I’m thrilled with the results and highly recommend Super World Technologies to any dealership looking to boost their online presence and sell more cars.`,
    name: 'Mark Thompson',
    role: 'Owner | AlbaCars',
    logo: '/main/albacars-logo.avif',
  },
  {
    text: `I’m incredibly impressed with the impact and would strongly suggest Super World Technologies to anyone aiming to enhance their brand and drive sales.`,
    name: 'Sarah Patel',
    role: 'Owner | CarzillaMotors',
    logo: '/main/449211480_755180400025517_911900011317799563_n.jpg',
  },
  {
    text: `I’m amazed by the outcomes and wholeheartedly endorse Super World Technologies for dealerships wanting to elevate their website and attract more buyers.`,
    name: 'James Lee',
    role: 'Owner | F1rstMotors',
    logo: '/main/logo-dark.svg',
  },
  {
    text: `I’m delighted with the success and fully recommend Super World Technologies to any dealership seeking to strengthen their online reach and grow their business.`,
    name: 'Lisa Rivera',
    role: 'Owner | VIP Motors',
    logo: '/main/logo-white.png.png',
  },
]

const technologyLogos = [
  { src: '/Google-Gemini-AI-2.webp', alt: 'Google Gemini AI', title: 'Google Gemini AI', subtitle: 'Advanced image recognition for instant vehicle matching and intelligent inventory analysis' },
  { src: '/xai-logo.png', alt: 'XAI', title: 'Grok AI', subtitle: 'Human-like conversational assistant that understands context and speaks naturally to your customers' },
  { src: '/Amazon-Web-Services-AWS-Logo-PNG-Clipart-Background.png', alt: 'AWS', title: 'Amazon Web Services', subtitle: 'Enterprise-grade hosting for unmatched speed and 99.9% uptime' },
  { src: '/react-native-banner-1024x300-e1510060053599.png', alt: 'React Native', title: 'React Native', subtitle: 'Seamless cross-platform experience on all devices' },
  { src: '/nextjs-13.svg', alt: 'Next.js', title: 'Next.js', subtitle: ' Lightning-fast loading times with superior SEO optimization for maximum visibility' },
  { src: '/5a2307b9-37fe-9bd0-b5f4-2666152d200d.png', alt: 'Clerk Authentication', title: 'Clerk Authentication', subtitle: 'One-click login via Google, Facebook, and social platforms' },
]


export default function LogoSection() {
  return (
    <section className="py-40 sm:px-10 lg:px-0 flex flex-col items-center justify-center gap-5 border-y border-black/20 border-dashed">
      {/* Top label */}
      <div className="border py-1 px-3 text-sm rounded-full shadow">They trust us</div>

      {/* Heading */}
      <h1
        className={cn(
          ' text-4xl sm:text-6xl text-black font-black text-center max-w-4xl',
          instrumentserif.className
        )}
      >
        <span className="opacity-50">Real feedback,</span> real results.
      </h1>

      {/* Description */}
      <p className="text-center sm:text-lg text-neutral-600 font-medium max-w-2xl px-10 md:px-0">
        Hear from the dealerships we’ve partnered with and discover how our AI-powered websites
        have transformed their online presence and driven more sales.
      </p>

      {/* CTA */}
      <Link
        href="https://cal.com/maheshwar-reddy-20/15min"
        className="group hover:-translate-y-1 relative justify-center items-center flex gap-2 rounded-2xl border-2 shadow-xl border-neutral-950 bg-neutral-900 px-6 py-3 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-neutral-950/50"
      >
        <span className="absolute left-0 top-0 size-full rounded-2xl border-neutral-500 shadow-inner shadow-white/60 group-active:shadow-white/10"></span>
        <span className="absolute left-0 top-0 size-full rotate-180 rounded-2xl border-neutral-300 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
        Get Started
        <svg
          stroke="currentColor"
          fill="currentColor"
          className="transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-2 scale-x-[-1]"
          strokeWidth="9"
          viewBox="0 0 256 256"
          height="25px"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M216.71,102,199.4,72a24,24,0,0,0-43.57,4.52L134.74,40a24,24,0,0,0-43.69,4.9A24,24,0,0,0,51.61,72l5.31,9.19a24,24,0,0,0-25.71,35.47l40,69.32a83.4,83.4,0,0,0,51,39.14,84.45,84.45,0,0,0,21.88,2.9,84,84,0,0,0,72.6-126Zm.67,61.67A76,76,0,0,1,78.16,182l-40-69.32a16,16,0,0,1,27.71-16L85.09,130A4,4,0,0,0,92,126L58.54,68A16,16,0,1,1,86.25,52l31.17,54a4,4,0,1,0,6.93-4L100.1,60a16,16,0,0,1,27.72-16l35,60.63a44,44,0,0,0-7.28,57.61,4,4,0,1,0,6.62-4.49,36,36,0,0,1,8.22-49,4,4,0,0,0,1.07-5.2L164.76,92a16,16,0,1,1,27.71-16l17.31,30A75.52,75.52,0,0,1,217.38,163.65ZM188.12,32.74A4,4,0,0,1,193,29.9,55.65,55.65,0,0,1,227.11,56l.33.58A4,4,0,0,1,226,62a4,4,0,0,1-5.47-1.46l-.33-.57A47.62,47.62,0,0,0,191,37.63,4,4,0,0,1,188.12,32.74ZM77.75,234.48A4,4,0,0,1,74.61,236a4,4,0,0,1-2.47-.86A115.55,115.55,0,0,1,43.53,202a4,4,0,1,1,6.92-4,107.72,107.72,0,0,0,26.64,30.86A4,4,0,0,1,77.75,234.48Z"></path>
        </svg>
      </Link>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-14 px-8 max-w-[90rem]">
        {reviews.map((review, i) => {
          const rotations = ['rotate-3', '-rotate-3', 'rotate-3', '-rotate-3']
          return (
            <div
              key={i}
              className={cn(
                'relative overflow-hidden group/card bg-white hover:rotate-0 transition-all duration-300 ease-in-out hover:-translate-y-14 flex flex-col gap-20 border-[3px] px-6 py-5 shadow-md rounded-3xl',
                rotations[i % rotations.length]
              )}
            >
              <Image
                width={100} height={100}
                src="/main/R0WVtWCpzNL81eNF5wrZjUj7s0k.png"
                className="absolute hidden group-hover/card:block   inset-0 w-full h-full object-cover z-0"
                style={{
                  maskImage: `linear-gradient(to top, transparent, black 300%)`,
                  WebkitMaskImage: `linear-gradient(to top, transparent, black 300%)`,
                }}
                alt="Background"
              />
              <div className="hidden group-hover/card:block bg-gradient-to-t from-[#ff7c65] via-[#FFFFB5] to-transparent absolute top-0 left-0 w-full h-full"></div>
              <div className="flex flex-col gap-3 z-20">
                <Image
                  width={100} height={100}
                  src={review.logo}
                  className="w-14 h-14 border-2  backdrop-blur-3xl bg-white/40 object-contain rounded-2xl shadow-sm group-hover/card:shadow-xl:"
                  alt="Logo"
                />
                <p
                  className={cn(
                    'text-neutral-600 text-lg font-semibold mt-2',
                    gloriahallelujah.className
                  )}
                >
                  {review.text}
                </p>
              </div>
              <div className="z-20">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm font-semibold text-neutral-400 group-hover/card:text-neutral-600">
                  {review.role}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      {/* Heading */}
      <h1
        className={cn(
          ' text-4xl sm:text-6xl mt-32 text-black font-black text-center max-w-4xl',
          instrumentserif.className
        )}
      >
        <span className="opacity-50">Built on</span> the Latest Tech, Not Outdated Templates
      </h1>
      {/* Description */}
      <p className="text-center sm:text-lg text-neutral-600 font-medium max-w-2xl px-10 md:px-0">
        We don't rely on outdated, cookie-cutter solutions. Every dealership website we create is custom-coded using cutting-edge technology stack designed for performance, engagement, and conversions:
      </p>
      <div className=' grid grid-cols-1 md:grid-cols-3  gap-10  px-8 mx-auto max-w-6xl'>
        {
          technologyLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center mt-10 px-5">
              <div className=' h-14 overflow-hidden flex items-center justify-center'>
              <Image src={logo.src} alt={logo.alt} width={150} height={80} className="mb-4 p-5 object-contain" />
              </div>
              <p className={cn("text-center text-lg font-bold text-neutral-700 max-w-md",instrumentserif.className)}>{logo.subtitle}</p>
            </div>
          ))
        }
      </div>
     
    </section>
  )
}
