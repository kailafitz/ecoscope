import React from "react";
import { DualHeading } from "./Headings";
import Container from "./Container";

const values = [
  {
    name: "Certification",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
  {
    name: "Consultancy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
  {
    name: "Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
  {
    name: "Training",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
  {
    name: "Carbon Reporting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
  {
    name: "Raising Awareness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu pretium felis a semper et.",
  },
];

const WhatWeDo = () => {
  return (
    <Container className="flex flex-col pb-20">
      <DualHeading subtitle="How we work">Our Company Values</DualHeading>
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-x-10 mt-10">
        {values.map((value, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-y-3 w-full md:w-1/4 mt-10"
            >
              <h6>
                <span className="text-primary font-heading opacity-60 text-2xl">
                  0{i + 1}{" "}
                </span>
                {value.name}
              </h6>
              <div className="primary-gradient h-px w-full rounded-full mb-2"></div>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default WhatWeDo;
