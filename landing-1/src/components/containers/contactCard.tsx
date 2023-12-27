import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";

export default function ContactCard() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-sky-300 dark:from-indigo-800  via-blue-200 dark:via-indigo-700/50 via-20% bottom-0  to-transparent h-[30rem] px-8 md:px-24 lg:px-72 rounded-t-[5rem] my-12 pt-10">
      <Typography
        variant={"h4"}
        className="flex justify-center items-center text-center font-bold tracking-tighter"
      >
        Grow with NextBase
      </Typography>
      <Typography className="prose text-center text-pretty my-1 text-gray-800 dark:text-gray-300">
        Build your next SAAS project with a modern stack of Next.js 14+,
        Supabase, Stripe and Typescript, and save 4+ months of development time
        ~ $18000
      </Typography>
      <Button className="mt-8 my-4">
        <div className="flex w-fit justify-between items-center gap-2">
          <p className="">Get started for free</p>

          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </Button>
      <div className="flex justify-center mt-4">
        <CheckIcon className="text-green-500 h-6 w-6 mr-2" />
        <span className="text-foreground font-semibold mr-8">
          No credit card required
        </span>
        <CheckIcon className="text-green-500 h-6 w-6 mr-2 " />
        <span className="text-foreground font-semibold">7-day free trial</span>
      </div>
    </div>
  );
}
