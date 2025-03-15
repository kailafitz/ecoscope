import { H1 } from "@/app/_custom_components/Layout/Headings";
import React from "react";

const Intro: React.FC = () => {
  return (
    <>
      <H1
        mb
        className="text-left"
        subtitle="Stay informed about the milestones, events, and initiatives that shape
        our journey. From industry trends to behind-the-scenes highlights,
        we're here to keep you in the know."
      >
        News
      </H1>
    </>
  );
};

export default Intro;
