import React from "react";
import Button from "./Button";
import Container from "./Container";

type Props = {
  bottomBorder?: boolean;
};

const ActionBanner = (props: Props) => {
  return (
    <Container mb className={`flex flex-col justify-center gap-y-5`}>
      <div className="bg-primary w-full h-px mb-10"></div>
      <p className="text-center text-2xl font-heading">
        Start the Conversation
      </p>
      <p className="text-md mx-auto md:w-1/3 text-center">
        Let’s talk about it. Get in touch to see how we can help you get started
        on your business sustainability goals.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button href="/contact-us">Contact Us</Button>
        <Button href="/contact-us#book-a-consultation">
          Book a Consultation
        </Button>
      </div>
      {props.bottomBorder && (
        <div className="bg-primary w-full h-px mt-10"></div>
      )}
    </Container>
  );
};

export default ActionBanner;
