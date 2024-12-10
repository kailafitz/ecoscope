import React from "react";
import Landing from "./_custom_components/Landing";
import Services from "./_custom_components/ServiceCard";
import WhatWeDo from "./_custom_components/WhatWeDo";
import News from "./_custom_components/News";
import ContactUs from "./_custom_components/ContactUs";
import { Metadata } from "next";
import OpeningAnimation from "./_custom_components/OpeningAnimation";

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
      <Services />
      <WhatWeDo />
      <News />
      <ContactUs />
    </>
  );
};

export default Home;
