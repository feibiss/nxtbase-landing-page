import React from "react";
import FeatureCarousel from "./featureCarousal";
import { Typography } from "../ui/typography";

const Carousal = () => {
  return (
    <>
      <Typography
        variant={"h4"}
        className="flex justify-center items-center text-center pb-4 font-bold tracking-tighter mb-8"
      >
        Everything else you need
      </Typography>
      <FeatureCarousel />
    </>
  );
};

export default Carousal;
