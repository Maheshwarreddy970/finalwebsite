'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import OpenCards from '@/components/ui/expandingcard'
import { SparklesText } from '@/components/ui/SparklesText'
import Image from 'next/image'
import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { Philosopher, Great_Vibes } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useClientStore } from '@/store/useClientStore'
import TimeLine_01 from '@/components/ui/timeline'


const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

export default function page() {
    const clientInfo = useClientStore((state) => state.clientInfo)

    return (
        <div className=' mt-40 px-3 md:px-10 '>
            <div
                className={cn("justify-center  flex-wrap max-w-4xl mx-auto gap-5 sm:gap-10  text-8xl flex items-center font-light  text-center text-black  ", philosopher.className)}>
                FIND YOUR
                <div className=" overflow-hidden w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src={"/1-Ferrari-F80-review-2025.webp"}
                        width={1080}
                        height={1080}
                        alt="sofa image"
                        className=" hover:scale-110 ease-in-out transition-all duration-300 "
                    ></Image>
                </div>
                PERFECT

                <div className=" overflow-hidden w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src={"/thumb-1920-1357580.jpeg"}
                        width={1080}
                        height={1080}
                        alt="sofa image"
                        className=" hover:scale-110 ease-in-out transition-all duration-300 "
                    ></Image>
                </div>
                <span className={greatVibes.className}>CAR</span>
                TODAY
            </div >
            <Starssection></Starssection>
            <OpenCards></OpenCards>
            <div className="hidden lg:grid grid-cols-7 gap-4 md:gap-6 mt-8">
                <div x={-30} className="col-span-2">
                    {/* Background Image */}
                    {clientInfo?.images[0] && (
                        <Image
                            src={clientInfo?.images[0]}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-3xl border object-cover shadow-md h-80 w-full overflow-hidden"
                        />
                    )}

                </div>
                <div className="col-span-3 rounded-3xl border shadow-md h-80 w-full overflow-hidden">
                    {/* Background Image */}
                    {clientInfo?.background?.image && (
                        <Image
                            src={clientInfo.background.image}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-3xl border shadow-md h-80 w-full overflow-hidden"
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
                            className="rounded-3xl border shadow-md h-80 object-cover w-full overflow-hidden"
                        >
                            <source src={clientInfo.background.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <div y={0} x={30} className="col-span-2 rounded-3xl border shadow-md h-80 w-full overflow-hidden">
                    {clientInfo?.images[1] && (
                        <Image
                            src={clientInfo?.images[1]}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-3xl border object-cover shadow-md h-80 w-full overflow-hidden"
                        />
                    )}
                </div>
            </div>
<TimeLine_01></TimeLine_01>
            <div className=' flex gap-6  relative'>
                <div

                    className=' bg-white relative shadow-lg  border  rounded-xl p-2.5'>
                    <div className='  absolute top-2.5 left-2.5  bg-white  z-20  pr-2 pb-2 rounded-br-xl'>
                        <svg className="h-10 w-10" width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110.116 31.0217C110.116 26.599 106.531 23.028 102.125 23.028C97.7189 23.028 94.1313 26.599 94.1313 31.0217C94.1313 35.4281 97.7189 38.9991 102.125 38.9991C106.531 38.9991 110.116 35.4281 110.116 31.0217Z" fill="url(#paint0_linear_301_3)" />
                            <path d="M120.763 93.42C120.467 99.9079 119.382 103.433 118.481 105.774C117.271 108.878 115.828 111.098 113.486 113.426C111.171 115.754 108.952 117.194 105.848 118.391C103.506 119.305 99.9681 120.394 93.4805 120.703C86.4666 121.012 84.3883 121.078 66.602 121.078C48.8322 121.078 46.7374 121.012 39.7235 120.703C33.2359 120.394 29.7142 119.305 27.3727 118.391C24.2522 117.194 22.0492 115.754 19.7211 113.426C17.3764 111.098 15.933 108.878 14.7393 105.774C13.8382 103.433 12.7368 99.9079 12.4571 93.42C12.1153 86.4061 12.0526 84.2951 12.0526 66.545C12.0526 48.7587 12.1153 46.6639 12.4571 39.65C12.7368 33.1624 13.8382 29.6406 14.7393 27.2795C15.933 24.1787 17.3764 21.9722 19.7211 19.6441C22.0492 17.3194 24.2522 15.8757 27.3727 14.6658C29.7142 13.7484 33.2359 12.6763 39.7235 12.3673C46.7374 12.058 48.8322 11.9791 66.602 11.9791C84.3883 11.9791 86.4666 12.058 93.4805 12.3673C99.9681 12.6763 103.506 13.7484 105.848 14.6658C108.952 15.8757 111.171 17.3194 113.486 19.6441C115.828 21.9722 117.271 24.1787 118.481 27.2795C119.382 29.6406 120.467 33.1624 120.763 39.65C121.089 46.6639 121.168 48.7587 121.168 66.545C121.168 84.2951 121.089 86.4061 120.763 93.42ZM132.743 39.1042C132.417 32.0146 131.299 27.171 129.638 22.9523C127.948 18.5755 125.683 14.8663 121.973 11.1571C118.281 7.46446 114.572 5.19875 110.195 3.48894C105.96 1.84471 101.132 0.713455 94.0393 0.404434C86.9465 0.0623779 84.681 -3.05176e-05 66.602 -3.05176e-05C48.5395 -3.05176e-05 46.2575 0.0623779 39.1647 0.404434C32.0881 0.713455 27.2642 1.84471 23.0093 3.48894C18.649 5.19875 14.9398 7.46446 11.2472 11.1571C7.538 14.8663 5.27229 18.5755 3.56567 22.9523C1.92145 27.171 0.803515 32.0146 0.461452 39.1042C0.152436 46.197 0.0735168 48.466 0.0735168 66.545C0.0735168 84.6075 0.152436 86.873 0.461452 93.9658C0.803515 101.042 1.92145 105.883 3.56567 110.121C5.27229 114.481 7.538 118.207 11.2472 121.9C14.9398 125.592 18.649 127.875 23.0093 129.581C27.2642 131.225 32.0881 132.343 39.1647 132.669C46.2575 132.995 48.5395 133.073 66.602 133.073C84.681 133.073 86.9465 132.995 94.0393 132.669C101.132 132.343 105.96 131.225 110.195 129.581C114.572 127.875 118.281 125.592 121.973 121.9C125.683 118.207 127.948 114.481 129.638 110.121C131.299 105.883 132.417 101.042 132.743 93.9658C133.068 86.873 133.147 84.6075 133.147 66.545C133.147 48.466 133.068 46.197 132.743 39.1042Z" fill="url(#paint1_linear_301_3)" />
                            <path d="M66.602 88.7046C54.3597 88.7046 44.4258 78.787 44.4258 66.5447C44.4258 54.2827 54.3597 44.3523 66.602 44.3523C78.8477 44.3523 88.7947 54.2827 88.7947 66.5447C88.7947 78.787 78.8477 88.7046 66.602 88.7046ZM66.602 32.3566C47.7305 32.3566 32.4467 47.6733 32.4467 66.5447C32.4467 85.3999 47.7305 100.7 66.602 100.7C85.4734 100.7 100.774 85.3999 100.774 66.5447C100.774 47.6733 85.4734 32.3566 66.602 32.3566Z" fill="url(#paint2_linear_301_3)" />
                            <defs>
                                <linearGradient id="paint0_linear_301_3" x1="1.27375" y1="131.698" x2="122.063" y2="10.9086" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_301_3" x1="1.27382" y1="131.863" x2="122.163" y2="10.9746" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_301_3" x1="1.30515" y1="131.867" x2="122.165" y2="11.0069" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="  relative rounded-xl  transition-all  flex h-[34rem] w-full justify-center bg-black max-w-sm  overflow-hidden"
                    >
                        <InstagramEmbed
                            className="w-full -mr-1 scale-150"
                            url={"https://www.instagram.com/reel/DOnnUwAE6ug/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
                            width="105%"
                            height="100%"
                        />
                    </div>
                </div>
                <div

                    className=' bg-white relative shadow-lg  border  rounded-xl p-2.5'>
                    <div className='  absolute top-2.5 left-2.5  bg-white   z-20  pr-2 pb-2 rounded-br-xl'>
                        <svg className="h-10 w-10" width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110.116 31.0217C110.116 26.599 106.531 23.028 102.125 23.028C97.7189 23.028 94.1313 26.599 94.1313 31.0217C94.1313 35.4281 97.7189 38.9991 102.125 38.9991C106.531 38.9991 110.116 35.4281 110.116 31.0217Z" fill="url(#paint0_linear_301_3)" />
                            <path d="M120.763 93.42C120.467 99.9079 119.382 103.433 118.481 105.774C117.271 108.878 115.828 111.098 113.486 113.426C111.171 115.754 108.952 117.194 105.848 118.391C103.506 119.305 99.9681 120.394 93.4805 120.703C86.4666 121.012 84.3883 121.078 66.602 121.078C48.8322 121.078 46.7374 121.012 39.7235 120.703C33.2359 120.394 29.7142 119.305 27.3727 118.391C24.2522 117.194 22.0492 115.754 19.7211 113.426C17.3764 111.098 15.933 108.878 14.7393 105.774C13.8382 103.433 12.7368 99.9079 12.4571 93.42C12.1153 86.4061 12.0526 84.2951 12.0526 66.545C12.0526 48.7587 12.1153 46.6639 12.4571 39.65C12.7368 33.1624 13.8382 29.6406 14.7393 27.2795C15.933 24.1787 17.3764 21.9722 19.7211 19.6441C22.0492 17.3194 24.2522 15.8757 27.3727 14.6658C29.7142 13.7484 33.2359 12.6763 39.7235 12.3673C46.7374 12.058 48.8322 11.9791 66.602 11.9791C84.3883 11.9791 86.4666 12.058 93.4805 12.3673C99.9681 12.6763 103.506 13.7484 105.848 14.6658C108.952 15.8757 111.171 17.3194 113.486 19.6441C115.828 21.9722 117.271 24.1787 118.481 27.2795C119.382 29.6406 120.467 33.1624 120.763 39.65C121.089 46.6639 121.168 48.7587 121.168 66.545C121.168 84.2951 121.089 86.4061 120.763 93.42ZM132.743 39.1042C132.417 32.0146 131.299 27.171 129.638 22.9523C127.948 18.5755 125.683 14.8663 121.973 11.1571C118.281 7.46446 114.572 5.19875 110.195 3.48894C105.96 1.84471 101.132 0.713455 94.0393 0.404434C86.9465 0.0623779 84.681 -3.05176e-05 66.602 -3.05176e-05C48.5395 -3.05176e-05 46.2575 0.0623779 39.1647 0.404434C32.0881 0.713455 27.2642 1.84471 23.0093 3.48894C18.649 5.19875 14.9398 7.46446 11.2472 11.1571C7.538 14.8663 5.27229 18.5755 3.56567 22.9523C1.92145 27.171 0.803515 32.0146 0.461452 39.1042C0.152436 46.197 0.0735168 48.466 0.0735168 66.545C0.0735168 84.6075 0.152436 86.873 0.461452 93.9658C0.803515 101.042 1.92145 105.883 3.56567 110.121C5.27229 114.481 7.538 118.207 11.2472 121.9C14.9398 125.592 18.649 127.875 23.0093 129.581C27.2642 131.225 32.0881 132.343 39.1647 132.669C46.2575 132.995 48.5395 133.073 66.602 133.073C84.681 133.073 86.9465 132.995 94.0393 132.669C101.132 132.343 105.96 131.225 110.195 129.581C114.572 127.875 118.281 125.592 121.973 121.9C125.683 118.207 127.948 114.481 129.638 110.121C131.299 105.883 132.417 101.042 132.743 93.9658C133.068 86.873 133.147 84.6075 133.147 66.545C133.147 48.466 133.068 46.197 132.743 39.1042Z" fill="url(#paint1_linear_301_3)" />
                            <path d="M66.602 88.7046C54.3597 88.7046 44.4258 78.787 44.4258 66.5447C44.4258 54.2827 54.3597 44.3523 66.602 44.3523C78.8477 44.3523 88.7947 54.2827 88.7947 66.5447C88.7947 78.787 78.8477 88.7046 66.602 88.7046ZM66.602 32.3566C47.7305 32.3566 32.4467 47.6733 32.4467 66.5447C32.4467 85.3999 47.7305 100.7 66.602 100.7C85.4734 100.7 100.774 85.3999 100.774 66.5447C100.774 47.6733 85.4734 32.3566 66.602 32.3566Z" fill="url(#paint2_linear_301_3)" />
                            <defs>
                                <linearGradient id="paint0_linear_301_3" x1="1.27375" y1="131.698" x2="122.063" y2="10.9086" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_301_3" x1="1.27382" y1="131.863" x2="122.163" y2="10.9746" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_301_3" x1="1.30515" y1="131.867" x2="122.165" y2="11.0069" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFD521" />
                                    <stop offset="0.05" stop-color="#FFD521" />
                                    <stop offset="0.501119" stop-color="#F50000" />
                                    <stop offset="0.95" stop-color="#B900B4" />
                                    <stop offset="0.950079" stop-color="#B900B4" />
                                    <stop offset="1" stop-color="#B900B4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="  relative rounded-xl  transition-all  flex h-[34rem] w-full justify-center bg-black max-w-sm  overflow-hidden"
                    >
                        <InstagramEmbed
                            className="w-full -mr-1 scale-150"
                            url={"https://www.instagram.com/reel/DOoPmL7jPE-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
                            width="105%"
                            height="100%"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}


function Starssection() {
    return (
        <div className="  flex justify-between w-full    gap-10 lg:gap-2 tabular-nums font-light  max-w-6xl mx-auto">
            <div className=' lg:-mt-32  '>
                <AnimatedCounter from={0} to={10} />
                <span className=' text-center'>
                    Years of Experience
                </span>
            </div>

            <div className=' lg:-mt-32 lg:ml-8 '>
                <AnimatedCounter from={0} to={3453} />
                <span className=' text-center '>
                    sold
                </span>
            </div>
        </div>
    )
}


