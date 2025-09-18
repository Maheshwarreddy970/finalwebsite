"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import UserAccountNav from "./UserAccountNav";
import { SignInButton } from "@clerk/nextjs";
import { useClientStore } from "@/store/useClientStore";

export function AppNavbar({ user, isAdmin }) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cars",
      link: "/cars",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clientInfo = useClientStore((state) => state.clientInfo);
  return (
    <Navbar className="z-50">
      {/* Desktop Navigation */}
      <NavBody >
        <NavbarLogo logoUrl={clientInfo?.logo} />
        <NavItems name={clientInfo?.name} isAdmin={isAdmin} items={navItems} />
        <div className="flex items-center gap-4">
          {
            !user && (
              <SignInButton>
                <NavbarButton variant="primary">Login</NavbarButton>
              </SignInButton>
            )
          }
          <UserAccountNav user={user} />
        </div>

      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo logoUrl={clientInfo?.logo} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={`${clientInfo?.name}${item.link}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 z-50 dark:text-neutral-300">
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex items-center gap-4">
            {
              !user && (
                <SignInButton>
                  <NavbarButton variant="primary">Login</NavbarButton>
                </SignInButton>
              )
            }
            <UserAccountNav user={user} />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
