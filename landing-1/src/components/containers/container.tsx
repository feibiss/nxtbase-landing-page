import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto w-full h-full grid grid-cols-12 max-w-7xl relative lg:px-32 md:px-16 px-8 ">
      {children}
    </section>
  );
};

export default Container;
