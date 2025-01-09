import BookingForm from "./BookingForm";
import Container from "./Container";
import { H2, H3 } from "./Headings";
import LogoIcon from "./icons/LogoIcon";
import MailIcon from "./icons/MailIcon";
import MapIcon from "./icons/MapIcon";

const ContactUs = () => {
  return (
    <div className="relative overflow-hidden">
      <LogoIcon className="absolute top-1/3 -left-[150%] sm:-left-[80%] h-[60%] opacity-10 md:top-60 md:-left-1/2 md:h-auto -z-0 text-primary md:opacity-30 md:w-full" />
      <Container mb className="text-center relative z-10">
        <H2
          mb
          subtitle="If you're interested in certifying your business today, fill out the
          form below and our team will get back to you as soon as possible!"
        >
          Book a Consultation
        </H2>
        <div className="w-full lg:w-4/5 mx-auto rounded-md shadow-2xl py-10 px-5 lg:p-10 backdrop-blur-sm">
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
            <div className="w-full flex flex-row items-center justify-end md:mr-8 mb-3 md:mb-0">
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
    </div>
  );
};

export default ContactUs;
