"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return null;
}
