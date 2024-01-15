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
      <div className="col-span-12 mt-8 flex h-full snap-start flex-col items-start justify-center gap-1 text-start md:mt-[var(--navbar-height)]">
        {/* ? Pill */}
        <div className="relative mb-8 flex w-fit items-center justify-center gap-2 rounded-full border-2 border-amber-400/20 dark:border-amber-300/50">
          <Link
            href="#"
            className={clsx(
              " flex h-6 items-center justify-start gap-2 rounded-full bg-amber-50 p-1 dark:bg-amber-900"
            )}
          >
            <p
              className={clsx(
                "h-full w-fit rounded-full bg-amber-400 px-2 text-xs text-primary-foreground "
              )}
            >
              New
            </p>
            <p className="text-sm font-semibold text-amber-600 ">
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

        <Button size={"lg"} className="mb-6 mt-2">
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>
        <div className="my-2 flex justify-center -space-x-2 ">
          {AVATARS.map(({ src, id }) => {
            return (
              <Avatar key={id} className="border-4 border-gray-400/50">
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
        </div>
      </div>
    </Container>
  );
}
