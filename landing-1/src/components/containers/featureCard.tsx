import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

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
    <div className="relative w-full mx-auto px-28 py-8 group odd:bg-gray-50 last:mb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-skyblue to-transparent" />
      <Card className="relative z-10 w-full bg-inherit border-none shadow-none p-8 flex items-center col-span-2">
        <CardContent className={"group-odd:order-1 group-even:order-2"}>
          <h3 className="text-base font-semibold mb-2 uppercase text-blue-500 mt-0">
            {feature.subtitle}
          </h3>
          <h2 className="text-4xl font-bold mb-4">{feature.title}</h2>
          <p className="text-lg mb-6">{feature.desc}</p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Ready-to-use carousel templates
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Customize to your preferences
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Create carousels from content
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Save and download carousels
            </li>
            <li className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" />
              Share or schedule carousels
            </li>
          </ul>
          <Button
            className="rounded-full border-blue-200 bg-white"
            variant="outline"
          >
            Learn More
          </Button>
        </CardContent>
        <div className="md:order-1 w-full h-full col-span-1">
          <video
            autoPlay
            loop
            muted
            width={500}
            height={300}
            className="rounded-lg shadow-lg min-w-[500px] mt-8 min-h-[300px] aspect-[500/300] object-cover object-center bg-gray-300"
            src={feature.imgSrc}
            preload=""
          ></video>
        </div>
      </Card>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
