"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { H4 } from "./_custom_components/Headings";

const Draft = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="absolute top-0 left-0 bg-primary h-screen w-screen z-[999] flex flex-col justify-center items-center text-white">
        <Image
          src="/_assets/logo-white-vertical-full.png"
          alt="logo"
          width={500}
          height={200}
          className="mb-5 xs:min-w-full md:min-w-0"
        />
        <H4>January 2025</H4>
      </div>
    );
  }
};

export default Draft;
