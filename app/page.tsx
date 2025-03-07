import { Metadata } from "next";
import Landing from "./_custom_components/HomePageComponents/Landing";
import HowWeWork from "./_custom_components/HomePageComponents/HowWeWork";
import News from "./_custom_components/HomePageComponents/News";
import OurServices from "./_custom_components/HomePageComponents/OurServiceCards";
import WhatWeDo from "./_custom_components/HomePageComponents/WhatWeDo";

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
    </>
  );
};

export default Home;
