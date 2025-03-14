"use client";
import { whatWeDoData } from "@/data/WhatWeDo";
import Container, { containerMb } from "../Layout/Container";
import { H2, H4 } from "../Layout/Headings";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhatWeDo: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container>
        <H2 mb className="text-center">
          What We Do
        </H2>
      </Container>
      <div className={`${containerMb} flex flex-col lg:flex-row`}>
        <Container className="w-full lg:w-1/2 pb-10 lg:pb-0">
          <H4 left mb>
            For Creatives, led by Creatives
          </H4>
          <p>
            One of the key hallmarks of a sustainable and thriving business is
            that it is adaptable. At Ecoscope, we are specialists at scoping out
            sustainable solutions and want to engage with like-minded
            individuals and organisations of all sizes across the creative
            industries committed to making a positive impact through their
            operations. We are creative problem solvers here to help creative
            entrepreneurs and industries build a sustainable future and develop
            feasible, just and meaningful mitigation and adaptation solutions to
            the climate crisis. The best antidote to climate anxiety is taking
            action and Ecoscope is here as a guide to meet you where you are on
            on your sustainability journey.{" "}
          </p>
        </Container>
        <div className="about-top h-80 lg:h-auto lg:w-1/2 bg-cover bg-bottom saturate-0 lg:rounded-tl-lg lg:rounded-bl-lg shadow-2xl"></div>
      </div>
      <Container mb>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-24 text-left">
          {whatWeDoData.map(
            (value: { name: string; description: string }, i) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  key={`${i}-what-we-do`}
                >
                  <H4 left>
                    <span className="text-primary text-2xl opacity-70 mr-2.5">
                      0{i + 1}
                    </span>
                    {value.name}
                  </H4>
                  <hr className="h-0.5 bg-gradient-to-r from-primary to-white my-3 border-none rounded-full" />
                  <p className="text-base">{value.description}</p>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </>
  );
};

export default WhatWeDo;
