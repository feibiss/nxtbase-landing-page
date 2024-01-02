import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <section
      className={cn(
        "mx-auto w-full h-full grid grid-cols-12 max-w-7xl relative lg:px-32 md:px-16 px-8 ",
        classNames
      )}
    >
      {children}
    </section>
  );
};

export default Container;
