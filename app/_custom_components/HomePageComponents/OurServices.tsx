"use client";
import { useEffect } from "react";
import AdvertisingIcon from "../_icons/AdvertisingIcon";
import FilmTvIcon from "../_icons/FilmTvIcon";
import HospitalityIcon from "../_icons/HospitalityIcon";
import EcoscopeButton from "../Button";
import { H2, H4 } from "../Headings";
import Container, { containerMb } from "../Layout/Container";
import ServiceCard from "./ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

// By engaging with Ecoscope, not only will your productions be eco-conscious, editorial considerations, financial incentives and cost reduction strategies will also be holistically considered at each stage of the process in areas such as energy usage, waste, catering, materials and on-screen messaging through editorial consultation.

// We are accustomed to the fast-paced nature of shorter production timelines and will assist your team integrating sustainability principles and strategies in areas such as energy usage, waste, catering and materials.

// We help businesses establish clear, actionable guidelines and strategies in areas such as energy usage, waste management and reduction and sustainable sourcing and disposal, making it easier for your business to adopt eco-friendly practices.

const servicesData = [
  {
    icon: <FilmTvIcon />,
    name: "Film and Television",
    description:
      "Ecoscope helps film and television productions adopt cost saving sustainable practices to become more efficient and align with industry standards for responsible filmmaking, both behind the scenes and on-screen.",
  },
  {
    icon: <AdvertisingIcon />,
    name: "Advertising",
    description:
      "Ecoscope helps campaigns achieve impactful results by embedding sustainable practices which help position brands as environmentally responsible, even in fast-paced environments as is the nature of shorter productions.",
  },
  {
    icon: <HospitalityIcon />,
    name: "Hospitality",
    description:
      "Ecoscope provides expert guidance on sustainable practices that reflect consumer/ market trends towards sustainable alternatives, strengthening your company’s reputation, and contributing to a positive environmental footprint.",
  },
];

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
          {servicesData.map((service, i) => {
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
          })}
        </div>
        <H4 className="sm:w-3/4 md:w-3/5 xl:w-5/6 mx-auto mb-5">
          Looking for something different?
          <br className="md:hidden" />
          At Ecoscope, we know that one size does not fit all.
          <br />
          Get in touch to share your story.
        </H4>
        <EcoscopeButton href={"/draft/contact-us"}>Contact Us</EcoscopeButton>
      </Container>
    </>
  );
};

export default OurServices;
