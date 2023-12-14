import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function FeatureCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-skyblue to-transparent" />
      <Card className="relative z-10 w-full bg-white p-8 flex items-center">
        <CardContent className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-blue-500 mt-0">
            Carousel Creation Simplified
          </h3>
          <h2 className="text-4xl font-bold mb-4">LinkedIn Carousel Maker</h2>
          <p className="text-lg mb-6">
            Create, customize and post carousels, all on Supergrow. Ready-to-use
            templates, simple customization, and turning content into carousels
            save you precious time.
          </p>
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
        <div className="flex-1">
          <img
            alt="LinkedIn Carousel Maker Screenshot"
            className="rounded-lg shadow-lg mt-8"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
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
