"use client";
import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";
import { useScroll, useTransform, motion } from "framer-motion";

const Blogs = () => {
  const { scrollYProgress } = useScroll();
  const transformX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const LARGE_BLOGS = [
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153210/pexels-quang-nguyen-vinh-6415966_eshhkw.webp",
      label: "Sustainable Tech Breakthroughs",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153209/pexels-marcin-jozwiak-2564360_wrnqxa.webp",
      label: "Eco Innovations: Our Technical Vision",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153206/pexels-pixabay-414837_dgmara.webp",
      label: "Green Engineering Unveiled",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153205/pexels-google-deepmind-17485678_bcnirm.webp",
      label: "Tech-Driven Sustainability Solutions",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153203/pexels-hasan-zahra-2118560_m8y891.webp",
      label: "Sustainability Through Technical Ingenuity",
    },
    {
      img: "https://res.cloudinary.com/dkqrmlxlg/image/upload/w_600,h_400/v1709153203/pexels-scott-webb-137602_zxjbre.webp",
      label: "Innovative Green Technologies: Our Startup's Focus",
    },
  ];
  const SECOND_PARALLAX_PERC = -2;
  const firstTransformY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1.1 * 100]
  );

  const secondTransformY = useTransform(
    scrollYProgress,
    [0, 0.75],
    [600, -1.2 * 100]
  );

  const thirdTransformY = useTransform(
    scrollYProgress,
    [0, 0.75],
    [900, -1.3 * 100]
  );
  return (
    <Container id="blogs" className="pb-10 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl">
        <Typography
          variant={"h3"}
          className="w-full text-start flex justify-start items-start text-nowrap py-20"
        >
          What have we{" "}
          <div className="relative px-4 w-fit h-fit items-center justify-center flex">
            <p className="z-10 font-bold h-full w-full">been upto</p>
          </div>
        </Typography>
        <div className="flex lg:hidden items-center justify-start gap-8 min-w-screen pt-6 pl-[600px]">
          {LARGE_BLOGS.slice(0.3).map((_, idx) => (
            <motion.div
              style={{ translateX: transformX }}
              key={idx}
              className="col-span-1 group w-full h-full bg-white dark:bg-transparent min-w-72 flex flex-col items-start justify-start gap-4"
            >
              <div className="min-h-40 bg-rose-50 w-full">
                <Image
                  src={_.img}
                  width={600}
                  height={400}
                  className="object-cover"
                  alt={_.label}
                />
              </div>
              <div className="flex justify-start items-start pl-4 py-8 flex-col gap-4 w-full">
                <Typography className="capitalize">{_.label}</Typography>
                <Typography variant={"mutedText"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti illum iure ut veniam aliquam, voluptate natus optio
                  quas harum odio.
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:grid [&>*:nth-child(3n+1)]:mt-8 [&>*:nth-child(3n+2)]:mt-16 [&>*:nth-child(3n+3)]:mt-24 grid-cols-[repeat(20,1fr)] justify-start gap-8 min-w-screen pt-6">
          {LARGE_BLOGS.map((_, idx) => (
            <motion.div
              style={{
                translateY: [0, 3].includes(idx)
                  ? firstTransformY
                  : [1, 4].includes(idx)
                  ? secondTransformY
                  : thirdTransformY,
              }}
              key={idx}
              className="col-span-6 group w-full h-fit bg-white dark:bg-transparent min-w-72 flex flex-col items-start justify-start gap-4"
            >
              <div className="min-h-40 bg-rose-50 w-full relative">
                <Image
                  src={_.img}
                  width={600}
                  height={400}
                  className="object-cover"
                  alt={_.label}
                />
              </div>
              <div className="flex justify-start items-start px-4 py-8 flex-col gap-4 w-full">
                <Typography className="capitalize">{_.label}</Typography>
                <Typography variant={"mutedText"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deleniti illum iure ut veniam aliquam, voluptate natus optio
                  quas harum odio.
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
        <Button className="pt-20" variant={"link"}>
          More case studies
        </Button>
      </div>
    </Container>
  );
};

export default Blogs;
