import { Metadata } from "next";
import ActionBanner from "./_custom_components/ActionBanner";
import HowWeWork from "./_custom_components/HowWeWork";
import Landing from "./_custom_components/Landing";
import News from "./_custom_components/News";
import OurServices from "./_custom_components/OurServices";
import WhatWeDo from "./_custom_components/WhatWeDo";

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
