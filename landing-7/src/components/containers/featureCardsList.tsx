import React from "react";
import Container from "./container";
import { Card, CardContent, CardDescription } from "../ui/card";
import { CubeIcon, RocketIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

const FeatureCardsList = () => {
  return (
    <div className="flex relative w-full flex-col justify-start items-start bg-background py-20 ">
      <Container>
        <section className="col-span-12 row-auto grid h-full w-full overflow-visible bg-inherit space-y-8">
          <div className="flex flex-col justify-start items-start space-y-4 ">
            <Typography variant={"h2"} className=" font-body text-inherit">
              Features Portfolio
            </Typography>
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 mx-auto">
            {Array(6)
              .fill(1)
              .map((_, idx) => (
                <Card
                  key={idx}
                  className="p-8 overflow-hidden group max-h-[30rem] first-of-type:lg:col-span-2 flex flex-col items-start lg:items-center first-of-type:items-start last-of-type:items-start last-of-type:lg:col-span-2"
                >
                  <div className="size-10 rounded-sm bg-gray-200 shadow-md flex items-center justify-center text-primary">
                    <CubeIcon />
                  </div>
                  <CardContent className="p-0 flex group-first-of-type:flex-row group-last-of-type:flex-row flex-row lg:flex-col">
                    <div className="flex flex-col justify-start items-start space-y-8">
                      <Typography
                        variant={"h3"}
                        className="font-body pt-8 group-first-of-type:text-start group-last-of-type:text-start text-start lg:text-center w-full"
                      >
                        Feature {idx + 1}
                      </Typography>

                      <CardDescription className=" text-lg scroll-m-0 group-first-of-type:text-start group-last-of-type:text-start text-start lg:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </CardDescription>
                    </div>
                    <div className="size-20 mx-auto relative">
                      <div className="absolute size-20 top-0 left-0 -translate-x-1/2 translate-y-1/2  rounded-full bg-gradient-to-tr group-first:from-accent/80 group-last:from-accent/80 from-secondary/80 to-transparent"></div>{" "}
                      <RocketIcon className=" size-[90px] fill-primary font-thin text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FeatureCardsList;
