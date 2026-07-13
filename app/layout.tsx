import type { Metadata, Viewport } from "next";
import "./globals.css";

import { open, varela } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

import Footer from "./_custom_components/Layout/Footer";
import Navigation from "./_custom_components/Layout/Navigation";
import OrganizationSchema from "./_custom_components/OrganizationSchema";
import AosProvider from "./_custom_components/AosProvider";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      template: `%s | ${siteConfig.name}`,
      default: `${siteConfig.name} - Sustainability Consulting`,
    },
    description: siteConfig.description,
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: `${siteConfig.name} - Sustainability Consulting`,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} - Sustainability Consulting`,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"bg-white text-foreground scroll-smooth"}>
      <body
        id="body"
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col relative",
          open
        )}
      >
        <OrganizationSchema />
        <AosProvider />
        {/* <OpeningAnimation /> */}
        <Navigation />
        <main className={`${varela} flex-1 flex flex-col`}>{children}</main>
        <Footer />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></Script>
      </body>
    </html>
  );
}
