import "../../../globals.css";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import AlertBanner from "../../../(blog)/alert-banner";
import { varela } from "@/lib/fonts";

export { metadata, viewport } from "next-sanity/studio";

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={varela}>
      <body className="min-h-screen">
        {draftMode().isEnabled && <AlertBanner />}
        {children}
      </body>
      {draftMode().isEnabled && <VisualEditing />}
    </html>
  );
}
