import React from "react";
import { H2 } from "./Headings";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "./icons/MailIcon";

const MeetOurFounder = () => {
  return (
    <div className="bg-[#40c1ab1c] pt-16 md:pt-32 relative">
      {/* <div className="hidden lg:block absolute -z-0 bg-primary h-1/2 w-1/3 right-0 top-0 rounded-bl-full"></div> */}
      <Container mb>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-14 xl:gap-x-0 gap-y-10 mb-10 items-center">
          <div className="lg:col-span-3">
            <H2 mb>The Mind Behind the Mission</H2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper
              id laoreet ultrices. Sit diam risus tempus dis amet varius. Duis
              eu pretium felis a semper et. Dignissim mauris commodo lectus
              ultrices aliquam. Dignissim sed aliquam odio aliquet molestie.
              Consequat in eget sed amet ornare nunc penatibus egestas. Blandit
              massa tempor lacus a sollicitudin malesuada mi.
              <br />
              Tristique semper amet aliquam congue posuere eget etiam etiam.
              Imperdiet curabitur molestie amet eu aliquam tristique ornare ante
              pellentesque. Ut ultrices faucibus at sed eget et quisque. Ut
              tellus vestibulum habitant curabitur. Mattis odio sagittis enim et
              nisi pharetra. Dolor amet consectetur suspendisse viverra ut sed
              molestie a.
              <br />
              Porttitor orci et ultrices risus neque id netus scelerisque. Amet
              ut id et iaculis ac amet eget aliquam pellentesque.
            </p>
          </div>
          <Image
            src="/_assets/headshot.png"
            alt="Headshot of Alexandra de Valera"
            width="400"
            height="400"
            className="justify-self-center lg:justify-self-end lg:col-span-2 rounded-full z-10 lg:w-96 xl:h-auto"
          />
        </div>

        <div>
          <div className="primary-gradient h-0.5 w-full rounded-full mb-10"></div>
          <p className="text-xl mb-3">Why not get in touch?</p>
          <div className="flex flex-row items-center gap-x-3">
            <MailIcon className="w-8 text-primary" />
            <Link href="mailto:info@ecoscope.ie">info@ecoscope.ie</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetOurFounder;
