import React from "react";
import Container from "./container";
import { Typography } from "@components/ui/typography";
import Image from "next/image";

const STEPS = [
  {
    id: 1,
    title: "Pick a Plan",
    content: `Choose the perfect package for your needs. From one-time projects to
ongoing support, we&apos;ve got you covered.`,
  },
  {
    id: 2,
    title: "Pick a Plan",
    content: `Choose the perfect package for your needs. From one-time projects to
ongoing support, we&apos;ve got you covered.`,
  },
  {
    id: 3,
    title: "Pick a Plan",
    content: `Choose the perfect package for your needs. From one-time projects to
ongoing support, we&apos;ve got you covered.`,
  },
];
const WalkThrough = () => {
  return (
    <Container classNames="bg-transparent">
      <div className="col-span-12 flex flex-col items-center justify-center space-y-6 lg:space-y-12 bg-gradient-to-b from-[#1a1a1a] to-white/15 rounded-2xl p-10">
        <p className={"text-sm font-base text-gray-400x [text-wrap:balance]"}>
          Latest update details hook here.
        </p>
        <Typography variant={"h1"}>Supafast, Supaeasy</Typography>
        <div className="flex justify-between w-full">
          {STEPS?.map(({ id, title, content }) => (
            <WalkThroughCard key={id} id={id} title={title} content={content} />
          ))}
        </div>
        <div className="pt-10 flex justify-between items-center space-x-4">
          <p>payment securely done with stripe</p>
          <p>payment securely done with stripe</p>
          <p>payment securely done with stripe</p>
        </div>
      </div>
    </Container>
  );
};

const WalkThroughCard = ({
  id,
  title,
  content,
}: {
  id: number;
  title: string;
  content: string;
}) => {
  return (
    <div className="relative flex flex-col items-center text-center w-[300px] xl:w-[400px]">
      <Image
        alt={`image-${id}`}
        width={40}
        height={40}
        src={`/${id}.svg`}
        className="absolute -z-10 text-[12rem] flex w-[80px] h-[120px] lg:w-[100px] lg:h-[140px]"
      />
      <Typography variant={"h3"}>{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};
export default WalkThrough;
