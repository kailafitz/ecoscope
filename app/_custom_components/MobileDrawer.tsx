"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
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
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "hamburger-react";
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";

export const MobileDrawer = () => {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex md:hidden flex-col justify-center">
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-1 flex-col justify-between p-6">
          <NavigationMenuList className="pt-4 pr-4 pb-10">
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
          </NavigationMenuList>
          <NavigationMenu className="block">
            <div className="flex flex-col">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link
                      href="/service/film-and-television"
                      legacyBehavior
                      passHref
                    >
                      <DrawerClose asChild>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Film and Television
                        </NavigationMenuLink>
                      </DrawerClose>
                    </Link>
                    <Link href="/service/advertising" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Advertising
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/service/hospitality" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Hospitality
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <Button variant="default" className="w-full" size="lg">
                  Book a Consultation
                </Button>
              </NavigationMenuList>
            </div>
            <div className="bg-primary h-px w-full my-10"></div>
            <div className="flex flex-row gap-x-5 text-primary">
              <LinkedInIcon className="w-10" />
              <MailIcon className="w-10" />
            </div>
          </NavigationMenu>
          <DrawerFooter className="px-0">
            <DrawerClose asChild>
              <Button variant="default" onClick={() => setOpen(false)}>
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
