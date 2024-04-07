import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { TESTIMONIES } from "@/lib/enums";

const Testimonials = () => {
  return (
    <Container id="reviews" className="pb-20">
      <div className="mx-auto max-w-5xl">
        <Typography
          variant={"h3"}
          className="w-full text-start flex justify-start items-center text-nowrap py-20"
        >
          In our
          <div className="relative px-4 w-fit h-fit items-center justify-center flex">
            <p className="z-10 font-bold h-full w-full">client&apos;s words</p>
          </div>
        </Typography>
        <div className="flex flex-col lg:hidden items-start justify-start gap-8 min-w-screen pt-6">
          {TESTIMONIES.map((_, idx) => (
            <div
              key={idx}
              className="col-span-1 group w-full flex flex-col items-start justify-start border-b-[1px] gap-4 pb-6"
            >
              <Image
                width={80}
                height={80}
                alt={`Picture of ${_.author}`}
                src={"next.svg"}
                className="w-16 "
              />
              <Typography>&rdquo;{_.review.slice(0, 100)}&rdquo;</Typography>

              <div className="flex justify-start items-center w-full gap-4">
                <Image
                  width={40}
                  height={40}
                  alt={`Picture of ${_.author}`}
                  src={_.profilePic}
                  className="aspect-square w-16"
                />
                <span>
                  {_.author} / {_.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-cols-[repeat(20,1fr)] items-start justify-start gap-8 min-w-screen pt-6">
          {[...TESTIMONIES, ...TESTIMONIES].map((_, idx) => (
            <div
              key={_.author + idx}
              className="col-span-1 lg:col-span-12 row-span-1 odd:col-start-10 group w-full flex flex-col items-start justify-start border-b-[1px] gap-4 pb-6"
            >
              <Image
                width={80}
                height={80}
                alt={`Picture of ${_.author}`}
                src={"next.svg"}
                className="w-16 "
              />
              <Typography>{_.review.slice(0, 100)}</Typography>

              <div className="flex justify-start items-center w-full gap-4">
                <Image
                  width={40}
                  height={40}
                  alt={`Picture of ${_.author}`}
                  src={_.profilePic}
                  className="aspect-square w-16"
                />
                <span>
                  {_.author} / {_.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
