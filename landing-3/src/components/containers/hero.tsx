import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { AVATARS } from "@/lib/enums";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <Container classNames="">
      <div className="col-span-12 w-full row-auto flex h-full snap-start flex-col items-center justify-start gap-1 text-center">
        {/* ? Pill */}
        <div className="relative mb-4 flex w-fit items-center justify-center">
          <Link
            href="#"
            className={clsx(
              "group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden px-7 py-2 transition-all"
            )}
          >
            <p
              className={clsx(
                "text-sm font-base text-gray-400 [text-wrap:balance]"
              )}
            >
              Latest update details hook here.
            </p>
          </Link>
        </div>
        <Typography variant="h1">
          We build top notch websites that help your brand grow supafast
        </Typography>
        <Typography
          variant="p"
          className=" text-base/6 max-w-[50%] mx-auto font-normal text-white/60 md:text-xl/7 lg:text-2xl/8"
        >
          Great, now that we have your attention, we will actually talk about
          how we help you do the above. Mostly a brief description which
          explains our service to convince you to keep scrolling down.
        </Typography>

        <Button
          variant={"default"}
          className="inline-flex mt-4 text-md items-center w-fit cta-btn justify-center overflow-hidden whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-[inset_0_-4px_0_0_rgba(0,0,0,.25)] h-fit min-h-10 mb-4 rounded-xl bg-white p-3.5 lg:p-4 px-10 lg:px-16 text-md lg:text-lg font-bold text-primary tracking-tight cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out"
        >
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>

        <div className="group mt-2 flex flex-col items-center justify-center space-y-2">
          <div className="mb-4 flex justify-start gap-1 md:mb-0">
            {" "}
            {STARS.map((_, idx) => {
              return (
                <StarFilledIcon
                  key={_ + idx}
                  className=" size-5 text-white transition-all hover:text-gray-200 hover:size-6"
                />
              );
            })}
          </div>

          <span className="ml-2 text-muted-foreground">
            Loved by 570+ professionals
          </span>
        </div>
      </div>
    </Container>
  );
}
