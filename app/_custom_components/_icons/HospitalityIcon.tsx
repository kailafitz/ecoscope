import { IconProps } from "@/app/interfaces";
import React from "react";
import PropTypes from "prop-types";

const HospitalityIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 89 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <rect
        x="1.76708"
        y="67.3212"
        width="84.9121"
        height="7.91183"
        rx="3.95592"
        stroke="currentColor"
        strokeWidth="3.53416"
        strokeLinejoin="round"
      />
      <path
        d="M4.96387 66.9018C4.96387 66.9018 4.96387 12.8195 43.6227 12.4189C82.2815 12.0183 83.4834 66.9018 83.4834 66.9018"
        stroke="currentColor"
        strokeWidth="3.53416"
        strokeLinecap="round"
      />
      <path
        d="M49.2665 6.61006C49.2665 9.28476 47.0982 11.453 44.4235 11.453C41.7488 11.453 39.5806 9.28476 39.5806 6.61006C39.5806 3.93536 41.7488 1.76708 44.4235 1.76708C47.0982 1.76708 49.2665 3.93536 49.2665 6.61006Z"
        stroke="currentColor"
        strokeWidth="3.53416"
      />
    </svg>
  );
};

HospitalityIcon.propTypes = {
  className: PropTypes.string,
};

export default HospitalityIcon;
