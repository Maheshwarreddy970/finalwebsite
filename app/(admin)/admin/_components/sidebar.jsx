"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, Calendar, Cog, LogOut, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";
import Image from "next/image";


export const Sidebar = () => {
  const pathname = usePathname();
  // Navigation items
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: `/admin`,
    },
    {
      label: "Cars",
      icon: Car,
      href: `/admin/cars`,
    },
    {
      label: "Test Drives",
      icon: Calendar,
      href: `/admin/test-drives`,
    },
    {
      label: "Chat",
      icon: MessageCircle,
      href: `/admin/chat`,
    },
    {
      label: "Settings",
      icon: Cog,
      href: `/admin/settings`,
    },
  ];
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-full flex-col overflow-y-auto bg-white  shadow-sm border-r">
        <div className="p-6">
          <Link href="/">
            <Image src="/swtlogo.png" alt="Logo" width={100} height={100} className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex flex-col w-full px-3 gap-3">
          {routes.map((route, index) => (
            <Link
              key={route.href+index}
              href={route.href}
              className={cn(
                "flex items-center py-2 gap-x-2 rounded-lg text-slate-800 text-base font-medium pl-3 transition-all ",
                pathname === route.href
                  ? "bg-black text-white border  shadow "
                  : " hover:bg-neutral-200 hover:shadow ",
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </div>
        <div className="mt-auto p-6">
          <SignOutButton>
            <button className="flex items-center gap-x-2 text-slate-500 text-sm font-medium transition-all hover:text-slate-600">
              <LogOut className="h-5 w-5" />
              Log out
            </button>
          </SignOutButton>
        </div>
      </div>

      {/* Mobile Bottom Tabs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex justify-around items-center h-16">
        {routes.map((route, index) => (
          <Link
            key={route.href+index}
            href={route.href}
            className={cn(
              "flex flex-col items-center justify-center text-slate-500 text-xs font-medium transition-all",
              pathname === route.href ? "text-blue-700" : "",
              "py-1 flex-1"
            )}
          >
            <route.icon
              className={cn(
                "h-6 w-6 mb-1",
                pathname === route.href ? "text-blue-700" : "text-slate-500"
              )}
            />
            {route.label}
          </Link>
        ))}
      </div>
    </>
  );
};
