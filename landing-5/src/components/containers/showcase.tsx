import React from "react";
import Container from "../ui/container";
import { Typography } from "../ui/typography";
import Image from "next/image";

const Showcase = () => {
  return (
    <Container classNames="py-10 bg-primary-100/20 dark:bg-primary-900/10">
      <div className="col-span-12 w-full max-w-7xl mx-auto h-full py-10 px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-96">
        <div className="flex col-span-5 flex-col justify-center items-start text-start">
          <Typography variant={"h2"} className="text-start">
            Create thousands of Unique Starters
          </Typography>
          <Typography className="text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            voluptatem expedita, cumque tempore magni voluptatibus doloribus
            eligendi, minima quibusdam facilis atque cum perferendis mollitia
            nostrum qui maiores harum voluptate quia!
          </Typography>
        </div>
        <div className="order-2 lg:col-span-7 rounded-lg overflow-hidden shadow-md w-full col-span-5 flex h-full items-center justify-center">
          <Image
            width={400}
            height={300}
            alt="expected"
            className="aspect-[4/3] w-full rounded-lg bg-gray-300 object-cover shadow-lg"
            src={
              "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1703582349/admin-dashboard_pzonvt.webp"
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
