import React from "react";
import Container from "./container";
import { Typography } from "@components/ui/typography";

const ShowcaseFeatures = () => {
  const FEATURES_ONE = [
    "UI/UX Branding",
    "Branding",
    "Copywriting",
    "Landing Page",
    "Multipage website",
    "Web apps",
  ];
  return (
    <Container>
      <div className="w-full col-span-12 pt-20 lg:pt-[12rem] flex flex-col md:flex-row justify-between items-center">
        <div className="bg-[linear-gradient(180deg,#353535,hsla(0,0%,54%,0)_114.95%)] bg-clip-text flex flex-col justify-start items-center md:items-start space-y-2">
          {FEATURES_ONE.map((text) => (
            <Typography key={text} variant={"h4"} className="text-transparent">
              {text}
            </Typography>
          ))}
        </div>
        <div className="md:w-[400px] xl:w-[600px]">
          <Typography variant={"h1"} className="text-center">
            You name it, we ship it supafast
          </Typography>
        </div>
        <div className="bg-[linear-gradient(180deg,#353535,hsla(0,0%,54%,0)_114.95%)] bg-clip-text flex flex-col justify-start items-center md:items-end text-end space-y-2">
          {FEATURES_ONE.map((text) => (
            <Typography key={text} variant={"h4"} className="text-transparent">
              {text}
            </Typography>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ShowcaseFeatures;
