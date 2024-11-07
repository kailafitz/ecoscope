import React from "react";
import Container from "./Container";
import { H3 } from "./Headings";
import MoreStories from "../(blog)/news/_blog_components/MoreStories";

const CaseStudies = () => {
  return (
    <Container className="py-32 md:min-h-screen flex flex-col justify-center">
      <div>
        <H3 className="text-center">News</H3>
        <MoreStories skip={""} limit={2} homePage />
      </div>
    </Container>
  );
};

export default CaseStudies;
