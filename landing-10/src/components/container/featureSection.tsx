"use client";
import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { useScroll, useTransform, motion } from "framer-motion";
import { SHOWCASE_FEATURES } from "@/lib/enums";

const FeatureSection = () => {
  const { scrollYProgress } = useScroll();
  const transformX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const ODD_PARALLAX_PERC = -1.5;
  const EVEN_PARALLAX_PERC = -3;
  const oddtransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, ODD_PARALLAX_PERC * 500]
  );

  const eventransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [400, EVEN_PARALLAX_PERC * 750]
  );
  return (
    <Container id="features" className="pb-10 h-fit">
      <div className="max-w-5xl h-fit mx-auto flex flex-col lg:flex-row lg:items-center items-start">
        <Typography
          variant={"h3"}
          className="w-full mx-auto flex items-center justify-start text-start text-nowrap py-20 lg:px-0"
        >
          All the{" "}
          <div className="relative px-4 w-fit items-center justify-center flex">
            <p className="z-10 font-bold">Features you need</p>
          </div>
        </Typography>
        <div className="flex lg:hidden overflow-hidden items-center justify-center w-screen gap-8 min-w-screen pl-[260px]">
          {SHOWCASE_FEATURES.slice(0, 3).map((_, idx) => (
            <motion.div
              style={{ translateX: transformX }}
              key={idx}
              className="col-span-1 group w-full min-w-60 flex flex-col items-start justify-start gap-4"
            >
              <div className="min-h-60 relative aspect-square scale-100 transition-all group-hover:scale-105 bg-rose-50 w-full">
                <video
                  src={_.imgSrc}
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <Typography variant={"lead"} className="text-sm">
                  {_.subtitle}
                </Typography>
                <Typography className="capitalize">
                  Feature {idx + 1}
                </Typography>
              </div>

              <Typography className="font-semibold group-hover:underline group-hover:underline-offset-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography variant={"mutedText"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti illum iure ut veniam aliquam, voluptate natus optio
                quas harum odio.
              </Typography>
            </motion.div>
          ))}
        </div>
        <Button className="pt-20 lg:pt-0" variant={"link"}>
          Explore more features
        </Button>
      </div>

      <div className="max-w-5xl hidden lg:grid mx-auto [&>*:nth-child(2n+1)]:col-start-1 [&>*:nth-child(4n+3)]:col-start-4 [&>*:nth-child(4n+4)]:col-start-13 grid-cols-[repeat(20,_1fr)] gap-y-56 h-fit">
        {SHOWCASE_FEATURES.map((_, idx) => (
          <motion.div
            style={{
              translateY: idx % 2 === 0 ? oddtransformY : eventransformY,
            }}
            key={idx}
            className="col-span-8  group even:col-start-10 relative group min-w-40 flex flex-col items-start justify-start gap-4"
          >
            <div className="min-h-60 relative aspect-square scale-100 transition-all group-hover:scale-105 bg-rose-50 w-full">
              <video
                src={_.imgSrc}
                className="object-cover rounded-lg h-full w-full"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <Typography variant={"lead"}>{_.subtitle}</Typography>
              <Typography className="capitalize">Feature {idx + 1}</Typography>
            </div>

            <Typography className="font-semibold group-hover:underline group-hover:underline-offset-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant={"mutedText"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              illum iure ut veniam aliquam, voluptate natus optio quas harum
              odio.
            </Typography>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureSection;
