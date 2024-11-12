import React from "react";
import { H1, H3, H4 } from "../_custom_components/Headings";
import Container from "../_custom_components/Container";
import BookingForm from "../_custom_components/BookingForm";
import ContactDetails from "../_custom_components/ContactDetails";

const ContactUs = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col pt-10 pb-20">
        <H1 mb>Contact Us</H1>
        <div className="relative flex flex-col sm:flex-row gap-x-10 gap-y-20 lg:gap-x-24 lg:gap-y-0">
          <div className="flex flex-col w-full sm:w-1/2 md:w-2/5 xl:w-3/12">
            <ContactDetails />
          </div>
          <div className="w-full flex-1">
            <H4>Book a Consultation</H4>
            <p className="mb-5">
              Please fill out the form below if you&#39;re interested in finding
              out more about what Ecoscope can do for yoru business
            </p>
            <BookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
