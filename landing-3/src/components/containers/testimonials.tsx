"use client";
import Image from "next/image";
import Container from "./container";
import { Typography } from "../ui/typography";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { featuredTestimonial, testimonials } from "@/lib/enums";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <Container>
      <div className="relative col-span-12 isolate bg-transparent pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center flex flex-col justify-start items-center gap-4">
            <Typography variant={"h2"}>
              Loved by{" "}
              <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                10k users
              </span>
            </Typography>
            <Typography variant={"p"} className="">
              We have worked with thousands of amazing people
            </Typography>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 dark:text-gray-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 space-y-10">
              <blockquote className="text-white/60 font-normal text-2xl lg:text-4xl xl:text-4xl leading-normal lg:leading-relaxed xl:leading-normal ">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center w-full gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <Image
                  width={70}
                  height={50}
                  className="h-20 w-20 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex flex-col w-fit gap-1">
                  <div className="font-semibold text-card-foreground w-fit">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-card-foreground/70 w-fit">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Container>
  );
}
