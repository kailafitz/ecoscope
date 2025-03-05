import { HeadingsProps } from "../../interfaces";

export const mb = "mb-8 md:mb-10";

export const DualHeading: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <h1
        className={`font-heading text-xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className}`}
      >
        {props.children}
      </h1>
      <p
        className={`text-3xl md:text-5xl text-primary font-heading opacity-60 ${props.mb && props.subtitle && mb}`}
      >
        {props.subtitle}
      </p>
    </>
  );
};

export const H1: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <h1
        className={`font-heading text-3xl md:text-5xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${!props.left && "text-center mx-auto"} ${props.className}`}
      >
        {props.children}
      </h1>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg w-full md:w-1/2 ${!props.left && "text-center mx-auto"} ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export const H2: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <h2
        className={`font-heading text-3xl md:text-5xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className} `}
      >
        {props.children}
      </h2>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg w-full md:w-3/4 lg:w-1/2 mx-auto ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};

export const H3: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <h3
        className={`font-heading text-2xl md:text-4xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${props.className && props.className} `}
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

export const H4: React.FC<HeadingsProps> = (props) => {
  return (
    <>
      <h4
        className={`font-heading text-xl md:text-2xl ${props.mb && !props.subtitle && mb} ${props.subtitle && "mb-3"} ${!props.left && "text-center mx-auto"} ${props.className} `}
      >
        {props.children}
      </h4>
      {props.subtitle && (
        <p
          className={`text-md md:text-lg ${!props.left && "text-center mx-auto"} ${props.mb && props.subtitle && mb}`}
        >
          {props.subtitle}
        </p>
      )}
    </>
  );
};
