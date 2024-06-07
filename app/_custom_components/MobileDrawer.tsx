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
import Link from "next/link";
import Hamburger from "hamburger-react";

export const MobileDrawer = () => {
  const [isOpen, setOpen] = useState(false);
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
        <div className="mx-auto w-full max-w-sm pt-4 flex flex-1 flex-col justify-between">
          <NavigationMenu>
            <div className="container flex flex-col">
              <NavigationMenuList className="">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Film and Television
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Advertising
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Hospitality
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
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
              </NavigationMenuList>
            </div>
          </NavigationMenu>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="default">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
