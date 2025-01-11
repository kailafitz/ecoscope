"use client";
import Container from "../Layout/Container";
import { H2 } from "../Headings";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const steps = [
  "Scope Out",
  "Strategise",
  "Engage, Implement and Track",
  "Report",
];

const HowWeWork = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container id="how-we-work" mb className="text-center">
      <H2 mb>How We Work</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-9 xl:gap-y-0">
        {steps.map((service, i) => {
          return (
            <div
              key={i}
              className="p-5 font-heading flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="text-primary text-6xl mx-auto mb-6">0{i + 1}</div>
              <div className="text-2xl flex-1 flex flex-col justify-center">
                {service}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HowWeWork;
