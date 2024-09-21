import React from "react";
import Container from "./Container";
import { H3 } from "./Headings";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Container className="w-full flex flex-row justify-end pb-32">
      <div className="w-full md:w-7/12">
        <h3 className="font-heading text-right mb-6 text-3xl">
          For more queries, contact us
        </h3>
        <p className="text-right mb-6 w-full">
          For any other queries, information etc. Quam tincidunt ut dignissim
          tristique consequat tristique sed. Proin iaculis consectetur lacus
          luctus sed. Turpis odio augue sagittis risus sollicitudin.
        </p>
        <div className="flex flex-col md:flex-row justify-end items-center">
          <div className="w-full flex flex-row items-center justify-end md:mr-8 mb-6 md:mb-0">
            <svg
              className="w-8 mr-2"
              viewBox="0 0 45 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9453 10.336V34.3986M15.625 2.60167V14.2032V27.0939M33.5378 7.4501L34.6684 6.69238C38.2004 4.32511 39.9664 3.14149 41.3311 3.86955C42.6953 4.59762 42.6953 6.72358 42.6953 10.9756V23.9128C42.6953 25.2598 42.6953 25.9333 42.392 26.5022C42.0882 27.0711 41.5287 27.446 40.4098 28.196L33.5378 32.8017C31.4512 34.2 30.4078 34.8996 29.2318 34.8996C28.0557 34.8996 27.0124 34.2 24.9258 32.8017L20.0742 29.5501C17.9876 28.1516 16.9443 27.4524 15.7682 27.4524C14.5922 27.4524 13.5488 28.1516 11.4622 29.5501L10.3316 30.3078C6.79952 32.6751 5.0335 33.8587 3.66907 33.1307C2.30469 32.4026 2.30469 30.2766 2.30469 26.0246V13.0875C2.30469 11.7404 2.30469 11.0669 2.60826 10.498C2.91184 9.92913 3.47129 9.55419 4.59028 8.80421L11.4622 4.19856C13.5488 2.80006 14.5922 2.10083 15.7682 2.10083C16.9443 2.10083 17.9876 2.80006 20.0742 4.19856L24.9258 7.4501C27.0124 8.8486 28.0557 9.54783 29.2318 9.54783C30.4078 9.54783 31.4512 8.8486 33.5378 7.4501Z"
                stroke="#40C1AC"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>Dublin, Ireland</p>
          </div>
          <div className="w-full md:w-fit flex flex-row items-center justify-end">
            <svg
              className="w-8 mr-2"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.268 3.25415L24.3891 5.61891C19.963 9.25464 17.75 11.0725 15 11.0725C12.2499 11.0725 10.0369 9.25464 5.61076 5.61891L2.73193 3.25415"
                stroke="#40C1AC"
                strokeWidth="2"
              />
              <path
                d="M22.3608 1H7.63916C3.97246 1 1 3.44166 1 6.45361V18.5464C1 21.5583 3.97246 24 7.63916 24H22.3608C26.0275 24 29 21.5583 29 18.5464V6.45361C29 3.44166 26.0275 1 22.3608 1Z"
                stroke="#40C1AC"
                strokeWidth="2"
              />
            </svg>

            <a href="mailto:info@ecoscope.ie">info@ecoscope.ie</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
