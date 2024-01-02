import React from "react";
import FeatureCard from "./featureCard";
import { SHOWCASE_FEATURES } from "@/lib/enums";
import Container from "./container";
const FeatureCardsList = () => {
  return (
    <Container classNames="bg-transparent overflow-visible">
      <section className="col-span-12 w-full overflow-visible bg-transparent h-full grid row-auto gap-8">
        {SHOWCASE_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </section>
    </Container>
  );
};

export default FeatureCardsList;
