"use client";
import Container from "@/app/_custom_components/Layout/Container";
import { DualHeading } from "@/app/_custom_components/Headings";
import { data } from "@/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  information: ReactNode;
};

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
          src={`/_assets/service-${params["service-name"]}.png`}
          alt="Headshot of Alexandra de Valera"
          width="400"
          height="400"
          className="rounded-full h-unset"
        />
      </Container>
    </>
  );
};

export default ServicePageContent;
