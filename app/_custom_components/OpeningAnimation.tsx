"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { H1 } from "./Headings";

const OpeningAnimation = () => {
  const [active, setActive] = useState<Boolean>(true);
  const current = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 6500);
  });

  if (current === "/" && active) {
    return (
      <div className="fixed top-0 left-0 z-20 h-screen w-screen bg-white flex flex-col justify-center animate-fade-out scroll-auto">
        <video
          autoPlay
          preload="none"
          controls={false}
          muted
          playsInline
          className="w-1/6 h-auto mx-auto block mb-4"
        >
          <source src="/_assets/opening-animation-logo.MP4"></source>
        </video>
        <H1 className="text-center text-primary animate-fade-in tracking-[0.4em] uppercase">
          Ecoscope
        </H1>
      </div>
    );
  }
};

export default OpeningAnimation;
