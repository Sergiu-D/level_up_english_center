"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
// Messages
import { navigationLinks } from "./messages";
// import dynamic from "next/dynamic";
// import { ChevronDown } from "lucide-react";

// import placeholderImage from "@/public/assets/image-placeholder";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSubLink, setActiveSubLink] = React.useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    {link.subLinks ? (
                      <>
                        <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800">
                          {link.label} 
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <div className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href={link.path}
                                >
                                  <Image
                                    src={
                                      activeSubLink
                                        ? activeSubLink.image
                                        : link.featured.image
                                    }
                                    width={100}
                                    height={100}
                                    alt=""
                                    className="h-16 w-16 mb-4"
                                  />
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {activeSubLink
                                      ? activeSubLink.label
                                      : link.featured.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {activeSubLink
                                      ? activeSubLink.description
                                      : link.featured.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </div>
                            {link.subLinks.map((subLink) => (
                              <NavigationMenuLink key={subLink.path} asChild>
                                <a
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  href={subLink.path}
                                  onMouseEnter={() => setActiveSubLink(subLink)}
                                //   onMouseLeave={() => setActiveSubLink(null)}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subLink.label}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subLink.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.path} legacyBehavior passHref>
                        <NavigationMenuLink className="bg-black text-white hover:bg-gray-800">
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden">
            <Button
              className="hover:bg-[#000] relative w-10 h-10 flex items-center justify-center"
              variant="ghost"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`burger-icon ${isOpen ? "open" : ""}`}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full">
            {navigationLinks.map((link) => (
              <AccordionItem key={link.path} value={link.path}>
                {link.subLinks ? (
                  <>
                    <AccordionTrigger className="text-white hover:bg-gray-800 px-3 py-2 text-base font-medium">
                      {link.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-4 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <div key={subLink.path} className="space-y-1">
                            <Link
                              href={subLink.path}
                              className="text-white hover:bg-gray-800 block px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {subLink.label}
                            </Link>
                            <p className="text-xs text-muted-foreground px-3">
                              {subLink.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className="text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      <style jsx>{`
        .burger-icon {
          width: 24px;
          height: 20px;
          position: relative;
          transition: transform 0.3s ease-in-out;
        }
        .burger-line {
          display: block;
          width: 25px;
          height: 2px;
          background-color: white;
          position: absolute;
          left: -100%;
          transition: all 0.3s ease-in-out;
        }
        .burger-line:nth-child(1) {
          top: 0;
        }
        .burger-line:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        .burger-line:nth-child(3) {
          bottom: 0;
        }
        .burger-icon.open {
          transform: rotate(180deg);
        }
        .burger-icon.open .burger-line:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .burger-icon.open .burger-line:nth-child(2) {
          opacity: 0;
        }
        .burger-icon.open .burger-line:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      `}</style>
    </nav>
  );
}
