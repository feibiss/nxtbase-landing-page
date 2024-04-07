import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import { SHOWCASE_FEATURES } from "@/lib/enums";

const Preview = () => {
  return (
    <Container classNames="bg-primary-muted">
      <div className="col-span-12 flex flex-col justify-start items-center py-20 max-w-screen-lg mx-auto">
        <div>
          <Typography variant={"h2"}>Built for SAAS creators</Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vero
            quos sequi natus iure expedita laboriosam placeat at ducimus
            aspernatur.
          </Typography>
        </div>
        <Tabs
          defaultValue={SHOWCASE_FEATURES[0].title}
          className="w-full mx-auto"
        >
          <TabsList className="max-w-screen-sm bg-secondary/5 mt-6 flex flex-grow">
            {SHOWCASE_FEATURES.slice(0, 3).map((feat, idx) => (
              <TabsTrigger
                key={feat.title}
                className="w-full flex-grow capitalize"
                value={feat.title}
              >
                {feat.subtitle}
              </TabsTrigger>
            ))}
          </TabsList>
          {SHOWCASE_FEATURES.map((feat) => (
            <TabsContent key={feat.title} value={feat.title}>
              <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center lg:space-x-24 space-y-8 py-10">
                <Image
                  width={400}
                  height={200}
                  alt={feat.subtitle}
                  className="rounded"
                  src={feat.imgSrc}
                />
                <div className="flex flex-col w-full items-start text-start justify-start space-y-4">
                  <Typography variant={"h4"} className="w-fit">
                    {feat.title}
                  </Typography>
                  <Typography className="w-2/3">{feat.desc}</Typography>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Container>
  );
};

export default Preview;
