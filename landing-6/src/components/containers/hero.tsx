import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container classNames="bg-background flex flex-col lg:flex-row justify-start lg:justify-between items-center">
      <div className=" col-span-12 lg:col-span-6 flex h-[50vh] lg:h-[80vh] z-10 snap-start flex-col items-start justify-start lg:items-start space-y-8 py-4 text-start md:mt-[var(--navbar-height)] pt-20">
        <div className="flex flex-col items-start justify-start space-y-2">
          <Typography variant="h1">
            A fancy looking hero text to catch your attention
          </Typography>
          <Typography
            variant="p"
            className="max-w-sm text-muted-foreground md:max-w-lg text-start"
          >
            Attention-grabbing alert! Brace yourself for an epic description of
            how we rock at helping you out. Keep scrolling to be convinced.
          </Typography>
        </div>

        <Button className="">
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
      <div className="col-span-12 flex-grow  lg:col-span-6 w-full flex justify-center items-center h-full">
        <div className="h-full min-h-[40rem] rounded-md overflow-hidden w-full flex justify-center items-center">
          <Image
            src="https://images.unsplash.com/photo-1612198273689-b437f53152ca?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            width={500}
            height={600}
            className="object-cover aspect-[3/4] rounded "
          />
        </div>
      </div>
    </Container>
  );
}
