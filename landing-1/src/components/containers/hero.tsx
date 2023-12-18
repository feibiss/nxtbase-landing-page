import { Avatar } from "@/components/ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import {
  ArrowRightIcon,
  CheckCircledIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center p-12 flex flex-col items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:150px_180px] [mask-image:radial-gradient(ellipse_30%_40%_at_50%_55%,#000_70%,transparent_110%)]"></div>
      <div className="w-fit flex items-center justify-center rounded-full p-1 gap-2 border-2 border-primary/20">
        <Link
          href="#"
          className={clsx(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "gap-2 p-0 rounded-full h-fit bg-sky-50 px-0"
          )}
        >
          <p
            className={clsx(
              buttonVariants({ variant: "default" }),
              "text-xs px-2 rounded-full m-0 "
            )}
          >
            New
          </p>
          <p className="mr-2 text-primary text-sm font-semibold ">
            Latest release related information.
          </p>
        </Link>
      </div>
      <h1 className="mt-4 lg:text-8xl leading-tight  font-medium text-gray-900 text-5xl">
        The only LinkedIn content creation tool you’ll ever need
      </h1>
      <p className="mt-8 max-w-xl mx-auto text-base text-gray-500">
        Generate content ideas, high-quality LinkedIn posts, make eye-catching
        carousels, format for readability, and schedule easily—all in one place!
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
        <span className="text-gray-700">No credit card required</span>
        <CheckCircledIcon className="w-6 h-6 text-green-500" />
        <span className="text-gray-700">7-day free trial</span>
      </div>
      <div className="mt-6 flex justify-center space-x-1">
        <Avatar alt="User 1" src="/placeholder.svg?height=32&width=32" />
        <Avatar alt="User 2" src="/placeholder.svg?height=32&width=32" />
        <Avatar alt="User 3" src="/placeholder.svg?height=32&width=32" />
        <Avatar alt="User 4" src="/placeholder.svg?height=32&width=32" />
        <Avatar alt="User 5" src="/placeholder.svg?height=32&width=32" />
        <Avatar alt="User 6" src="/placeholder.svg?height=32&width=32" />
      </div>
      <div className="mt-2 flex justify-center items-center group">
        <StarFilledIcon className="w-5 h-5 text-yellow-400 hover:fill-yellow-400" />
        <StarFilledIcon className="w-5 h-5 text-yellow-400" />
        <StarFilledIcon className="w-5 h-5 text-yellow-400" />
        <StarFilledIcon className="w-5 h-5 text-yellow-400" />
        <StarFilledIcon className="w-5 h-5 text-yellow-400" />
        <span className="ml-2 text-gray-600">Loved by 570+ professionals</span>
      </div>
    </div>
  );
}
