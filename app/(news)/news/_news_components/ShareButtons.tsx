"use client";
import { ShareButtonsProps } from "@/app/interfaces";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const ShareButtons: React.FC<ShareButtonsProps> = (props) => {
  const shareUrl = `https://ecoscope/news/${props.slug}`;
  return (
    <div className="flex flex-row gap-x-2 mb-16">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
        {/* <FacebookIcon className="w-14 text-primary border-2 border-primary p-2 rounded-full" /> */}
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;
