import React from "react";
import Container from "./Container";
import { H2 } from "./Headings";
import MoreStories from "../(news)/news/_news_components/MoreStories";
import EcoscopeButton from "./Button";

const News = () => {
  return (
    <div className="bg-[#40c1ab1c] pt-16 md:pt-32 mb-16 md:mb-32">
      <Container mb className="px-0 flex flex-col justify-center text-center">
        <H2
          mb
          subtitle="Get insights into our company and the ever-growing industry of sustainability in business"
        >
          Explore our News
        </H2>
        <MoreStories params={{ skip: "", limit: 3, industry: "" }} />
      </Container>
    </div>
  );
};

export default News;
