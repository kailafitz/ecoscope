import React from "react";
import LandingMontage from "./LandingMontage";
import EcoscopeButton from "./Button";
import Container from "./Container";
import { H1 } from "./Headings";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <LandingMontage />
      {/* <Image
        src="/_assets/curve-background.png"
        alt="curve"
        height={800}
        width={600}
      /> */}
      <div className="flex flex-col justify-end top-height relative">
        <div className="bg-curve block pt-32">
          <Container className="pb-10">
            <div className="w-full md:w-fit">
              <div className="table">
                <H1 className="text-left m-0 mb-4">
                  Your Guide to <br />
                  Greener Productions
                </H1>
                <h2 className="mb-6 md:table-caption md:caption-bottom">
                  Empowering businesses with trusted sustainability
                  certifications for environmental responsibility and a greener,
                  more sustainable future.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-x-6 sm:space-y-0">
                <EcoscopeButton href="#services" className="w-full">
                  Our Services
                </EcoscopeButton>
                <EcoscopeButton href="contact-us" className="w-full">
                  Contact Us
                </EcoscopeButton>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landing;
