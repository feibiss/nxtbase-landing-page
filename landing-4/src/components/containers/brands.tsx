import React from "react";
import { Typography } from "../ui/typography";
import Image from "next/image";

const Brands = () => {
  const BRANDS = [
    {
      id: "cal",
      src: "/cal.svg",
      alt: "Cal Logo",
    },
    {
      id: "chronicle",
      src: "/chronicle.svg",
      alt: "Chronicle Logo",
    },
    {
      id: "hashnode",
      src: "/hashnode.svg",
      alt: "Hashnode Logo",
    },

    {
      id: "perplexity",
      src: "/perplexity.svg",
      alt: "Perplexity Logo",
    },
    {
      id: "prisma",
      src: "/prisma.svg",
      alt: "Prisma Logo",
    },
    {
      id: "replicate",
      src: "/replicate.svg",
      alt: "Replicate Logo",
    },
    {
      id: "tinybird",
      src: "/tinybird.svg",
      alt: "Tinybird Logo",
    },
  ];
  return (
    <div className="flex flex-col row-span-1 col-span-12 items-center md:h-fit justify-start w-full space-y-4">
      <Typography className="text-xs text-muted-foreground">
        Trusted by top companies
      </Typography>
      <div className="flex justify-evenly items-center w-full flex-wrap lg:flex-nowrap mx-auto">
        {BRANDS.map(({ id, src, alt }) => {
          return (
            <Image
              key={id}
              src={src}
              className="h-8 md:h-12 blur-0 text-transparent transition-all col-span-1"
              width={220}
              height={182}
              alt={alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
