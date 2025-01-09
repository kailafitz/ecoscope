import React from "react";
import Container from "./Container";
import { H2 } from "./Headings";
import { Card } from "@/components/ui/card";

const steps = [
  "Scope Out",
  "Strategise",
  "Engage, Implement and Track",
  "Report",
];

const HowWeWork = () => {
  return (
    <Container id="how-we-work" mb className="text-center">
      <H2 mb>How We Work</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-9 xl:gap-y-0">
        {/* <Card className="p-5 font-heading">
          <span className="text-primary text-5xl">01</span>
          <span className="text-2xl">{steps[0]}</span>
        </Card>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Card className="p-5 font-heading">
          <span className="text-primary text-5xl mx-auto">02</span>
          <span className="text-2xl">{steps[1]}</span>
        </Card>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Card className="p-5 font-heading">
          <span className="text-primary text-5xl mx-auto col-span-2">03</span>
          <span className="text-2xl">{steps[2]}</span>
        </Card>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Card className="p-5 font-heading">
          <span className="text-primary text-5xl mx-auto">04</span>
          <span className="text-2xl">{steps[3]}</span>
        </Card> */}
        {steps.map((service, i) => {
          return (
            <div key={i} className="p-5 font-heading flex flex-col">
              <div className="text-primary text-6xl mx-auto mb-6">0{i + 1}</div>
              <div className="text-2xl flex-1 flex flex-col justify-center">
                {service}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HowWeWork;
