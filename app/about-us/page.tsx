import React from "react";
import Container from "../_custom_components/Container";
import { H1 } from "../_custom_components/Headings";
import ActionBanner from "../_custom_components/ActionBanner";
import MeetOurFounder from "../_custom_components/MeetOurFounder";

const AboutUs = () => {
  return (
    <>
      <div className="about-top relative w-full mb-20">
        <div className="bg-primary top-0 left-0 absolute w-full h-full opacity-80" />
        <Container py topViewHeight className="flex flex-col justify-center">
          <div className="w-full md:w-6/12 relative z-20 text-primary-foreground">
            <H1 mb>About Us</H1>
            <p className="text-xl mb-8">
              Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam
              tincidunt ut dignissim tristique consequat tristique sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi ut eu vel libero. Quam
              tincidunt ut dignissim tristique consequat tristique sed. Proin
              iaculis consectetur lacus luctus sed. Turpis odio augue sagittis
              risus sollicitudin commodo.
              <br />
              Lorem dolor faucibus convallis lacinia nisl orci. Metus commodo
              elit ac pellentesque amet interdum eu. Ornare risus est nulla
              bibendum sed. Quam risus sapien euismod auctor aliquet amet dis
              lectus. Nulla sem egestas mauris lectus lacus tempus ut odio.
              Cursus semper quis lorem pellentesque sollicitudin lectus montes
              eget vitae. Gravida id sit bibendum phasellus. Duis in ut mauris
              cras in odio convallis. Dolor at enim odio facilisi. At morbi nunc
              leo vel dictum.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <ActionBanner />
      </Container>
      <MeetOurFounder />
    </>
  );
};

export default AboutUs;
