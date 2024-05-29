"use client";

import { Button } from "../ui/button";
import { ArrowRightIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { Typography } from "../ui/typography";
import Container from "./container";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import * as Separator from '@radix-ui/react-separator';
import Banner from "./banner";

export default function Hero() {
  const avatars = [
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/shadcn.png", fallback: "CN" },
    { src: "https://github.com/shadcn.png", fallback: "CN" },
  ];

  return (
    <Container className="bg-primary bg-[url('/assets/hero.jpeg')] bg-cover bg-center">
      <div className="flex snap-start flex-col items-start md:justify-start space-y-8 py-4 md:pt-20 md:mt-[var(--navbar-height)] md:min-h-[42rem] md:space-y-10 min-h-[26rem]">
        
        {/* Avatars and Separator */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-start md:justify-start w-full px-4 md:px-24 space-y-2 md:space-y-0">
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <Avatar key={index} className="border-2 border-white">
                <AvatarImage src={avatar.src} />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          
          <Separator.Root
            className="h-6 w-px bg-white/60 dark:bg-white/60 mx-2 md:mx-4 hidden md:block"
            decorative
            orientation="vertical"
          />
          
          <p className="text-primary-foreground/60 text-center md:text-start dark:text-primary-foreground/60 leading-7 text-[14px] md:text-lg font-medium">
            Loved by 570+ Professionals
          </p>
        </div>
        
        {/* Hero Text */}
        <div className="flex flex-col items-start space-y-2 md:space-y-6 text-left px-4 md:px-24">
          <Typography
            variant="h2"
            className="text-left text-3xl leading-tight md:leading-10 line-clamp-2 font-medium text-primary-foreground"
          >
            A fancy looking hero text to<br /> catch your attention
          </Typography>
          <Typography
            variant="p"
            className="max-w-full md:max-w-lg text-lg font-thin text-left leading-6 text-primary-foreground md:font-normal md:text-lg"
          >
            Great, now that we have your attention, we will actually talk about how we help you
          </Typography>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 w-full px-4 md:px-24">
          <Button className="w-full md:w-auto">Learn more</Button>
          <Button size={"lg"} variant={"outline"} className="w-full md:w-auto">
            Get Started for free
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </div>
        
       {/* Features */}
        <div className="flex flex-row gap-4 w-full px-4 md:px-24 md:pt-4">
          <div className="flex flex-row items-center gap-2 w-full md:w-auto">
            <CheckCircledIcon className="text-primary-foreground"/>
            <Typography variant="p" className="text-primary-foreground text-sm md:text-base">7-day free trial</Typography>
          </div>
          <div className="flex flex-row items-center gap-2 w-full md:w-auto">
            <CheckCircledIcon className="text-primary-foreground"/>
            <Typography variant="p" className="text-primary-foreground text-sm md:text-base">No Credit card required</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
