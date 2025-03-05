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
            <Link href="/draft" legacyBehavior passHref>
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
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${(pathname === "/service/film-and-television" || pathname === "/service/advertising" || pathname === "/service/hospitality" || pathname === "/service/other") && "font-bold opacity-70"}`}
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
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/film-and-television" && "font-bold opacity-70"}`}
                  >
                    Film and Television
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/advertising" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/advertising" && "font-bold opacity-70"}`}
                  >
                    Advertising
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/hospitality" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/hospitality" && "font-bold opacity-70"}`}
                  >
                    Hospitality
                  </NavigationMenuLink>
                </Link>
                <Link href="/service/other" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${pathname === "/service/other" && "font-bold opacity-70"}`}
                  >
                    Other
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/draft/our-services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/draft/our-services" && "font-bold opacity-70 "}`}
                >
                  Our Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/draft/about-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/draft/about-us" && "font-bold opacity-70"}`}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/draft/contact-us" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} ${pathname === "/draft/contact-us" && "font-bold opacity-70"}`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <EcoscopeButton href="/draft/contact-us/#booking-form">
              Book a Consultation
            </EcoscopeButton>
          </NavigationMenuList>
        </div>
      </Container>
    </NavigationMenu>
  );
};

export default Navigation;
