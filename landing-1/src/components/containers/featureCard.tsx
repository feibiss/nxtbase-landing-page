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
    <div className="relative odd:bg-accent/50 w-full mx-auto md:px-28 md:py-8 py-4 group">
      <Card className="relative  z-10 w-full border-none shadow-none bg-transparent ">
        <CardContent
          className={"flex flex-col lg:flex-row items-start col-span-2 gap-8"}
        >
          <div className="order-2 lg:group-odd:order-1 lg:group-even:order-2">
            <Typography
              variant={"lead"}
              className="text-sm font-bold mb-2 uppercase tracking-widest text-primary/80 mt-0"
            >
              {feature.subtitle}
            </Typography>
            <Typography variant={"h3"} className="">
              {feature.title}
            </Typography>
            <Typography className="text-pretty text-secondary-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              impedit qui autem pariatur architecto distinctio voluptates vero
              eligendi nisi expedita quisquam deserunt nemo amet quo corrupti,
              accusamus consectetur nesciunt. Autem.
            </Typography>
            <Typography variant={"ul"} className="list-none my-4">
              {feature.features?.map((feature) => (
                <li
                  key={feature}
                  className="flex w-full overflow-hidden
                   items-center justify-start text-secondary-foreground"
                >
                  <CheckIcon className="text-green-500 mr-2 flex justify-center items-center h-6 w-6 capitalize" />

                  <p className="text-wrap text-ellipsis">{feature}</p>
                </li>
              ))}
            </Typography>
            <Link
              href={"#"}
              className={clsx(
                buttonVariants({
                  variant: "outline",
                  size: "sm",
                  rounded: "full",
                }),
                "text-xs px-2 rounded-full m-0 border-2 border-blue-400 mt-4 "
              )}
            >
              Learn More
            </Link>
          </div>
          <div className="order-0 lg:group-odd:order-2 lg:group-even:order-1 w-full h-full col-span-1 flex justify-center items-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg w-full md:min-w-[600px] min-h-[260px] md:min-h-[400px] aspect-[4/3] lg:aspect-[600/400] object-cover object-center bg-gray-300"
              src={feature.imgSrc}
              preload=""
            ></video>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
