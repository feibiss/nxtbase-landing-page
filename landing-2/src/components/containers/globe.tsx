import React from "react";
import Container from "./container";
import Image from "next/image";
import { Typography } from "../ui/typography";

const Globe = () => {
  return (
    <Container>
      <div className="mx-auto max-w-xl h-fit col-span-12 text-center flex flex-col justify-start items-center gap-4">
        <Typography variant={"h2"} className="text-lime-900">
          Built to scale with you
        </Typography>
        <Typography variant={"p"} className="">
          Nextbase is built for scale. Whether you are building a small app or
          an app to serve millions of users, Nextbase has all the tools you
          need.
        </Typography>
      </div>
    </Container>
  );
};

export default Globe;
