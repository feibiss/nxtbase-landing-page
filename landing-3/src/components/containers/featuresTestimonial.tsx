import React from "react";
import Container from "./container";
import Image from "next/image";
import { featuredTestimonial } from "@lib/enums";

const FeaturedTestimonial = ({}) => {
  return (
    <Container>
      <div className="mx-auto col-span-12  pt-20 lg:pt-[12rem] flex flex-col items-center justify-center gap-8 text-sm leading-6 text-gray-900 dark:text-gray-300 xl:mx-0 xl:max-w-none">
        <figure className="col-span-2 w-4/5 mx-auto hidden sm:block sm:rounded-2xl sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 space-y-10">
          <blockquote className="text-white/60 font-normal text-2xl lg:text-4xl xl:text-4xl leading-normal w-full lg:leading-relaxed xl:leading-normal ">
            <p>{`“${featuredTestimonial.body}”`}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center w-full gap-x-4 border-t border-gray-900/10 px-6">
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
    </Container>
  );
};

export default FeaturedTestimonial;
