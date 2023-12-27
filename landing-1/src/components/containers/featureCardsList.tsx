import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
const FeatureCardsList = () => {
  return (
    <section className="px-4 w-full h-full my-8 md:my-6">
      {SHOWCASE_FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
};

export default FeatureCardsList;
