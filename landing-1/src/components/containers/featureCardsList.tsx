import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import Container from "./container";
const FeatureCardsList = () => {
  return (
    <Container>
      <section className="col-span-12 w-full h-full">
        {SHOWCASE_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </section>
    </Container>
  );
};

export default FeatureCardsList;
