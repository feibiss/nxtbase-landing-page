import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div className="bg-white text-center p-12">
      <div className="inline-block bg-[#00f2fe] text-[#0033cc] rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
        New
      </div>
      <h1 className="mt-4 text-5xl font-extrabold text-gray-900 sm:text-6xl">
        The only LinkedIn content creation tool you’ll ever need
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
        Generate content ideas, high-quality LinkedIn posts, make eye-catching
        carousels, format for readability, and schedule easily—all in one place!
      </p>
      <Button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Get started for free
        <ArrowRightIcon className="ml-2 w-4 h-4" />
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
      <div className="mt-2 flex justify-center items-center">
        <StarIcon className="w-5 h-5 text-yellow-400" />
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
