import { Metadata } from "next";
import BookingForm from "../_custom_components/BookingForm";
import ContactDetails from "../_custom_components/ContactDetails";
import Container from "../_custom_components/Container";
import { H1, H4 } from "../_custom_components/Headings";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact Us",
    description: "Contact Us",
    // openGraph: {
    //   images: ogImage ? [ogImage, ...previousImages] : previousImages,
    // },
  } satisfies Metadata;
}

const ContactUs = () => {
  return (
    <Container mb topSectionPadding className="flex flex-col">
      <div className="flex flex-col">
        <H1 mb>Contact Us</H1>
        <div className="relative flex flex-col sm:flex-row sm:gap-x-14 gap-y-20 xl:gap-x-24 lg:gap-y-0">
          <div className="flex flex-col w-full sm:w-2/5 xl:w-3/12">
            <ContactDetails />
          </div>
          <div className="w-full flex-1">
            <H4
              mb
              subtitle="Please fill out the form below if you're interested in finding
              out more about what Ecoscope can do for your business."
            >
              Book a Consultation
            </H4>
            <BookingForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
