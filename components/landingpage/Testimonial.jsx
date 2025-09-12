'use client'

import React  from 'react'
import { TestimonialsColumn } from '../ui/testimonials-columns';
import { Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils';
import { TextAnimate } from '../ui/text-effect';
import { VelocityScroll } from '../ui/scroll-based-velocity';
import Faq from './Faq';



// Load the font
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const testimonials = [

  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "/3 (1).jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export default function Testimonial() {

  return (
    <section className={cn("overflow-hidden bg-black text-white", playfair.className)} >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll className="bg-black  text-white ">Find Your Ride</VelocityScroll>
        <VelocityScroll className="  bg-white text-black">Trust Our Expertise</VelocityScroll>
      </div>
      <div className='text-5xl  space-y-4 pt-28 pb-16 font-medium  text-center'>

        <TextAnimate className=" text-pretty max-w-2xl mx-auto text-lg md:text-xl -mb-10 " animation="slideLeft" by="word" >Real stories from happy customers who drove away with confidence. Quality, trust, and value—straight from those who know best. </TextAnimate >
      </div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[800px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>
      <Faq></Faq>
      <div className=" mt-32"></div>
      <VelocityScroll className="  bg-white text-black">Start Your Journey</VelocityScroll>
      <VelocityScroll className="bg-black  text-white ">Your Car Awaitsl</VelocityScroll>
    </section>
  )
}