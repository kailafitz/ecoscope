import React from "react";
import MoreStories from "../(blog)/more-stories";
import Container from "./Container";

type Props = {};

const CaseStudies = (props: Props) => {
  return (
    <Container className="py-16 md:min-h-screen flex flex-col justify-center">
      <div>
        <h3 className="font-heading text-center text-5xl mb-20">
          Case Studies
        </h3>
        <MoreStories skip={""} limit={2} homePage />
      </div>
    </Container>
  );
};

export default CaseStudies;
