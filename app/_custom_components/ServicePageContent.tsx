"use client";
import { useParams } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import Container from "@/app/_custom_components/Container";
import { DualHeading } from "@/app/_custom_components/Headings";
import Image from "next/image";
import { data } from "@/data";

type Props = {
  title: string;
  information: ReactNode;
};

const steps = [
  "Scope Out",
  "Strategise",
  "Engage, Implement & Track",
  "Report",
];

const ServicePageContent = () => {
  const [service, setService] = useState<Props>();
  const params = useParams();

  useEffect(() => {
    let key: string = params["service-name"][0];
    setService(data[key as keyof typeof data]);
  });

  return (
    <>
      <Container
        mb
        topSectionPadding
        className="flex flex-col lg:flex-row items-center justify-between gap-x-16 gap-y-10"
      >
        <div className="flex flex-col lg:w-7/12">
          <DualHeading subtitle={service?.title}>Services</DualHeading>
          <p className="pt-10">{service?.information}</p>
        </div>
        <Image
          src="/_assets/service.png"
          alt="Headshot of Alexandra de Valera"
          width="400"
          height="400"
          className="rounded-full h-unset"
        />
      </Container>
      <div className="relative w-full mb-16 md:mb-32 lg:mb-0">
        <div className="bg-landscape absolute top-0 left-0 w-full h-full lg:h-1/2"></div>
        <Container mb className="pt-20">
          {/* <H2 className="z-20">How We Work</H2> */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => {
              return (
                <div
                  key={`Service steps ${i}`}
                  className="bg-white rounded-lg z-20 relative p-5 shadow-xl"
                >
                  <p className="opacity-50 text-2xl text-primary font-heading">
                    0{i + 1}
                  </p>
                  <p className="text-xl mb-5">{step}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServicePageContent;
