import React from "react";
import { DualHeading } from "./Headings";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "./icons/MailIcon";

const MeetOurFounder = () => {
  return (
    <Container className="flex flex-col md:flex-row justify-between items-center pb-20 gap-y-10">
      <div className="flex flex-col md:w-7/12">
        <DualHeading subtitle="Behind the Company">
          Meet our Founder
        </DualHeading>
        <p className="py-10">
          Lorem ipsum dolor sit amet consectetur. Vestibulum aliquam semper id
          laoreet ultrices. Sit diam risus tempus dis amet varius. Duis eu
          pretium felis a semper et. Dignissim mauris commodo lectus ultrices
          aliquam. Dignissim sed aliquam odio aliquet molestie. Consequat in
          eget sed amet ornare nunc penatibus egestas. Blandit massa tempor
          lacus a sollicitudin malesuada mi.
          <br />
          Tristique semper amet aliquam congue posuere eget etiam etiam.
          Imperdiet curabitur molestie amet eu aliquam tristique ornare ante
          pellentesque. Ut ultrices faucibus at sed eget et quisque. Ut tellus
          vestibulum habitant curabitur. Mattis odio sagittis enim et nisi
          pharetra. Dolor amet consectetur suspendisse viverra ut sed molestie
          a. Neque scelerisque tristique facilisi sed aliquam morbi sed gravida
          maecenas. Non vitae vitae eu eget. Nullam risus tincidunt magna
          interdum nec mi. Lacinia nisl porttitor proin nunc elementum. Enim
          egestas libero ipsum et blandit in libero. Mauris enim urna in cras
          vitae. Velit ullamcorper ut quam in praesent adipiscing nec id
          integer.
          <br />
          Porttitor orci et ultrices risus neque id netus scelerisque. Amet ut
          id et iaculis ac amet eget aliquam pellentesque.
        </p>
        <div>
          <div className="primary-gradient h-0.5 w-full rounded-full my-5"></div>
          <p className="text-xl mb-3">Why not get in touch?</p>
          <div className="flex flex-row items-center gap-x-3">
            <MailIcon className="w-8 text-primary" />
            <Link href="mailto:info@ecoscope.ie">info@ecoscope.ie</Link>
          </div>
        </div>
      </div>
      <Image
        src="/_assets/headshot.png"
        alt="Headshot of Alexandra de Valera"
        width="400"
        height="400"
        className="h-fit"
      />
    </Container>
  );
};

export default MeetOurFounder;
