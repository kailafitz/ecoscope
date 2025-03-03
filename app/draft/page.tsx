import { Metadata } from "next";
import Landing from "../_custom_components/HomePageComponents/Landing";
import ActionBanner from "../_custom_components/ActionBanner";
import HowWeWork from "../_custom_components/HomePageComponents/HowWeWork";
import News from "../_custom_components/HomePageComponents/News";
import OurServices from "../_custom_components/HomePageComponents/OurServices";
import WhatWeDo from "../_custom_components/WhatWeDo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home",
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
      {/* <ActionBanner /> */}
    </>
  );
};

export default Home;
