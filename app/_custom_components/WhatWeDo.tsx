import React from "react";
import Container from "./Container";
import { H2, H4 } from "./Headings";

const whatWeDo = [
  {
    name: "Certification",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
  {
    name: "Consultancy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
  {
    name: "Strategy",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
  {
    name: "Training",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
  {
    name: "Carbon Reporting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
  {
    name: "Raising Awareness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam tincidunt ut dignissim tristique consequat tristique sed. Proin iaculis consectetur lacus luctus sed. Turpis odio augue sagittis risus sollicitudin commodo.",
  },
];

const WhatWeDo = () => {
  return (
    <Container className="flex flex-col justify-center py-32 text-center">
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
