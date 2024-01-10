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
    <Container>
      <div className="col-span-12 mt-8 flex h-full snap-start flex-col items-center justify-center gap-1 text-center md:mt-[var(--navbar-height)]">
        {/* ? Pill */}
        <div className="relative mb-8 flex w-fit items-center justify-center gap-2 rounded-full">
          <Link
            href="#"
            className={clsx(
              "group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
            )}
          >
            <p
              className={clsx(
                "text-sm font-semibold text-gray-700 [text-wrap:balance]"
              )}
            >
              Latest update details hook here.
            </p>
          </Link>
        </div>
        <Typography variant="h1">
          A fancy looking hero text to catch your attention
        </Typography>
        <Typography
          variant="p"
          className="my-2 max-w-sm px-4 text-muted-foreground md:max-w-lg md:px-0"
        >
          Great, now that we have your attention, we will actually talk about
          how we help you do the above. Mostly a brief description which
          explains our service to convince you to keep scrolling down.
        </Typography>

        <Button variant={"default"} className="mb-4">
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>
        <div className="flex flex-col items-center justify-center gap-4 space-x-2 md:flex-row">
          <div className="flex w-fit items-center justify-start gap-2">
            {" "}
            <CheckCircledIcon className="h-6 w-6 text-green-500" />
            <span className="text-muted-foreground">7-day free trial</span>
          </div>
          <div className="flex w-fit items-center justify-start gap-2">
            <CheckCircledIcon className="h-6 w-6 text-green-500" />
            <span className="text-muted-foreground">
              No credit card required
            </span>
          </div>
        </div>
        <div className="my-2 flex justify-center -space-x-2 ">
          {AVATARS.map(({ src, id }) => {
            return (
              <Avatar key={id} className="border-4 border-muted">
                <AvatarImage src={src} className="object-cover" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
        <div className="group mt-2 flex flex-col items-center justify-center md:flex-row">
          <div className="mb-4 flex justify-start gap-1 md:mb-0">
            {" "}
            {STARS.map((_, idx) => {
              return (
                <StarFilledIcon
                  key={_ + idx}
                  className="h-5 w-5 text-yellow-400 hover:fill-yellow-400"
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
