import "../../../globals.css";

import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import AlertBanner from "../../../(blog)/alert-banner";

export { metadata, viewport } from "next-sanity/studio";

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {draftMode().isEnabled && <AlertBanner />}
      {children}
      {draftMode().isEnabled && <VisualEditing />}
    </>
  );
}
