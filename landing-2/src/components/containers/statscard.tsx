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
    <div className=" border-t bg-white/10 py-0 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-full flex justify-center items-center  border-y-2 border-gray-200">
      <div className="w-full grid grid-cols-3 justify-center items-center max-w-7xl px-8 md:px-16 lg:px-32">
        {STATS.map(({ id, metric, label }) => {
          return (
            <div
              key={id}
              className="flex w-full h-full py-6 gap-0 flex-col justify-center items-center"
            >
              <Typography
                variant={"h2"}
                className="font-semibold text-gray-600"
              >
                {metric}
              </Typography>
              <Typography className="uppercase line-clamp-1 font-semibold text-gray-500">
                {label}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
