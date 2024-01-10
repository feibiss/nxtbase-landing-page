"use client";
import React, { useState } from "react";
import Container from "./container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

const FeatureList = () => {
  return (
    <Container>
      <div className="flex col-span-12 w-full h-full flex-col justify-center items-center">
        <FeaturesAccordion />
      </div>
    </Container>
  );
};

export default FeatureList;

export function FeaturesAccordion() {
  const [currTab, setCurrTab] = useState<string>("");

  const ImageSrc =
    SHOWCASE_FEATURES.find(({ title }) => title === currTab)?.imgSrc ||
    SHOWCASE_FEATURES[0].imgSrc;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 ">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={currTab}
        onValueChange={setCurrTab}
      >
        {SHOWCASE_FEATURES.map(({ title, desc }) => {
          return (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-start justify-start gap-4">
                  <Typography>{desc}</Typography>
                  <Button variant={"secondary"} size={"sm"}>
                    Learn More
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      {/* Preview Images */}
      <div className="relative lg:col-span-2 -mb-6 aspect-[1735/990] w-full overflow-hidden rounded-t-2xl shadow-2xl lg:mt-10 lg:h-[500px] lg:w-[800px]">
        <video
          src={ImageSrc}
          className="absolute h-full object-cover blur-0"
          height={990}
          width={1770}
        />
      </div>
    </div>
  );
}
