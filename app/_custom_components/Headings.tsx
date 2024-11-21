import React, { ReactNode } from "react";

let mb = "mb-8 md:mb-10";

type Props = {
  children: ReactNode;
  className?: string;
  mb?: boolean;
  subtitle?: string;
  id?: string;
};

export const DualHeading = (props: Props) => {
  return (
    <>
      <h1 className={`${props.className} font-heading text-xl mb-0`}>
        {props.children}
      </h1>
      <p className="text-3xl md:text-5xl text-primary font-heading opacity-60">
        {props.subtitle}
      </p>
    </>
  );
};

export const H1 = (props: Props) => {
  return (
    <>
      <h1
        className={`font-heading text-3xl md:text-5xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className} `}
      >
        {props.children}
      </h1>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg w-full md:w-1/2 mx-auto ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export const H2 = (props: Props) => {
  return (
    <>
      <h2
        className={`font-heading text-3xl md:text-5xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className} `}
        {...props}
      >
        {props.children}
      </h2>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg w-full md:w-1/2 mx-auto ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export const H3 = (props: Props) => {
  return (
    <>
      <h3
        className={`font-heading text-2xl md:text-4xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className} `}
      >
        {props.children}
      </h3>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg w-full md:w-1/2 mx-auto ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export const H4 = (props: Props) => {
  return (
    <>
      <h4
        className={`font-heading text-2xl md:text-3xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className} `}
      >
        {props.children}
      </h4>
      {props.subtitle && (
        <p className={`text-md md:text-lg ${props.mb && props.subtitle && mb}`}>
          {props.subtitle}
        </p>
      )}
    </>
  );
};
