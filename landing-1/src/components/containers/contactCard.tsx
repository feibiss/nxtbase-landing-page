import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";

export default function ContactCard() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-sky-300  via-blue-200 bottom-0  to-transparent h-[30rem] w-[90vw] rounded-t-[5rem] my-24 pt-10">
      <h1 className="md:text-5xl text-3xl w-full text-center font-bold text-black pt-12 md:mb-10 mb-6">
        Grow on LinkedIn with Supergrow
      </h1>
      <p className="mt-4 md:text-xl text-base px-4 md:px-0 text-black max-w-3xl mx-auto text-center">
        Grow your personal brand on LinkedIn the simple, powerful, and
        affordable way with Supergrow. Hundreds of professionals and agencies
        trust Supergrow to save them time and help them grow their audience.
      </p>
      <Button
        className="mt-12 gap-2 pl-6 rounded-full py-6"
        variant="default"
        rounded={"full"}
      >
        Get started for free
        <div className="ml-auto h-10 w-10 rounded-full bg-white flex justify-center items-center text-primary">
          <ArrowRightIcon className="h-6 w-6" />
        </div>
      </Button>
      <div className="flex justify-center mt-12">
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
