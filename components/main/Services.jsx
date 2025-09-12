import React from 'react';
import { Instrument_Serif } from 'next/font/google';
import Link from 'next/link';
import { Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const instrumentserif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    preload: false, // Disable automatic preloading
});
// Reusable Button Component
const GetStartedButton = () => (
    <Link
        href="https://cal.com/maheshwar-reddy-20/15min"
        className="group hover:-translate-y-1 relative justify-center mt-14 items-center flex gap-2 rounded-2xl border-2 shadow-xl border-neutral-950 bg-neutral-900 px-6 py-3 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-neutral-950/50"
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

// Service Item Component
const ServiceItem = ({ title, description }) => (
    <div className="flex items-start">
        <Asterisk className="size-5 mt-1 mr-1" />
        <div>
            <p className={cn('text-xl md:text-2xl', instrumentserif.className)}>{title}</p>
            <p className="text-sm lg:text-base max-w-5xl mt-1 opacity-80">{description}</p>
        </div>
    </div>
);

// Stats Card Component
const StatsCard = ({ title, subtitle, description }) => (
    <div className="flex flex-col items-center gap-3">
        <h1 className={cn('text-4xl md:text-5xl text-black font-black text-center max-w-4xl', instrumentserif.className)}>
            {title}
        </h1>
        <p className="text-lg text-center">{subtitle}</p>
        <p className="text-center text-neutral-600 max-w-md">{description}</p>
    </div>
);

const ProcessCard = ({ imageSrc, title, description, className }) => {
    if (!imageSrc) {
        console.warn(`Missing imageSrc for ProcessCard: ${title}`);
        return (
            <div className="border-[6px] rounded-3xl bg-white p-3 sm:p-5 shadow-lg">
                <div className="border bg-black/5 rounded-2xl backdrop-blur-xl overflow-hidden p-2 shadow-md">
                    <div className="w-full h-44 sm:h-52 bg-gray-200 flex items-center justify-center">
                        <p className="text-neutral-600 text-sm">Image not available</p>
                    </div>
                </div>
                <h1 className={cn('text-3xl text-black font-black mt-11', instrumentserif.className)}>{title}</h1>
                <p className="text-neutral-600 text-sm mt-3">{description}</p>
            </div>
        );
    }
    return (
        <div className="border-[6px] rounded-3xl bg-white p-3 sm:p-5 shadow-lg">
            <div className="border bg-black/5 rounded-2xl backdrop-blur-xl overflow-hidden p-2 shadow-md">
                <img
                    width={40}
                    height={40}
                    src={imageSrc}
                    className="object-cover rounded-2xl border shadow w-full h-44 sm:h-52"
                    alt="Background"
                />
            </div>
            <h1 className={cn('text-3xl text-black font-black mt-11', instrumentserif.className)}>{title}</h1>
            <p className="text-neutral-600 text-sm mt-3">{description}</p>
        </div>
    );
};
export default function Services() {
    const services = [
        {
            title: 'Brand Identity That Drives Trust',
            description:
                'Build a standout brand that reflects your dealership’s reputation and resonates with car buyers. We craft unique logos, vibrant visuals, and a cohesive aesthetic that mirrors the energy of your Instagram posts, creating a memorable identity that fosters customer confidence and encourages repeat business.',
        },
        {
            title: 'Buyer Behavior Insights',
            description:
                'Unlock the secrets of your customers’ online experience with our expert analysis. We study how buyers interact with your website, identifying issues like confusing navigation or slow load times, and provide tailored strategies to create a seamless journey that converts more visitors into test drive bookings and sales.',
        },
        {
            title: 'Stunning Digital Interfaces',
            description:
                'Showcase your vehicles with sleek, intuitive designs that engage and inspire. Our interfaces feature AI-driven tools like smart search, high-quality image showcases, and interactive financing calculators, making it effortless for buyers to find their ideal car and take the next step toward purchase.',
        },
        {
            title: 'Seamless Cross-Device Performance',
            description:
                'Deliver a flawless experience on any device with our responsive websites. Designed for speed and ease of use, our solutions provide a showroom-quality experience on phones, tablets, and desktops, reducing drop-offs and building trust to convert browsers into buyers.',
        },
        {
            title: 'Modular Tools for Easy Management',
            description:
                'Simplify your website updates with our flexible component libraries. These intuitive tools allow you to add new vehicles, update pricing, or tweak features in minutes, keeping your site accurate and engaging without requiring technical skills, so you can focus on selling cars.',
        },
        {
            title: 'Persuasive Content That Sells',
            description:
                'Capture buyer attention with compelling, search-optimized content that highlights your inventory’s value. Our expert copywriters create engaging vehicle descriptions, powerful calls-to-action, and informative content that drive inquiries, boost search visibility, and turn clicks into customers.',
        },
    ];

    const stats = [
        {
            title: '300+ Cars Sold',
            subtitle: 'Increased Vehicle Sales',
            description:
                'Our clients have sold over 300 additional vehicles through our AI-powered websites, making it easier for buyers to find and purchase their ideal car online.',
        },
        {
            title: '85% Lead Growth',
            subtitle: 'More Customer Inquiries',
            description:
                '85% of our clients see a significant rise in inquiries and test drive bookings, driven by smart features like AI chat and intuitive search tools.',
        },
        {
            title: '60+ Happy Dealerships',
            subtitle: 'Trusted Partnerships',
            description:
                'We’ve partnered with over 60 used car dealerships, delivering reliable websites that boost sales and build lasting customer trust.',
        },
    ];

    const processes = [
        {
            imageSrc: '/original-99e4a7166d791bc3406dd9f8601032bd.gif',
            title: 'Build Your Free Website with a Trial Month',
            description:
                'We create a fully functional website for free, including a one-month trial to experience all features—no extra charges. Redeem your free month to test drive our platform and see the sales boost firsthand.',
        },
        {
            imageSrc: '/Website builder.gif',
            title: 'Fully Responsive Design with Top Industry UI/UX',
            description:
                'We implement a responsive design optimized for all devices, incorporating best-in-class UI/UX standards. We handle every aspect of customer experience, including SEO best practices like mobile-first indexing for better Google rankings.',
        },
        {
            imageSrc: '/original-71c68bdadf532d15ba838d525ebdda7d.gif',
            title: 'Hassle-Free Hosting and Deployment',
            description:
                'Relax—we take care of hosting, domain connections, and deployment on AWS for speed and reliability. Your complete website is delivered ready-to-go, with initial SEO setup to kickstart visibility in local searches.',
        },
        {
            imageSrc: '/original-91b920c5af3417e456bc46004300944d.gif',
            title: 'Seamless AI Feature Integration',
            description:
                'We integrate all AI tools, like chat assistants and image search, directly into your site. This includes SEO-optimized content generation to ensure your inventory pages rank higher and attract more organic traffic.',
        },
        {
            imageSrc: '/updating.gif',
            title: 'Constant Updates and Feature Enhancements',
            description:
                'We provide ongoing updates to keep your website modern, add new features, and fix any errors. This includes regular SEO audits and optimizations to maintain high search rankings and adapt to algorithm changes.',
        },
        {
            imageSrc: '/customer-service-animated-gif-0.gif',
            title: '24/7 Customer Support and Monitoring',
            description:
                'Enjoy round-the-clock support, constant website monitoring, and fulfillment of your requirements. Our team ensures uptime and performance, with proactive SEO maintenance to drive sustained traffic growth.',
        },
    ];
    const userFeatures = [
        {
            imageSrc: '/File upload process.gif',
            title: 'Smart AI Image Search',
            description:
                'Customers can simply upload a photo of the car they are looking for—instead of manually entering specifics like brand, model, or color—and our AI instantly matches it to your inventory for a quick, intuitive search experience.',
        },
        {
            imageSrc: '/hWhqhhY6LkC1ZAzs7tur3c2Tbw.gif',
            title: 'Clean, Award-Winning UI/UX',
            description:
                'We craft the best UI/UX in the market, fully responsive across all devices, drawing inspiration from award-winning websites to ensure an effortless, engaging customer journey tailored specifically for car dealerships—boosting time on site and conversions.',
        },
        {
            imageSrc: '/15509703b18e6ded21ce5d6c4c40eb84.gif',
            title: 'Human-Like Chat Assistant',
            description:
                'Our best-in-market chat assistant, powered by Grok AI, feels like talking to a real salesperson. Its fully aware of your entire inventory and can answer all customer questions in a natural, helpful way to guide them toward a purchase.',
        },
        {
            imageSrc: '/C8hy.gif',
            title: 'Instant Test Drive Booking & Smart EMI Calculator',
            description:
                'Customers can book test drives instantly and use our smart EMI calculator to estimate payments on the spot—streamlining the decision-making process and turning interest into action without leaving your site.',
        },
        {
            imageSrc: '/1_eDQAbeFXOzwp9HH8j6D7cQ.gif',
            title: 'Coming Soon: Social Media Chat Integration',
            description:
                'Integrate your chat assistant across Instagram, Facebook, and WhatsApp for a unified experience. Customers can even share car photos directly for personalized shopping, creating seamless social media interactions that drive traffic back to your site.',
        },
        {
            imageSrc: '/Pi7-GIF-Cropper.gif',
            title: 'Coming Soon: AI Voice Assistant',
            description:
                'Our AI voice assistant sounds just like a human, allowing customers to schedule test drives, ask about inventory, and get real-time answers—delivering a premium, hands-free experience that builds trust and feels like dealing with a top dealership.',
        },
    ];
    const adminFeatures = [
        {
            imageSrc: '/original-5adb411480f8fdca4ef5e95d96cb5b53.gif',
            title: 'Dealer Management System',
            description:
                'Gain deep insights into conversation rates, inventory management, and customer behavior analysis. Everything updates instantly—no delays. Seamlessly manage featured cars on the homepage, dealership timings, and admin accounts, all with integrated SEO tools to track and boost organic traffic.',
        },
        {
            imageSrc: '/original-ffb211499006b35101a2bc6ff470d0b7.gif',
            title: 'AI-Powered New Listing in Seconds',
            description:
                'Add new listings effortlessly: Just upload images, and our advanced AI extracts all details like specs and condition, then auto-writes compelling descriptions. List cars instantly while optimizing for SEO to attract more search engine visitors.',
        },
        {
            imageSrc: '/volgopoint new car.gif',
            title: 'Customer Relations Management (CRM)',
            description:
                'Manage test drives, export leads to Excel, and view customer chats with details like email, phone, number of visits, and location. Track engagement to refine strategies, with built-in SEO reporting to see how website optimizations drive more qualified leads.',
        }
    ];

    return (
        <section className="bg-[#FCF9F5] 2xl:px-0 px-5 sm:px-20 lg:px-40">
            <div
                id="services"
                className="h-full w-full pt-32 pb-16 flex flex-col items-center justify-center gap-5 xl:max-w-7xl md:mx-auto border-x border-dashed border-black/20"
            >
                {/* Services Header */}
                <div className="border py-1 px-3 text-sm rounded-full shadow">Services</div>
                <h1 className={cn('text-4xl md:text-6xl text-black font-black text-center max-w-4xl', instrumentserif.className)}>
                    <span className="opacity-50">Skyrocket </span> Your Dealership’s Success
                </h1>
                <p className="text-center md:text-lg max-w-3xl text-neutral-600 font-medium">
                    Transform your used car dealership with cutting-edge digital solutions designed to captivate buyers, streamline operations, and multiply your sales. Our comprehensive platform turns your online presence into a revenue-generating powerhouse that sets you apart in today's competitive automotive market.
                </p>
                <GetStartedButton />
                <h1 className={cn('text-4xl md:text-6xl mt-10  text-black font-black text-center max-w-4xl', instrumentserif.className)}>
                    User Story<span className="opacity-50"> The Digital Shift in Car Buying </span>
                </h1>
                <p className="text-center md:text-lg max-w-6xl text-neutral-600 font-medium">
                    When customers search for "car dealers near me," your website is their first impression. Research shows that 92% of car buyers visit a dealership's website before stepping foot in the showroom. They're checking your inventory, comparing prices, and forming opinions about your business—all before you even know they exist.
                    Here's the reality: Most dealerships are losing potential customers every single day. Why? Because their websites fail to engage, inform, or inspire trust. While 90% of your website visitors are potential buyers actively searching for their next vehicle, traditional dealership websites convert less than 2% of this traffic.
                    We're here to change that. We bridge the gap between online browsing and in-person sales by creating an immersive digital experience that rivals visiting your physical showroom. Your website becomes more than just an inventory list—it becomes your most powerful sales tool, working 24/7 to build trust, answer questions, and guide customers toward purchase decisions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scale-[1.03] gap-10 mt-16 max-w-7xl w-full border-y border-dashed border-black/20">
                    {userFeatures.map((process, index) => (
                        <ProcessCard key={index} imageSrc={process.imageSrc} title={process.title} description={process.description} />
                    ))}
                </div>
                <h1 className={cn('text-4xl md:text-6xl mt-20  text-black font-black text-center max-w-4xl', instrumentserif.className)}>
                    Admin <span className="opacity-50">features </span>
                </h1>
                <p className="text-center md:text-lg max-w-3xl text-neutral-600 font-medium">
We believe in empowering dealerships with powerful yet simple tools. No overwhelming dashboards or unnecessary complexity—just the features you need to run your business efficiently.

                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scale-[1.03] gap-10 mt-16 max-w-7xl w-full border-y border-dashed border-black/20">
                    {adminFeatures.map((process, index) => (
                        <ProcessCard key={index} imageSrc={process.imageSrc} title={process.title} description={process.description} />
                    ))}
                </div>

                {/* Catalyst Section */}
                <div className="relative mt-28 text-white py-16 px-5 md:px-10 flex flex-col gap-10 h-full w-full overflow-hidden scale-[1.03] rounded-3xl bg-black">
                    <Image
                        width={1920}
                        height={1080}
                        src="/main/R0WVtWCpzNL81eNF5wrZjUj7s0k.png"
                        className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
                        style={{
                            maskImage: `linear-gradient(to top, transparent, black 300%)`,
                            WebkitMaskImage: `linear-gradient(to top, transparent, black 600%)`,
                        }}
                        alt="Background"
                    />
                    <div className="relative z-10 flex flex-col gap-3">
                        <h1 className={cn('text-3xl sm:text-4xl text-white font-black max-w-4xl', instrumentserif.className)}>
                            Your Catalyst for Automotive Digital Success
                        </h1>
                        <p className="text-sm sm:text-lg text-neutral-400 font-medium max-w-3xl">
                            From crafting a vibrant online presence to launching a results-driven website, we empower your dealership to
                            dominate the digital landscape. Our skilled team blends state-of-the-art AI technology with creative innovation
                            to deliver solutions that turn browsers into buyers, ensuring your inventory captivates and your sales skyrocket.
                            Here’s how we do it:
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        {services.map((service, index) => (
                            <ServiceItem key={index} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex justify-between gap-14 my-28">
                    <div className="flex flex-col gap-10 lg:flex-row md:gap-5 px-9">
                        {stats.map((stat, index) => (
                            <StatsCard key={index} title={stat.title} subtitle={stat.subtitle} description={stat.description} />
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div
                    id="process"
                    className="flex flex-col w-full items-center gap-5 bg-black/5 border-y border-dashed border-black/20 py-28"
                >
                    <div className="border py-1 px-3 text-sm rounded-full shadow">Process</div>
                    <h1 className={cn('text-4xl lg:text-5xl text-black font-black text-center max-w-4xl', instrumentserif.className)}>
                        How We Turn Your Dealership into a <span className="opacity-55">Digital Powerhouse</span>
                    </h1>
                    <p className="text-center lg:text-lg text-neutral-600 font-medium max-w-4xl">
                        Our streamlined process takes your used car dealership from an outdated online presence to a high-performance
                        website that drives sales and captivates buyers. Discover how we guide you every step of the way to deliver
                        results that boost your bottom line.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scale-[1.03] gap-10 mt-10 max-w-7xl w-full border-y border-dashed border-black/20">
                        {processes.map((process, index) => (
                            <ProcessCard key={index} imageSrc={process.imageSrc} title={process.title} description={process.description} />
                        ))}
                    </div>
                    <GetStartedButton />
                </div>
            </div>
        </section>
    );
}