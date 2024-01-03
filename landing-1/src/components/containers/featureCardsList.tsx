import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import Container from "./container";
const FeatureCardsList = () => {
  return (
    <Container classNames="bg-transparent overflow-visible">
      <section className="col-span-12 row-auto grid h-full w-full gap-8 overflow-visible bg-transparent">
        {SHOWCASE_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </section>
    </Container>
  );
};

export default FeatureCardsList;
