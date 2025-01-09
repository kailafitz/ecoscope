import React from "react";
import Landing from "./_custom_components/Landing";
import WhatWeDo from "./_custom_components/WhatWeDo";
import News from "./_custom_components/News";
import ContactUs from "./_custom_components/ContactUs";
import { Metadata } from "next";
import OpeningAnimation from "./_custom_components/OpeningAnimation";
import OurServices from "./_custom_components/OurServices";
import HowWeWork from "./_custom_components/HowWeWork";
import ActionBanner from "./_custom_components/ActionBanner";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Ecoscope",
    description: "Home",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const Home = () => {
  return (
    <>
      <Landing />
      <HowWeWork />
      <WhatWeDo />
      <News />
      <HowWeWork />
      <OurServices />
      {/* <ContactUs /> */}
      <ActionBanner />
    </>
  );
};

export default Home;
