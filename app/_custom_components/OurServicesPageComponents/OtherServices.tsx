import React from "react";
import Container, { containerMb } from "../Layout/Container";
import { H4 } from "../Layout/Headings";
import EcoscopeButton from "../Layout/EcoscopeButton";

const OtherServices: React.FC = () => {
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
      </Container>
    </div>
  );
};

export default OtherServices;
