import { IconProps } from "@/app/interfaces";
import React from "react";
import PropTypes from "prop-types";

// Credit to creator of this icon, to which copyright belongs to -> https://iconscout.com/contributors/graphic-room
// No changes have been made to the original icon, except for the adjustments in color and stroke width for the purpose of this website
const AdvertisingIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <path
        d="M1.98749 28.3565C1.63916 27.7531 1.46497 27.4514 1.35532 27.1775C0.674956 25.4781 1.19602 23.5336 2.63493 22.402C2.86683 22.2196 3.16852 22.0454 3.77186 21.6971L9.01844 18.668L13.8934 27.1117L8.64686 30.1408C8.04352 30.4892 7.74183 30.6634 7.46797 30.773C5.76851 31.4534 3.82398 30.9323 2.69238 29.4934C2.51002 29.2615 2.33583 28.9598 1.98749 28.3565Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17.4032 36.787C16.555 37.2768 15.4705 36.9861 14.9808 36.1383L10.8005 28.8975L13.8719 27.1242L18.0522 34.3649C18.5419 35.2131 18.2513 36.2976 17.4032 36.787ZM8.96362 18.508L15.6841 9.45068C19.7991 3.90484 21.8566 1.13194 24.5516 1.17556C24.6958 1.17788 24.8398 1.18617 24.9834 1.20034C27.6656 1.46562 29.392 4.4559 32.845 10.4364C36.187 16.2251 37.858 19.1193 36.8084 21.5431C36.7522 21.6732 36.6907 21.8009 36.6239 21.926C35.3819 24.2569 32.0768 24.7529 25.4667 25.7448L14.0901 27.4521L8.96362 18.508Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

AdvertisingIcon.propTypes = {
  className: PropTypes.string,
};

export default AdvertisingIcon;
