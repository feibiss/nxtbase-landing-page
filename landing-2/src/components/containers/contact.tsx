import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function ContactCard() {
  return (
    <Container classNames="mt-20 border-t border-gray-200 dark:border-gray-800 bg-card/20">
      <div className="col-span-12 relative mx-auto h-fullflex flex-col justify-start items-center overflow-x-hidden w-full overflow-hidden">
        <div className=" bottom-0 flex h-[30rem] w-full flex-col items-center justify-center  ">
          <Typography
            variant={"h2"}
            className="flex items-center justify-center text-center font-bold tracking-tighter"
          >
            Grow with NextBase
          </Typography>
          <Typography className="prose my-1 text-pretty px-4 text-center text-gray-800 md:px-0 dark:text-gray-300">
            Build your next SAAS project with a modern stack of Next.js 14+,
            Supabase, Stripe and Typescript, and save 4+ months of development
            time ~ $18000
          </Typography>
          <Button className="my-4 mt-8">
            <div className="flex w-fit items-center justify-between gap-2">
              <p className="">Get started for free</p>

              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Button>
          <div className="mt-4 flex justify-center">
            <CheckIcon className="mr-2 h-6 w-6 text-green-500" />
            <span className="mr-8 font-semibold text-foreground">
              No credit card required
            </span>
            <CheckIcon className="mr-2 h-6 w-6 text-green-500 " />
            <span className="font-semibold text-foreground">
              7-day free trial
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
