"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export default function Header() {
  return (
    <header className="fixed bg-slate-950/80 top-0 max-w-screen  inset-x-0 z-50 flex h-[--navbar-height] py-4 w-full items-center justify-evenly lg:px-8 px-8 text-white backdrop-blur-md mx-auto">
      <nav className="max-w-screen-2xl flex justify-start items-center w-full">
        <div className="gap-4">
          <Link
            className="mr-6 flex h-full w-full flex-grow items-baseline"
            href="#"
          >
            <span className="sr-only">Nextbase Template</span>

            <Image
              className="ml-4 my-auto dark:block"
              src={"octax-dark.svg"}
              alt="dark-mode-image"
              width={120}
              height={60}
            />
          </Link>
        </div>
        <div className="hidden lg:flex justify-around items-center mr-auto ml-4 space-x-4">
          <Button variant={"link"} className="text-white" asChild>
            <Link href="#howitworks">How it works</Link>
          </Button>

          <Button variant={"link"} className="text-white" asChild>
            <Link href="#howitworks">Pricing</Link>
          </Button>
          <Button variant={"link"} className="text-white" asChild>
            <Link href="#howitworks">FAQ</Link>
          </Button>
        </div>
        <div className=" hidden lg:flex justify-around items-center gap-4">
          <Button variant={"ghost"}>Sign In</Button>
          <Button variant={"default"} className="px-6 py-2 rounded-full">
            Sign Up
          </Button>
        </div>
      </nav>
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
