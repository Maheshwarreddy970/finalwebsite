import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/landingcarousel';
import { cn } from '@/lib/utils'
import { Philosopher, Great_Vibes } from 'next/font/google'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

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
]

export default function TeamSection() {
    return (
        <>
            <section className='relative w-full md:mt-10 mb-5  px-3 md:px-10'>

                <div>
                    <div
                        className={cn('  text-center  text-4xl md:text-6xl font-semibold text-black  ', philosopher.className)}
                    >
                        Meet Our Dedicated <span className={greatVibes.className}>Team</span> <br></br> Committed to Your Satisfaction
                              
                    </div>
                        <p className=' max-w-2xl mt-2 mx-auto text-center '>Our experienced professionals are dedicated to providing exceptional service and helping you find the perfect vehicle. From sales to service, we're here to make your car buying experience smooth and enjoyable.</p>
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full mt-14 md:mt-0  relative"
                >
                    <CarouselContent>
                        {members.map((member, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-[25%]">

                                <div
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
                                                className="group-hover:text-primary-600  inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                                {' '}
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className=' absolute flex -top-7  right-4 md:right-10 '>
                        <CarouselPrevious />
                        <CarouselNext className='  size-10' />
                    </div>
                </Carousel>
            </section >

        </>
    )
}
