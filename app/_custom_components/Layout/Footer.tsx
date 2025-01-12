import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import FacebookIcon from "../_icons/FacebookIcon";
import InstagramIcon from "../_icons/InstagramIcon";
import LinkedInIcon from "../_icons/LinkedInIcon";
import { JoinMissionModal } from "../HomePageComponents/JoinMissionModal";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-600 pt-16">
      <Container className="flex flex-col md:flex-row justify-between items-stretch md:space-x-24">
        <Link href="/draft">
          <Image
            src="/_assets/logo-white-vertical-full.png"
            alt="Ecoscope white logo"
            height={700}
            width={800}
            className="w-full max-w-xs mx-auto pb-16"
          />
          {/* <Image
            src="/_assets/logo-white-vertical-full.png"
            alt="Ecoscope white logo"
            height={650}
            width={800}
            className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-none md:w-3/12 pb-16"
          /> */}
        </Link>
        <div className="flex flex-1 flex-col justify-between pb-3">
          <div>
            <div className="flex flex-col md:flex-row w-full justify-end pb-6 space-y-3 md:space-y-0 text-white [&_a:not(:last-child)]:mr-0 md:[&_a:not(:last-child)]:mr-8">
              <Link
                href="/draft/news"
                className="transition-all hover:opacity-70 hover:transition-all text-lg md:text-base"
              >
                News
              </Link>
              <Link
                href="/draft/resources"
                className="transition-all hover:opacity-70 hover:transition-all"
              >
                Resources
              </Link>
              {/* <Link
                href="/join-the-mission"
                className="transition-all hover:opacity-70 hover:transition-all"
              >
                Join the Mission
              </Link> */}
              {/* <Link href="/terms-and-conditions" className="text-white">
                Terms and Conditions
              </Link> */}
              <JoinMissionModal />
            </div>
            <div className="bg-gradient-to-r from-foreground to-white h-0.5 w-full rounded-full"></div>
            <div className="w-full text-white flex flex-row justify-between pt-6">
              <p>Dublin, Ireland</p>
              <div className="[&_svg]:h-7 flex flex-row space-x-3 text-white">
                <Link
                  href={""}
                  className="transition-all hover:opacity-70 hover:transition-all"
                >
                  <LinkedInIcon />
                </Link>

                <Link
                  href={""}
                  className="transition-all hover:opacity-70 hover:transition-all"
                >
                  <InstagramIcon />
                </Link>

                <Link
                  href={""}
                  className="transition-all hover:opacity-70 hover:transition-all"
                >
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end opacity-65 pt-10 md:pt-0">
            <p className="text-white text-sm text-right [&_svg]:w-3.5 [&_svg]:mr-1 [&_svg]:mt-0.5 flex flex-row items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>{" "}
              copyright Ecoscope {year}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
