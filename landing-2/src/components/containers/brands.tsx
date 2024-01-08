import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";

const Brands = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-start">
        <Typography>Brands with us</Typography>
        <div className="grid grid-cols-6 grid-rows-2"></div>
      </div>
    </Container>
  );
};

export default Brands;
