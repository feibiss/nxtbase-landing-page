import { Button } from "@/components/ui/button";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function ContactCard() {
  return (
    <Container className="pt-20  bg-foreground dark:bg-secondary-background text-white">
      <div className="col-span-12 relative mx-auto h-fullflex flex-col justify-start items-center overflow-x-hidden w-full overflow-hidden">
        <div className=" bottom-0 flex min-h-[30rem] max-w-3xl mx-auto flex-col items-center justify-center px-4  ">
          <Typography
            variant={"h2"}
            className="text-center text-inherit mx-auto"
          >
            See if Nona is right for you. (It totally is.)
          </Typography>
          <Typography className="text-inherit mt-8 text-center">
            Get a guided tour through Nona, and find out how you and your team
            can change the way you source development, forever.
          </Typography>
          <Button size={"lg"} variant={"outline"} className="mt-16 py-10">
            <div className="flex w-full items-center justify-center gap-2 h-[7rem]">
              <p className="">Get started for free</p>
            </div>
          </Button>
        </div>
      </div>
    </Container>
  );
}
