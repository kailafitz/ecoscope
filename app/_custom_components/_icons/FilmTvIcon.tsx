import { IconProps } from "@/app/interfaces";
import React from "react";
import PropTypes from "prop-types";

const FilmTvIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <g clipPath="url(#clip0_53_397)">
        <path
          d="M35.2857 17.1772C34.2219 16.7348 33.0564 16.963 32.2409 17.7754L30.6745 19.334C30.1319 16.8427 28.2464 14.8478 25.8183 14.1463C27.9088 12.7665 29.2917 10.3955 29.2917 7.70833C29.2917 3.45796 25.8337 0 21.5833 0C18.5355 0 15.8961 1.77754 14.6458 4.35058C13.3955 1.77754 10.7562 0 7.70833 0C3.45796 0 0 3.45796 0 7.70833C0 10.6406 1.6465 13.1967 4.06383 14.4994C1.66808 15.594 0 18.0128 0 20.8125V30.0625C0 33.8874 3.11263 37 6.9375 37H23.8958C27.2135 37 29.9947 34.6597 30.6745 31.5425L32.2409 33.1011C32.782 33.6392 33.4773 33.9213 34.1942 33.9213C34.558 33.9213 34.928 33.8488 35.2857 33.6993C36.3432 33.2599 37 32.2779 37 31.134V19.741C37 18.5987 36.3432 17.6166 35.2857 17.1757V17.1772ZM21.5833 1.54167C24.9842 1.54167 27.75 4.30742 27.75 7.70833C27.75 11.1092 24.9842 13.875 21.5833 13.875C18.1824 13.875 15.4167 11.1092 15.4167 7.70833C15.4167 4.30742 18.1824 1.54167 21.5833 1.54167ZM16.963 13.875H12.3272C13.3061 13.1396 14.1047 12.1776 14.6443 11.0661C15.1839 12.1776 15.9825 13.1396 16.9614 13.875H16.963ZM1.54167 7.70833C1.54167 4.30742 4.30742 1.54167 7.70833 1.54167C11.1092 1.54167 13.875 4.30742 13.875 7.70833C13.875 11.1092 11.1092 13.875 7.70833 13.875C4.30742 13.875 1.54167 11.1092 1.54167 7.70833ZM29.2917 30.0625C29.2917 33.0379 26.8712 35.4583 23.8958 35.4583H6.9375C3.96208 35.4583 1.54167 33.0379 1.54167 30.0625V20.8125C1.54167 17.8371 3.96208 15.4167 6.9375 15.4167H23.8958C26.8712 15.4167 29.2917 17.8371 29.2917 20.8125V30.0625ZM35.4583 31.134C35.4583 31.6489 35.1716 32.0759 34.6937 32.2748C34.208 32.4737 33.6977 32.375 33.3277 32.0065L30.8333 29.526V21.349L33.3277 18.8685C33.6977 18.4985 34.208 18.3982 34.6937 18.6002C35.1731 18.7991 35.4583 19.2261 35.4583 19.741V31.134Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_397">
          <rect width="37" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

FilmTvIcon.propTypes = {
  className: PropTypes.string,
};

export default FilmTvIcon;
