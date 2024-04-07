import React from "react";
import Wrapper from "./wrapper";
import { Typography } from "../ui/typography";
import { ArrowRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const Features = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center w-full text-center items-center gap-4 m-auto px-6 md:px-10 lg:px-20">
          {" "}
          <Typography variant={"h2"} className="w-full text-center">
            Everything that you would need, we shipped.
          </Typography>
          <Typography
            variant={"h3"}
            className="text-center text-balance w-full"
          >
            Constructing dependable backends can be quite challenging. Why spend
            weeks toiling over the creation of custom systems when there&apos;s
            a better solution? Our platform provides all the essential tools you
            need to effortlessly develop complex backend workflows. Join us and
            simplify your backend development journey today.
          </Typography>
        </div>
        <div className="mx-auto my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-20">
          {Array(9)
            .fill(1)
            .map((_, idx) => (
              <FeatureCard key={idx} />
            ))}
        </div>
        <Button variant={"secondary"}>
          Explore our documentation & guides
        </Button>
      </div>
    </Wrapper>
  );
};

const FeatureCard = () => {
  return (
    <div className="flex col-span-1 flex-col gap-6 text-sm text-slate-800 dark:text-slate-300 tracking-normal font-medium leading-normal">
      <div className="flex flex-col gap-3 items-start text-slate-800/80 dark:text-slate-400/80">
        <ReloadIcon className="size-6" />
        <span className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Feature
        </span>
      </div>
      <Typography className="leading-3 text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae
        error eaque, sunt tempora natus doloremque laudantium velit accusantium
        accusamus nobis odio incidunt neque illo provident animi libero magni
        repellendus.
      </Typography>
      <Button
        variant={"link"}
        className="text-indigo-500 dark:text-indigo-300 gap-2 hover:gap-4 transition-all text-start w-fit pl-0 hover:text-indigo-800 dark:hover:text-white hover:underline decoration-dotted underline-offset-4 decoration-slate-50/30"
      >
        <p>Learn more about this</p>
        <ArrowRightIcon className="size-4" />
      </Button>
    </div>
  );
};
export default Features;
