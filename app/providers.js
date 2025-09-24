"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Providers({ children }) {
  return (
    <ClerkProvider>
      <main className="min-h-screen">
        {children}
      </main>
      
      {/* Utility components are placed outside <main> to not interfere with page content */}
      <Toaster richColors />
      <Analytics />
      <SpeedInsights />
    </ClerkProvider>
  );
}
