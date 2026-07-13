import { whatWeDoData } from "@/data/WhatWeDo";
import Container from "../Layout/Container";
import { H4 } from "../Layout/Headings";

const WhatWeDo: React.FC = () => {
  return (
    <Container mb>
      <div className="grid grid-cols-1 text-center">
        {whatWeDoData.map(
          (value: { name: string; description: string }, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={`${i}-what-we-do`}
                className="border-b-2 border-secondary/50 py-10 flex flex-row gap-x-10"
              >
                <p>0{i + 1}</p>
                <div className="text-left">
                  <H4 left className="text-5xl">
                    {value.name}
                  </H4>
                  <p className="text-base text-left">{value.description}</p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default WhatWeDo;
