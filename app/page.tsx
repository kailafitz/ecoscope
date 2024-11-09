import React from "react";
import Landing from "./_custom_components/Landing";
import Services from "./_custom_components/ServiceCard";
import WhatWeDo from "./_custom_components/WhatWeDo";
import CaseStudies from "./_custom_components/CaseStudies";
import ContactUs from "./_custom_components/ContactUs";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <WhatWeDo />
      <CaseStudies />
      <ContactUs />
    </>
  );
};

export default Home;
