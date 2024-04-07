import React from "react";
import Container from "@ui/container";
import { Typography } from "@ui/typography";
import { CheckCircledIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@ui/button";

const Pricing = () => {
  return (
    <Container classNames="py-0 bg-fuchsia-100 dark:bg-primary-900/30">
      <div className="lg:max-w-7xl xl:w-[1400px] mx-auto col-span-12 py-20  space-y-6 flex flex-col">
        <Typography className="text-center w-full mx-auto" variant={"h1"}>
          PRICING
        </Typography>
        <Typography className="text-center w-full">
          Use our world-class dev talent to supafast your conversions
        </Typography>
        <div className="mt-6 py-10 lg:max-w-5xl xl:w-[1400px] px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </Container>
  );
};

export default Pricing;

const CUSTOM_RULES = [
  "Branding",
  "Boilerplate builder app",
  "Deploy to Verel with 1 click",
  "Blog with MDX & SEO",
  "2x revisions",
  "Landing pagge components",
  "Next 14 & Typescript",
  "Updates delivered every 24-72 hours",
  "Unlimited stock images",
  "AI content generation",
  "Customize iwth 30+ themes",
  "UI & icon library",
  "Pricing, terms & Privacy pages",
  "Automatic favicon, meta tags & sitemap",
];

const PricingCard = () => {
  return (
    <div className="relative group first:bg-gradient-to-tr first:to-white dark:to-gray-800 dark:first:to-gray-950/20 first:via-primary-100/40 dark:first:via-gray-800/40 first:from-primary-700/10 dark:first:from-gray-900/10 first:bg-white bg-gray-900 dark:bg-gray-50 first:dark:bg-gray-900/10  mx-auto space-y-4 max-w-xs ring-1 ring-primary-700/50 dark:ring-primary-100/50 rounded-3xl p-8 xl:p-10">
      <Typography className="group-first:text-black dark:group-first:text-gray-100 dark:text-gray-800 z-10 text-lg font-medium tracking-tight leading-8">
        One-off
      </Typography>
      <p className="group-first:text-black/50 dark:group-first:text-white/50 text-gray-50 dark:text-gray-900 tracking-wider text-xs">
        Generate unlimited custom boilerplates for 1 month. All generated code
        is yours forever.
      </p>
      <Typography
        variant={"h3"}
        className="text-4xl font-extrabold group-first:text-black dark:group-first:text-white text-gray-100 dark:text-gray-800 tracking-tight"
      >
        $699
      </Typography>
      <Button
        className="w-full bg-primary-500 outline-primary-500 dark:outline-primary-100/20 dark:bg-primary-700"
        variant={"secondary"}
        size="sm"
      >
        Get started today
      </Button>

      <div className="w-full h-[0.01rem] mt-5 mb-5 bg-white/10"></div>
      <ul className="group-first:text-gray-700 dark:group-first:text-gray-100 dark:text-gray-700 text-gray-300 mt-4 space-y-1 text-sm">
        {CUSTOM_RULES.map((feature) => (
          <li
            key={feature}
            className="flex gap-2 text-base  p-0 py-1 hover:bg-transparent items-center  "
          >
            <CheckCircledIcon className="text-inherit size-4 flex-none" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
