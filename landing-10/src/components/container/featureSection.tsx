"use client";
import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { useScroll, useTransform, motion } from "framer-motion";
import { SHOWCASE_FEATURES } from "@/lib/enums";

const FeatureSection = () => {
  const { scrollYProgress } = useScroll();
  const transformX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <Container id="features" className="pb-10 h-fit">
      <div className="px-4 md:px-24">
        <Typography
          variant={"h3"}
          className="w-full flex items-center justify-start text-start pt-20 pb-2 font-bold text-[#064e3b]"
        >
          Features
        </Typography>
      </div>

      <div className="flex overflow-x-auto items-start justify-start px-4 md:px-24 mt-4">
        {SHOWCASE_FEATURES.slice(0, 5).map((feature, idx) => (
          <motion.div
            style={{ translateX: transformX }}
            key={idx}
            className="w-[300px] md:w-[350px] px-0 py-4 ml-12 flex-none"
          >
            <div className="h-[200px] md:h-[250px] relative scale-100 transition-all group-hover:scale-10 w-full">
              <video
                src={feature.imgSrc}
                className="object-cover rounded-lg h-full w-full"
              />
            </div>

              <Typography variant={"p"} className="text-lg mt-4 font-bold">
                {feature.subtitle}
              </Typography>
              <Typography variant={"lead"} className="font-light text-xs md:text-lg group-hover:underline group-hover:underline-offset-4 mt-2">
                {feature.desc}
              </Typography>
        
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default FeatureSection;