import MeetOurFounder from "@/app/_custom_components/AboutUsPageComponents/MeetOurFounder";
import WhatWeDo from "@/app/_custom_components/HomePageComponents/WhatWeDo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "About Us",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="pt-10 md:pt-14">
        <WhatWeDo />
      </div>
      <MeetOurFounder />
    </>
  );
};

export default AboutUs;
