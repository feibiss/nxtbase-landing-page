import Container from "@components/containers/container";
import React from "react";
import { Typography } from "./typography";

const Questions = () => {
  return (
    <Container>
      <div className="flex flex-col items-center col-span-12 pt-20 justify-between ">
        <div className="flex flex-row items-center justify-center text-center mb-10 md:w-1/2">
          <Typography variant={"h1"}>
            Can&apos;t I just hire a full time developer?
          </Typography>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20  w-3/4">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </Container>
  );
};

const QuestionCard = () => {
  return (
    <div className="text-white text-3xl flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <Typography className="text-xl lg:text-2xl font-semibold">
          Full-time designers are expensive.
        </Typography>
        <Typography className="text-lg lg:text-xl text-[#A3A3A3]">
          Full-time designers can be expensive due to high salaries (over
          $100k), plus benefits and vacation days.
        </Typography>
      </div>
    </div>
  );
};

export default Questions;
