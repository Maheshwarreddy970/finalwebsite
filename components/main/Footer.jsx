import { cn } from '@/lib/utils'
import { Instrument_Serif } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link';

const instrumentserif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: false, // Disable automatic preloading
});  
const navigation = {
    connect: [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/super-world-technologies',
        },
        {
            name: 'Github',
            href: 'https://github.com/Maheshwarreddy970',
        },
    ],
    company: [
        { name: "Home", href: "#" },
        { name: "Services", href: "#services" },
        { name: "Process", href: "#process" },
        { name: "Pricing", href: "#pricing" },
    ],
}

const TwoColumnFooter = () => {
    return (
        <footer
            aria-labelledby="footer-heading"
            className=" w-full px-4 md:px-0 relative bg-black pb-10 pt-32 border-t border-white/10    text-white "
        >            <div className="mx-auto max-w-7xl px-2">
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="space-y-4">
                        <Image src="/main/logo.png" width={50} height={50} alt="Logo" className="h-12 w-12" />
                        <h1 className={cn("text-2xl  text-white font-black  max-w-lg", instrumentserif.className)}>
                            Pretty good agency helping your dealership sell more cars with smart,<span className=" opacity-50"> modern websites. </span>
                        </h1>
                    </div>
                    {/* Navigations */}
                    <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
                        <div className="md:mt-0">
                            <h3 className=" font-semibold leading-6 ">
                                Connect
                            </h3>
                            <div className="mt-6 space-y-4">
                                {navigation.connect.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="  leading-6 text-white/60 transition-all duration-300 ease-in-out hover:text-white hover:underline "
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className=" font-semibold leading-6 ">
                                    Navigation
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {navigation.company.map((item, index) => (
                                        <div key={index}>
                                            <Link
                                                href={item.href}
                                                className="  leading-6 text-white/60 transition-all duration-300 ease-in-out hover:text-white hover:underline "
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center  mt-10 text-8xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-black inset-x-0">SWT</p>
            <div className=' border-t border-neutral-900 flex justify-center items-center  mt-5'>
                <Image width={100} height={100} src={"/main/IHpfgTI9lpH77QoYVkDYROWso.png"} alt='bottom icon ' className=' mt-5 w-10 h-10' />
            </div>
        </footer>
    )
}

export default TwoColumnFooter