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
      <DrawerContent>
        {/* <div className="mx-auto w-full flex flex-1 flex-col"> */}
        <Container className="pt-6 px-10">
          {/* <NavigationMenuList className="pb-10">
            <NavigationMenuItem className="hover:cursor-pointer">
              <Link href="/" legacyBehavior passHref>
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
            <div className="flex flex-col">
              <NavigationMenuList>
                <NavigationMenuItem>
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
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/about-us">About Us</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/contact-us">Contact Us</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DrawerClose asChild>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      asChild
                    >
                      <Link href="/news">News</Link>
                    </NavigationMenuLink>
                  </DrawerClose>
                </NavigationMenuItem>
                <DrawerClose asChild>
                  <NavigationMenuItem asChild>
                    <EcoscopeButton href="contact-us#book-a-consultation">
                      Book a Consultation
                    </EcoscopeButton>
                  </NavigationMenuItem>
                </DrawerClose>
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
