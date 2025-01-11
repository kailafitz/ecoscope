import ActionBanner from "@/app/_custom_components/ActionBanner";
import { H1, H4 } from "@/app/_custom_components/Headings";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { data2 } from "@/data/Services";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <Container topSectionPadding>
        <H1 mb>Our Services</H1>
        <div className={`${containerMb} mx-auto flex justify-center space-x-3`}>
          <Link href="#film-and-television">
            Film and Television
            <div className="bg-gray-600 h-px w-full"></div>
          </Link>
          <span>|</span>
          <Link href="#advertising">
            Advertising
            <div className="bg-gray-600 h-px w-full"></div>
          </Link>
          <span>|</span>
          <Link href="#hospitality">
            Hospitality
            <div className="bg-gray-600 h-px w-full"></div>
          </Link>
        </div>
        {data2.map((service, i) => {
          let id = service.title.toLowerCase().replace(/\s/g, "-");
          return (
            <div
              key={i}
              id={id}
              className={`grid grid-cols-1 md:grid-cols-3 gap-10 [&_svg]:text-primary [&:nth-child(2)_svg]:rotate-45 [&:nth-child(4)_svg]:rotate-12 ${containerMb}`}
            >
              <div>
                <H4>{service.title}</H4>
                <div className="primary-gradient h-0.5 w-full rounded-full my-3"></div>
              </div>
              <div className="relative z-10 col-span-2">
                <p>{service.information}</p>
                <div className="about-top bg-bottom"></div>
              </div>

              {/* {service.icon} */}
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
