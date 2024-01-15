import React from "react";
import Container from "./container";
import Image from "next/image";

const Globe = () => {
  return (
    <Container>
      <div className="aspect-square w-full col-span-12 mx-auto max-w-[1000px] flex justify-center items-center">
        <Image
          width={820}
          height={820}
          src={"/globe.png"}
          alt="Users around the globe"
        />
      </div>
    </Container>
  );
};

export default Globe;
