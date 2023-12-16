import { Avatar } from "@/components/ui/avatar";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="text-center p-12 flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_50%_10%,#fff_40%,#60a5fa_120%)]"></div>
      <div className="w-fit flex items-center justify-center rounded-full p-1 gap-2 border-2 border-primary/20">
        <div className="inline-block bg-primary text-white border-2 border-indigo-400/20 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          New
        </div>
        <p className="mr-2 text-primary font-semibold ">
          Latest release related information.
        </p>
      </div>
      <h1 className="mt-4 text-5xl max-w-[80%] font-extrabold text-gray-900 sm:text-6xl">
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
        <CheckCircleIcon className="w-6 h-6 text-green-500" />
        <span className="text-gray-700">No credit card required</span>
        <CheckCircleIcon className="w-6 h-6 text-green-500" />
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
        <StarIcon className="w-5 h-5 text-yellow-400 hover:fill-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <span className="ml-2 text-gray-600">Loved by 570+ professionals</span>
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
