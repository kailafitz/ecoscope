import React, { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EcoscopeButton from "./Button";

type ServiceProps = {
  icon?: ReactNode;
  name?: string;
  description?: string;
  href?: string;
};

const ServiceCard = (props: ServiceProps) => {
  return (
    <Card className="max-w-full mx-auto sm:w-[340px] flex flex-col justify-between">
      <CardHeader className="text-center [&_svg]:block [&_svg]:mx-auto [&_svg]:w-28 [&_svg]:h-28 [&_svg]:mb-7">
        {props.icon}
        <CardTitle className="mb-4">{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <div className="space-y-2.5 pb-6 pl-6 pr-6">
        {props.href && (
          <CardFooter>
            <EcoscopeButton full href={props.href ? props.href : " "}>
              Read more
            </EcoscopeButton>
          </CardFooter>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;
