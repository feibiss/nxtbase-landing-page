import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

const Vision = () => {
  return (
    <Container classNames="bg-primary dark:bg-card dark:text-white flex justify-between items-center overflow-hidden">
      <div className="col-span-12 flex md:flex-row flex-col justify-between">
        <div className="flex flex-col w-full md:w-1/2 justify-center relative items-start text-start space-y-16 py-20">
          <Typography
            variant={"h2"}
            className="text-start text-primary-foreground dark:text-white"
          >
            Our goal is to simply make the Internet better. Through speed,
            through performance, and through experience.
          </Typography>
          <Button variant={"secondary"}>Get Started</Button>
        </div>
        <div className="flex w-full md:w-1/2 h-full">
          <div className="h-full max-h-full w-[600px]  absolute right-0 md:-right-40">
            <Image
              width={600}
              height={512}
              alt="Contact Us Illustration"
              src="preview_spaceman.svg"
              className="absolute h-full inset-y-0 w-full max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Vision;
