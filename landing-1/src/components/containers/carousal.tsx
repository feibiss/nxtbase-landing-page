import React from "react";
import FeatureCarousel from "./featureCarousal";

const Carousal = () => {
  return (
    <>
      <h2 className="text-2xl text-foreground flex justify-center items-center text-center pb-4 font-bold tracking-tighter sm:text-4xl md:text-3xl mb-10">
        Everything else you need
      </h2>
      <FeatureCarousel />
    </>
  );
};

export default Carousal;
