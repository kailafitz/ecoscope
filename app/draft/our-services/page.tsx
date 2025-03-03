import ActionBanner from "@/app/_custom_components/ActionBanner";
import { H1 } from "@/app/_custom_components/Headings";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { data2 } from "@/data/Services";

import OtherServices from "@/app/_custom_components/OurServicesPageComponent/OtherServices";
import Services from "@/app/_custom_components/OurServicesPageComponent/Services";
import { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Services",
    description: "Our Services",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const OurServices = () => {
  return (
    <>
      <Container topSectionPadding>
        <H1 mb>Our Services</H1>
        <div
          className={`${containerMb} sticky top-0 z-10 mx-auto flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 [&_:nth-child(6)]:hidden py-4 bg-white/70 backdrop-blur-sm`}
        >
          {data2.map((service, i) => {
            let id = service.title.toLowerCase().replace(/\s/g, "-");
            return (
              <Fragment key={i}>
                <Link
                  href={`#${id}`}
                  className="w-fit hover:text-gray-600/60 hover:transition-all transition-all"
                >
                  {service.title}
                  <div className="bg-gray-600 h-px w-full"></div>
                </Link>

                <span className="hidden sm:inline">|</span>
              </Fragment>
            );
          })}
        </div>
        <Services />
      </Container>
      <OtherServices />
      {/* <ActionBanner /> */}
    </>
  );
};

export default OurServices;
