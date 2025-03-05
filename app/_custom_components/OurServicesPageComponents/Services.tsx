"use client";
import { serviceDescriptionsData } from "@/data/Services";
import React, { useEffect } from "react";
import { H4 } from "../Layout/Headings";
import { containerMb } from "../Layout/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {serviceDescriptionsData.map(
        (
          service: {
            title: string;
            information: JSX.Element;
            icon: JSX.Element;
          },
          i: number
        ) => {
          let id = service.title.toLowerCase().replace(/\s/g, "-");
          return (
            <div key={i} id={id}>
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`grid grid-cols-1 md:grid-cols-3 md:gap-10 [&_svg]:text-primary [&:nth-child(2)_svg]:rotate-45 [&:nth-child(4)_svg]:rotate-12 ${containerMb} pt-20 -mt-20`}
              >
                <div>
                  <H4 left>{service.title}</H4>
                  <div className="bg-gradient-to-r from-primary to-white h-0.5 w-full rounded-full my-3"></div>
                </div>
                <div className="relative z-10 col-span-2">
                  <p>{service.information}</p>
                  <div className="about-top bg-bottom"></div>
                </div>
              </div>
            </div>
          );
        }
      )}
      <div
        data-aos="fade-up"
        className={`flex flex-col md:flex-row justify-between shadow-2xl [&_:nth-child(1)]:rounded-t-md [&_:nth-child(3)]:rounded-b-md md:[&_:nth-child(1)]:rounded-tl-md md:[&_:nth-child(1)]:rounded-tr-none md:[&_:nth-child(1)]:rounded-bl-md md:[&_:nth-child(3)]:rounded-tr-md md:[&_:nth-child(3)]:rounded-br-md md:[&_:nth-child(3)]:rounded-bl-none ${containerMb}`}
      >
        <div
          className={`bg-[url('/_assets/ourServices/our-services-1.png')] bg-center bg-cover h-60 md:w-1/3 saturate-0`}
        ></div>
        <div
          className={`bg-[url('/_assets/ourServices/our-services-2.png')] bg-center bg-cover h-60 md:w-1/3 saturate-0 -ml-px`}
        ></div>
        <div
          className={`bg-[url('/_assets/ourServices/our-services-3.png')] bg-center bg-cover h-60 md:w-1/3 saturate-0 -ml-px`}
        ></div>
        {/* Photo by Ron Lach :
          https://www.pexels.com/photo/happy-woman-doing-an-environmental-cleanup-9543745/ */}
        {/* Photo by{" "}
          <a href="https://unsplash.com/@jakobowens1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jakob Owens
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/a-group-of-people-standing-around-a-camera-set-up-ntqaFfrDdEA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a> */}
        {/* Photo by{" "}
          <a href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Annie Spratt
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/sittin-people-beside-table-inside-room-hCb3lIB8L8E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a> */}
      </div>
    </>
  );
};

export default Services;
