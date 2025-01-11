import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
        buttonVariants({
          variant: props.variant ? props.variant : "default",
        }),
        props.full && "w-full",
        `${props.className} min-w-full sm:min-w-40 text-lg md:text-sm`
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default EcoscopeButton;
