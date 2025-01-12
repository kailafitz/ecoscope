import type { Metadata } from "next";
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
import Draft from "./draft/page";
import AlertBanner from "./draft/(news)/alert-banner";

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
    // title: {
    //   template: `%s | ${title}`,
    //   default: title || "",
    // },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

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
          {/* <OpeningAnimation /> */}
          <Navigation />
          <main className={`${varela} flex-1 flex flex-col`}>{children}</main>
          <Footer />
        </body>
      </html>

      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
