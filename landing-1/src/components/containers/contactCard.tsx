import { Button } from "@/components/ui/button";

export default function ContactCard() {
  return (
    <div
      key="1"
      className="bg-gradient-to-b from-blue-100 to-transparent p-12 text-center rounded-t-3xl"
    >
      <h1 className="text-5xl font-bold text-black pt-20">
        Grow on LinkedIn with Supergrow
      </h1>
      <p className="mt-4 text-lg text-black max-w-md mx-auto text-justify">
        Grow your personal brand on LinkedIn the simple, powerful, and
        affordable way with Supergrow. Hundreds of professionals and agencies
        trust Supergrow to save them time and help them grow their audience.
      </p>
      <Button
        className="mt-8 bg-white text-[#00B0FF] hover:bg-gray-100"
        variant="default"
      >
        Get started for free
      </Button>
      <div className="flex justify-center space-x-4 mt-4">
        <CheckIcon className="text-black" />
        <span className="text-black">No credit card required</span>
        <CheckIcon className="text-black" />
        <span className="text-black">7-day free trial</span>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
