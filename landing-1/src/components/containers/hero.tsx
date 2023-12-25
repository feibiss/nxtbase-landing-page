import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "../ui/button";
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
    <section className="text-center h-[calc(100vh-var(--navbar-height))] snap-start scroll-mt-[6rem] gap-2 flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:150px_180px] [mask-image:radial-gradient(ellipse_30%_40%_at_50%_55%,#000_70%,transparent_110%)]"></div>
      {/* ? Pill */}
      <div className="w-fit flex items-center justify-center rounded-full gap-2 border-2 border-amber-400/20 dark:border-amber-300/50">
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
      <Typography variant="h1" className="md:max-w-4xl lg:max-w-5xl max-w-3xl">
        A fancy looking hero text to catch your attention
      </Typography>
      <Typography
        variant="p"
        className="md:max-w-xl max-w-sm text-muted-foreground"
      >
        Great, now that we have your attention, we will actually talk about how
        we help you do the above. Mostly a brief description which explains our
        service to convince you to keep scrolling down.
      </Typography>

      <Button variant={"default"} className="my-4 w-fit px-2 py-0.5">
        <div className="flex w-fit justify-between items-center gap-2">
          <p className="">Get started for free</p>
          <div className=" bg-primary-foreground/80 dark:bg-primary-foreground/80 rounded-full h-6 w-6 text-primary flex justify-center items-center">
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </Button>
      <div className="flex justify-center space-x-2">
        <>
          <CheckCircledIcon className="w-6 h-6 text-green-500" />
          <span className="text-muted-foreground">No credit card required</span>
        </>
        <>
          {" "}
          <CheckCircledIcon className="w-6 h-6 text-green-500" />
          <span className="text-muted-foreground">7-day free trial</span>
        </>
      </div>
      <div className="flex justify-center -space-x-2 my-2">
        {AVATARS.map(({ src, id }) => {
          return (
            <Avatar key={id} className="border-4 border-muted">
              <AvatarImage src={src} className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          );
        })}
      </div>
      <div className="flex justify-center items-center group mt-2">
        {STARS.map((_, idx) => {
          return (
            <StarFilledIcon
              key={_ + idx}
              className="w-5 h-5 text-yellow-400 hover:fill-yellow-400"
            />
          );
        })}

        <span className="text-muted-foreground ml-2">
          Loved by 570+ professionals
        </span>
      </div>
    </section>
  );
}
