import EcoscopeButton from "./Button";
import Container from "./Container";
import { H1 } from "./Headings";
import LandingMontage from "./LandingMontage";

const Landing = () => {
  return (
    <>
      <LandingMontage />
      <div className="flex flex-col justify-end h-[calc(100vh_-_78.7px)] relative mb-16 md:mb-32">
        <div className="bg-curve block pt-32 -m-1">
          <Container className="pb-10">
            <div className="w-full md:w-fit">
              <div className="table">
                <H1 left className="m-0 mb-4">
                  Your Guide to <br />
                  Greener Productions <br />& Making a Positive Impact
                </H1>
                <h2 className="mb-6 md:table-caption md:caption-bottom">
                  Empowering the creative industries on their decarbonisation
                  journey in line with scientific guidance and recommendations.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-x-6 sm:space-y-0">
                <EcoscopeButton href="#services" className="w-full">
                  Our Services
                </EcoscopeButton>
                <EcoscopeButton
                  variant="outline"
                  href="contact-us"
                  className="w-full"
                >
                  Contact Us
                </EcoscopeButton>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Landing;
