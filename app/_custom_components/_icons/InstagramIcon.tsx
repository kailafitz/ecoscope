import { IconProps } from "@/app/interfaces";
import React from "react";
import PropTypes from "prop-types";

// Credit to creator of this icon, to which copyright belongs to -> https://iconscout.com/contributors/pixel-icons
// No changes have been made to the original icon, except for the adjustments in color and stroke width for the purpose of this website
const InstagramIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-instagram ${props.className}`}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
};

InstagramIcon.propTypes = {
  className: PropTypes.string,
};

export default InstagramIcon;
