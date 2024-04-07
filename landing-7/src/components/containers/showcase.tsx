import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const Showcase = () => {
  return (
    <Container classNames="bg-muted">
      <div className="col-span-12 flex flex-col justify-center items-center space-y-16 pt-20 pb-10">
        <div className="w-full flex md:flex-row flex-col space-y-8 md:space-y-0 justify-between items-start flex-1">
          <Typography
            variant={"h2"}
            className="font-display w-full md:w-1/2 text-start"
          >
            Our commitment
          </Typography>
          <Typography className="w-full md:w-1/2 font-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            reprehenderit, iste quidem veritatis repellat ipsa minima nam nulla,
            itaque consectetur quisquam quaerat dignissimos fugit. Dignissimos
            sapiente cum nisi, cumque tempore, consequatur nesciunt dolores unde
            tempora accusantium animi, ipsa ipsum aperiam. Sequi cumque quis
            obcaecati accusamus dolorem optio, fuga quibusdam cupiditate.
          </Typography>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Array(3)
            .fill(1)
            .map((_, idx) => (
              <Card
                key={idx}
                className="
              col-span-1 lg:basis-1/3 border-none shadow-none ring-transparent"
              >
                <CardHeader>
                  <div className="flex basis-1 lg:basis-1/3 space-x-4 items-center">
                    {" "}
                    <Typography
                      variant={"h3"}
                      className="capitalize font-display
                       font-semibold"
                    >
                      subheading
                    </Typography>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, dolorem! Quo corrupti repellat possimus vel velit
                    nemo voluptate dolorum omnis!
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
