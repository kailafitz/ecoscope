import React, { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EcoscopeButton from "./Button";
import Container from "./Container";
type ServiceProps = {
  icon?: ReactNode;
  name?: string;
  description?: string;
  href?: string;
};

const ServiceCard = (props: ServiceProps) => {
  return (
    <Card className="service-card">
      <CardHeader className="text-center">
        {props.icon}
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <EcoscopeButton full href={props.href ? props.href : " "}>
          Read more
        </EcoscopeButton>
      </CardFooter>
    </Card>
  );
};

const services_data = [
  {
    icon: (
      <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_53_397)">
          <path
            d="M35.2857 17.1772C34.2219 16.7348 33.0564 16.963 32.2409 17.7754L30.6745 19.334C30.1319 16.8427 28.2464 14.8478 25.8183 14.1463C27.9088 12.7665 29.2917 10.3955 29.2917 7.70833C29.2917 3.45796 25.8337 0 21.5833 0C18.5355 0 15.8961 1.77754 14.6458 4.35058C13.3955 1.77754 10.7562 0 7.70833 0C3.45796 0 0 3.45796 0 7.70833C0 10.6406 1.6465 13.1967 4.06383 14.4994C1.66808 15.594 0 18.0128 0 20.8125V30.0625C0 33.8874 3.11263 37 6.9375 37H23.8958C27.2135 37 29.9947 34.6597 30.6745 31.5425L32.2409 33.1011C32.782 33.6392 33.4773 33.9213 34.1942 33.9213C34.558 33.9213 34.928 33.8488 35.2857 33.6993C36.3432 33.2599 37 32.2779 37 31.134V19.741C37 18.5987 36.3432 17.6166 35.2857 17.1757V17.1772ZM21.5833 1.54167C24.9842 1.54167 27.75 4.30742 27.75 7.70833C27.75 11.1092 24.9842 13.875 21.5833 13.875C18.1824 13.875 15.4167 11.1092 15.4167 7.70833C15.4167 4.30742 18.1824 1.54167 21.5833 1.54167ZM16.963 13.875H12.3272C13.3061 13.1396 14.1047 12.1776 14.6443 11.0661C15.1839 12.1776 15.9825 13.1396 16.9614 13.875H16.963ZM1.54167 7.70833C1.54167 4.30742 4.30742 1.54167 7.70833 1.54167C11.1092 1.54167 13.875 4.30742 13.875 7.70833C13.875 11.1092 11.1092 13.875 7.70833 13.875C4.30742 13.875 1.54167 11.1092 1.54167 7.70833ZM29.2917 30.0625C29.2917 33.0379 26.8712 35.4583 23.8958 35.4583H6.9375C3.96208 35.4583 1.54167 33.0379 1.54167 30.0625V20.8125C1.54167 17.8371 3.96208 15.4167 6.9375 15.4167H23.8958C26.8712 15.4167 29.2917 17.8371 29.2917 20.8125V30.0625ZM35.4583 31.134C35.4583 31.6489 35.1716 32.0759 34.6937 32.2748C34.208 32.4737 33.6977 32.375 33.3277 32.0065L30.8333 29.526V21.349L33.3277 18.8685C33.6977 18.4985 34.208 18.3982 34.6937 18.6002C35.1731 18.7991 35.4583 19.2261 35.4583 19.741V31.134Z"
            fill="#40C1AC"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_397">
            <rect width="37" height="37" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Film and Television",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing neque suspendisse arcu ullamcorper aliquet vitae ut viverra.",
  },
  {
    icon: (
      <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.98749 28.3565C1.63916 27.7531 1.46497 27.4514 1.35532 27.1775C0.674956 25.4781 1.19602 23.5336 2.63493 22.402C2.86683 22.2196 3.16852 22.0454 3.77186 21.6971L9.01844 18.668L13.8934 27.1117L8.64686 30.1408C8.04352 30.4892 7.74183 30.6634 7.46797 30.773C5.76851 31.4534 3.82398 30.9323 2.69238 29.4934C2.51002 29.2615 2.33583 28.9598 1.98749 28.3565Z"
          stroke="#40C1AC"
          strokeWidth="1.5"
        />
        <path
          d="M17.4032 36.787C16.555 37.2768 15.4705 36.9861 14.9808 36.1383L10.8005 28.8975L13.8719 27.1242L18.0522 34.3649C18.5419 35.2131 18.2513 36.2976 17.4032 36.787ZM8.96362 18.508L15.6841 9.45068C19.7991 3.90484 21.8566 1.13194 24.5516 1.17556C24.6958 1.17788 24.8398 1.18617 24.9834 1.20034C27.6656 1.46562 29.392 4.4559 32.845 10.4364C36.187 16.2251 37.858 19.1193 36.8084 21.5431C36.7522 21.6732 36.6907 21.8009 36.6239 21.926C35.3819 24.2569 32.0768 24.7529 25.4667 25.7448L14.0901 27.4521L8.96362 18.508Z"
          stroke="#40C1AC"
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Advertising",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing neque suspendisse arcu ullamcorper aliquet vitae ut viverra.",
  },
  ,
  {
    icon: (
      <svg viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_53_402)">
          <path
            d="M30.0625 3.41675H6.9375C3.11263 3.41675 0 6.86588 0 11.1043V36.7293C0 37.2008 0.345333 37.5835 0.770833 37.5835C1.19633 37.5835 1.54167 37.2008 1.54167 36.7293V32.4584H35.4583V36.7293C35.4583 37.2008 35.8037 37.5835 36.2292 37.5835C36.6547 37.5835 37 37.2008 37 36.7293V11.1043C37 6.86588 33.8874 3.41675 30.0625 3.41675ZM6.9375 5.12508H30.0625C33.0379 5.12508 35.4583 7.80717 35.4583 11.1043V23.9168H32.375V21.3543C32.375 18.0572 29.9546 15.3751 26.9792 15.3751H23.125C21.164 15.3751 19.445 16.5402 18.5 18.2776C17.555 16.5402 15.836 15.3751 13.875 15.3751H10.0208C7.04542 15.3751 4.625 18.0572 4.625 21.3543V23.9168H1.54167V11.1043C1.54167 7.80717 3.96208 5.12508 6.9375 5.12508ZM19.2708 23.9168V21.3543C19.2708 19.0002 20.999 17.0834 23.125 17.0834H26.9792C29.1051 17.0834 30.8333 19.0002 30.8333 21.3543V23.9168H19.2708ZM6.16667 23.9168V21.3543C6.16667 19.0002 7.89642 17.0834 10.0208 17.0834H13.875C15.9994 17.0834 17.7292 19.0002 17.7292 21.3543V23.9168H6.16667ZM1.54167 30.7501V25.6251H35.4583V30.7501H1.54167Z"
            fill="#40C1AC"
          />
        </g>
        <defs>
          <clipPath id="clip0_53_402">
            <rect width="37" height="41" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Hospitality",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing neque suspendisse arcu ullamcorper aliquet vitae ut viverra.",
  },
];

const Services = () => {
  return (
    <Container className="flex flex-col justify-center py-32 md:py-0 md:min-h-screen">
      <h2 className="text-5xl text-secondary text-center mb-20 font-heading">
        Our Accreditation Services
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row items-center md:justify-evenly space-y-9 md:space-y-0">
        {services_data.map((service, i) => {
          let href = service?.name.replace(" ", "-");
          return (
            <ServiceCard
              key={i}
              name={service?.name}
              description={service?.description}
              icon={service?.icon}
              href={href}
            />
          );
        })}
      </div>
      {/* {services_data !== undefined &&
        services_data.map((service: Props, i: number) => {
          let href = service.name.replace(" ", "-");
          return (
            <ServiceCard
              key={i}
              name={service.name}
              description={service.description}
              icon={service.icon}
              href={href}
            />
          );
        })} */}
    </Container>
  );
};

export default Services;
