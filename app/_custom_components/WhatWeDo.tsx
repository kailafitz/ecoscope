import React from "react";
import Container from "./Container";
import { DualHeading, H2, H4, mb } from "./Headings";

const whatWeDo = [
  {
    name: "Engagement",
    description:
      "Ecoscope's main purpose is to raise awareness through outreach and engagement. By forging partnerships and fostering your leadership teams commitment to sustainability, we can drive meaningful change not only within your organisation but also industry-wide through internal and industry-facing outreach and engagement activities. ",
  },
  {
    name: "Strategy",
    description:
      "We believe that without a strategic plan, nothing can be managed meaningfully. Ecoscope is here to assist in the early stages of your business’s sustainability journey by strategising how to incorporate sustainability principles meaningfully into your company ethos, ensuring you stay on track with your commitment to sustainability.",
  },
  {
    name: "Consultancy",
    description:
      "Navigating evolving industry sustainability standards, requirements and funding supports can be challenging. One size does not fit all. Ecoscope offers bespoke consulting services to help you implement sustainable practices which meet the specific needs of your business.",
  },
  {
    name: "Training",
    description:
      "Ecoscope is dedicated to a sustainable future and we believe that building and fostering sustainability awareness within businesses is paramount to achieving this. Ecoscope helps organisations integrate sustainability principles meaningfully and gain a deeper understanding of the impact of your operations by offering bespoke training tailored to your organisation’s needs.",
  },
  {
    name: "Certification",
    description:
      "Ecoscope helps businesses navigate industry certification requirements and targets by guiding you through the set-up process and managing it’s delivery.",
  },
  {
    name: "Carbon Reporting",
    description:
      "Ecoscope offers a range of carbon reporting packages to measure and analyse your organisation's impact to help inform decision making at top level and the development of future company policy and strategy in line with industry requirements.",
  },
];

const WhatWeDo = () => {
  return (
    <Container mb className="flex flex-col justify-center text-center">
      <H2>What We Do</H2>
      <p className={`mt-5 ${mb}`}>
        One of the key hallmarks of a sustainable and thriving business is that
        it is adaptable. At Ecoscope, we are specialists at scoping out
        sustainable solutions and want to engage with like-minded individuals
        and organisations of all sizes across the creative industries committed
        to making a positive impact through their operations. We are creative
        problem solvers here to help creative entrepreneurs and industries build
        a sustainable future and develop feasible, just and meaningful
        mitigation and adaptation solutions to the climate crisis. The best
        antidote to climate anxiety is taking action and Ecoscope is here as a
        guide to meet you where you are on on your sustainability journey.{" "}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-16 gap-y-10 lg:gap-y-24 text-left">
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
