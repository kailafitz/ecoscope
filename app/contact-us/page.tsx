import React from "react";
import { H1 } from "../_custom_components/Headings";
import Container from "../_custom_components/Container";
import LinkedInIcon from "../_custom_components/LinkedInIcon";
import MapIcon from "../_custom_components/MapIcon";
import EmailIcon from "../_custom_components/EmailIcon";
import InstagramIcon from "../_custom_components/InstagramIcon";
import Link from "next/link";
import MailIcon from "../_custom_components/MailIcon";

const ContactUs = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col pt-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-y-20 lg:gap-x-10 lg:gap-y-0">
          <div className="flex flex-col w-full lg:w-1/3 bg-primary shadow-2xl p-7 md:p-10 rounded-xl text-primary-foreground">
            <H1 className="mb-10 md:mb-20">Contact Us</H1>
            <div className="mb-5 md:mb-20">
              <h6 className="text-2xl md:text-3xl">Get in Touch</h6>
              <div className="primary-gradient-reverse h-px mb-5 mt-2"></div>
              <Link
                href=""
                className="flex flex-row items-center [&_svg]:w-8 [&_svg]:text-inherit [&_svg]:mr-4 mb-3 text-md md:text-xl"
              >
                <MapIcon />
                Dublin, Ireland
              </Link>
              <Link
                href="mailto:info@ecoscope.ie"
                className="flex flex-row items-center [&_svg]:w-8 [&_svg]:text-inherit [&_svg]:mr-4 text-md md:text-xl break-all"
              >
                {/* <EmailIcon /> */}
                <MailIcon />
                info@ecoscope.ie
              </Link>
            </div>
            <div>
              <h6 className="text-2xl md:text-3xl">Follow Us</h6>
              <div className="primary-gradient-reverse h-px mb-5 mt-2"></div>
              <Link
                href=""
                className="flex flex-row items-center [&_svg]:w-7 [&_svg]:text-inherit [&_svg]:mr-4 mb-3 text-md md:text-xl"
              >
                <LinkedInIcon />
                Ecoscope
              </Link>
              <Link
                href=""
                className="flex flex-row items-center [&_svg]:w-8 [&_svg]:text-inherit [&_svg]:mr-4 text-md md:text-xl"
              >
                <InstagramIcon />
                @ecoscope
              </Link>
            </div>
          </div>
          {/* <div className="min-h-fit relative md:w-3/4"> */}
          <iframe
            id="book-a-consultation"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3I9y0PE6xsbT-FHTUoVAdqD3NYlvN1fRBHrNwFNvTTKwM0Tnd9qMwJQbNq3Amb-Y713xf5ZW1t?gv=true"
            style={{ border: 0 }}
            width="100%"
            className="w-full lg:w-3/4 google-meet-iframe"
          ></iframe>
          {/* </div> */}
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
