import ActionBanner from "@/app/_custom_components/ActionBanner";
import { H1, H4 } from "@/app/_custom_components/Headings";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { data2 } from "@/data";

const OurServices = () => {
  return (
    <>
      <Container topSectionPadding className="">
        <H1 mb>Our Services</H1>
        {data2.map((service, i) => {
          return (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${containerMb} [&_svg:nth-of-type(2)]:text-primary`}
            >
              <div>
                <H4 mb>{service.title}</H4>
                <p>{service.information}</p>
              </div>
              {service.icon}
            </div>
          );
        })}
      </Container>

      <div className={`${containerMb} bg-secondary py-20`}>
        <Container className="text-white">
          <H4 mb className="text-center">
            Looking for something else?
          </H4>
          <p>
            One of the key hallmarks of a sustainable and thriving business is
            that it is adaptable. At Ecoscope, we are specialists at scoping out
            sustainable solutions and want to engage with creative thinkers
            regardless of the industry or size. We are creative problem solvers
            here to help creative entrepreneurs and industries develop feasible
            and meaningful adaptation solutions to the climate crisis. Feel free
            to get in touch and share your story.
          </p>
        </Container>
      </div>
      <ActionBanner />
    </>
  );
};

export default OurServices;
