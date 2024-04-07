import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Wrapper from "./wrapper";

export default function ContactCard() {
  return (
    <Wrapper classNames="bg-gradient-to-br mt-12 rounded from-black/10 to-gray-900 border-2 border-gray-100/10 py-20 lg:py-32 relative">
      <div className="col-span-12 mx-auto flex flex-col md:flex-row justify-between items-center overflow-x-hidden w-full overflow-hidden">
        <div className="text-center md:ml-auto w-full flex flex-col justify-start items-center space-y-4">
          <Typography className="from-white" variant={"h2"}>
            Ready to start building?
          </Typography>
          <Typography variant={"h3"} className="text-gray-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, nihil.
          </Typography>
          <Button variant={"secondary"} className="mx-auto">
            <div className="flex w-full items-center justify-center gap-2">
              <p className="">Let&apos;s Talk</p>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
