import React from "react";
import Container from "./Container";
import { H3 } from "./Headings";
import MoreStories from "../(blog)/news/_blog_components/MoreStories";

const News = () => {
  return (
    <Container className="py-32 px-0 md:min-h-screen flex flex-col justify-center">
      <div>
        <H3 className="text-center">Explore our News and Reports</H3>
        <MoreStories skip={""} limit={2} homepage />
      </div>
    </Container>
  );
};

export default News;
