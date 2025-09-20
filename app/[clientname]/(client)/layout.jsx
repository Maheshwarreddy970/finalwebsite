// src/app/[clientName]/layout.jsx
import { clientDetails } from "@/data/data";
import ClientStoreInitializer from "@/components/ClientStoreInitializer";
import React from "react";
import { NotFoundPage } from "@/components/ui/NotFoundPage";
import { FamilyButtonDemo } from "@/components/chatbot/newchatbot";
import Navbar from "@/components/navbar/Navbar";
import { Footer } from "@/components/navbar/Footer";

// ✅ Add dynamic metadata
export async function generateMetadata({ params }) {
  const { clientname } = await params;
  const clientInfo = await clientDetails[clientname];

  if (!clientInfo) {
    return {
      title: "Client Not Found | Your Website",
      description: "The requested client page could not be found.",
      openGraph: {
        title: "Client Not Found | Your Website",
        description: "The requested client page could not be found.",
        url: "https://superworldtechnologies.com",
        siteName: "Your Website",
        images: [
          {
            url: "https://superworldtechnologies.com/thumbnail.png",
            width: 1200,
            height: 630,
            alt: "Not Found Preview",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Client Not Found | Your Website",
        description: "The requested client page could not be found.",
        images: ["https://superworldtechnologies.com/thumbnail.png"],
      },
      icons: {
        icon: "/favicon.ico",
      },
    };
  }

  return {
    title: `${clientInfo?.name} `,
    description: `${clientInfo?.name} your journey starts here`,
    openGraph: {
      title: `${clientInfo?.name} `,
      description: `${clientInfo?.name} your journey starts here`,
      url: `https://superworldtechnologies.com/${clientInfo?.name}`,
      siteName: clientInfo?.name,
      images: [
        {
          url: clientInfo?.thumbnail, // should be absolute URL in prod
          width: 1200,
          height: 630,
          alt: `${clientInfo?.name} Preview`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${clientInfo?.name} `,
      description: `${clientInfo?.name} your journey starts here`,
      images: [clientInfo?.thumbnail],
    },
    icons: {
      icon: clientInfo?.logo,
    },
  };
}

export default async function Layout({ params, children }) {
  const { clientname } = await params;
  const clientInfo = await clientDetails[clientname];
  if (!clientInfo) {
    return <div>
      <NotFoundPage />
    </div>;
  }

  return (
    <>
      <ClientStoreInitializer clientInfo={clientInfo} />
       <Navbar clientInfo={clientInfo}/>
      {children}
      <Footer clientInfo={clientInfo} />
    </>
  );
}
