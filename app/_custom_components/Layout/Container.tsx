import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  topViewHeight?: boolean;
  topSectionPadding?: boolean;
  mb?: boolean;
  id?: string;
};

export const containerMb = "mb-16 md:mb-32";

const Container = (props: Props) => {
  return (
    <div
      id={props.id && props.id}
      className={`${props.className && props.className} ${props.mb && "mb-16 md:mb-32"} ${props.topSectionPadding && "pt-10 md:pt-14"} container ${props.topViewHeight && "md:h-[calc(100vh_-_78.7px)]"} px-5 sm:px-12 md:px-16 lg:px-20`}
    >
      {props.children}
    </div>
  );
};

export default Container;
