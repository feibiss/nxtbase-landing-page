import React from "react";
import { Typography } from "../ui/typography";

export const StatsCard = () => {
  const STATS = [
    {
      id: 1,
      metric: "1,758",
      label: "Active Companies",
    },
    {
      id: 2,
      metric: "325.8K",
      label: "Links Created",
    },
    {
      id: 3,
      metric: "17.2M",
      label: "Clicks Tracked",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center  border-y-2 border-gray-100">
      <div className="w-full grid grid-cols-3 justify-center items-center max-w-7xl px-8 md:px-16 lg:px-32">
        {STATS.map(({ id, metric, label }) => {
          return (
            <div
              key={id}
              className="flex w-full h-full py-6 gap-0 flex-col justify-center items-center"
            >
              <Typography variant={"h1"} className="font-bold">
                {metric}
              </Typography>
              <Typography className="uppercase font-semibold text-gray-500">
                {label}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
