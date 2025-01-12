import React from "react";
import Container, { containerMb } from "../Layout/Container";
import { H4 } from "../Headings";
import EcoscopeButton from "../Button";

const OtherServices = () => {
  return (
    <div
      className={`${containerMb} bg-secondary py-10 md:py-20 relative overflow-hidden`}
    >
      <Container className="text-white grid md:grid-cols-3 gap-x-20 items-center">
        <div className="col-span-2">
          <H4 mb left>
            Looking for something else?
          </H4>
          <p className="text-xl mb-5">
            One of the key hallmarks of a sustainable and thriving business is
            that it is adaptable. At Ecoscope, we are specialists at scoping out
            sustainable solutions and want to engage with creative thinkers
            regardless of the industry or size. We are creative problem solvers
            here to help creative entrepreneurs and industries develop feasible
            and meaningful adaptation solutions to the climate crisis.
            <br />
            <br />
            Feel free to get in touch and share your story.
          </p>
          <EcoscopeButton href="contact-us">Contact Us</EcoscopeButton>
        </div>
        {/* <div className="flex flex-col">
          <p className="text-xl">
            Feel free to get in touch and share your story
          </p>
          <EcoscopeButton href="contact-us">Contact Us</EcoscopeButton>
        </div> */}
        {/* <QuestionIcon className="absolute text-primary w-16 rotate=[55deg] top-[70%] right-[5%]" />
          <QuestionIcon className="absolute text-primary w-24 rotate-[85deg] top-[60%] right-[20%]" />
          <QuestionIcon className="absolute text-primary w-10 rotate-12 top-1/3 right-1/4" />
          <QuestionIcon className="absolute text-primary w-16 -rotate-12 top-[60%] right-[35%]" />
          <QuestionIcon
            className="absolute text-primary w-32 rotate-[70deg] top-[15%] right-[8%]"
            strokeWidth={1}
          />
          <QuestionIcon className="absolute text-primary w-20 rotate-45 top-[10%] right-[33%]" /> */}
      </Container>
    </div>
  );
};

export default OtherServices;
