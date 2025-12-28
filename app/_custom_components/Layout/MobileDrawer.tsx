import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import JoinMissionModal from "../JoinMissionModal";
import { X } from "lucide-react";

export const MobileDrawer: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="flex flex-col justify-center md:hidden">
        <button className="flex flex-col gap-y-2 w-9 group/root">
          <span className="h-0.5 bg-primary w-full group-data-[state=open]/root:rotate-45 group-data-[state=open]/root:translate-x-[0.10rem] group-data-[state=open]/root:translate-y-[0.95rem] group-data-[state=open]/root:transition-all transition-all group-data-[state=open]/root:duration-500"></span>
          <span className="h-0.5 bg-primary w-full"></span>
          <span className="h-0.5 bg-primary w-full"></span>
        </button>
      </DrawerTrigger>
      
      <DrawerContent className="h-screen w-screen">
        {/* Close Button */}
        <button className="absolute top-4 right-4 p-2 z-10">
          <DrawerClose asChild>
            <X className="h-6 w-6" />
          </DrawerClose>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <DrawerClose asChild>
            <Link href="/our-services" className="text-2xl font-medium">
              Our Services
            </Link>
          </DrawerClose>
          
          <DrawerClose asChild>
            <Link href="/about-us" className="text-2xl font-medium">
              About Us
            </Link>
          </DrawerClose>
          
          <DrawerClose asChild>
            <Link href="/contact-us" className="text-2xl font-medium">
              Contact Us
            </Link>
          </DrawerClose>
          
          <DrawerClose asChild>
            <Link href="/news" className="text-2xl font-medium">
              News
            </Link>
          </DrawerClose>
          
          <DrawerClose asChild>
            <Link href="/resources" className="text-2xl font-medium">
              Resources
            </Link>
          </DrawerClose>
          
          <DrawerClose asChild>
            <div>
              <JoinMissionModal textSize="text-2xl" />
            </div>
          </DrawerClose>
          
          <DrawerClose asChild>
            <Link
              href="/contact-us#book-a-consultation"
              className={cn(
                buttonVariants({ variant: "default" }),
                "text-xl px-8 py-4"
              )}
            >
              Book a Consultation
            </Link>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
