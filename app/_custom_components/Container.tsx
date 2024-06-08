import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div
      className={`${props.className} container px-10 sm:px-12 md:px-16 lg:px-20`}
    >
      {props.children}
    </div>
  );
};

export default Container;
