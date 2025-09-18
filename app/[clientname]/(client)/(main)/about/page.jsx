'use client'

import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import OpenCards from '@/components/ui/expandingcard'
import { SparklesText } from '@/components/ui/SparklesText'
import Image from 'next/image'
import React from 'react'
import { Philosopher, Great_Vibes } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useClientStore } from '@/store/useClientStore'
import Link from 'next/link'
import MediaSection from '@/components/ui/MediaSection'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

export default function page() {
    const clientInfo = useClientStore((state) => state.clientInfo)

    return (
        <div className=' mt-40 '>
            <div
                className={cn("justify-center px-3 md:px-10   flex-wrap max-w-4xl mx-auto gap-5 sm:gap-10  text-8xl flex items-center font-light  text-center text-black  ", philosopher.className)}>
                <span className={greatVibes.className}>Discover</span>
                Who
                <div className=" overflow-hidden w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src={"/1-Ferrari-F80-review-2025.webp"}
                        width={1080}
                        height={1080}
                        alt="sofa image"
                        className=" hover:scale-110 ease-in-out transition-all duration-300 "
                    ></Image>
                </div>
                We Are and What
                <div className=" overflow-hidden w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl">
                    <Image
                        src={"/thumb-1920-1357580.jpeg"}
                        width={1080}
                        height={1080}
                        alt="sofa image"
                        className=" hover:scale-110 ease-in-out transition-all duration-300 "
                    ></Image>
                </div>

                <span className={greatVibes.className}>Drives</span>
                Us
            </div >
            <Starssection></Starssection>
            <OpenCards></OpenCards>
            <div className="hidden  px-3 md:px-10 lg:grid grid-cols-7 gap-4 md:gap-6 mt-8">
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
                            className="rounded-xl border object-cover shadow-md h-80 w-full overflow-hidden"
                        />
                    )}

                </div>
                <div className="col-span-3 rounded-xl border shadow-md h-80 w-full overflow-hidden">
                    {/* Background Image */}
                    {clientInfo?.background?.image && (
                        <Image
                            src={clientInfo.background.image}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-xl border shadow-md h-80 w-full overflow-hidden"
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
                            className="rounded-xl border shadow-md h-80 object-cover w-full overflow-hidden"
                        >
                            <source src={clientInfo.background.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
                <div y={0} x={30} className="col-span-2 rounded-xl border shadow-md h-80 w-full overflow-hidden">
                    {clientInfo?.images[1] && (
                        <Image
                            src={clientInfo?.images[1]}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="rounded-xl border object-cover shadow-md h-80 w-full overflow-hidden"
                        />
                    )}
                </div>
            </div>
            <TeamSection></TeamSection>
            <MediaSection></MediaSection>
            <div className=' px-3 md:px-10 mt-10 relative'>
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


const members = [
    {
        name: 'Michael Rodriguez',
        role: 'General Manager',
        avatar: 'https://alt.tailus.io/images/team/member-one.webp',
        link: '#',
    },
    {
        name: 'Sarah Thompson',
        role: 'Sales Manager',
        avatar: 'https://alt.tailus.io/images/team/member-two.webp',
        link: '#',
    },
    {
        name: 'David Johnson',
        role: 'Finance Manager',
        avatar: 'https://alt.tailus.io/images/team/member-three.webp',
        link: '#',
    },
    {
        name: 'Jessica Chen',
        role: 'Service Manager',
        avatar: 'https://alt.tailus.io/images/team/member-four.webp',
        link: '#',
    },
    {
        name: 'Robert Martinez',
        role: 'Used Car Manager',
        avatar: 'https://alt.tailus.io/images/team/member-five.webp',
        link: '#',
    },
    {
        name: 'Amanda Wilson',
        role: 'Customer Relations',
        avatar: 'https://alt.tailus.io/images/team/member-six.webp',
        link: '#',
    },
    {
        name: 'Michael Rodriguez',
        role: 'Used Car Manager',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
    },
    {
        name: 'Sarah Chen',
        role: 'Customer Relations',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '#',
    },
]

function TeamSection() {
    return (
        <section className='relative w-full mt-20 mb-5 px-3 md:px-10'>
            <div>
                <div
                    className={cn(' flex gap-4 items-center text-6xl font-semibold text-black  ', philosopher.className)}
                >
                    Meet Our Expert <SparklesText colors={{ first: "#ffc400", second: "#ff9100" }} className="text-6xl  font-semibold" sparklesCount={5}>Team</SparklesText>
                </div>
                <div className="mt-4 max-w-2xl">
                    <p>Our experienced professionals are dedicated to providing exceptional service and helping you find the perfect vehicle. From sales to service, we're here to make your car buying experience smooth and enjoyable.</p>
                </div>
                <div className="mt-8">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden">
                                <img
                                    className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                    src={member.avatar}
                                    alt="team member"
                                    width="826"
                                    height="1239"
                                />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link
                                            href={member.link}
                                            className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            Linktree
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

