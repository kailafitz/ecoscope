import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import EcoscopeButton from "./EcoscopeButton";
import Container from "./Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LinkedInIcon from "../_icons/LinkedInIcon";
import MailIcon from "../_icons/MailIcon";
import FacebookIcon from "../_icons/FacebookIcon";
import JoinMissionModal from "../JoinMissionModal";
import { DialogTitle } from "@/components/ui/dialog";

export const MobileDrawer: React.FC = () => {
  return (
    <Drawer>
      {/* <DialogTitle>Mobile Drawer</DialogTitle> */}
      <DrawerTrigger asChild className="flex flex-col justify-center">
        <div className="flex flex-col gap-y-2 w-9 md:hidden group/root">
          <span className="h-0.5 bg-primary w-full group-data-[state=open]/root:rotate-45 group-data-[state=open]/root:translate-x-[0.10rem] group-data-[state=open]/root:translate-y-[0.95rem] group-data-[state=open]/root:transition-all transition-all group-data-[state=open]/root:duration-500"></span>
          <span className="h-0.5 bg-primary w-full"></span>
          {/* rotate(45deg) translateY(11px) translateX(8px) */}
          <span className="h-0.5 bg-primary w-full"></span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[calc(100%_-_78.7px)] bottom-0 focus-visible:outline-none">
        {/* <div className="mx-auto w-full flex flex-1 flex-col"> */}
        <Container className="pt-6 px-10">
          {/* <NavigationMenuList className="pb-10">
            <NavigationMenuItem className="hover:cursor-pointer">
              <Link href="">
                <Image
                  src="/_assets/logos/logo-primary-horizontal.png"
                  alt="Navigation bar"
                  width={200}
                  height={50}
                  // className="nav-logo"
                />
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList> */}
          <NavigationMenu className="block">
            <div className="flex flex-col [&_li]:w-full">
              <NavigationMenuList className="[&_li]:mb-4 md:[&_li:not(:last-child)]:mb-0">
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="pb-0 md:pb-4">
                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href="/service/film-and-television">
                          Film and Television
                        </Link>
                      </NavigationMenuLink>
                    </DrawerClose>

                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href="/service/advertising">Advertising</Link>
                      </NavigationMenuLink>
                    </DrawerClose>

                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href="/service/hospitality">Hospitality</Link>
                      </NavigationMenuLink>
                    </DrawerClose>

                    <DrawerClose asChild>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        asChild
                      >
                        <Link href="/service/other">Other</Link>
                      </NavigationMenuLink>
                    </DrawerClose>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link 
                      href="/our-services"
                      className={navigationMenuTriggerStyle()}
                    >
                      Our Services
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link 
                      href="/about-us"
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link 
                      href="/contact-us"
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
                <hr className="h-0.5 w-full bg-gradient-to-r from-primary to-white border-none rounded-full mb-4" />
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link 
                      href="/news"
                      className={navigationMenuTriggerStyle()}
                    >
                      News
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link 
                      href="/resources"
                      className={navigationMenuTriggerStyle()}
                    >
                      Resources
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <div className={navigationMenuTriggerStyle()}>
                      <JoinMissionModal />
                    </div>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <Link
                      className={cn(
                        navigationMenuTriggerStyle(),
                        buttonVariants({
                          variant: "default",
                        }),
                        "w-full",
                        `min-w-full sm:min-w-40 text-md md:text-sm`
                      )}
                      href="/contact-us#book-a-consultation"
                    >
                      Book a Consultation
                    </Link>
                  </DrawerClose>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/* <hr className="h-0.5 w-full bg-gradient-to-r from-primary to-white border-none rounded-full mb-4" /> */}
              {/* <div className="flex flex-row gap-x-3">
                <LinkedInIcon className="w-8 text-foreground" />
                <FacebookIcon className="w-8 text-foreground -ml-1.5" />
                <MailIcon className="w-8 text-foreground" />
              </div> */}
            </div>
          </NavigationMenu>
          {/* </div> */}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
