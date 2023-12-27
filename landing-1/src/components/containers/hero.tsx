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

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <section className="text-center h-[calc(100vh-var(--navbar-height))] md:h-[calc(100vh-var(--navbar-height)*2.5)] gap-1 snap-start scroll-mt-[6rem] flex flex-col items-center justify-center my-8 md:my-6">
      {/* ? Pill */}
      <div className="w-fit relative flex items-center mb-8 justify-center rounded-full gap-2 border-2 border-amber-400/20 dark:border-amber-300/50">
        <Link
          href="#"
          className={clsx(
            " rounded-full flex justify-start items-center h-6 gap-2 p-1 bg-amber-50 dark:bg-amber-900"
          )}
        >
          <p
            className={clsx(
              "text-xs rounded-full bg-amber-400 w-fit h-full px-2 text-primary-foreground "
            )}
          >
            New
          </p>
          <p className="text-amber-600 text-sm font-semibold ">
            Latest update details hook here.
          </p>
        </Link>
      </div>
      <Typography variant="h1" className="px-4 md:px-0 lg:max-w-5xl max-w-3xl">
        A fancy looking hero text to catch your attention
      </Typography>
      <Typography
        variant="p"
        className="px-4 md:px-0 md:max-w-lg max-w-sm text-muted-foreground my-2"
      >
        Great, now that we have your attention, we will actually talk about how
        we help you do the above. Mostly a brief description which explains our
        service to convince you to keep scrolling down.
      </Typography>

      <Button className="mb-4">
        <div className="flex w-fit justify-between items-center gap-2">
          <p className="">Get started for free</p>

          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </Button>
      <div className="flex justify-center space-x-2 gap-4 md:flex-row flex-col items-center">
        <div className="flex w-fit items-center justify-start gap-2">
          {" "}
          <CheckCircledIcon className="w-6 h-6 text-green-500" />
          <span className="text-muted-foreground">7-day free trial</span>
        </div>
        <div className="flex w-fit items-center justify-start gap-2">
          <CheckCircledIcon className="w-6 h-6 text-green-500" />
          <span className="text-muted-foreground">No credit card required</span>
        </div>
      </div>
      <div className="flex justify-center -space-x-2 my-2 ">
        {AVATARS.map(({ src, id }) => {
          return (
            <Avatar key={id} className="border-4 border-muted">
              <AvatarImage src={src} className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          );
        })}
      </div>
      <div className="flex justify-center items-center md:flex-row flex-col group mt-2">
        <div className="flex justify-start gap-1 mb-4 md:mb-0">
          {" "}
          {STARS.map((_, idx) => {
            return (
              <StarFilledIcon
                key={_ + idx}
                className="w-5 h-5 text-yellow-400 hover:fill-yellow-400"
              />
            );
          })}
        </div>

        <span className="text-muted-foreground ml-2">
          Loved by 570+ professionals
        </span>
      </div>
    </section>
  );
}
