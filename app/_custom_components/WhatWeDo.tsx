import React from "react";
import Container from "./Container";
import { H2, H4 } from "./Headings";

const whatWeDo = [
  {
    name: "Certification",
    description:
      "Ecoscope helps productions navigate meeting industry targets and regulation requirements, guiding you through the setup process while managing the production's sustainability deliverable, which enhances your production, save costs, and meaningfully reduce your environmental impact.",
  },
  {
    name: "Consultancy",
    description:
      "Sustainable Production is a journey and navigating the evolving industry standards can be challenging. Ecoscope is here to offer consulting services to help you implement sustainable practices without the need for a full-time commitment.",
  },
  {
    name: "Strategy",
    description:
      "We believe that without a strategic plan, nothing can be managed meaningfully. Ecoscope assists businesses by strategising how to incorporate sustainability principles meaningfully into your company ethos, ensuring you stay on track with your commitment to sustainability.",
  },
  {
    name: "Training",
    description:
      "Ecoscope is dedicated to a sustainable future, helping industries gain a deeper understanding of the supports available to manage their productions sustainably so they have an overarching positive impact.",
  },
  {
    name: "Carbon Reporting",
    description:
      "Ecoscope offers a package that integrates data from various departments into carbon reporting software, streamlining the process and easing the burden on your team.",
  },
  {
    name: "Outreach & Raising Awareness",
    description:
      "Ecoscope's main goal is to raise awareness amongst stakeholders in the creative industries. With your leadership team committed to sustainability principles and goals, we can drive meaningful change in our industry, benefiting future generations.",
  },
];

const WhatWeDo = () => {
  return (
    <Container mb className="flex flex-col justify-center text-center">
      <H2 mb>What We Do</H2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-16 xl:gap-x-40 gap-y-10 lg:gap-y-24 text-left">
        {whatWeDo.map((value, i) => {
          return (
            <div key={`${i}-what-we-do`}>
              <H4>
                <span className="text-primary text-2xl opacity-70 mr-2.5">
                  0{i + 1}
                </span>
                {value.name}
              </H4>
              <hr className="h-0.5 primary-gradient my-3 border-none rounded-full" />
              <p className="text-base">{value.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default WhatWeDo;
