import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function ContactCard() {
  return (
    <Container classNames="mt-20 pt-20 lg:pt-[12rem]  bg-card/20">
      <div className="col-span-12 relative mx-auto h-fullflex flex-col justify-start items-center overflow-x-hidden w-full overflow-hidden">
        <div className=" bottom-0 flex min-h-[30rem] max-w-5xl mx-auto flex-col items-center justify-center px-4  ">
          <Typography variant={"h2"} className="text-center mx-auto">
            Build your next SAAS project with a modern stack and save 4+ months
            of development time ~ $18000
          </Typography>
          <Button
            size={"lg"}
            variant={"outline"}
            className="mt-8 hover:rounded-xl"
          >
            <div className="flex w-full items-center justify-center gap-2 h-[7rem]">
              <p className="">Get started for free</p>

              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
}
