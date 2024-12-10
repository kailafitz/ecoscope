"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const OpeningAnimation = () => {
  const [active, setActive] = useState<Boolean>(true);
  const current = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  });

  if (current === "/" && active) {
    return (
      <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-white flex flex-col justify-center">
        <video
          autoPlay
          preload="none"
          controls={false}
          muted
          playsInline
          className="w-1/4 h-auto mx-auto block"
        >
          <source src="/_assets/opening-animation-logo.MP4"></source>
        </video>
      </div>
    );
  }
};

export default OpeningAnimation;
