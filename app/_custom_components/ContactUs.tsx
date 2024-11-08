import React from "react";
import Container from "./Container";
import { H3 } from "./Headings";
import MapIcon from "./icons/MapIcon";
import MailIcon from "./icons/MailIcon";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Container className="w-full flex flex-row justify-end pb-32">
      <div className="w-full md:w-7/12">
        <h3 className="font-heading text-right mb-6 text-3xl">
          For any queries, contact us
        </h3>
        <p className="text-right mb-6 w-full">
          For any other queries, information etc. Quam tincidunt ut dignissim
          tristique consequat tristique sed. Proin iaculis consectetur lacus
          luctus sed. Turpis odio augue sagittis risus sollicitudin.
        </p>
        <div className="flex flex-col md:flex-row justify-end items-center">
          <div className="w-full flex flex-row items-center justify-end md:mr-8 mb-6 md:mb-0">
            <MapIcon className="w-8 mr-2 text-primary" />

            <p>Dublin, Ireland</p>
          </div>
          <div className="w-full md:w-fit flex flex-row items-center justify-end">
            <MailIcon className="w-8 mr-2 text-primary" />

            <a href="mailto:info@ecoscope.ie">info@ecoscope.ie</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
