import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Landing from "./_custom_components/HomePageComponents/Landing";
import HowWeWork from "./_custom_components/HomePageComponents/HowWeWork";
import News from "./_custom_components/HomePageComponents/News";
import OurServices from "./_custom_components/HomePageComponents/OurServiceCards";
import WhatWeDo from "./_custom_components/HomePageComponents/WhatWeDo";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Home",
    description:
      "Sustainability consulting for film, TV, and creative industries. Ecoscope helps businesses build feasible climate solutions and meet their ESG goals.",
    path: "/",
  });
}

const Home = () => {
  return (
    <>
      <Landing />
      <HowWeWork />
      <WhatWeDo />
      <News />
      <OurServices />
    </>
  );
};

export default Home;
