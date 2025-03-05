import type { Metadata, Viewport } from "next";
import { VisualEditing, toPlainText } from "next-sanity";
import { draftMode } from "next/headers";
import "./globals.css";

import { open, varela } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { SettingsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

import Footer from "./_custom_components/Layout/Footer";
import Navigation from "./_custom_components/Layout/Navigation";
import OpeningAnimation from "./_custom_components/HomePageComponents/OpeningAnimation";
import AlertBanner from "./(news)/alert-banner";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResult>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title;
  const description = settings?.description || [];

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | Ecoscope`,
      default: title || "",
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
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
    <>
      {draftMode().isEnabled && <AlertBanner />}

      <html lang="en" className={"bg-white text-foreground scroll-smooth"}>
        <body
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

      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
