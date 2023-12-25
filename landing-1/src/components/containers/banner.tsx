"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Banner = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 10, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-11, 0]);

  return (
    <section
      ref={targetRef}
      className="w-screen h-[50dvh] md:h-screen  snap-start rounded-xl relative flex justify-center md:items-start lg:pt-10 lg:mt-16"
    >
      <div className="bg-gradient-to-b z-10 inset-0 from-primary via-blue-400 bottom-0 flex mt-auto  to-transparent h-full w=full rounded-t-[5rem]"></div>
      <motion.div
        style={{
          scale,
          rotateX,
          rotateY,
          translateX: "-50%",
          translateY: "-50%",
          top: "50%",
          left: "50%",
        }}
        className=" w-[768px] lg:w-[1024px] absolute antialiased hidden md:block [perspective:1200px] z-10 shadow-[0_24px_48px_-12px_#0f17282e] md:h-[578px] lg:h-[640px] mx-auto rounded-lg overflow-hidden  "
      >
        <Image
          alt="Hero image"
          fill
          className="hidden md:block"
          src="https://framerusercontent.com/images/zDvCdrgFgrnqx6RM3w6Vm6nzTc.png?scale-down-to=1024"
        />
      </motion.div>
      <div className="max-w-sm md:hidden w-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute antialiased z-[2] shadow-[0_24px_48px_-12px_#0f17282e] h-[55vw] rounded-lg overflow-hidden  ">
        <Image
          alt="Hero image"
          fill
          src="https://framerusercontent.com/images/zDvCdrgFgrnqx6RM3w6Vm6nzTc.png?scale-down-to=1024"
        />
      </div>
    </section>
  );
};

export default Banner;
