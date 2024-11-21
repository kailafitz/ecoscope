import React from "react";
import Container from "./Container";
import { H2, H3 } from "./Headings";
import MapIcon from "./icons/MapIcon";
import MailIcon from "./icons/MailIcon";
import BookingForm from "./BookingForm";

const ContactUs = () => {
  return (
    <>
      <Container mb className="text-center">
        <H2
          mb
          subtitle="If you're interested in certifying your business today, fill out the
          form below and our team will get back to you as soon as possible!"
        >
          Book a Consultation
        </H2>
        <div className="w-full lg:w-4/5 mx-auto rounded-md shadow-2xl p-10">
          <BookingForm homepage />
        </div>
      </Container>
      <Container mb className="w-full flex flex-row justify-end">
        <div className="w-full md:w-7/12">
          <H3 mb className="text-right">
            For any queries, contact us
          </H3>
          <p className="text-right mb-6 w-full">
            For any other queries, information etc. Quam tincidunt ut dignissim
            tristique consequat tristique sed. Proin iaculis consectetur lacus
            luctus sed. Turpis odio augue sagittis risus sollicitudin.
          </p>
          <div className="flex flex-col md:flex-row justify-end items-center">
            <div className="w-full flex flex-row items-center justify-end md:mr-8 mb-6 md:mb-0">
              <MapIcon className="w-7 mr-2 text-primary" />

              <p>Dublin, Ireland</p>
            </div>
            <div className="w-full md:w-fit">
              <a
                className=" flex flex-row items-center justify-end"
                href="mailto:info@ecoscope.ie"
              >
                <MailIcon className="w-8 mr-2 text-primary" />
                info@ecoscope.ie
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
