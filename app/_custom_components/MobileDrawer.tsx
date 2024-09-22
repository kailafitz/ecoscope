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
import LinkedInIcon from "./LinkedInIcon";
import MailIcon from "./MailIcon";
import EcoscopeButton from "./Button";

export const MobileDrawer = () => {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="block md:hidden">Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm flex flex-1 flex-col p-6">
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
                <DrawerClose asChild>
                  <NavigationMenuItem asChild>
                    <EcoscopeButton href="contact-us#book-a-consultation">
                      Book a Consultation
                    </EcoscopeButton>
                  </NavigationMenuItem>
                </DrawerClose>
              </NavigationMenuList>
            </div>
            <div className="bg-primary h-px w-full my-10"></div>
            <div className="flex flex-row gap-x-5 text-primary">
              <LinkedInIcon className="w-10" />
              <MailIcon className="w-10" />
            </div>
          </NavigationMenu>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
