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
import EcoscopeButton from "./Button";
import Container from "./Layout/Container";
import { JoinMissionModal } from "./HomePageComponents/JoinMissionModal";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const MobileDrawer = () => {
  return (
    <Drawer>
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
              <Link href="/draft" legacyBehavior passHref>
                <Image
                  src="/_assets/logo-primary-horizontal.png"
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
              <NavigationMenuList>
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/draft/our-services">Our Services</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/draft/about-us">About Us</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/draft/contact-us">Contact Us</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <hr className="h-0.5 w-full bg-gradient-to-r from-primary to-white border-none rounded-full mb-4" />
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/draft/news">News</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/draft/resources">Resources</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <JoinMissionModal />
                      {/* <EcoscopeButton
                        className="w-full"
                        variant="outline"
                        href={""}
                      >
                        Join the Mission
                      </EcoscopeButton> */}
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "default",
                          }),
                          "w-full",
                          `min-w-full sm:min-w-40 text-md md:text-sm`
                        )}
                        href="/draft/contact-us#book-a-consultation"
                      >
                        Book a Consultation
                      </Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
            {/* <div className="bg-primary h-px w-full my-10"></div>
            <div className="flex flex-row gap-x-3 text-primary">
              <LinkedInIcon className="w-8" />
              <MailIcon className="w-8" />
              <FacebookIcon className="w-8" />
            </div> */}
          </NavigationMenu>
          {/* </div> */}
        </Container>
      </DrawerContent>
    </Drawer>
  );
};
