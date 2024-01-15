import React from "react";
import { FeatureCardV2 } from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import { Typography } from "../ui/typography";
const FeatureCardsList = () => {
  return (
    <section className="col-span-12  row-auto grid h-full w-full gap-8 overflow-visible">
      <div className="flex w-full justify-center items-center">
        <Typography
          variant={"h2"}
          className=" text-card-foreground text-center mb-8 text-pretty font-bold tracking-tighter dark:text-white"
        >
          Features
        </Typography>
      </div>
      {SHOWCASE_FEATURES.map((feature) => (
        <FeatureCardV2 key={feature.title} feature={feature} />
      ))}
    </section>
  );
};

export default FeatureCardsList;
