import React from "react";
import Container from "./Container";
import { H2 } from "./Headings";
import MoreStories from "../(blog)/news/_blog_components/MoreStories";

const News = () => {
  return (
    <Container className="py-32 px-0 md:min-h-screen flex flex-col justify-center text-center">
      <div>
        <H2
          mb
          subtitle="Get insights into our company and the ever-growing industry of sustainabiliy in business"
        >
          Explore our News
        </H2>
        <MoreStories skip={""} limit={2} homepage />
      </div>
    </Container>
  );
};

export default News;
