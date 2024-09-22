import React from "react";
import LandingMontage from "./LandingMontage";
import EcoscopeButton from "./Button";
import Container from "./Container";
import { H1 } from "./Headings";

type Props = {};

const Landing = (props: Props) => {
  return (
    <>
      <LandingMontage />
      <Container className="flex flex-col justify-center video-overlay">
        <div className="w-full md:w-fit bg-transparent-white p-7 backdrop-blur rounded-lg">
          <div className="table">
            <H1 className="text-left m-0 mb-4">
              Your Guide to <br className="hidden md:block" />
              Greener Productions
            </H1>
            <h2 className="mb-6 table-caption caption-bottom">
              Empowering businesses with trusted sustainability certifications
              for environmental responsibility and a greener, more sustainable
              future.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-x-6 md:space-y-0">
            <EcoscopeButton href="#services" className="w-full">
              Our Services
            </EcoscopeButton>
            <EcoscopeButton href="contact-us" className="w-full">
              Contact Us
            </EcoscopeButton>
          </div>
          {/* <h2 className="mb-6">
            Empowering businesses with trusted sustainability certifications for
            environmental responsibility and a greener, more sustainable future.
          </h2>
          <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-x-6 md:space-y-0">
            <EcoscopeButton href="about-us" className="w-full">
              Our Services
            </EcoscopeButton>
            <EcoscopeButton href="contact-us" className="w-full">
              Contact Us
            </EcoscopeButton>
          </div> */}
        </div>
      </Container>
    </>
  );
};

export default Landing;
