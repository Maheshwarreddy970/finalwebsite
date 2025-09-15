'use client'

import { useClientStore } from '@/store/useClientStore'
import Image from 'next/image'
import React from 'react'
import { Philosopher, Great_Vibes } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { SparklesText } from '@/components/ui/SparklesText'
import Bento from './landingpage/Bento'
import { IconSearch } from '@tabler/icons-react'
import { IconCurrencyDollar } from '@tabler/icons-react'
import { IconWallet } from '@tabler/icons-react'
import { IconBolt } from '@tabler/icons-react'
import { IconUsers } from '@tabler/icons-react'
import { IconFileDescription } from '@tabler/icons-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Customerstories from './landingpage/customers'
import EmiCalculator from '@/app/[clientname]/(client)/(main)/cars/[id]/_components/emi-calculator'

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

const features = [
    {
        title: "Quick Prequalification",
        description:
            "Get pre-qualified in minutes with no impact on your credit score. Understand your financing options upfront and shop with confidence.",
        icon: <IconSearch className="size-8 group-hover/feature:text-blue-500" />,
    },
    {
        title: "Personalized Loan Offers",
        description:
            "Receive real, personalized loan terms based on your credit profile. Tailored monthly payments and interest rates that match your budget.",
        icon: <IconCurrencyDollar className="size-8 group-hover/feature:text-blue-500" />,
    },
    {
        title: "Flexible Down Payment Options",
        description:
            "Choose from $0 down payment offers or flexible down payment plans to fit your financial situation and increase approval chances.",
        icon: <IconWallet className="size-8 group-hover/feature:text-blue-500" />,
    },
    {
        title: "Fast Approval at Dealership",
        description:
            "Bring your prequalification offers to the dealership and enjoy a streamlined, hassle-free loan approval process with trusted lenders.",
        icon: <IconBolt className="size-8 group-hover/feature:text-blue-500" />,
    },
    {
        title: "Co-Buyer & Trade-In Assistance",
        description:
            "Include a co-buyer to improve loan terms or use your trade-in value as down payment. We make financing easier and more accessible for you.",
        icon: <IconUsers className="size-8 group-hover/feature:text-blue-500" />,
    },
    {
        title: "Transparent Terms & No Surprises",
        description:
            "Know all fees upfront with no hidden charges or haggling. Transparent financing ensures you understand every aspect of your loan.",
        icon: <IconFileDescription className="size-8 group-hover/feature:text-blue-500" />,
    }
];


export default function Financesection() {
    const clientInfo = useClientStore((state) => state.clientInfo)
    return (
        <>
            <section className="px-3 md:px-10  grid grid-cols-1 md:grid-cols-2  pt-36  w-full">
                <div className=' flex flex-col gap-6  mt-10 col-span-1  '>
                    <SparklesText
                        className={cn("text-7xl  font-light  text-black  ", philosopher.className)}>
                        Drive Your  Car with  <span className={greatVibes.className}>Dream</span> Confidence
                    </SparklesText >
                    <div
                        className={cn(' text-2xl max-w-2xl text-black  ', philosopher.className)}
                    >
                        Get personalized financing options with no impact on your credit score. Fast prequalification, real rates, and flexible payment plans designed just for you.
                        .
                    </div>
                    <div className=' flex  '>
                        <button className="group hover:scale-105 transition-all duration-300  ease-in-out relative inline-flex h-[calc(40px+8px)] items-center justify-center rounded-full shadow-md bg-neutral-950 border border-neutral-200    py-1 pl-6 pr-14 font-medium text-white">
                            <span className="z-10 pr-2 group-hover:text-white">Search Cars</span>
                            <div className="absolute right-1 inline-flex h-10 w-10 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                                <div className="mr-2 flex items-center justify-center">
                                    <ArrowRight className="h-5 w-5 stroke-white" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className=' flex gap-2'>
                    <div className="relative rounded-xl  shadow-md border   h-full w-full overflow-hidden aspect-video">
                        {/* Background Image */}
                        <Image
                            src={'/exterior0.avif'}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="absolute top-0 left-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative rounded-xl mt-20 shadow-md border   h-full w-full overflow-hidden aspect-video">
                        {/* Background Image */}
                        <Image
                            src={'/kasna-finance-car-loan-1024x683.jpg'}
                            alt="Background"
                            width={1920}
                            height={1080}
                            priority={false}
                            loading="lazy"
                            className="absolute top-0 left-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <div className=' mt-24'>
                <Bento mainfeatures={features}></Bento>
            </div>
            <div className="px-3 mt-4 md:px-10">
        <EmiCalculator className={' max-h-[150vh] overflow-y-visible'} />
      </div>
            <Customerstories></Customerstories>
            <FAQs></FAQs>
        </>
    )
}

const faqCategories = [
    {
        title: "General",
        items: [
            {
                question: "What types of used vehicles do you offer?",
                answer:
                    "We have a wide selection of used cars, trucks, SUVs, and vans from trusted manufacturers to meet diverse needs and budgets.",
            },
            {
                question: "Do you provide a vehicle history report?",
                answer:
                    "Yes, every vehicle includes a free detailed history report covering accidents, repairs, and ownership history for transparency.",
            },
            {
                question: "Where is your dealership located?",
                answer:
                    "Our dealership is conveniently located at 123 Auto Drive, Springfield. Visit our Contact page for directions and hours.",
            },
            {
                question: "How often do you get new inventory?",
                answer:
                    "We update our inventory weekly to offer fresh vehicles with competitive prices and quality assurance.",
            },
            {
                question: "What should I bring when visiting your dealership?",
                answer:
                    "Please bring a valid driver's license, proof of insurance, and any trade-in vehicle information for a smoother buying experience.",
            },
        ],
    },
    {
        title: "Financing",
        items: [
            {
                question: "How do I get pre-qualified for financing?",
                answer:
                    "Our simple online form allows you to get pre-qualified in minutes with no impact on your credit score.",
            },
            {
                question: "Can I get financing with bad credit?",
                answer:
                    "Yes. We assist customers with all credit levels by working with a network of trusted lenders.",
            },
            {
                question: "Is a down payment required?",
                answer:
                    "Many financing options offer $0 down, but a down payment can reduce your monthly payments and loan term.",
            },
            {
                question: "What documents do I need to apply for financing?",
                answer:
                    "Valid ID, proof of income, address verification, and insurance are typically required to finalize financing.",
            },
            {
                question: "How quickly can I get financing approval?",
                answer:
                    "Most customers receive approval or pre-approval within 24 hours or less, streamlining your purchase process.",
            },
        ],
    },
    {
        title: "Trade-In",
        items: [
            {
                question: "Do you accept trade-ins?",
                answer:
                    "Yes, we offer competitive valuations and can apply your trade-in toward your next vehicle purchase.",
            },
            {
                question: "Can I trade in a vehicle I still owe money on?",
                answer:
                    "Absolutely. We help manage existing liens and include any equity toward your new purchase.",
            },
            {
                question: "How do I get a trade-in appraisal?",
                answer:
                    "Visit our dealership or use our online estimator tool to receive an instant trade-in value estimate.",
            },
        ],
    },
    {
        title: "Warranty & Service",
        items: [
            {
                question: "Do your vehicles come with a warranty?",
                answer:
                    "Yes, all vehicles come with a standard warranty. Extended warranty and service plans are also available.",
            },
            {
                question: "Can I schedule vehicle servicing with you?",
                answer:
                    "Yes, our service center supports maintenance and repairs. Appointments can be booked online or by phone.",
            },
            {
                question: "What does the extended warranty cover?",
                answer:
                    "Extended warranties cover major components such as engine, transmission, and electrical systems. Details vary per plan.",
            },
        ],
    },
    {
        title: "Buying Process",
        items: [
            {
                question: "Can I reserve a vehicle online?",
                answer:
                    "Yes, we offer online reservations to hold the vehicle while you arrange financing or trade-in.",
            },
            {
                question: "What is your return or exchange policy?",
                answer:
                    "We provide a limited return or exchange period for your peace of mind. Please check our policy page or contact us for details.",
            },
            {
                question: "Do you offer home delivery?",
                answer:
                    "Yes, subject to location, we offer vehicle delivery directly to your home for added convenience.",
            },
        ],
    },
];


function FAQs() {
    return (
        <section className="py-16 px-3 md:px-10 overflow-hidden">
            <div className="container grid grid-cols-5 gap-10 ">
                <div className=' col-span-2 flex flex-col gap-4'>
                    <h2 className={cn('text-5xl  text-black  ', philosopher.className)}>Frequently asked questions.</h2>
                    <div
                        className={cn('text-lg text-black   ', philosopher.className)}
                    >
                        Find answers to common questions about our used cars, financing options, trade-ins, warranties, and purchasing process. We're here to help make your car buying experience smooth and transparent                    </div>
                </div>

                <div className=" flex flex-col gap-8 col-span-3">
                    {faqCategories.map((category, idx) => (
                        <div key={idx} className={idx === 0 ? "" : "md:col-span-2"}>
                            <h3 className="text-xl font-medium mb-4 ">{category.title}</h3>
                            <Accordion type="multiple" className="w-full" orientation="vertical">
                                {category.items.map((item, i) => (
                                    <AccordionItem key={i} value={`${category.title.toLowerCase()}-${i}`}>
                                        <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                                        <AccordionContent className="text-sm">{item.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}