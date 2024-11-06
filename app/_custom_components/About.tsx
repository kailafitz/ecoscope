import React from "react";
import Container from "./Container";
import { H3 } from "./Headings";

const aboutValues = [
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

const About = () => {
  return (
    <Container className="flex flex-col justify-center py-32">
      <H3 className="text-center">What We Do</H3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-12 lg:gap-x-16 xl:gap-x-40 gap-y-10 lg:gap-y-24">
        {aboutValues.map((value, i) => {
          return (
            <div>
              <h6 className="text-2xl">
                <span className="text-primary text-2xl opacity-70 mr-3">
                  0{i + 1}
                </span>
                {value.name}
              </h6>
              <hr className="h-1 primary-gradient my-3" />
              <p className="text-base">{value.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default About;
