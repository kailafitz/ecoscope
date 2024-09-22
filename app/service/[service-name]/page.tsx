"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/_custom_components/Container";
import { DualHeading } from "@/app/_custom_components/Headings";
import { data } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import ActionBanner from "@/app/_custom_components/ActionBanner";

// type Steps = {
//   name: string;
//   details: string;
// };

// type Props = {
//   title: string;
//   description: string;
//   steps: Steps[];
// };

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
    // console.log(key);
  });

  return (
    <>
      <Container className="flex flex-col md:flex-row items-center justify-between py-20 gap-y-10">
        <div className="flex flex-col md:w-7/12">
          <DualHeading subtitle={service?.title}>Services</DualHeading>
          <p className="py-10">
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
          className="h-fit"
        />
      </Container>
      <div className="relative w-full">
        <div className="bg-landscape absolute top-0 left-0 w-full h-full lg:h-1/2"></div>
        <Container className="pb-20 pt-10 lg:pb-20">
          <h1 className={`font-heading text-xl mb-0 relative z-20`}>
            The Process
          </h1>
          <p className="text-3xl md:text-5xl text-white font-heading opacity-60 relative z-20 mb-20">
            How It Works
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {service?.steps.map((step, i) => {
              return (
                <div
                  key={`Service steps ${i}`}
                  className="bg-white rounded-lg z-20 relative p-5 shadow-xl"
                >
                  <p className="opacity-50 text-2xl font-heading">0{i + 1}</p>
                  <p className="text-xl mb-5">{step.name}</p>
                  <ul>
                    <li className="list-disc ml-5">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam
                      semper id
                    </li>
                    <li className="list-disc ml-5">
                      Lorem amet consectetur. Vestibulum aliquam semper id
                      laoreet ultrices
                    </li>
                    <li className="list-disc ml-5">
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
      <Container>
        <ActionBanner />
      </Container>
    </>
  );
};

export default Service;
