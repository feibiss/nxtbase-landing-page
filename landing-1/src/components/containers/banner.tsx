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
      className="h-[50dvh] md:h-[75vh]  snap-start rounded-xl relative flex justify-center md:items-start lg:pt-10 lg:mt-16"
    >
      <div className="bg-gradient-to-b z-0 from-blue-400 via-indigo-100 bottom-0 flex mt-auto  to-transparent md:h-[70vh] lg:h-[60vh] md:w-[95vw] lg:w-[80vw] rounded-t-[5rem]"></div>
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
        className=" w-[768px] border-[1px] border-indigo-900/20 lg:w-[1024px] absolute antialiased hidden md:block [perspective:1200px] z-10 shadow-lg md:h-[578px] lg:h-[640px] mx-auto rounded-lg overflow-hidden  "
      >
        <Image
          alt="Hero image"
          fill
          className="hidden md:block"
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1703582349/admin-dashboard_pzonvt.png"
        />
      </motion.div>
      <div className="max-w-sm md:hidden w-[80vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute antialiased z-[2] shadow-[0_24px_48px_-12px_#0f17282e] h-[55vw] rounded-lg overflow-hidden  ">
        <Image
          alt="Hero image"
          fill
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1703582349/admin-dashboard_pzonvt.png"
        />
      </div>
    </section>
  );
};

export default Banner;
