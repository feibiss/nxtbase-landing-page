import React from "react";
import Wrapper from "./wrapper";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

const Preview = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center m-auto px-6 md:px-10 lg:px-20 relative">
        <div
          aria-hidden
          className="absolute top-80 blur-3xl -z-10 -left-20 size-40 lg:size-[30rem] rounded-full bg-primary opacity-50"
        ></div>
        <div
          aria-hidden
          className="absolute top-40 blur-3xl -z-10 right-40 size-40 lg:size-[40rem] rounded-full bg-accent opacity-50"
        ></div>
        <div className="flex z-30 flex-col justify-start items-center gap-8 w-full mx-auto">
          <div className="flex flex-col justify-center items-center gap-4">
            {" "}
            <Typography variant={"h2"}>Get a bird&apos;s eye view.</Typography>
            <Typography variant={"h3"}>
              Dive into a wealth of data, neatly organized and easily navigable,
              ensuring you stay informed and empowered. From metrics to
              analytics, track your progress seamlessly and make informed
              decisions with confidence.
            </Typography>
          </div>
          <div className="inline-flex gap-4">
            <Button variant={"secondary"} disabled>
              npx start dev
            </Button>
            <Button variant={"secondary"}>Read the quick start guide</Button>
          </div>
        </div>
        <Image
          width={1920}
          height={1092}
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1703582349/admin-dashboard_pzonvt.webp"
          alt="Nextbase Dev Screenshot"
          className="
          mt-14 w-full
          rounded-lg shadow-none m-auto scale-80 origin-center
          pointer-events-none
          max-w-6xl
          border border-white/10
        "
        />
      </div>
    </Wrapper>
  );
};

export default Preview;
