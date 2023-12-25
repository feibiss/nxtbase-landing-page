"use client";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  return (
    <header className="flex bg-background/80 left-0 h-[--navbar-height] w-full shrink-0 items-center z-50 md:px-28 px-4 sticky top-0 bg-opacity-90 backdrop-blur-md border-b border-gray-200">
      <Link
        className="mr-6 w-fit h-full flex justify-start items-center"
        href="#"
      >
        <span className="sr-only">Nextbase Template</span>
        <Image
          alt="brand-logo"
          width={100}
          className="dark:invert"
          height={64}
          src="/brand.svg"
        />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <NavMenuItem href="#" content="Home" />
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <NavMenuItem href="#" content="Pricing" />
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <NavMenuItem href="#" content="Features" />
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <NavMenuItem href="#" content="Contact" />
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center justify-center gap-3">
        <Button
          variant={"outline"}
          size={"sm"}
          rounded={"full"}
          className="rounded-full hidden md:block px-3 py-1"
        >
          Login
        </Button>
        <Button
          variant={"secondary"}
          size={"sm"}
          rounded={"full"}
          className="rounded-full hidden md:block px-3 py-1"
        >
          Get Started
        </Button>

        <Button
          onClick={() => setOpenMobileNav((prev) => !prev)}
          size={"icon"}
          variant={"outline"}
          rounded={"full"}
          className="ml-4 rounded-full md:hidden flex justify-center items-center"
        >
          {openMobileNav ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </Button>
      </div>
      {openMobileNav && (
        <div className="absolute bottom-0 h-fit shadow-md py-4 top-20 w-full left-0 bg-primary-foreground z-10">
          <div className="w-full flex flex-col justify-start items-start">
            <MobileNavMenuItem href="#" content="Home" />
            <MobileNavMenuItem href="#" content="Pricing" />
            <MobileNavMenuItem href="#" content="Features" />
            <MobileNavMenuItem href="#" content="Contact" />
          </div>
        </div>
      )}
    </header>
  );
}

const NavMenuItem = ({
  href = "#",
  content,
}: {
  href: string;
  content: string;
}) => {
  return (
    <Link
      className="group inline-flex h-9 w-max items-center justify-center rounded-md underline decoration-2 decoration-transparent hover:decoration-primary underline-offset-8 px-4 py-2 text-sm font-medium transition-colors   hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
      href={href}
    >
      {content}
    </Link>
  );
};

const MobileNavMenuItem = ({
  href = "#",
  content,
}: {
  href: string;
  content: string;
}) => {
  return (
    <Link href={href} className={"w-full justify-start pl-4"}>
      <p className=" font-medium w-full text-base py-4 text-start text-gray-600 hover:text-primary ">
        {content}
      </p>
    </Link>
  );
};
