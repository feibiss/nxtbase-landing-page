import { Button } from "../ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Wrapper from "./wrapper";
import Image from "next/image";
import Marquee from "../ui/marquee";

export default function Hero() {
  return (
    <Wrapper classNames="relative ">
      <div className="flex w-full h-full flex-col md:flex-row md:justify-between items-start md:items-center gap-16 lg:gap-32">
        <div className="max-w-[580px] mt-12 mb-12 md:mt-24 w-full flex z-20 snap-start flex-col items-start justify-center lg:items-start gap-6 text-start">
          <div className="flex flex-col items-start justify-start w-full text-foreground">
            <Typography variant="h1">
              Your Digital Champion in the Eighth Dimension!
            </Typography>
            <Typography variant="p" className="max-w-sm md:max-w-lg text-start">
              Attention-grabbing alert! Brace yourself for an epic description
              of how we rock at helping you out. Keep scrolling to be convinced.
            </Typography>
          </div>

          <div>
            {Array(4)
              .fill(1)
              .map((_, idx) => (
                <li
                  key={idx}
                  className="flex justify-start items-center space-x-4"
                >
                  <CheckIcon /> <p>Lorem ipsum dolor sit amet.</p>
                </li>
              ))}
          </div>

          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
            maiores!
          </Typography>

          <div className="flex justify-start items-center gap-4 pt-8">
            {" "}
            <Button variant={"default"}>
              <div className="flex w-fit items-center justify-between gap-2">
                <p className=" font-semibold">Get started for free</p>

                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
            <Button variant={"secondary"}>
              <div className="flex w-fit items-center justify-between gap-2">
                <p className="">All Services</p>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex relative w-full h-full min-h-96 justify-items-center justify-center col-span-12 items-center">
          <Image
            fill
            alt="Hero banner"
            src="8.svg"
            className="absolute inset-0 object-contain"
          />

          <Marquee
            fade
            numberOfCopies={5}
            direction="up"
            className="lg:min-w-[460px] max-h-[400px] m-auto grid lg:grid-cols-2 backdrop-blur-sm border border-slate-100/10 border-collapse p-4 rounded-lg overflow-hidden font-medium text-md"
          >
            {Array(6)
              .fill(1)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[220px] py-3 px-3 bg-gradient-to-t from-white/10 to-black/10 border border-slate-100/10 whitespace-nowrap shadow-lg rounded-t-md lg:rounded-tr-none"
                >
                  Feature {idx + 1}
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </Wrapper>
  );
}
