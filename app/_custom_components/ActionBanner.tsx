import React from "react";
import Container from "./Container";
import Button from "./Button";

type Props = {
  pt?: boolean;
};

const ActionBanner = (props: Props) => {
  return (
    <Container
      className={`flex flex-col justify-center pb-40 w-full gap-y-5 ${
        props.pt ? "pt-40" : ""
      }`}
    >
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
    </Container>
  );
};

export default ActionBanner;
