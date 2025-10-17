import type { Metadata, Viewport } from "next";
import "./globals.css";

import { open, varela } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import Footer from "./_custom_components/Layout/Footer";
import Navigation from "./_custom_components/Layout/Navigation";
import OpeningAnimation from "./_custom_components/HomePageComponents/OpeningAnimation";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | Ecoscope`,
      default: "Ecoscope - Sustainability Consulting",
    },
    description: "Ecoscope provides sustainability consulting services for the film and media industry.",
    openGraph: {
      images: [],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        <OpeningAnimation />
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
