import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  mb?: boolean;
  subtitle?: string;
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
    <h1
      className={`${props.className} ${props.mb && "mb-5 md:mb-10"} font-heading text-3xl md:text-5xl`}
    >
      {props.children}
    </h1>
  );
};

export const H2 = (props: Props) => {
  return (
    <h2 className={`${props.className} font-heading text-1xl md:text-3xl`}>
      {props.children}
    </h2>
  );
};

export const H3 = (props: Props) => {
  return (
    <h3
      className={`${props.className} font-heading text-3xl md:text-5xl mb-10 md:mb-20`}
    >
      {props.children}
    </h3>
  );
};

export const H4 = (props: Props) => {
  return (
    <h4 className={`${props.className} font-heading text-xl md:text-3xl mb-2`}>
      {props.children}
    </h4>
  );
};
