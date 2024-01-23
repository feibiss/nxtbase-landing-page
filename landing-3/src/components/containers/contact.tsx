import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function ContactCard() {
  return (
    <Container classNames="mt-20 pt-20 lg:pt-[12rem]  bg-card/20">
      <div className="col-span-12 relative mx-auto h-fullflex flex-col justify-start items-center overflow-x-hidden w-full overflow-hidden">
        <div className=" bottom-0 flex h-[30rem] w-full flex-col items-center justify-center  ">
          <Typography variant={"h1"} className="text-center mx-auto">
            Build your next SAAS project with a modern stack and save 4+ months
            of development time ~ $18000
          </Typography>
          <Button
            variant={"outline"}
            className="my-4 bg-transparent mt-8 rounded-xl border p-4 h-[4rem] md:h-[7rem] lg:px-16 text-2xl font-bold text-white cta-btn cursor-pointer hover:scale-105 transition duration-300 ease-out w-full hover:bg-white hover:text-primary"
          >
            <div className="flex w-fit items-center justify-between gap-2">
              <p className="">Get started for free</p>

              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
}
