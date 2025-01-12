"use client";
import { data2 } from "@/data/Services";
import React, { useEffect } from "react";
import { H4 } from "../Headings";
import { containerMb } from "../Layout/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {data2.map((service, i) => {
        let id = service.title.toLowerCase().replace(/\s/g, "-");
        return (
          <div
            key={i}
            id={id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`grid grid-cols-1 md:grid-cols-3 md:gap-10 [&_svg]:text-primary [&:nth-child(2)_svg]:rotate-45 [&:nth-child(4)_svg]:rotate-12 ${containerMb}`}
          >
            <div>
              <H4 left>{service.title}</H4>
              <div className="bg-gradient-to-r from-primary to-white h-0.5 w-full rounded-full my-3"></div>
            </div>
            <div className="relative z-10 col-span-2">
              <p>{service.information}</p>
              <div className="about-top bg-bottom"></div>
            </div>

            {/* {service.icon} */}
          </div>
        );
      })}
      <div
        data-aos="fade-up"
        className={`flex flex-col md:flex-row justify-between shadow-2xl [&_:nth-child(1)]:rounded-t-md [&_:nth-child(3)]:rounded-b-md md:[&_:nth-child(1)]:rounded-tl-md md:[&_:nth-child(1)]:rounded-bl-md md:[&_:nth-child(3)]:rounded-tr-md md:[&_:nth-child(3)]:rounded-br-md ${containerMb}`}
      >
        {[1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              className={`bg-[url('/_assets/our-services-${i}')] bg-center bg-cover h-60 md:w-1/3 saturate-0`}
            ></div>
          );
        })}
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
