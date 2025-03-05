import ActionBanner from "@/app/_custom_components/ActionBanner";
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

const AboutUs = () => {
  return (
    <>
      {/* <div className="about-top relative w-full py-16 lg:py-0 mb-16 md:mb-32">
        <div className="bg-primary top-0 left-0 absolute w-full h-full opacity-80" />
        <svg
          className="absolute w-full bottom-0 right-0 -m-px z-20"
          viewBox="0 0 1827 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 77V0C0 0 168.5 35.9142 411 44.9646C653.5 54.0149 778 35.7705 987.5 24.4216C1197 13.0728 1288.5 28.1567 1447.5 30.8862C1606.5 33.6157 1827 9.05037 1827 9.05037V77H0Z"
            fill="white"
          />
        </svg>

        <Container topViewHeight className="flex flex-col justify-center">
          <div className="w-full md:w-8/12 xl:w-6/12 relative z-20 text-primary-foreground">
            <H2 mb>About Us</H2>
          </div>
        </Container>
      </div> */}
      <div className="pt-10 md:pt-14">
        <WhatWeDo />
      </div>
      <MeetOurFounder />
    </>
  );
};

export default AboutUs;
