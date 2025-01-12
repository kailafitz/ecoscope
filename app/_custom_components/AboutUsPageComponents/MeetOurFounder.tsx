import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import { H2, H4 } from "../Headings";
import MailIcon from "../_icons/MailIcon";

const MeetOurFounder = () => {
  return (
    <div className="bg-primary/20 pt-16 md:pt-32 relative">
      {/* <div className="hidden lg:block absolute -z-0 bg-primary h-1/2 w-1/3 right-0 top-0 rounded-bl-full"></div> */}
      <Container mb>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-14 xl:gap-x-0 gap-y-10 mb-10 items-center">
          <div className="lg:col-span-3">
            <H2 mb>The Mind Behind the Mission</H2>
            <H4 left className="mb-5">
              Alexandra de Valera |{" "}
              <span className="font-bold">
                Director of Ecoscope Ltd., Sustainability Strategist & Impact
                Producer
              </span>
            </H4>
            <p>
              Alexandra de Valera, bringing over a decade of experience leading
              transformative projects, founded Ecoscope Ltd. in 2022 to address
              and provide meaningful and resilient solutions to critical
              challenges the creative industries face amidst the climate crisis.
              <br />
              <br />
              Known for her dynamic leadership and collaborative approach,
              Alexandra has spearheaded initiatives that bridge science,
              business, policy, and community development and engagement. Under
              her guidance and visionary approach, Ecoscope has become a
              recognised leader in empowering communities, fostering
              cross-sector partnerships, and implementing data-driven strategies
              and has earned her recognition as a driving force for meaningful
              environmental change in the creative industries. Passionate about
              research and innovation, Alex streamlines work processes to
              achieve positive impacts on and off-screen. Holding advisory roles
              and participating in industry events, Alexandra is committed to
              advancing sustainability in the creative industries and has
              recently been engaged as the Global Production Network’s
              Sustainability Consultant.
              <br />
              <br />
              An advocate for equitable environmental practices, Alexandra’s
              work reflects her unwavering dedication to combining technical
              expertise with a deep commitment to social and environmental
              justice. Her work continues to inspire action and drive meaningful
              change in the pursuit of building a sustainable future for all.
            </p>
          </div>
          <Image
            src="/_assets/headshots/headshot-2.jpg"
            alt="Headshot of Alexandra de Valera"
            width="400"
            height="400"
            className="saturate-0 justify-self-center lg:justify-self-end lg:col-span-2 rounded-full z-10 lg:w-96 xl:h-auto"
          />
        </div>

        <div>
          <div className="bg-gradient-to-r from-primary to-primary/20 h-0.5 w-full rounded-full mb-10"></div>
          <p className="text-xl mb-3">Why not get in touch?</p>
          <div className="flex flex-row items-center gap-x-3">
            <MailIcon className="w-8 text-primary" />
            <Link href="mailto:info@ecoscope.ie">info@ecoscope.ie</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetOurFounder;
