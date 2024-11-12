import React from "react";
import { H1 } from "../_custom_components/Headings";
import Container from "../_custom_components/Container";
import BookingForm from "../_custom_components/BookingForm";
import ContactDetails from "../_custom_components/ContactDetails";

const ContactUs = () => {
  return (
    <Container className="flex flex-col">
      <div className="flex flex-col pt-10 pb-20">
        <H1 className="mb-3">Contact Us</H1>
        <p className="text-base mb-10 w-full">
          If you&#39;re serious about getting your business certified, fill out
          the form below if you&#39;d like to work with us. For all other
          queries, please email us or visit us on our social media pages. We
          always try to get back to your queries as soon as possible!
        </p>
        <div className="relative flex flex-col sm:flex-row gap-x-10 gap-y-20 lg:gap-x-20 lg:gap-y-0">
          <div className="flex flex-col w-full sm:w-1/2 md:w-2/5 xl:w-3/12">
            <ContactDetails />
          </div>
          <div>
            <BookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
