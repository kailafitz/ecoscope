import "../../../globals.css";

export { metadata, viewport } from "next-sanity/studio";

export default function SanityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
