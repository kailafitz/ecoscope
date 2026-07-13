import ConsultationForm from "@/app/_custom_components/ContactUsPageComponents/ConsultationForm";
import ContactDetails from "@/app/_custom_components/ContactUsPageComponents/ContactDetails";
import Container from "@/app/_custom_components/Layout/Container";
import { H1, H4 } from "@/app/_custom_components/Layout/Headings";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Contact Us",
    description:
      "Get in touch with Ecoscope to book a consultation. Based in Dublin, we help creative businesses start their sustainability journey.",
    path: "/contact-us",
  });
}

const ContactUs = () => {
  return (
    <Container mb topSectionPadding className="flex flex-col">
      <div className="flex flex-col">
        <H1 mb left>
          Contact Us
        </H1>
        <div className="relative flex flex-col sm:flex-row sm:gap-x-14 gap-y-20 xl:gap-x-24 lg:gap-y-0">
          <div className="flex flex-col w-full sm:w-2/5 xl:w-3/12">
            <ContactDetails />
          </div>
          <div id="book-a-consultation" className="w-full flex-1 scroll-mt-24">
            <H4
              mb
              left
              subtitle="Please fill out the form below if you're interested in finding
              out more about what Ecoscope can do for your business."
            >
              Book a Consultation
            </H4>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
