import React from "react";

type Props = {};

const EmailIcon = (props: Props) => {
  return (
    <svg
      className="email-icon-padding"
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.268 3.25415L24.3891 5.61891C19.963 9.25464 17.75 11.0725 15 11.0725C12.2499 11.0725 10.0369 9.25464 5.61076 5.61891L2.73193 3.25415"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M22.3608 1H7.63916C3.97246 1 1 3.44166 1 6.45361V18.5464C1 21.5583 3.97246 24 7.63916 24H22.3608C26.0275 24 29 21.5583 29 18.5464V6.45361C29 3.44166 26.0275 1 22.3608 1Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default EmailIcon;
