"use client";

import React from "react";
import { FAQ_QUESTIONS } from "@lib/enums";
import Container from "@ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Typography } from "../ui/typography";

const FAQ = () => {
  return (
    <Container classNames="py-0 bg-primary-100/20 dark:bg-primary-900/30 min-h-[75vh] md:min-h-[100vh] lg:min-h-[85vh] lg:h-fit pt-20 items-start">
      <div className="col-span-12 max-w-7xl w-full mx-auto flex justify-center items-center flex-col space-y-6 p-10 ">
        <Typography variant={"h2"}>Frequently asked questions.</Typography>
        <FeaturesAccordion />
      </div>
    </Container>
  );
};

export default FAQ;

export function FeaturesAccordion() {
  return (
    <div className="flex flex-col w-full max-w-5xl items-start space-y-10">
      <Accordion type="multiple" className="grid w-full">
        {FAQ_QUESTIONS.map(({ question, answer }) => {
          return (
            <AccordionItem
              defaultChecked={true}
              key={question}
              value={question}
            >
              <AccordionTrigger
                value={question}
                className="lg:text-xl text-black  dark:text-white w-full text-center font-medium "
              >
                {question}
              </AccordionTrigger>
              <AccordionContent defaultValue={answer}>
                <div className="text-white/60   text-start leading-7 w-full text-lg">
                  <Typography className="text-black/60 dark:text-white/60 text-start leading-7 w-full text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi repudiandae eaque quam sit, blanditiis iure fugiat rem
                    totam a aliquid adipisci sint placeat eligendi delectus
                    ducimus facere! Voluptas, necessitatibus culpa.
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
