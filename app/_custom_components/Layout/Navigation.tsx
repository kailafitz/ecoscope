"use client";
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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EcoscopeButton from "../Button";
import Container from "./Container";
import { MobileDrawer } from "../MobileDrawer";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
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
              <NavigationMenuTrigger
                className={`${(pathname === "/service/film-and-television" || pathname === "/service/advertising" || pathname === "/service/hospitality" || pathname === "/service/other") && "font-bold"}`}
              >
                Our Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link
                  href="/service/film-and-television"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/film-and-television" && "font-bold"}`}
                  >
                    Film and Television
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/advertising" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/advertising" && "font-bold"}`}
                  >
                    Advertising
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/hospitality" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/hospitality" && "font-bold"}`}
                  >
                    Hospitality
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/other" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/other" && "font-bold"}`}
                  >
                    Other
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/about-us" && "font-bold"}`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/contact-us" && "font-bold"}`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <EcoscopeButton href="/contact-us/#booking-form">
              Book a Consultation
            </EcoscopeButton>
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default Navigation;
