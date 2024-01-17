"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export default function Header() {
  return (
    <header className="sticky max-w-screen-2xl  inset-x-0 z-50 flex h-[--navbar-height] w-full items-center border-b lg:px-8 px-0 bg-card backdrop-blur-md mx-auto">
      <div className=" hidden lg:flex justify-around items-center gap-4">
        <Button>How it works</Button>
        <Button>Pricing</Button>
        <Button>FAQ</Button>
      </div>
      <Link
        className="mr-6 flex h-full w-full flex-grow items-center justify-center"
        href="#"
      >
        <span className="sr-only">Nextbase Template</span>
        <Image
          alt="brand-logo"
          width={100}
          className="invert"
          height={64}
          src="/vercel.svg"
        />
      </Link>

      <div className="ml-auto hidden lg:flex  items-center justify-center gap-3">
        <Button
          variant={"default"}
          size={"sm"}
          rounded={"full"}
          className="hidden px-3 py-1 md:block"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "#",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "#",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "#",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "#",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "#",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "#",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
