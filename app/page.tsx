import React from "react";
import Landing from "./_custom_components/Landing";
import Services from "./_custom_components/ServiceCard";
import About from "./_custom_components/About";
import CaseStudies from "./_custom_components/CaseStudies";
import ContactUs from "./_custom_components/ContactUs";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <About />
      <CaseStudies />
      <ContactUs />
    </>
  );
};

export default Home;
