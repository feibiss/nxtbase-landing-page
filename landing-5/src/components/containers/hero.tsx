import { Button } from "../ui/button";
import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "@ui/container";
import Banner from "./banner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AVATARS } from "@/lib/enums";

export default function Hero() {
  const STARS: number[] = new Array(5).fill(1);
  return (
    <Container classNames="" size="full">
      <div className=" max-w-4xl mx-auto col-span-12 flex h-full snap-start flex-col items-center justify-center space-y-8 py-4 text-center md:mt-[var(--navbar-height)] pt-20">
        <div className="flex flex-col items-start justify-center text-start space-y-2">
          <Typography variant="h1">
            A fancy looking hero text to catch your attention{" "}
          </Typography>
          <Typography
            variant="p"
            className="max-w-sm text-muted-foreground md:px-0"
          >
            Attention-grabbing alert! Brace yourself for an epic description of
            how we rock at helping you out. Keep scrolling to be convinced.
          </Typography>
        </div>
        <div className="w-full flex lg:flex-row flex-col  justify-between items-start gap-8 lg:items-center">
          <div className="relative group">
            <Button className="mt-0 scroll-m-0 relative">
              <div className="flex w-fit items-center justify-between gap-2">
                <p className="text-primary-foreground">Get started for free</p>

                <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Button>
            <div className="absolute -z-10 -inset-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl blur opacity-60 dark:opacity-70 dark:-inset-0.5 group-hover:opacity-80 dark:group-hover:opacity-70 transition-all duration-1000 group-hover:duration-3000 group-hover:-inset-2"></div>
          </div>
          <div className="w-full h-fit flex space-x-4 lg:items-center items-start gap-2 justify-basline ml-8">
            <div className="flex justify-center -space-x-2 ">
              {AVATARS.map(({ src, id }) => {
                return (
                  <Avatar key={id} className="border-4 border-primary-100/50">
                    <AvatarImage src={src} className="object-cover" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                );
              })}
            </div>
            <div className="group flex flex-col items-start justify-center">
              <div className="flex justify-start gap-1">
                {" "}
                {STARS.map((_, idx) => {
                  return (
                    <StarFilledIcon
                      key={_ + idx}
                      className="h-5 w-5 text-yellow-400 hover:fill-yellow-400"
                    />
                  );
                })}
              </div>

              <span className="text-muted-foreground">
                Loved by 570+ professionals
              </span>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </Container>
  );
}
