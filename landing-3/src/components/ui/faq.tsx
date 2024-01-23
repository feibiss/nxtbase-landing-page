import Container from "@components/containers/container";
import React from "react";
import { Typography } from "./typography";

const FAQ = () => {
  return (
    <Container>
      <div className="pt-20 col-span-12 lg:pt-[12rem] space-y-6 p-10  bg-gradient-to-t from-[#1a1a1a] to-white/55 rounded-2xl ">
        <Typography variant={"h1"}>Questions? Answers.</Typography>
      </div>
    </Container>
  );
};

export default FAQ;
