"use client";
import Container from "@containers/container";
import React from "react";
import { Typography } from "./typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { FAQ_QUESTIONS } from "@lib/enums";

const FAQ = () => {
  return (
    <Container id="faq" className="py-0 pb-20 pt-40 min-h-[50vh]">
      <div className="col-span-12 space-y-6 p-10 flex justify-start items-center flex-col">
        <Typography variant={"h2"}>FAQ</Typography>

        <FeaturesAccordion />
      </div>
    </Container>
  );
};

export default FAQ;

export function FeaturesAccordion() {
  return (
    <div className="flex flex-col items-center justify-start  w-full">
      <Accordion
        type="multiple"
        className="flex flex-col md:max-w-3xl w-full divide-y divide-white/10"
      >
        {FAQ_QUESTIONS.map(({ question, answer }) => {
          return (
            <AccordionItem
              key={question}
              value={question}
              className="w-full max-w-none"
            >
              <AccordionTrigger className="lg:text-2xl text-black dark:text-white w-full max-w-none font-medium ">
                {question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-black/60 dark:text-gray-100 text-start leading-7 w-full text-lg">
                  <Typography className="text-black/60 text-start leading-7 w-full text-lg">
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
