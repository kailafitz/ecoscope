"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { MobileDrawer } from "./MobileDrawer";
import Container from "./Container";
import EcoscopeButton from "./Button";

const Navigation = () => {
  return (
    <NavigationMenu id="NAVIGATION">
      <Container className="flex flex-row justify-between">
        <NavigationMenuList className="pt-4 pr-4 pb-4">
          <NavigationMenuItem className="hover:cursor-pointer">
            <Link href="/" legacyBehavior passHref>
              <Image
                src="/_assets/logo-primary-horizontal.png"
                alt="Navigation bar"
                width={200}
                height={50}
              />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <MobileDrawer />
        <div className="hidden md:flex md:flex-col md:justify-center [&>div]:flex [&>div]:flex-1">
          <NavigationMenuList className="[&_li:not(:last-child)]:pr-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link
                  href="/service/film-and-television"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Film and Television
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/advertising" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Advertising
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/hospitality" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Hospitality
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <EcoscopeButton href="contact-us#book-a-consultation">
              Book a Consultation
            </EcoscopeButton>
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default Navigation;
