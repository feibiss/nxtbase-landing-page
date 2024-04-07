"use client";
import Image from "next/image";
import React, { useRef } from "react";

const Banner = () => {
  return (
    <div className=" h-full w-full col-span-12 mx-auto flex justify-center items-center py-20">
      <div className=" z-10 mx-auto w-[768px] overflow-hidden rounded-lg border-[1px] border-indigo-900/20 antialiased shadow-lg [perspective:1200px] flex h-[578px] lg:h-[640px] lg:w-[1024px]  ">
        <Image
          alt="Hero image"
          fill
          src="https://res.cloudinary.com/dkqrmlxlg/image/upload/v1703582349/admin-dashboard_pzonvt.png"
        />
      </div>
    </div>
  );
};

export default Banner;
