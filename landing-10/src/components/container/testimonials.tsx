"use client"

import React, { useState } from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { TESTIMONIES } from "@/lib/enums";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimony = TESTIMONIES[currentIndex];

  return (
    <Container id="reviews" className="pb-6 m-14">
      <div className="mx-auto max-w-5xl text-center">

        <div className="flex items-start justify-center gap-10 mx-14">
          <button onClick={handlePrev} className="p-2">
            <ArrowLeftIcon className="w-8 h-8" />
          </button>

          <div className="flex flex-col items-center justify-center gap-4 text-start">
            <Typography className="text-lg md:text-xl">
              &rdquo;{currentTestimony.review}&rdquo;
            </Typography>

            <div className="flex flex-col items-center justify-center mt-10">
              <div className="relative w-16 h-16 md:w-24 md:h-24">
                <Image
                  src={currentTestimony.profilePic}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt={`Picture of ${currentTestimony.author}`}
                />
              </div>

              <Typography className="mt-2">
                @{currentTestimony.author.split(" ")[0]}
              </Typography>
            </div>
          </div>

          <button onClick={handleNext} className="p-2">
            <ArrowRightIcon className="w-8 h-8" />
          </button>
        </div>

      </div>
    </Container>
  );
};

export default Testimonials;