import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
const FeatureCardsList = () => {
  return (
    <section className="px-4 w-full h-full border-4">
      {SHOWCASE_FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
};

export default FeatureCardsList;
