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

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400"] })


const Header = async ({ isAdminPage = false, clientInfo }) => {
  const pagesNames = [
    { name: "Shop", href: `/${clientInfo?.name}/cars` },
    { name: "About", href: `/${clientInfo?.name}/about` },
    { name: "Finance", href: `/${clientInfo?.name}/finance` },
    { name: "Contact", href: `/${clientInfo?.name}/contact` },
  ];
  const user = await checkUser();
  const isAdmin = user?.role === "ADMIN";
  return (
    <header className="fixed  px-3 md:px-10 py-5  top-0 w-full bg-white backdrop-blur-md z-50 ">
      <nav className="mx-auto flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <Link href={isAdminPage ? `/admin` : `/${clientInfo?.name}`} className="flex">
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
              <Link key={page.name} href={page.href} className={cn(" hover:text-xl text-lg text-neutral-600 hover:text-black  font-medium hover:border-b border-black  px-2  transition-all duration-300 ease-in-out  py-1 ", philosopher.className)}>
                {page.name}
              </Link>
            ))}
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={`/admin`}
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group hover:scale-110 transition-all duration-300 ease-in-out"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Star (enlarged + border) */}
                  <g transform="scale(1.3) translate(-5, -4)">
                    <path
                      d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
                      fill="#facc15"        // yellow fill
                      stroke="#eab308"      // yellow-500 border
                      strokeWidth="1.5"     // border thickness
                    />
                  </g>

                  {/* User Outline */}
                  <path d="M8 15H7a4 4 0 0 0-4 4v2" />
                  <circle cx="10" cy="7" r="4" />
                </svg>

              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Admin</p>
            </TooltipContent>
          </Tooltip>
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
  );
};

export default Header;