import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers"; // Import the new client-side provider component

// Load font with 'swap' for better performance
const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap" 
});

// Metadata remains the same for SEO and social sharing
export const metadata = {
  title: "Superworld Technologies",
  description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
  openGraph: {
    title: "Superworld Technologies",
    description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
    url: "https://www.superworldtechnologies.com",
    siteName: "Superworld Technologies",
    images: [{
      url: "https://www.superworldtechnologies.com/thumbnail.png",
      width: 1200,
      height: 630,
      alt: "Superworld Technologies Preview",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superworld Technologies",
    description: "AI-Driven Showrooms That Convert Browsers Into Buyers",
    images: ["https://www.superworldtechnologies.com/thumbnail.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
