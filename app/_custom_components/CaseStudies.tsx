import React from "react";
import MoreStories from "../(blog)/more-stories";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <div className="container py-16 md:min-h-screen flex flex-col justify-center">
      <div>
        <h3 className="font-heading text-center text-5xl mb-20">
          Case Studies
        </h3>
        <MoreStories skip={""} limit={2} homePage />
      </div>
    </div>
  );
};

export default CaseStudies;
