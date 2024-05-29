"use client";
import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import { CubeIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const CoreFeatures = () => {
  return (
    <Container id="features" className="pb-10 h-fit">
      
      <div className="px-4 md:px-24">
        <Typography
          variant={"h3"}
          className="w-full flex items-center justify-start text-start pt-20 pb-2 text-[#064e3b]"
        >
          Core Features
        </Typography>
        <Typography variant={"p"} className="w-full md:w-[40%] mb-12 text-start font-light">
            Nextbase is built for scale. Whether you are building a small app or a huge app, Nextbase has all the tools you need.
          </Typography>
      </div>

      <div className="flex flex-col md:flex-row max-w-[70%] px-4 md:px-24">
        <div className="w-full md:w-full">
         
          {SHOWCASE_FEATURES.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="pb-8">
              
              <Typography
                variant={"h5"}
                className="w-full flex items-center justify-start text-start gap-2 font-medium"
              >
                <CubeIcon className="w-6 h-6"/>
                {feature.title}
              </Typography>
              <Typography variant={"p"} className="w-full mt-2 md:w-4/5 font-light">
                {feature.desc}
              </Typography>
            </div>
          ))}
        </div>
        <div className="hidden w-full md:w-fit md:flex items-start justify-center mt-10 md:mt-0 md:mx-auto">
          <div className="top-20">
            <Image src="/public/assets/hero.png" alt="Core Features" width={561} height={668} className="w-auto h-auto"/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoreFeatures;
