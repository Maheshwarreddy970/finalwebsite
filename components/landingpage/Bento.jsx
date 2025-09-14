import Image from 'next/image'
import React from 'react'

export default function Bento() {
    return (
        <section className='px-3 md:px-10'>
            <div>
                <div className='grid grid-cols-2 gap-7'>
                    <div>
                        <div>
                            <div className='relative flex h-[20rem] w-full border border-black/[0.2] justify-center items-center'>
                                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                                <Image width={700} height={700} src="/3d-rendering-illustration-blank-cutout-mockup-mock-up-design-front-back-side-top-white-reflection-shadows-free-png.jpg" alt="Vehicle mockup" />

                                <div
                                    className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[85%] blur-sm"
                                    style={{
                                        animation: 'moveTopToBottom 6s ease-in-out infinite',
                                        animationDelay: '2s'
                                    }}
                                />
                                <div
                                    className="absolute inset-x-20 top-4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[85%]"
                                    style={{
                                        animation: 'moveTopToBottom 6s ease-in-out infinite',
                                        animationDelay: '2s'
                                    }}
                                />
                                <div
                                    className="absolute inset-x-60 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[35%] blur-sm"
                                    style={{
                                        animation: 'moveTopToBottom 6s ease-in-out infinite',
                                        animationDelay: '2s'
                                    }}
                                />
                                <div
                                    className="absolute inset-x-60 top-4 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[35%]"
                                    style={{
                                        animation: 'moveTopToBottom 6s ease-in-out infinite',
                                        animationDelay: '2s'
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>Certified Quality Promise</h1>
                            <p className='text-neutral-600 text-sm'>Every vehicle undergoes our comprehensive 150+ point inspection process. From engine performance to safety systems, we verify everything meets our strict standards before it reaches our lot. Every car comes with a free comprehensive vehicle history report. No accidents, no flood damage, clean title guaranteed. Full maintenance records and previous ownership details included.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Image width={500} height={500} src="/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.webp" alt="Sport car" />
                    </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export const Icon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};