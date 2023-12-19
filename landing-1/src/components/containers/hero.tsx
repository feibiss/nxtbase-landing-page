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

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <div className="text-center p-12 flex flex-col items-center justify-center">
      <div className="absolute  -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:150px_180px] [mask-image:radial-gradient(ellipse_30%_40%_at_50%_55%,#000_70%,transparent_110%)]"></div>
      <div className="w-fit flex items-center justify-center rounded-full gap-2 border-2 border-primary/20 p-1">
        <Link
          href="#"
          className={clsx(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 px-0 py-0 rounded-full flex justify-start items-center h-fit w-full bg-sky-50 dark:bg-muted"
          )}
        >
          <p
            className={clsx(
              buttonVariants({ variant: "default" }),
              "text-xs px-2 rounded-full m-0 text-primary-foreground "
            )}
          >
            New
          </p>
          <p className="mr-2 text-primary text-sm font-semibold ">
            Latest update details hook here.
          </p>
        </Link>
      </div>
      <h1 className="mt-4 lg:text-8xl leading-tight  font-medium text-foreground text-5xl">
        A fancy looking hero text to catch your attention
      </h1>
      <p className="mt-8 max-w-xl mx-auto text-base text-muted-foreground">
        Great, now that we have your attention, we will actually talk about how
        we help you do the above. Mostly a brief description which explains our
        service to convince you to keep scrolling down.
      </p>
      <Button
        className="rounded-full bg-primary cursor-pointer mt-8 p-0"
        size={"lg"}
      >
        <div className="flex w-full justify-between gap-4 items-center px-1 py-4">
          <p className="pl-4">Get started for free</p>
          <div className="bg-white rounded-full p-2 h-8 w-8 text-primary flex justify-center items-center">
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </Button>
      <div className="mt-6 flex justify-center space-x-2">
        <CheckCircledIcon className="w-6 h-6 text-green-500" />
        <span className="text-muted-foreground">No credit card required</span>
        <CheckCircledIcon className="w-6 h-6 text-green-500" />
        <span className="text-muted-foreground">7-day free trial</span>
      </div>
      <div className="mt-6 flex justify-center -space-x-2">
        {AVATARS.map(({ src, id }) => {
          return (
            <Avatar key={id} className="border-4 border-muted">
              <AvatarImage src={src} className="object-cover" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          );
        })}
      </div>
      <div className="mt-2 flex justify-center items-center group">
        {STARS.map((_, idx) => {
          return (
            <StarFilledIcon
              key={_ + idx}
              className="w-5 h-5 text-yellow-400 hover:fill-yellow-400"
            />
          );
        })}

        <span className="ml-2 text-muted-foreground">
          Loved by 570+ professionals
        </span>
      </div>
    </div>
  );
}
