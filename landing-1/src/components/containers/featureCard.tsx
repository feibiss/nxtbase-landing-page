import { Button, buttonVariants } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

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
    <div className="relative w-full mx-auto md:px-28 md:py-8 py-4 group odd:bg-gray-50 last:mb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-skyblue to-transparent" />
      <Card className="relative z-10 w-full bg-inherit border-none shadow-none p-8 flex md:flex-row flex-col items-center col-span-2">
        <CardContent className={"group-odd:order-1 group-even:order-2"}>
          <h3 className="text-base font-semibold mb-2 uppercase text-blue-500 mt-0">
            {feature.subtitle}
          </h3>
          <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
          <p className="text-lg mb-6">{feature.desc}</p>
          <ul className="list-none space-y-2 mb-6">
            {feature.features?.map((feature) => (
              <li key={feature} className="flex items-center">
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
        <div className="md:order-1 w-full h-full col-span-1 md:mb-0 mb-8">
          <video
            autoPlay
            loop
            muted
            width={500}
            height={300}
            className="rounded-lg shadow-lg min-w-[300px] md:min-w-[500px] mt-8 min-h-[300px] aspect-[500/300] object-cover object-center bg-gray-300"
            src={feature.imgSrc}
            preload=""
          ></video>
        </div>
      </Card>
    </div>
  );
}
