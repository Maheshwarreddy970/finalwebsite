"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { useClientStore } from "@/store/useClientStore";
import Link from "next/link";

function Footer() {
    const clientInfo = useClientStore((state) => state.clientInfo);

    return (
        <>
            <footer className="px-4 pt-12  md:px-6 lg:px-12  md:h-screen overflow-hidden relative     border-t  bg-background text-foreground transition-colors duration-300 w-full  ">
                <div className="container mx-auto ">
                    <div className="md:grid md:h-[40vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-7  gap-16">
                        {/* Newsletter Subscription */}
                        <div className="relative max-w-sm col-span-2">
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
                                        {social.name === "Facebook" && <Facebook className="h-8 w-8" />}
                                        {social.name === "Twitter" && <Twitter className="h-8 w-8" />}
                                        {social.name === "Instagram" && <Instagram className="h-8 w-8" />}
                                        {social.name === "LinkedIn" && <Linkedin className="h-8 w-8" />}
                                    </Link>
                                ))}
                            </div>
                            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                        </div>

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

                        {/* Social + Theme Toggle */}
                        <div className="relative  col-span-3">

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
                    <p className="text-center mt-16  text-5xl md:text-9xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">{clientInfo?.name}</p>

                </div>
            </footer>
        </>
    );
}

export { Footer };
