"use client";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex bg-white/80 left-0 h-20 w-full shrink-0 items-center z-50 px-4 md:px-6 sticky top-0 bg-opacity-90 backdrop-blur-md border-b border-gray-200">
      <Link
        className="mr-6 w-fit h-full lg:flex justify-start items-center"
        href="#"
      >
        <span className="sr-only">Nextbase</span>
        <Image alt="brand-logo" width={100} height={64} src="/vercel.svg" />
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
      <div className="ml-auto">
        <Button>Get Started</Button>
        {/* // TODO Add Mobile Navbar */}
        <Button
          size={"icon"}
          variant={"outline"}
          rounded={"full"}
          className="ml-4"
        >
          <HamburgerMenuIcon />
        </Button>
      </div>
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
