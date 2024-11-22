"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/_custom_components/Container";
import { DualHeading, H2 } from "@/app/_custom_components/Headings";
import { data } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import ActionBanner from "@/app/_custom_components/ActionBanner";

interface IProps {
  title: string;
  description: string;
  steps: {
    name: string;
    details: string;
  }[];
}

const Service = () => {
  const [service, setService] = useState<IProps>();
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
          <p className="pt-10">
            Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id
            laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu
            pretium felis a semper et. Dignissim mauris commodo lectus ultrices
            aliquam. Dignissim sed aliquam odio aliquet molestie. Consequat in
            eget sed amet ornare nunc penatibus egestas. Blandit massa tempor
            lacus a sollicitudin malesuada mi. Tristique semper amet aliquam
            congue posuere eget etiam etiam. Imperdiet curabitur molestie amet
            eu aliquam tristique ornare ante pellentesque. Ut ultrices faucibus
            at sed eget et quisque. Ut tellus vestibulum habitant curabitur.
            Dignissim mauris commodo lectus ultrices aliquam. Dignissim sed
            aliquam odio aliquet molestie.
            <br />
            <br />
            Consequat in eget sed amet ornare nunc penatibus egestas. Blandit
            massa tempor lacus a sollicitudin malesuada mi. Tristique semper
            amet aliquam congue posuere eget etiam etiam. Imperdiet curabitur
            molestie amet eu aliquam tristique ornare ante pellentesque.
            Consequat in eget sed amet ornare nunc penatibus egestas. Blandit
            massa tempor lacus a sollicitudin malesuada mi.
          </p>
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
            {service?.steps.map((step, i) => {
              return (
                <div
                  key={`Service steps ${i}`}
                  className="bg-white rounded-lg z-20 relative p-5 shadow-xl"
                >
                  <p className="opacity-50 text-2xl text-primary font-heading">
                    0{i + 1}
                  </p>
                  <p className="text-xl mb-5">{step.name}</p>
                  <ul>
                    <li className="list-disc ml-5 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam
                      semper id
                    </li>
                    <li className="list-disc ml-5 text-sm">
                      Lorem amet consectetur. Vestibulum aliquam semper id
                      laoreet ultrices
                    </li>
                    <li className="list-disc ml-5 text-sm">
                      Lorem ipsum dolor estibulum aliquam semper id laoreet
                      ultrices
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <ActionBanner bottomBorder />
    </>
  );
};

export default Service;
