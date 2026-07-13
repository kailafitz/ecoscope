import Container from "../Layout/Container";
import { H2 } from "../Layout/Headings";
import EcoscopeButton from "../Layout/EcoscopeButton";

const AboutIntro: React.FC<{ about?: boolean }> = ({ about }) => {
  return (
    <>
      <Container>
        <H2 mb className="text-center">
          For Creatives, led by Creatives
        </H2>
      </Container>
      <Container mb className="w-full lg:w-4/5 pb-10 lg:pb-0 flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3 w-full md:w-2/3 text-center mx-auto">
          <p>
            One of the key hallmarks of a sustainable and thriving business is
            that it is adaptable. At Ecoscope, we are specialists at scoping out
            sustainable solutions and want to engage with like-minded
            individuals and organisations of all sizes across the creative
            industries committed to making a positive impact through their
            operations.{" "}
          </p>

          {about && (
            <p>
              We are creative problem solvers here to help creative
              entrepreneurs and industries build a sustainable future and develop
              feasible, just and meaningful mitigation and adaptation solutions to
              the climate crisis. The best antidote to climate anxiety is taking
              action and Ecoscope is here as a guide to meet you where you are on
              on your sustainability journey.
            </p>
          )}
          {!about && (
            <EcoscopeButton href="/about-us" className="w-fit mx-auto">
              Learn More
            </EcoscopeButton>
          )}
        </div>
        <div className="about-top h-80 lg:h-[600px] w-full bg-cover bg-bottom saturate-0 mx-auto"></div>
      </Container>
    </>
  );
};

export default AboutIntro;
