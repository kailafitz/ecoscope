"use client";
import { useEffect } from "react";
import EcoscopeButton from "../Layout/EcoscopeButton";
import { H2, H4 } from "../Layout/Headings";
import Container, { containerMb } from "../Layout/Container";
import ServiceCard from "./ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { serviceCardsData } from "@/data/Services";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <>
      <Container mb id="services" className="text-center">
        <H2 mb>We Specialise In</H2>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-10 justify-center ${containerMb}`}
        >
          {serviceCardsData.map(
            (
              service: { icon: JSX.Element; name: string; description: string },
              i
            ) => {
              let href = service?.name.replace(/ /g, "-").toLowerCase();
              return (
                <ServiceCard
                  key={i}
                  i={i}
                  name={service?.name}
                  description={service?.description}
                  icon={service?.icon}
                  href={`our-services/#${href}`}
                />
              );
            }
          )}
        </div>
        <H4 className="sm:w-3/4 md:w-3/5 xl:w-5/6 mx-auto mb-5">
          Looking for something different?
          <br className="md:hidden" /> At Ecoscope, we know that one size does
          not fit all.
          <br /> Get in touch to share your story.
        </H4>
        <EcoscopeButton href={"/draft/contact-us"}>Contact Us</EcoscopeButton>
      </Container>
    </>
  );
};

export default OurServices;
