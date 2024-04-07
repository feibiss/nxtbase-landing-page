import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import Image from "next/image";
import { CAROUSAL_IMAGES } from "@/lib/enums";

const RecentWork = () => {
  return (
    <Container className="pt-20  bg-secondary-background text-black pb-40">
      <div className="relative mx-auto h-full max-w-5xl flex flex-col justify-start items-center overflow-x-hidden w-full overflow-hidden">
        <div className=" bottom-0 flex min-h-[30rem] mx-auto w-full flex-col items-center justify-center px-4  ">
          <Typography
            variant={"h2"}
            className="text-center text-inherit mx-auto"
          >
            Recent work
          </Typography>
          <Typography className="text-inherit mt-8 text-center">
            See the best work made with us.
          </Typography>
          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-8">
            {CAROUSAL_IMAGES.slice(0, 4).map((_, idx) => {
              return (
                <div
                  key={_.id}
                  className="bg-secondary-background relative col-span-2 md:col-span-1 object-contain flex justify-center items-center w-full min-h-80"
                >
                  <Image
                    alt="Recent Work"
                    fill
                    src={_.src}
                    className="rounded-none"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentWork;
