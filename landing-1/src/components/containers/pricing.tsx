import React from "react";
import { Typography } from "../ui/typography";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  dark?: boolean;
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  dark,
  popular,
}) => {
  return (
    <div
      className={`relative rounded-lg p-6 w-full h-full shadow-lg ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      {popular && (
        <div
          className={` ${dark ? "text-black" : "text-white"} absolute top-2 right-2 px-3 py-1 mt-2 mr-2 bg-blue-100 text-sm font-semibold rounded`}
        >
          Most popular
        </div>
      )}
      <Typography
        variant={"h5"}
        className={`mt-4 ${dark ? "text-white" : "text-black"} `}
      >
        {title}
      </Typography>
      <Typography
        variant={"h3"}
        className={`mt-4 ${dark ? "text-white" : "text-black"} `}
      >
        {price}
      </Typography>
      <Typography
        variant={"p"}
        className={`mt-2 ${dark ? "text-white" : "text-black"}`}
      >
        Suitable for solo-preneurs, and freelancers
      </Typography>
      <hr className="my-4 border-gray-300" />
      <ul className="mt-6 space-y-2">
        {features.map((feature: any, index: number) => (
          <li key={index} className="flex items-center">
            <CheckIcon className="w-6 h-6 mr-2 text-inherit size-4 flex-none" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className={`w-full mt-8 ${dark ? "bg-blue-50 text-black" : "bg-black text-white"} ${popular ? "bg-blue-50 text-black" : ""}`}
        variant={"secondary"}
        size="sm"
      >
        Get started today
      </Button>
    </div>
  );
};

const Pricing = () => {
  const features = [
    "No credit card required",
    "No credit card required",
    "No credit card required",
    "No credit card required",
    "No credit card required",
  ];

  return (
    <>
      <Typography className="text-center w-full mx-auto" variant={"h2"}>
        Simple and transparent pricing
      </Typography>
      <Typography className="mx-auto px-4 text-center text-wrap text-gray-800 md:px-0 dark:text-gray-300">
        Great, now that we have your attention, we will actually talk about how
        we help you
      </Typography>

      <div className="flex flex-row gap-8 p-6 bg-blue-50">
        <PricingCard
          title="Freelancer"
          price="$799"
          features={features}
          dark={false}
        />
        <PricingCard
          title="Startup"
          price="$899"
          features={features}
          dark={true}
          popular={true}
        />
        <PricingCard
          title="Enterprise"
          price="$1099"
          features={features}
          dark={false}
        />
      </div>
    </>
  );
};

export default Pricing;
