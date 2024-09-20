import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  topViewHeight?: boolean;
  py?: boolean;
};

const Container = (props: Props) => {
  return (
    <div
      className={`${props.className} ${props.py ? "py-16" : ""} container ${
        props.topViewHeight ? "top-height" : ""
      } px-5 sm:px-12 md:px-16 lg:px-20`}
    >
      {props.children}
    </div>
  );
};

export default Container;
