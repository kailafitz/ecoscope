import React from "react";
import Button from "./Button";

type Props = {
  mt?: boolean;
};

const ActionBanner = (props: Props) => {
  return (
    <div
      className={`flex flex-col justify-center w-full gap-y-5 ${
        props.mt ? "mt-20" : ""
      }`}
    >
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
    </div>
  );
};

export default ActionBanner;
