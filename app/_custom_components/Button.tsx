import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  full?: boolean;
  className?: string;
  variant?: string;
  children: string;
};

const EcoscopeButton = (props: Props) => {
  return (
    <Link
      className={cn(
        buttonVariants({ variant: props.variant ? "secondary" : "default" }),
        props.full ? "w-full" : "",
        `${props.className} min-w-full sm:min-w-40 text-md md:text-sm`
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default EcoscopeButton;
