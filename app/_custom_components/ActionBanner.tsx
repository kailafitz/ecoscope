import React from "react";
import Button from "./Button";
import Container from "./Container";
import LogoIcon from "./icons/LogoIcon";

type Props = {
  bottomBorder?: boolean;
};

const ActionBanner = (props: Props) => {
  return (
    <div className="relative overflow-hidden">
      <LogoIcon className="w-[200%] lg:w-[120%] left-[50%] translate-x-[-50%] text-[#40c1ab1c] absolute -z-0" />
      <Container
        mb
        className={`flex flex-col justify-center gap-y-5 pt-48 relative z-0`}
      >
        {/* <div className="bg-primary w-full h-px mb-10"></div> */}
        <p className="text-center text-2xl font-heading">
          Start the Conversation
        </p>
        <p className="text-md mx-auto md:w-3/5 xl:w-1/3 text-center">
          Let&#39;s talk about it. Get in touch to see how we can help you get
          started on your business sustainability goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/contact-us">Contact Us</Button>
          <Button href="/contact-us#book-a-consultation">
            Book a Consultation
          </Button>
        </div>
        {/* {props.bottomBorder && (
          <div className="bg-primary w-full h-px mt-10"></div>
        )} */}
      </Container>
    </div>
  );
};

export default ActionBanner;
