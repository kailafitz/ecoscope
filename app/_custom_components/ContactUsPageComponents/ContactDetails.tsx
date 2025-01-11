import Link from "next/link";
import FacebookIcon from "../_icons/FacebookIcon";
import InstagramIcon from "../_icons/InstagramIcon";
import LinkedInIcon from "../_icons/LinkedInIcon";
import MailIcon from "../_icons/MailIcon";
import MapIcon from "../_icons/MapIcon";

const ContactDetails = () => {
  return (
    <div className="bg-primary shadow-2xl p-7 md:p-10 rounded-xl text-primary-foreground">
      <div className="mb-10 sm:mb-16 lg:mb-20">
        <h6 className="text-xl md:text-2xl">Get in Touch</h6>
        <div className="primary-gradient-reverse h-px mb-5 mt-2"></div>
        <Link href="" className="flex flex-row items-center mb-4 text-md">
          <MapIcon className="w-5 text-inherit mr-4 ml-0.5" />
          Dublin, Ireland
        </Link>
        <Link
          href="mailto:info@ecoscope.ie"
          className="flex flex-row items-center text-md break-all"
        >
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
  );
};

export default ContactDetails;
