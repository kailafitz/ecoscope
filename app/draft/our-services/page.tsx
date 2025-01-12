"use client";
import QuestionIcon from "@/app/_custom_components/_icons/QuestionIcon";
import ActionBanner from "@/app/_custom_components/ActionBanner";
import { H1, H4 } from "@/app/_custom_components/Headings";
import Container, {
  containerMb,
} from "@/app/_custom_components/Layout/Container";
import { data2 } from "@/data/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Fragment, useEffect } from "react";

const OurServices = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Container topSectionPadding>
        <H1>Our Services</H1>
        <div
          className={`${containerMb} sticky top-0 z-10 mx-auto flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 [&_:nth-child(6)]:hidden py-4 bg-white/70 backdrop-blur-sm`}
        >
          {data2.map((service, i) => {
            let id = service.title.toLowerCase().replace(/\s/g, "-");
            return (
              <Fragment key={i}>
                <Link
                  href={`#${id}`}
                  className="w-fit hover:text-gray-600/60 hover:transition-all transition-all"
                >
                  {service.title}
                  <div className="bg-gray-600 h-px w-full"></div>
                </Link>

                <span className="hidden sm:inline">|</span>
              </Fragment>
            );
          })}
        </div>
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
          className={`flex flex-col md:flex-row justify-between [&_:nth-child(1)]:rounded-t-md [&_:nth-child(3)]:rounded-b-md  md:[&_:nth-child(1)]:rounded-tl-md md:[&_:nth-child(1)]:rounded-bl-md md:[&_:nth-child(3)]:rounded-tr-md md:[&_:nth-child(3)]:rounded-br-md ${containerMb}`}
        >
          {[1, 2, 3].map((i) => {
            return (
              <div
                key={i}
                className={`shadow-2xl bg-[url('/_assets/our-services-${i}.png')] bg-center bg-cover h-60 md:w-1/3 saturate-0`}
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
      </Container>

      <div
        className={`${containerMb} bg-secondary py-10 md:py-20 relative overflow-hidden`}
      >
        <Container className="text-white grid md:grid-cols-2 items-center">
          <div>
            <H4 mb left>
              Looking for something else?
            </H4>
            <p className="text-xl">
              One of the key hallmarks of a sustainable and thriving business is
              that it is adaptable. At Ecoscope, we are specialists at scoping
              out sustainable solutions and want to engage with creative
              thinkers regardless of the industry or size. We are creative
              problem solvers here to help creative entrepreneurs and industries
              develop feasible and meaningful adaptation solutions to the
              climate crisis. Feel free to get in touch and share your story.
            </p>
          </div>
          {/* <QuestionIcon className="absolute text-primary w-16 rotate=[55deg] top-[70%] right-[5%]" />
          <QuestionIcon className="absolute text-primary w-24 rotate-[85deg] top-[60%] right-[20%]" />
          <QuestionIcon className="absolute text-primary w-10 rotate-12 top-1/3 right-1/4" />
          <QuestionIcon className="absolute text-primary w-16 -rotate-12 top-[60%] right-[35%]" />
          <QuestionIcon
            className="absolute text-primary w-32 rotate-[70deg] top-[15%] right-[8%]"
            strokeWidth={1}
          />
          <QuestionIcon className="absolute text-primary w-20 rotate-45 top-[10%] right-[33%]" /> */}
        </Container>
      </div>
      <ActionBanner />
    </>
  );
};

export default OurServices;
