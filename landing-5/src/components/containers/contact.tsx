import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "@ui/container";

export default function ContactCard() {
  return (
    <Container classNames="bg-primary-100/20 dark:bg-primary-900/10 py-20">
      <div className="col-span-12 max-w-4xl relative mx-auto h-full flex flex-col justify-start justify-items-start overflow-x-hidden w-full overflow-hidden">
        <div className="flex max-w-5xl mx-auto flex-col items-start justify-center space-y-8  ">
          <div className="flex flex-col justify-center items-start space-y-8">
            <Typography variant={"h2"} className="text-start mx-auto">
              Build your next SAAS project with a modern stack and save 4+
              months of development time ~ $18000
            </Typography>
            <Typography variant={"p"} className="text-start max-w-3xl">
              Build your next SAAS project with a modern stack and save 4+
              months of development time ~ $18000
            </Typography>
          </div>
          <div className="md:space-x-8 space-y-4 md:space-y-0 flex md:flex-row flex-col justify-start items-start md:items-center md:pl-2">
            <div className="relative group ">
              <Button className="mt-0 scroll-m-0 relative">
                <div className="flex w-fit items-center justify-between gap-2">
                  <p className="text-primary-foreground">
                    Get started for free
                  </p>

                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </Button>
              <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl blur opacity-60 dark:opacity-70 dark:-inset-0.5 group-hover:opacity-80 dark:group-hover:opacity-70 transition-all duration-1000 group-hover:duration-3000 group-hover:-inset-2"></div>
            </div>
            <Button variant={"outline"}>
              <div className="flex w-full items-center justify-center gap-2">
                <p className="">See how it works</p>
                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
