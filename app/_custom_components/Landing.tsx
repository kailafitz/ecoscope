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
        <div className="w-full md:w-5/12 bg-white-75 p-7 backdrop-blur rounded-lg">
          <H1 className="font-heading text-5xl mb-6 text-left md:text-left">
            Your Guide to <br className="hidden md:block" />
            Greener Productions
          </H1>
          <h2 className="mb-6">
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default Landing;
