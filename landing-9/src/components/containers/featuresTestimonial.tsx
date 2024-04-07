import React from "react";
import Container from "./container";
import Image from "next/image";
import { featuredTestimonial } from "@lib/enums";

const FeaturedTestimonial = ({}) => {
  return (
    <Container className="pb-40 relative overflow-visible">
      <div className="mx-auto  col-span-12 flex flex-col items-center justify-center gap-8 text-sm leading-6 xl:mx-0 xl:max-w-none">
        <figure className="col-span-2 bg-primary-background overflow-visible text-foreground relative w-full max-w-6xl mx-auto space-y-10 px-16 py-[4.5rem] ">
          <Image
            aria-hidden
            alt="Wave"
            width={200}
            height={100}
            src={"/assets/asset_3.svg"}
            className="absolute bottom-0 -left-20 "
          />
          <Image
            aria-hidden
            alt="Wave"
            width={200}
            height={100}
            src={"/assets/asset_4.svg"}
            className="absolute z-30 -top-0 -right-20 w-40 lg:w-60"
          />
          <blockquote className="font-normal text-balance text-2xl lg:text-4xl xl:text-4xl leading-normal w-full text-center lg:leading-relaxed xl:leading-normal ">
            {`“${featuredTestimonial.body}”`}
          </blockquote>
          <figcaption className="flex items-center justify-center w-full gap-x-4  px-6">
            <Image
              width={70}
              height={50}
              className="h-20 w-20 flex-none rounded-full bg-gray-50"
              src={featuredTestimonial.author.imageUrl}
              alt=""
            />
          </figcaption>
        </figure>
      </div>
      <Image
        aria-hidden
        alt="Wave"
        width={200}
        height={100}
        src={"/assets/asset_6.svg"}
        className="absolute -bottom-20 z-40 left-0 w-20 md:w-32 lg:w-56"
      />
      <Image
        aria-hidden
        alt="Wave"
        width={200}
        height={100}
        src={"/assets/asset_5.svg"}
        className="absolute z-30 -bottom-20 right-0 w-20 md:w-32 lg:w-56"
      />
    </Container>
  );
};

export default FeaturedTestimonial;
