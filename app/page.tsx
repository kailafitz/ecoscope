import React from "react";
import Landing from "./_custom_components/Landing";
import Services from "./_custom_components/ServiceCard";
import About from "./_custom_components/About";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Landing />
      <Services />
      <About />
    </>
  );
};

export default Home;
