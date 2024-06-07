import React from "react";
import Landing from "./_custom_components/Landing";
import Services from "./_custom_components/ServiceCard";
import About from "./_custom_components/About";
import CaseStudies from "./_custom_components/CaseStudies";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Landing />
      <Services />
      <About />
      <CaseStudies />
    </>
  );
};

export default Home;
