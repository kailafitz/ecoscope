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
import EcoscopeButton from "./EcoscopeButton";
import Container from "./Container";
import { MobileDrawer } from "./MobileDrawer";

const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <Container className="flex flex-row justify-between">
        <NavigationMenuList className="pt-4 pr-4 pb-4">
          <NavigationMenuItem className="hover:cursor-pointer mb-0">
          <NavigationMenuLink asChild>
            <Link href="/">
                <Image
                  src="/_assets/logos/logo-primary-horizontal.png"
                  alt="Navigation bar"
                  width={200}
                  height={50}
                />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <MobileDrawer />
        <div className="hidden md:flex md:flex-col md:justify-center [&>div]:flex [&>div]:flex-1">
          <NavigationMenuList className="[&_li:not(:last-child)]:pr-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/our-services"
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/our-services" && "font-bold opacity-70 "}`}
                >
                  Our Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about-us"
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/about-us" && "font-bold opacity-70"}`}
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact-us"
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/contact-us" && "font-bold opacity-70"}`}
                >
                  Contact Us
                </Link>
              </NavigationMenuLink>
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
