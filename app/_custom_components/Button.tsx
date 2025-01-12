import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  href: string;
  full?: boolean;
  className?: string;
  variant?: "secondary" | "outline";
  children: string;
};

const EcoscopeButton = (props: Props) => {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: props.variant ? props.variant! : "default",
        }),
        `${props.full ? "md:w-full" : "md:min-w-40 md:max-w-[15vw]"} ${props.className} w-full text-md md:text-sm`
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default EcoscopeButton;
