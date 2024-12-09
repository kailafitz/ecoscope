import React from "react";
import Container from "./Container";
import { H2 } from "./Headings";
import MoreStories from "../(news)/news/_news_components/MoreStories";

const News = () => {
  return (
    <Container mb className="px-0 flex flex-col justify-center text-center">
      <div>
        <H2
          mb
          subtitle="Get insights into our company and the ever-growing industry of sustainability in business"
        >
          Explore our News
        </H2>
        <MoreStories params={{ skip: "", limit: 3, industry: "" }} />
      </div>
    </Container>
  );
};

export default News;
