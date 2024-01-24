"use client";
import Container from "@components/containers/container";
import React from "react";
import { Typography } from "./typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { Button } from "./button";
import { SHOWCASE_FEATURES } from "@lib/enums";
import Image from "next/image";

const FAQ = () => {
  return (
    <Container>
      <div className="col-span-12 lg:pt-[12rem] space-y-6 p-10  bg-gradient-to-t from-[#1a1a1a] to-white/15 rounded-2xl ">
        <Typography variant={"h1"}>Questions? Answers.</Typography>

        <FeaturesAccordion />
      </div>
    </Container>
  );
};

export default FAQ;

export function FeaturesAccordion() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:space-x-20 lg:pt-10 space-y-10 lg:space-y-0 ">
      <Accordion
        type="multiple"
        className="grid md:w-2/3 divide-y divide-white/10"
      >
        {SHOWCASE_FEATURES.map(({ title, desc }, idx) => {
          return (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger className="lg:text-2xl text-white font-medium ">
                {title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-white/60 text-start leading-7 w-full text-lg">
                  <Typography className="text-white/60 text-start leading-7 w-full text-lg">
                    {desc}
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Preview Images */}

      <div className="relative lg:w-1/3 h-full">
        <Image
          alt="Contact us"
          src={"bolt-bg.svg"}
          className="w-full h-full object-cover blur-0"
          height={50}
          width={30}
        />
        <div className="p-5 md:p-10 absolute top-0 left-0 flex flex-col items-center justify-center text-center w-full h-full space-y-5">
          <Image
            className="w-[100px] xl:w-[150px] cursor-pointer"
            src="faq-memoji.svg"
            width={30}
            height={50}
            alt="FAQ Memoji"
          />
          <Typography className="lg:text-xl xl:text-2xl text-white font-medium ">
            {" "}
            Have more questions? Book a free call.
          </Typography>
          <Button className="rounded-xl bg-white p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out">
            {" "}
            Book a call
          </Button>
        </div>
      </div>
    </div>
  );
}
