import React from 'react';
import { Instrument_Serif } from 'next/font/google';
import Link from 'next/link';
import { DotPattern } from '../ui/dot-pattern';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';


const instrumentserif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Disable automatic preloading
});

// Reusable Get Started Button Component
const GetStartedButton = () => (
  <Link
    href="/getstarted"
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
);

const FeatureItem = ({ text, included, iconColor }) => (
  <p className="flex items-center gap-3">
    {included ? (
      <Check
        className={`h-6 w-6 p-1 border ${iconColor} rounded-full bg-${iconColor}/10 flex-shrink-0`} // Added h-6 w-6 and flex-shrink-0
      />
    ) : (
      <X
        className={`h-6 w-6 p-1 border ${iconColor} rounded-full bg-${iconColor}/10 flex-shrink-0`} // Added h-6 w-6 and flex-shrink-0
      />
    )}
    {text}
  </p>
);

// Pricing Card Component
const PricingCard = ({ plan }) => (
  <div
    className={`rounded-2xl border ${plan.color === 'black' ? 'border-white/20 bg-black' : 'border-[#EDEDD8]/50 bg-[#EDEDD8] shadow-lg shadow-[#EDEDD8]'
      } overflow-hidden p-3.5`}
  >
    <div
      className={`p-5 flex flex-col gap-5 ${plan.color === 'black' ? 'bg-white/15 border-white/20' : 'bg-black/5 border-black/20'
        } rounded-2xl border`}
    >
      <div
        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl p-1.5 md:p-2 overflow-hidden ${plan.color === 'black' ? 'bg-white/25' : 'bg-black/10'
          }`}
      >
        <Image alt="logo" width={40} height={40} src={plan.imageSrc} className="w-full h-full" />
      </div>
      <h1 className={cn('text-2xl md:text-4xl font-black', instrumentserif.className, plan.color === 'black' ? 'text-white' : 'text-black')}>
        {plan.name}
      </h1>
      <div className="flex items-center gap-2">
        <h1
          className={cn(
            'text-4xl md:text-6xl font-black',
            instrumentserif.className,
            plan.color === 'black' ? 'text-white' : 'text-black'
          )}
        >
          <span className="opacity-50">$</span>
          {plan.price}
        </h1>
        <h1
          className={cn(
            'text-xl md:text-3xl opacity-50 line-through font-black',
            instrumentserif.className,
            plan.color === 'black' ? 'text-white' : 'text-black'
          )}
        >
          {plan.originalPrice}
        </h1>
      </div>
      <p className="text-neutral-500 font-medium">{plan.description}</p>
      <GetStartedButton />
    </div>
    <div className={`flex flex-col gap-4 my-10 ${plan.color === 'black' ? 'text-white/90' : 'text-black/90'} text-base`}>
      {plan.features.map((feature, index) => (
        <FeatureItem
          key={index}
          text={feature.text}
          included={feature.included}
          iconColor={plan.color === 'black' ? 'border-white/20' : 'border-black/20'}
        />
      ))}
    </div>
  </div>
);

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Starter Plan',
      imageSrc: '/6561d5cf235851bfca3b66d6_illu-mouse-2-min.png',
      color: 'black',
      price: '149',
      originalPrice: '299',
      description:
        'Launch your dealership’s online journey with a professional, responsive website tailored for small businesses. Showcase your inventory with essential tools and SEO to boost local visibility, perfect for dealers looking to establish a strong digital foundation.',
      features: [
        { text: 'Custom-coded website with standard design inspired by award-winning UI/UX', included: true },
        { text: 'Fully responsive layout optimized for all devices', included: true },
        { text: 'Inventory display with smart filters and real-time stock updates', included: true },
        { text: '15-day post-launch support with bug fixes', included: true },
        { text: 'SEO optimization including keyword integration and meta tags for better search rankings', included: true },
        { text: 'Hassle-free hosting and deployment on AWS for fast, reliable performance', included: true },
        { text: 'Dealer Management System for inventory tracking and analytics', included: true },
        { text: 'Customer Relations Management (CRM) for lead export and chat viewing', included: true },
        { text: 'One-month free trial to experience the platform', included: true },
        { text: 'Advanced custom branding or ongoing SEO maintenance', included: true },
        { text: 'Instant test drive booking and smart EMI calculator', included: true },
        { text: 'Constant updates with new features and 24/7 monitoring', included: true },
        { text: 'AI-powered features like image search or chat assistant', included: false },
        { text: 'Social media chat integration (Instagram, Facebook, WhatsApp)', included: false },
        { text: 'AI voice assistant for human-like interactions (soon)', included: false },
        { text: 'AI-powered new listing creation in seconds', included: false },
        { text: 'Cross-platform mobile app via React Native', included: false },
      ],
    },
    {
      name: 'AI Essentials Plan',
      color: 'white',
      imageSrc: '/6857cb9059df521ab06a7524_rotating_arrows.png',
      price: '199',
      originalPrice: '499',
      description:
        'Supercharge your dealership with AI-driven tools to engage customers like never before. Use your own Gemini and Grok API keys to enable smart features, combined with standard SEO to attract more organic traffic and convert visitors into loyal buyers.',
      features: [
        { text: 'Custom-coded website with standard design inspired by award-winning UI/UX', included: true },
        { text: 'Fully responsive layout optimized for all devices', included: true },
        { text: 'Inventory display with smart filters and real-time stock updates', included: true },
        { text: '15-day post-launch support with bug fixes', included: true },
        { text: 'SEO optimization including keyword integration, meta tags, and content strategies for improved rankings', included: true },
        { text: 'Hassle-free hosting and deployment on AWS for fast, reliable performance', included: true },
        { text: 'Dealer Management System for inventory tracking and analytics', included: true },
        { text: 'Customer Relations Management (CRM) for lead export and chat viewing', included: true },
        { text: 'One-month free trial to experience the platform', included: true },
        { text: 'Instant test drive booking and smart EMI calculator for seamless customer journeys', included: true },
        { text: 'AI-powered new listing creation in seconds with auto-detail extraction', included: true },
        { text: 'Advanced custom branding or ongoing SEO maintenance', included: true },
        { text: 'Constant updates with new features and 24/7 monitoring', included: true },
        { text: 'Human-like chat assistant powered by Grok AI (using your API keys)', included: true },
        { text: 'AI-powered image search for instant car matching via photo uploads (using your API keys)', included: true },
        { text: 'AI voice assistant for human-like interactions (soon) (using your API keys)', included: true },
        { text: 'Social media chat integration (Instagram, Facebook, WhatsApp) (soon) (using your API keys)', included: true },
        { text: 'Cross-platform mobile app via React Native', included: false },
      ],
    },
    {
      name: 'Pro Dealership Plan',
      imageSrc: '/685ac56f4cc00651127afc33_heart.png',
      color: 'black',
      price: '299',
      originalPrice: '999',
      description:
        'Transform your dealership with a fully managed, AI-powered website that delivers immersive online showrooms. We handle all API setups and provide advanced features, enhanced SEO, and personalized support to drive superior search visibility and sales growth.',
      features: [
        { text: 'Custom-coded website with premium design inspired by award-winning UI/UX', included: true },
        { text: 'Fully responsive layout optimized for all devices', included: true },
        { text: 'Advanced inventory display with smart filters, real-time updates, and personalized recommendations', included: true },
        { text: '30-day post-launch support with unlimited bug fixes', included: true },
        { text: 'Enhanced SEO optimization including keyword research, on-page content, and analytics for top search rankings', included: true },
        { text: 'Hassle-free hosting and deployment on AWS for fast, reliable performance', included: true },
        { text: 'Dealer Management System for deep analytics, conversation rates, and user behavior insights', included: true },
        { text: 'Customer Relations Management (CRM) for test drive management, lead export, and detailed customer tracking', included: true },
        { text: 'One-month free trial to experience the platform', included: true },
        { text: 'AI-powered image search for instant car matching via photo uploads', included: true },
        { text: 'Human-like chat assistant powered by Grok AI, fully aware of inventory', included: true },
        { text: 'Instant test drive booking and smart EMI calculator for seamless customer journeys', included: true },
        { text: 'AI-powered new listing creation in seconds with auto-detail extraction and descriptions', included: true },
        { text: 'Social media chat integration (Instagram, Facebook, WhatsApp) for unified experiences (soon)', included: true },
        { text: 'Dedicated account manager for personalized support and custom feature requests', included: true },
        { text: 'Ongoing SEO maintenance with audits and optimizations', included: true },
        { text: 'AI voice assistant for human-like interactions (soon)', included: true },
        { text: 'Constant updates with new features and 24/7 monitoring', included: true },
        { text: 'Cross-platform mobile app via React Native', included: false },
      ],
    },
    {
      name: 'Ultimate Dealership Plan',
      imageSrc: '/23423.png',
      price: '999',
      color: 'white',
      originalPrice: '1999',
      description:
        'Lead the market with our ultimate solution: a fully loaded website and app ecosystem packed with every premium feature. Enjoy seamless AI integrations, comprehensive SEO services, and dedicated support to maximize customer trust, engagement, and revenue.',
      features: [
        { text: 'Custom-coded website with premium design inspired by award-winning UI/UX', included: true },
        { text: 'Fully responsive layout optimized for all devices', included: true },
        { text: 'Advanced inventory display with smart filters, real-time updates, and personalized recommendations', included: true },
        { text: '30-day post-launch support with unlimited bug fixes', included: true },
        { text: 'Premium SEO optimization including keyword research, on-page content, backlinks, and analytics for dominant search rankings', included: true },
        { text: 'Hassle-free hosting and deployment on AWS for fast, reliable performance', included: true },
        { text: 'Dealer Management System for deep analytics, conversation rates, and user behavior insights', included: true },
        { text: 'Customer Relations Management (CRM) for test drive management, lead export, and detailed customer tracking', included: true },
        { text: 'One-month free trial to experience the platform', included: true },
        { text: 'AI-powered image search for instant car matching via photo uploads', included: true },
        { text: 'Human-like chat assistant powered by Grok AI, fully aware of inventory', included: true },
        { text: 'Instant test drive booking and smart EMI calculator for seamless customer journeys', included: true },
        { text: 'AI-powered new listing creation in seconds with auto-detail extraction and descriptions', included: true },
        { text: 'Social media chat integration (Instagram, Facebook, WhatsApp) for unified experiences (soon)', included: true },
        { text: 'AI voice assistant for human-like interactions (soon), scheduling, and inventory discussions', included: true },
        { text: 'Cross-platform mobile app via React Native with all website features', included: true },
        { text: 'Dedicated account manager for personalized support and custom feature requests', included: true },
        { text: 'Ongoing SEO maintenance with audits, optimizations, and performance tracking', included: true },
        { text: 'Constant updates with new features, error resolutions, and 24/7 website monitoring', included: true },
      ],
    },
  ];


  return (
    <section id="pricing" className="bg-[#FCF9F5]">
      <div className="relative py-40 flex flex-col items-center justify-center gap-5 overflow-hidden bg-black rounded-t-[2.5rem]">
        <Image
          width={1920}
          height={1080}
          src="/main/R0WVtWCpzNL81eNF5wrZjUj7s0k.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            maskImage: `linear-gradient(to top, transparent, black 600%)`,
            WebkitMaskImage: `linear-gradient(to top, transparent, black 600%)`,
          }}
          alt="Background"
        />
        <DotPattern
          className={cn('absolute inset-0 z-10 opacity-15', '[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]')}
        />
        <div className="border py-1 px-3 text-sm rounded-full shadow text-white bg-white/20 border-white/10">Pricing</div>
        <h1 className={cn('text-4xl md:text-6xl px-2 text-white font-black text-center max-w-4xl', instrumentserif.className)}>
          <span className="opacity-50">Choose the</span> Perfect Plan for Your Dealership
        </h1>
        <p className="text-center px-4 md:text-lg max-w-4xl mx-auto text-neutral-500 font-medium">
          Our pricing plans are tailored to help used car dealerships like yours boost sales and attract more customers with a modern, AI-powered website. Compare our options below and see why our Ultimate Dealership Plan is the best choice for driving your business forward.
        </p>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 mt-16 gap-10 max-w-5xl mx-auto w-full z-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}