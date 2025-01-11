import MoreStories from "../../draft/(news)/news/_news_components/MoreStories";
import Container, { containerMb } from "../Layout/Container";
import { H2 } from "../Headings";
import EcoscopeButton from "../Button";

const News = () => {
  return (
    <div className={`bg-secondary pt-16 md:pt-32 ${containerMb} text-white`}>
      <Container mb className="px-0 flex flex-col justify-center text-center">
        <H2
          mb
          subtitle="Get insights into our company and the ever-growing industry of sustainability in business"
        >
          Stay Tuned In and Explore our Latest News
        </H2>
        <EcoscopeButton className="w-fit mx-auto" href={"/news"}>
          News
        </EcoscopeButton>
        {/* <MoreStories params={{ skip: "", limit: 3, industry: "" }} /> */}
      </Container>
    </div>
  );
};

export default News;
