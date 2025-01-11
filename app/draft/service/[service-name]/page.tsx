import ActionBanner from "@/app/_custom_components/ActionBanner";
import ServicePageContent from "@/app/_custom_components/ServicePageContent";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services",
    description: "Services",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const Service = () => {
  return (
    <>
      <ServicePageContent />
    </>
  );
};

export default Service;
