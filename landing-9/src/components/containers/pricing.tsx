import React from "react";
import Container from "./container";
import { Typography } from "@ui/typography";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";
import Image from "next/image";

const Pricing = () => {
  return (
    <Container
      id="pricing"
      className="py-0 bg-primary-background pb-20 relative overflow-visible"
    >
      <div className="pt-20 lg:max-w-7xl xl:w-[1400px] mx-auto col-span-12 space-y-6 ">
        <Typography className="text-center w-full mx-auto" variant={"h2"}>
          Membership levels
        </Typography>
        <Typography className="text-center w-full">
          Choose a plan that&apos;s right for you.
        </Typography>

        <Image
          aria-hidden
          alt="Wave"
          width={200}
          height={80}
          src={"/assets/asset_14.svg"}
          className="mx-auto w-fit mt-8"
        />
        <div className="mt-6 py-10 lg:max-w-7xl xl:w-[1400px] px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3">
          <PricingCard />
          <PricingCard />
          <AdditionalServices />
          <SpecialFeature />
        </div>
      </div>

      <Image
        aria-hidden
        alt="Wave"
        width={140}
        height={80}
        src={"/assets/asset_18.svg"}
        className="absolute z-30 -right-20 -bottom-40 w-20 md:w-32 lg:w-72"
      />

      <Image
        aria-hidden
        alt="Wave"
        width={100}
        height={80}
        src={"/assets/arrow_3.svg"}
        className="absolute z-30 left-1/2 -translate-x-1/2  -bottom-10"
      />
    </Container>
  );
};

export default Pricing;

const PricingCard = () => {
  return (
    <div className="bg-card col-span-1 border-r-2 border-orange-200 lg:row-span-2">
      <div className="flex p-8  xl:p-10 flex-col items-start justify-start gap-14">
        <div className="flex flex-col items-start justify-start gap-4">
          <Typography
            variant={"h5"}
            className="text-black dark:text-gray-50 text-lg font-medium tracking-tight leading-8"
          >
            Standard
          </Typography>
          <Typography className="text-black dark:text-gray-200 mt-5 text-md">
            Perfect for single, high-impact, conversion-focused landing page.
          </Typography>
        </div>
        <div className="flex flex-col items-start justify-start w-full lg:pt-14">
          <Typography
            variant={"h3"}
            className="mt-5 text-4xl font-extrabold text-black dark:text-gray-100 tracking-tight"
          >
            $699
          </Typography>

          <p className="text-black/50 dark:text-white/50 tracking-wider text-xs">
            Pause or cancel anytime.
          </p>
          <Button variant={"secondary"} className="mt-4 w-full">
            Get started today
          </Button>
        </div>
      </div>

      <div className="w-full  h-[0.01rem] mt-5 border-t-2 border-orange-200 mb-5 bg-white/10"></div>

      <ul className="text-gray-800 dark:text-gray-300  p-8  xl:px-10 mt-4 space-y-1 text-sm">
        <Typography className="font-medium">What&apos;s Included</Typography>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          Branding
        </li>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          Custom graphics
        </li>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          High-converting copy
        </li>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          2x revisions
        </li>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          Unlimited stock images
        </li>
        <li className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  ">
          <CheckIcon className="text-black size-4 flex-none" />
          Updates delivered every 24-72 hours
        </li>
      </ul>
    </div>
  );
};

const AdditionalServices = () => {
  return (
    <div
      className="bg-card p-8 xl:p-10
    col-span-1 lg:row-span-2"
    >
      <div className="flex  flex-col items-center justify-center">
        <div className="min-h-32 w-full flex justify-center dark:invert items-center">
          <Image
            aria-hidden
            alt="Book a call"
            width={140}
            height={80}
            src={"/assets/asset_16.svg"}
          />
        </div>
        <Typography variant={"h5"}>Book a call</Typography>
        <Typography className="text-black text-center dark:text-gray-50 mt-5 text-md">
          Perfect for single, high-impact, conversion-focused landing page.
        </Typography>

        <p className="text-black mt-4 tracking-wider text-sm mx-auto">
          Book a call
        </p>
      </div>

      <div className="w-full  h-[0.01rem] mt-5 border-t-2 border-black/40 dark:border-white/40 bg-white/10"></div>

      <div className="flex  pt-8 xl:pt-10 flex-col items-center text-center justify-center">
        <div className="min-h-32 w-full flex justify-center items-center">
          <Image
            aria-hidden
            alt="Wave"
            width={140}
            height={80}
            className="dark:invert"
            src={"/assets/asset_17.svg"}
          />
        </div>
        <Typography variant={"h5"}>Refer a friend & earn</Typography>
        <Typography className="text-black dark:text-gray-200 mt-5 text-md">
          Perfect for single, high-impact, conversion-focused landing page.
        </Typography>

        <p className="text-black dark:text-white tracking-wider mt-4 text-sm">
          Join now
        </p>
      </div>
    </div>
  );
};

const SpecialFeature = () => {
  return (
    <div className="flex bg-black dark:bg-gray-50 col-span-1 lg:col-span-3 p-12 flex-col items-center justify-center text-white dark:text-black">
      <Typography className=" text-white dark:text-black" variant={"h4"}>
        Webflow development
      </Typography>
      <Typography className="text-white dark:text-black mt-5 text-md">
        Perfect for single, high-impact, conversion-focused landing page.
      </Typography>

      <Typography className=" text-white dark:text-black" variant={"h4"}>
        $999/m
      </Typography>
    </div>
  );
};
