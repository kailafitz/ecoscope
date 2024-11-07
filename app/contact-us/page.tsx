import React from "react";
import { H1 } from "../_custom_components/Headings";
import Container from "../_custom_components/Container";
import LinkedInIcon from "../_custom_components/LinkedInIcon";
import MapIcon from "../_custom_components/MapIcon";
import EmailIcon from "../_custom_components/EmailIcon";
import InstagramIcon from "../_custom_components/InstagramIcon";
import Link from "next/link";
import MailIcon from "../_custom_components/MailIcon";
import BookingForm from "../_custom_components/BookingForm";
import FacebookIcon from "../_custom_components/FacebookIcon";

const ContactUs = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col pt-10 pb-20">
        <H1 className="mb-3">Contact Us</H1>
        <p className="text-base mb-10 w-full">
          If you're serious about getting your business certified, fill out the
          form below if you'd like to work with us. For all other queries,
          please email us or visit us on our social media pages. We always try
          to get to any queries as soon as possible!
        </p>
        <div className="relative flex flex-col sm:flex-row gap-x-10 gap-y-20 lg:gap-x-20 lg:gap-y-0">
          <div className="flex flex-col w-full sm:w-1/2 md:w-2/5 xl:w-3/12">
            <div className="bg-primary shadow-2xl p-7 md:p-10 rounded-xl text-primary-foreground">
              <div className="mb-10 sm:mb-16 lg:mb-20">
                <h6 className="text-xl md:text-2xl">Get in Touch</h6>
                <div className="primary-gradient-reverse h-px mb-5 mt-2"></div>
                <Link
                  href=""
                  className="flex flex-row items-center mb-4 text-md"
                >
                  <MapIcon className="w-6 text-inherit mr-4" />
                  Dublin, Ireland
                </Link>
                <Link
                  href="mailto:info@ecoscope.ie"
                  className="flex flex-row items-center text-md break-all"
                >
                  {/* <EmailIcon /> */}
                  <MailIcon className="w-6 text-inherit mr-4" />
                  info@ecoscope.ie
                </Link>
              </div>
              <div>
                <h6 className="text-xl md:text-2xl">Follow Us</h6>
                <div className="primary-gradient-reverse h-px mb-5 mt-2"></div>
                <Link href="" className="flex flex-row items-center mb-4">
                  <FacebookIcon className="w-6 text-inherit mr-4" />
                  Ecoscope
                </Link>
                <Link href="" className="flex flex-row items-center mb-4">
                  <LinkedInIcon className="w-6 text-inherit mr-4" />
                  Ecoscope
                </Link>
                <Link href="" className="flex flex-row items-center">
                  <InstagramIcon className="w-6 text-inherit mr-4" />
                  @ecoscope
                </Link>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
