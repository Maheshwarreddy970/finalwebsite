"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Link from "next/link";

function Footer({clientInfo}) {

    return (
        <>
            <footer className="px-4 mt-16 lg:mt-0 pt-12  md:px-6 lg:px-12   overflow-hidden relative border-dotted     border-t  bg-background text-foreground transition-colors duration-300 w-full  ">
                <div className="container mx-auto ">
                    <div className="grid  grid-cols-1 md:grid-cols-2  gap-16">
                        {/* Newsletter Subscription */}
                        <div className="relative ">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight">Drive with Confidence</h2>
                            <p className="mb-6 text-muted-foreground">
                                From finding your dream car to hassle-free maintenance, our team is here to support you every mile—connect with us for exclusive updates, promotions, and expert guidance tailored to you.
                            </p>
                            <div className=" flex items-center gap-2 w-full">

                                <form className="relative w-full rounded-2xl  ">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className=" backdrop-blur-sm rounded-2xl"
                                    />
                                </form>
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="  h-9 w-9 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="mb-6 flex space-x-4 mt-10">
                                {clientInfo?.socialmedia.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >

                                        {social.name === "YouTube" && <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" className="h-7 w-9" viewBox="0 0 40 28" fill="none">
                                            <path d="M39.1669 4.37213C38.706 2.65003 37.3526 1.29672 35.6306 0.835741C32.5091 -0.000610352 20 -0.000610352 20 -0.000610352C20 -0.000610352 7.49094 -0.000610352 4.37274 0.835741C2.65064 1.29672 1.29733 2.65003 0.836352 4.37213C0 7.49033 0 14 0 14C0 14 0 20.5098 0.836352 23.628C1.29733 25.3501 2.65064 26.7034 4.37274 27.1643C7.49094 28.0007 20 28.0007 20 28.0007C20 28.0007 32.5091 28.0007 35.6273 27.1643C37.3494 26.7034 38.7027 25.3501 39.1636 23.628C40 20.5098 40 14 40 14C40 14 40 7.49033 39.1636 4.37213H39.1669ZM15.9993 19.9994V8.0007L26.3912 14L15.9993 19.9994Z" fill="#FF0000"></path>
                                        </svg>}
                                        {social.name === "Facebook" &&
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="h-7 w-7" viewBox="0 0 16 16" id="facebook">
                                                <path fill="#1976D2" d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"></path>
                                                <path fill="#FAFAFA" fill-rule="evenodd" d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z" clip-rule="evenodd"></path>
                                            </svg>
                                        }
                                        {social.name === "Instagram" && <svg className="h-7 w-7" width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        }
                                        {social.name === "TikTok" && (
                                            <svg
                                                className="h-8 w-8 border rounded-lg "
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-label="TikTok"
                                                style={{ mixBlendMode: 'multiply' }}
                                                viewBox="0 0 512 512"
                                                id="tiktok"
                                            >
                                                <rect
                                                    width="512"
                                                    height="512"
                                                    fill="#fff"
                                                    rx="15%"
                                                    style={{ mixBlendMode: 'multiply' }}
                                                />
                                                <path
                                                    fill="#ff004f"
                                                    d="m 219,200 a 117,117 0 1 0 100.6,115.4 v -128 a 150,150 0 0 0 88,28 v -63 a 88,88 0 0 1 -88,-88 H 256 V 316 a 53.5,53.5 0 1 1 -37,-51 z"
                                                    style={{ mixBlendMode: 'multiply' }}
                                                    transform="translate(18 15)"
                                                />
                                                <path
                                                    fill="#00f2ea"
                                                    d="m 219,200 a 117,117 0 1 0 100.6,115.4 v -128 a 150,150 0 0 0 88,28 v -63 a 88,88 0 0 1 -88,-88 H 256 V 316 a 53.5,53.5 0 1 1 -37,-51 z"
                                                    style={{ mixBlendMode: 'multiply' }}
                                                />
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </div>
                            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                        </div>

                        {/* Social + Theme Toggle */}
                        <div className="relative  ">

                            <div className="w-full h-full rounded-xl  overflow-hidden shadow border  ">

                                <iframe
                                    className="w-full h-full transition-transform duration-300 hover:scale-[1.02]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.47419557578945!2d-74.0446096549754!3d40.68921183047079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sin!4v1756186182427!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-16  ">
                        
                        {/* Quick Links */}
                        <div className="col-span-1 my-7 md:my-0">
                            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                            <nav className="space-y-2 text-sm">
                                {[{ name: "Home", href: "/" }, { name: "Cars", href: "/cars" }, { name: "Saved Cars", href: "/saved-cars" }, { name: "Reservations", href: "/reservations" }].map((item, index) => (
                                    <Link
                                        key={item.name + index}
                                        href={`${clientInfo?.name}${item.href}`}
                                        className="block transition-colors hover:text-primary"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="col-span-1 my-7 md:my-0">
                            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
                            <address className="space-y-2 text-sm not-italic">
                                <p>{clientInfo?.contact?.address}</p>
                                <p>Phone: {clientInfo?.contact?.phone}</p>
                                <p>Email: {clientInfo?.contact?.email}</p>
                            </address>
                        </div>
                    </div>
                    <p className="text-center mt-16  text-5xl md:text-9xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">{clientInfo?.name}</p>

                </div>
            </footer>
        </>
    );
}

export { Footer };
