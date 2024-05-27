import React from "react";
import { Typography } from "../ui/typography";

export const StatsCard = () => {
  const STATS = [
    {
      id: 1,
      metric: "1728",
      label: "Active Companies",
    },
    {
      id: 2,
      metric: "7281",
      label: "Links Created",
    },
    {
      id: 3,
      metric: "8721",
      label: "Clicks Tracked",
    },
  ];
  return (
    <div className="dark:bg-gray-800/10 py-0 w-full flex justify-center items-center dark:border-gray-700">
      <div className="w-full grid grid-cols-3 justify-center items-center max-w-7xl px-8 md:px-16 lg:px-32">
        {STATS.map(({ id, metric, label }) => {
          return (
            <div
              key={id}
              className="flex w-full h-full py-6 gap-0 flex-col justify-center items-center"
            >
              <Typography
                variant={"h2"}
                className="font-semibold dark:text-gray-300"
              >
                {metric}
              </Typography>
              <Typography className="line-clamp-1 font-semibold dark:text-gray-400">
                {label}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
