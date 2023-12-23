import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
const FeatureCardsList = () => {
  return (
    <section className="snap-start">
      {SHOWCASE_FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
};

export default FeatureCardsList;
