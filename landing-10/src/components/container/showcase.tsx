"use client";
import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";
import { useScroll, useTransform, motion } from "framer-motion";
import { CAROUSAL_IMAGES } from "@/lib/enums";

const Showcase = () => {
  const { scrollYProgress } = useScroll();
  const transformX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const firstTransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1.1 * 100]
  );

  const secondTransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [600, -1.2 * 200]
  );

  const thirdTransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [1000, -1.3 * 200]
  );
  return (
    <Container className="pb-20 bg-gray-100 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <Typography
          variant={"h3"}
          className="w-full flex text-nowrap flex-nowrap justify-start items-start text-start pt-20 pb-10"
        >
          Dive deeper
          <div className="relative text-nowrap flex-nowrap px-4 w-fit h-fit items-center justify-center flex">
            <p className="z-10 font-bold h-full w-full">into our works.</p>
          </div>
        </Typography>
        <Typography className="w-4/5 text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          illum iure ut veniam aliquam, voluptate natus optio quas harum odio.
        </Typography>
        <div className="flex lg:hidden items-center justify-start gap-8 min-w-screen pt-10 pl-[800px]">
          {CAROUSAL_IMAGES.slice(0, 3).map((_, idx) => (
            <motion.div
              style={{ translateX: transformX }}
              key={idx}
              className="col-span-1 group w-full bg-white dark:bg-dark-950 min-w-60 flex flex-col items-start justify-start"
            >
              <div className="relative min-h-40 z-10 object-contain overflow-hidden bg-rose-50 w-full">
                <Image
                  src={_.src}
                  fill
                  className="object-contain max-w-full h-full"
                  alt="Showcase "
                />
              </div>

              <Typography className="w-full z-20 px-4 py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                unde.
              </Typography>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:grid [&>*:nth-child(3n+1)]:mt-8 [&>*:nth-child(3n+2)]:mt-16 [&>*:nth-child(3n+3)]:mt-24 grid-cols-[repeat(20,1fr)] justify-start gap-8 min-w-screen pt-24">
          {CAROUSAL_IMAGES.map((_, idx) => (
            <motion.div
              style={{
                translateY: [0, 3].includes(idx)
                  ? firstTransformY
                  : [1, 4].includes(idx)
                  ? secondTransformY
                  : thirdTransformY,
              }}
              key={idx}
              className="col-span-6 group w-full h-fit bg-transparent min-w-60 flex flex-col items-start justify-start"
            >
              <div className="min-h-40 bg-rose-50 w-full relative">
                <Image
                  src={_.src}
                  fill
                  className="object-cover"
                  alt="Showcase "
                />
              </div>

              <Typography className="w-full px-4 py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                unde.
              </Typography>
            </motion.div>
          ))}
        </div>
        <Button className="pt-20" variant={"link"}>
          More about this
        </Button>
      </div>
    </Container>
  );
};

export default Showcase;
