import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import Banner from "./banner";
import Brands from "./brands";

export default function Hero() {
  return (
    <Container classNames="bg-primary">
      <div className="col-span-12 mt-8 flex h-full snap-start flex-col items-center justify-center gap-1 text-center md:mt-[var(--navbar-height)] pt-20">
        <Typography variant="h1">
          A fancy looking hero text to catch your attention
        </Typography>
        <Typography
          variant="p"
          className="my-2 max-w-sm px-4 text-muted-foreground md:max-w-lg md:px-0"
        >
          Attention-grabbing alert! Brace yourself for an epic description of
          how we rock at helping you out. Keep scrolling to be convinced.
        </Typography>

        <Button className="mb-4">
          <div className="flex w-fit items-center justify-between gap-2">
            <p className="">Get started for free</p>

            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
      <Brands />
      <Banner />
    </Container>
  );
}
