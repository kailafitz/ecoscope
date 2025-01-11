"use client";
import { motion } from "motion/react";
import Container from "../Layout/Container";
import { H2 } from "../Headings";

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
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-7 gap-y-9 xl:gap-y-0">
        {steps.map((service, i) => {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, translateX: 500 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 500 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="p-5 font-heading flex flex-col"
            >
              <div className="text-primary text-6xl mx-auto mb-6">0{i + 1}</div>
              <div className="text-2xl flex-1 flex flex-col justify-center">
                {service}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default HowWeWork;
