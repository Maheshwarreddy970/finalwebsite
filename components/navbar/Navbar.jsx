import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Search from "./Search";
import { Philosopher } from 'next/font/google'
import { cn } from "@/lib/utils";
import { HomeIcon } from "lucide-react";
import { Store } from "lucide-react";
import { IconSearch } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400"] })


const Header = async ({ isAdminPage = false, clientInfo }) => {
  const pagesNames = [
    { name: "Shop", href: `/${clientInfo?.name}/cars` },
    { name: "About", href: `/${clientInfo?.name}/about` },
    { name: "Finance", href: `/${clientInfo?.name}/finance` },
    { name: "Contact", href: `/${clientInfo?.name}/contact` },
  ];
  const user = await checkUser();
  return (
    <>
      <header className="fixed  px-3 md:px-10 py-5  top-0 w-full bg-white backdrop-blur-md z-50 ">
        <nav className="mx-auto flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <Link href={`/${clientInfo?.name}`} className="flex">
              <Image
                src={`${clientInfo?.logo ? clientInfo?.logo : "/vehiql-logo.png"}`}
                alt="Vehiql Logo"
                width={200}
                height={60}
                className="h-9 w-auto object-contain "
              />
            </Link>

            <div>
              {pagesNames.map((page) => (
                <Link key={page.name} href={page.href} className={cn(" md:hover:text-xl   md:text-lg text-neutral-600 hover:text-black  font-medium hover:border-b border-black  px-2  transition-all duration-300 ease-in-out  py-1 ", philosopher.className)}>
                  {page.name}
                </Link>
              ))}
            </div>
          </div>


          {/* Action Buttons */}
          <div className="md:flex hidden items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler hover:scale-110 transition-all duration-300 ease-in-out icons-tabler-outline icon-tabler-map-pin-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M12.783 21.326a2 2 0 0 1 -2.196 -.426l-4.244 -4.243a8 8 0 1 1 13.657 -5.62" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" /></svg>
              </TooltipTrigger>
              <TooltipContent>
                <p>Location</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`/${clientInfo?.name}/reservations`}
                  className=""
                >
                  <Image src='/test-icon.png' width={30} height={30} alt='test drive' className="hover:scale-110 transition-all duration-300 ease-in-out"></Image>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reservations</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={`/${clientInfo?.name}/saved-cars`}
                  className=""
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" opacity={0.8} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler hover:scale-110 transition-all duration-300 ease-in-out icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Saved Cars</p>
              </TooltipContent>
            </Tooltip>
            {isAdminPage ? (
              <>
                <Link href="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft size={18} />
                    <span>Back to App</span>
                  </Button>
                </Link>
              </>
            ) : null}
            <div className="">
              <SignedOut>
                <SignInButton forceRedirectUrl={`/${clientInfo?.name}`}>
                  <Image src='/blank_youtube_profile_pic_by_redballbomb_de8cefl-375w-2x.jpg' width={30} height={30} className="w-9 h-9 border  rounded-full hover:scale-110 transition-all duration-300 ease-in-out" alt='sign in'></Image>
                </SignInButton>
              </SignedOut>
              <SignedIn >
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </nav>
        <Search></Search>
      </header>
      <section className=" -bottom-0 overflow-hidden fixed w-full left-0 z-50    md:hidden">
        <div className="grid grid-cols-5  gap-2 w-full bg-white/50 backdrop-blur-3xl shadow   justify-between py-4  px-5 ">
          <div className=" flex w-full h-full justify-center items-center">
            <Store className=" size-8 " strokeWidth={1}></Store>
          </div>
       
          <div className=" flex w-full h-full justify-center items-center">
            <Link
              href={`/${clientInfo?.name}/reservations`}
              className=""
            >
              <Image src='/test-icon.png' width={32} height={32} alt='test drive' className=" size-8  hover:scale-110 transition-all duration-300 ease-in-out"></Image>
            </Link>
          </div>
             <div className=" flex w-full h-full justify-center items-center">
            <IconSearch className=" size-8 " strokeWidth={1}></IconSearch >
          </div>
          <div className=" flex w-full h-full justify-center items-center">
            <Link
              href={`/${clientInfo?.name}/saved-cars`}
              className=""
            >
              <IconHeart className=" size-8 " strokeWidth={1}></IconHeart  >
            </Link>
          </div>
          <div className=" flex w-full h-full justify-center items-center">
            <SignedOut>
              <SignInButton forceRedirectUrl={`/${clientInfo?.name}`}>
                <Image src='/blank_youtube_profile_pic_by_redballbomb_de8cefl-375w-2x.jpg' width={30} height={30} className="w-9 h-9 border  rounded-full hover:scale-110 transition-all duration-300 ease-in-out" alt='sign in'></Image>
              </SignInButton>
            </SignedOut>
            <SignedIn >
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;