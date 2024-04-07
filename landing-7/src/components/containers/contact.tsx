import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import Image from "next/image";

export default function ContactCard() {
  return (
    <Container classNames="bg-gradient-to-r from-accent to-secondary py-20 relative">
      <div className="col-span-12 mx-auto flex flex-col md:flex-row justify-between items-center overflow-x-hidden w-full overflow-hidden">
        <div className="h-full max-h-full w-full md:w-[600px] absolute -bottom-40 md:bottom-0 md:-left-20 lg:left-0">
          <Image
            width={600}
            height={512}
            alt="Contact Us Illustration"
            src="cta_spaceman.svg"
            className="h-full w-full"
          />
        </div>

        <div className="flex w-fit pb-80 md:ml-auto md:pb-0 mx-auto flex-col items-center justify-center px-4 space-y-8  ">
          <div className="text-center md:ml-auto w-full md:w-1/2 space-y-4">
            <Typography variant={"h2"} className="text-balance">
              Interested in having your SAAS deployed with us?
            </Typography>
            <Button variant={"secondary"} className="mx-auto">
              <div className="flex w-full items-center justify-center gap-2">
                <p className="">Let&apos;s Talk</p>

                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
