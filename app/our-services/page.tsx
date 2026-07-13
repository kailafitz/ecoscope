import ActionBanner from "@/app/_custom_components/ActionBanner";
import { H1 } from "@/app/_custom_components/Layout/Headings";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { serviceDescriptionsData } from "@/data/Services";

import OtherServices from "@/app/_custom_components/OurServicesPageComponents/OtherServices";
import Services from "@/app/_custom_components/OurServicesPageComponents/Services";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Fragment } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Our Services",
    description:
      "Explore Ecoscope's sustainability services — carbon reporting, certification support, ESG strategy, and tailored consulting for creative businesses.",
    path: "/our-services",
  });
}

const OurServices = () => {
  return (
    <>
      <Container topSectionPadding>
        <H1 mb>Our Services</H1>
        <div
          className={`${containerMb} md:sticky top-0 z-10 mx-auto flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 [&_:nth-child(6)]:hidden py-4 bg-white/70 backdrop-blur-sm`}
        >
          {serviceDescriptionsData.map(
            (
              service: {
                title: string;
                information: JSX.Element;
                icon: JSX.Element;
              },
              i: number
            ) => {
              let id = service.title.toLowerCase().replace(/\s/g, "-");
              return (
                <Fragment key={i}>
                  <Link
                    href={`#${id}`}
                    className="w-fit hover:text-gray-600/60 hover:transition-all transition-all text-xl underline-none"
                  >
                    {service.title}
                  </Link>
                  <span className="hidden sm:inline">|</span>
                </Fragment>
              );
            }
          )}
        </div>
        <Services />
      </Container>
      <OtherServices />
      {/* <ActionBanner /> */}
    </>
  );
};

export default OurServices;
