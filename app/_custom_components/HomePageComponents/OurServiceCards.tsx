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
        <div className="flex flex-col gap-y-10">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 justify-center mb-16 gap-x-10`}
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
          <div className="flex flex-col items-center gap-y-5">
            <div>
              <H4 className="sm:w-full mx-auto mb-2">
                Looking for something different?
              </H4>
              <p className="text-center">
                At Ecoscope, we know that one size does
                not fit all.
                <br /> Get in touch to share your story.
              </p>
            </div>
            <EcoscopeButton href={"/contact-us"}>Contact Us</EcoscopeButton>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurServices;
