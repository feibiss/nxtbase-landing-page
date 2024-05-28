import React, { ReactNode } from "react";
import Container from "../ui/container";
import { Typography } from "../ui/typography";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  CalendarIcon,
  CardStackIcon,
  EyeOpenIcon,
  FileIcon,
  GearIcon,
  GitHubLogoIcon,
  ImageIcon,
  LockClosedIcon,
  LoopIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

const FeatureShowcase = () => {
  return (
    <Container>
      <div className="max-w-7xl w-full mx-auto col-span-12 h-full flex flex-col py-20 items-center space-y-20">
        <div className="w-full flex flex-col justify-start items-center text-center space-y-4 ">
          <Typography variant={"h1"} className="text-primary md:text-4xl font-bold">
            Get an overview of what&apos;s inside
          </Typography>
          <Typography className=" md:text-lg font-base">
            Leverage decades of web development experience to get a head start
            on your next project.
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full h-full">
        <GridChild>
            <DefaultPlaceholder title="Subscription" icon="CalendarIcon" />
          </GridChild>
          <GridChild>
            <DefaultPlaceholder title="Lifetime updates" icon="LoopIcon" />
          </GridChild>
          <GridChild>
            <DefaultPlaceholder title="Lifetime updates" icon="LoopIcon" />
          </GridChild>
          <GridChild type="lg">
            <LargePlaceholder title="Authentication" icon={"LockClosedIcon"} />
          </GridChild>
          <GridChild type="lg">
            <LargePlaceholder title="Authentication" icon={"LockClosedIcon"} />
          </GridChild>
         
        </div>

        
      </div>
    </Container>
  );
};

const GridChild = ({
  children,
  type = "default",
}: {
  children: React.ReactNode;
  type?: "xl" | "lg" | "md" | "sm" | "xs" | "default";
}) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded-md col-span-1 text-5xl font-semibold drop-shadow shadow-sm bg-white p-8",
        type === "xl" &&
          "h-[20rem]  from-primary-100/10 dark:from-primary-900/10 dark:via-secondary-900/10 via-secondary-100/10 to-white dark:to-neutral-900 bg-gradient-to-t lg:col-span-9",
        type === "lg" &&
          "h-[20rem] bg-fuchsia-50  lg:col-span-6 text-fuchsia-100 dark:text-fuchsia-700",
        type === "md" &&
          "h-[20rem] bg-gradient-to-t from-neutral-50 dark:from-neutral-950 to-white dark:to-neutral-800 lg:col-span-3 text-neutral-100 dark:text-neutral-700 ",
        type === "sm" && "h-[20rem] lg:col-span-3 grid grid-rows-3 gap-8 ",
        type === "xs" &&
          "bg-gradient-to-t from-secondary-300/20 dark:from-secondary-500/20 dark:to-secondary-300/10 to-secondary-100/10 shadow-sm row-span-1 text-4xl font-semibold ",
        type === "default" &&
          "h-[20rem] bg-gradient-to-t bg-white p-8 to-neutral-700 lg:col-span-4 text-neutral-900"
      )}
    >
      {children}
    </div>
  );
};

const LargePlaceholder = ({
  title,
  icon,
}: {
  title: string;
  icon: "LockClosedIcon" | "EyeOpenIcon" | "GearIcon";
}) => {
  return (
    <div className="w-full group transition-all h-full flex flex-col justify-end p-10 items-start relative overflow-hidden">
      <div className="inset-0 absolute z-0 bottom-0 transition-all duration-500 bg-gradient-to-t from-primary-300/40 dark:bg-primary-900/80 to-transparent"></div>
      <Typography
        variant={"h1"}
        className="bg-gradient-to-t transition-all duration-500 translate-y-0 from-fuchsia-500/50 dark:from-fuchsia-200/70 from-10% to-neutral-800 dark:to-neutral-200 bg-clip-text text-transparent"
      >
        {title}
      </Typography>
      <Typography className="translate-y-0 transition-all duration-500 text-neutral-600/80 dark:text-neutral-100/80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        accusamus magnam dolores qui minus nobis iste totam impedit rem unde.
      </Typography>
      {icon === "LockClosedIcon" && (
        <LockClosedIcon className="transition-all duration-500 size-80 font-bold -z-10 absolute -right-20 group-hover:size-96 top-10 fill-inherit" />
      )}
      {icon === "EyeOpenIcon" && (
        <EyeOpenIcon className="transition-all duration-500 size-80 font-bold -z-10 absolute -right-20 group-hover:size-96 top-10 fill-inherit" />
      )}
      {icon === "GearIcon" && (
        <GearIcon className="transition-all duration-500 size-80 font-bold -z-10 absolute -right-20 group-hover:size-96 top-10 fill-inherit" />
      )}
    </div>
  );
};

const MediumPlaceholder = ({
  title,
  icon,
}: {
  title: string;
  icon: "GitHubLogoIcon" | "ImageIcon" | "CardStackIcon" | "FolderIcon";
}) => {
  return (
    <div className="w-full group transition-all h-full flex flex-col justify-center p-6 items-center relative overflow-hidden">
      <div className="inset-0 absolute bottom-0 transition-all duration-500 bg-gradient-to-t from-neutral-300/40 dark:from-neutral-600 to-transparent"></div>
      <Typography
        variant={"h2"}
        className="w-full text-start bg-gradient-to-t bottom-0 transition-all duration-500 translate-y-[100%] lg:translate-y-0 from-neutral-500/30 dark:from-neutral-200/30 dark:to-white to-neutral-800 bg-clip-text text-transparent"
      >
        {title}
      </Typography>
      <Typography className="w-full text-pretty lg:translate-y-0 md:translate-y-[100%] translate-y-[30%] transition-all duration-500 text-neutral-600/80 dark:text-neutral-200/80">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
        accusamus magnam dolores qui minus nobis iste totam impedit rem unde.
      </Typography>
      {icon === "GitHubLogoIcon" && (
        <GitHubLogoIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
      {icon === "ImageIcon" && (
        <ImageIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
      {icon === "CardStackIcon" && (
        <CardStackIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
      {icon === "FolderIcon" && (
        <FileIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
    </div>
  );
};

const DefaultPlaceholder = ({
  title,
  icon,
}: {
  title: string;
  icon: "CalendarIcon" | "LoopIcon" | "ReaderIcon";
}) => {
  return (
    <div>
    <div className="w-full group transition-all h-full flex flex-col justify-center p-6 items-center relative overflow-hidden">
      <div className="inset-0 absolute bottom-0 transition-all duration-500 bg-gradient-to-t from-neutral-300/40 to-transparent"></div>
     
      {icon === "CalendarIcon" && (
        <CalendarIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
      {icon === "LoopIcon" && (
        <LoopIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
      {icon === "ReaderIcon" && (
        <ReaderIcon className="transition-all duration-500 size-64 font-bold -z-10 absolute top-40 group-hover:top-10 fill-inherit" />
      )}
    </div>
    <div className="mt-5">
    <Typography
        variant={"p"}
        className="w-full text-start  from-neutral-100/30 to-white bg-clip-text"
      >
        {title}
      </Typography>
      <Typography className="w-full text-pretty  text-neutral-900">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere 
      </Typography>
    </div>

    </div>
  );
};

const ExtraSmallPlaceholder = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Typography
        variant={"h2"}
        className="w-full text-center bg-gradient-to-t translate-y-0 from-secondary-500/50 dark:to-neutral-100 to-neutral-800 bg-clip-text text-transparent"
      >
        {children}
      </Typography>
    </div>
  );
};

const ExtralargePlaceholder = () => {
  return (
    <div className="w-full group transition-all h-full flex flex-col justify-center p-6 items-center relative overflow-hidden">
      <Typography
        variant={"h1"}
        className="w-full text-center bg-gradient-to-t transition-all duration-500 group-hover:scale-110 from-secondary-300 to-primary-300/50 bg-clip-text text-transparent"
      >
        Launch your SAAS in just a few days
      </Typography>
    </div>
  );
};
export default FeatureShowcase;
