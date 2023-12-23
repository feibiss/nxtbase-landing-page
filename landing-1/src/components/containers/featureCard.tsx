import { buttonVariants } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";
import { Typography } from "../ui/typography";

type FeatureType = {
  title: string;
  subtitle: string;
  desc: string;
  features?: string[];
  navigateTo: string;
  imgSrc: string;
};
export default function FeatureCard({ feature }: { feature: FeatureType }) {
  return (
    <div className="relative w-full mx-auto md:px-28 md:py-8 py-4 group odd:bg-accent/50 last:mb-20">
      <Card className="relative  z-10 w-full border-none shadow-none bg-transparent flex md:flex-row flex-col items-start col-span-2">
        <CardContent className={"group-odd:order-1 group-even:order-2"}>
          <Typography
            variant={"lead"}
            className="text-sm font-bold mb-2 uppercase tracking-widest text-primary/80 mt-0"
          >
            {feature.subtitle}
          </Typography>
          <Typography variant={"h3"} className="">
            {feature.title}
          </Typography>
          <Typography className="text-pretty text-secondary-foreground mb-2">
            {feature.desc}
          </Typography>
          <ul className="list-none space-y-2 my-2">
            {feature.features?.map((feature) => (
              <li
                key={feature}
                className="flex items-center text-secondary-foreground"
              >
                <CheckIcon className="text-green-500 mr-2 h-6 w-6 capitalize" />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href={"#"}
            className={clsx(
              buttonVariants({
                variant: "outline",
                size: "sm",
                rounded: "full",
              }),
              "text-xs px-2 rounded-full m-0 border-2 border-blue-400 "
            )}
          >
            Learn More
          </Link>
        </CardContent>
        <div className="md:order-1 pt-6 w-full h-full col-span-1 flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            width={600}
            height={400}
            className="rounded-lg shadow-lg min-w-[400px] md:min-w-[600px] min-h-[400px] aspect-[600/400] object-cover object-center bg-gray-300"
            src={feature.imgSrc}
            preload=""
          ></video>
        </div>
      </Card>
    </div>
  );
}
