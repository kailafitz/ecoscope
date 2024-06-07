import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import {
  VisualEditing,
  toPlainText,
  type PortableTextBlock,
} from "next-sanity";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "./(blog)/alert-banner";
import PortableText from "./(blog)/portable-text";

import type { SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { cn } from "@/lib/utils";
import { open, varela } from "@/lib/fonts";
import Navigation from "./_custom_components/Navigation";
import Footer from "./_custom_components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResult>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

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
      template: `%s | ${title}`,
      default: title,
    },
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
    <html lang="en" className={"bg-white text-black"}>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased flex flex-col",
          open
        )}
      >
        <Navigation />
        <main className={`${varela} flex-1 flex flex-col`}>{children}</main>
        {/* <section className="min-h-screen"> */}
        {/* {draftMode().isEnabled && <AlertBanner />} */}
        {/* <Suspense>
            <Footer />
          </Suspense>
        </section> */}
        {/*{draftMode().isEnabled && <VisualEditing />}
        <SpeedInsights /> */}
        <Footer />
      </body>
    </html>
  );
}
