import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import Image from "next/image";

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <Container className="pb-10 bg-primary-background relative">
      <Image
        width={400}
        height={456}
        src="/assets/asset_1.svg"
        alt="Hero image"
        aria-hidden
        className="absolute -lg:top-20 w-40 md:w-56 lg:w-80 -right-6 top-6 md:top-0 md:right-0"
      />
      <Image
        width={200}
        height={456}
        src="/assets/asset_2.svg"
        alt="Hero image"
        className="absolute lg:top-48 md:left-0 top-96 w-40 md:w-56 lg:w-64 left-0"
        aria-hidden
      />
      <div className="col-span-12 w-full row-auto flex h-full snap-start flex-col items-center justify-start gap-1 text-center">
        <div className="h-12 w-full flex items-end justify-center">
          <p>NUNIO</p>
        </div>
        <Typography
          variant="h1"
          className="pt-24 lg:max-w-7xl text-balance xl:w-[1400px]"
        >
          We build top notch websites that<br></br> help your brand grow
          supafast{" "}
        </Typography>
        <Typography
          variant="subheading"
          className=" w-3/4 text-balance lg:max-w-[50%] my-6 mx-auto"
        >
          Great, now that we have your attention, we will actually talk about
          how we help you do the above. Mostly a brief description which
          explains our service to convince you to keep scrolling down.
        </Typography>

        <Button variant={"default"}>
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>

        <div className="group mt-4 flex flex-col items-center justify-center space-y-2">
          <span className="ml-2 text-black/60 dark:text-white/60">
            Craft your perfect website
          </span>
        </div>
      </div>
    </Container>
  );
}
