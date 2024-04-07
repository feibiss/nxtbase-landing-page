import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import Brands from "./brands";

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <Container className="min-h-[100dvh] bg-gray-100 relative">
      <video
        autoPlay
        className="absolute inset-0 mix-blend-darken bg-blend-darken h-full w-full object-cover z-10"
        controls={false}
        muted
        loop
        preload=""
        src="https://res.cloudinary.com/dkqrmlxlg/video/upload/v1709148172/Free_4K_Stock_Videos_Full_HD_Video_Clips_to_Download_dj2tjh.mp4"
      />
      <div className="absolute inset-0 bg-blend-darken bg-gradient-to-t z-20 from-emerald-900/50 dark:from-emerald-500/60 via-black/50 to-transparent"></div>
      <div className="col-span-12 relative text-white z-40 lg:max-w-5xl mx-auto w-full row-auto flex h-full snap-start flex-col items-start justify-center  lg:justify-center gap-1 md:px-6 lg:px-0 text-center">
        <div className="h-12 absolute top-0 z-30 w-full flex items-end justify-center">
          <p className="font-semibold text-xl">Decadant.</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <Typography
            variant="h1"
            className="pt-32 text-inherit w-1/2 md:w-full text-start lg:mx-auto lg:max-w-5xl"
          >
            <span className="text-primary">Own</span> the change
          </Typography>
          <Typography
            variant="subheading"
            className=" w-3/4 text-white/80 lg:max-w-[50%] text-start my-6"
          >
            We design, build, and scale all things digital for startups,
            scale-ups, and enterprises
          </Typography>

          <Button variant={"default"}>
            <div className="flex w-fit items-center justify-between gap-2">
              <p className="">Get started for free</p>

              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Button>

          <div className="group mt-4 flex flex-col items-start justify-center gap-6">
            <span className="text-white/60 text-start w-full dark:text-white/60">
              Trusted By
            </span>
            <Brands />
          </div>
        </div>
      </div>
    </Container>
  );
}
