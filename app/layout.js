import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Superworld Technologies",
  description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
  openGraph: {
    title: "Superworld Technologies",
    description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
    url: "https://www.superworldtechnologies.com", // replace with your domain
    siteName: "Superworld Technologies",
    images: [
      {
        url: "https://www.superworldtechnologies.com/thumbnail.png", // must be absolute in production: https://www.superworldtechnologies.com/thumbnail.png
        width: 1200,
        height: 630,
        alt: "Superworld Technologies Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superworld Technologies",
    description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
    images: ["https://www.superworldtechnologies.com/thumbnail.png"], // also better absolute in production
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} `}>
          <main className="min-h-screen ">
            {children}
          </main>
          <Toaster richColors />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
