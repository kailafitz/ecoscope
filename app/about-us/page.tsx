import React from "react";
import Container from "../_custom_components/Container";
import { H2 } from "../_custom_components/Headings";
import ActionBanner from "../_custom_components/ActionBanner";
import MeetOurFounder from "../_custom_components/MeetOurFounder";
import WhatWeDo from "../_custom_components/WhatWeDo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us",
    description: "About Us",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const AboutUs = () => {
  return (
    <>
      <div className="about-top relative w-full py-16 lg:py-0 mb-16 md:mb-32">
        <div className="bg-primary top-0 left-0 absolute w-full h-full opacity-80" />
        <svg
          className="absolute w-full bottom-0 right-0 -m-px z-20"
          viewBox="0 0 1827 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 77V0C0 0 168.5 35.9142 411 44.9646C653.5 54.0149 778 35.7705 987.5 24.4216C1197 13.0728 1288.5 28.1567 1447.5 30.8862C1606.5 33.6157 1827 9.05037 1827 9.05037V77H0Z"
            fill="white"
          />
        </svg>

        <Container topViewHeight className="flex flex-col justify-center">
          <div className="w-full md:w-8/12 xl:w-6/12 relative z-20 text-primary-foreground">
            <H2 mb>About Us</H2>
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
      <WhatWeDo />
      <ActionBanner bottomBorder />
      <MeetOurFounder />
    </>
  );
};

export default AboutUs;
