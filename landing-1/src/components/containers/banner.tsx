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
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [45, 40, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [11, 0]);

  return (
    <div
      ref={targetRef}
      className="w-screen h-[80vh] rounded-xl relative flex justify-center items-end pt-10 mt-16"
    >
      <div className="bg-gradient-to-b from-sky-500 via-blue-300 bottom-0 flex mt-auto  to-transparent h-2/3 w-[80vw]  rounded-t-3xl"></div>
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
        className="w-[1024px] absolute antialiased [perspective:1200px] z-[2] shadow-[0_24px_48px_-12px_#0f17282e] h-[640px] mx-auto rounded-lg overflow-hidden  "
      >
        <Image
          alt="Hero image"
          fill
          src="https://framerusercontent.com/images/zDvCdrgFgrnqx6RM3w6Vm6nzTc.png?scale-down-to=1024"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
