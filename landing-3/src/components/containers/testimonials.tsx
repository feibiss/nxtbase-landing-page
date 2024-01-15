import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TESTIMONIES } from "@/lib/enums";
import { Typography } from "../ui/typography";
import Container from "./container";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Container>
      <section className="col-span-12 h-fit w-full snap-start bg-transparent">
        <div className="mx-auto bg-transparent text-center">
          <Typography
            variant={"h2"}
            className=" text-card- mb-8 text-pretty font-bold tracking-tighter dark:text-white"
          >
            What Our Users Are Saying
          </Typography>
          <div className="grid grid-cols-1 gap-8">
            {TESTIMONIES.map((testimony) => (
              <TestimonyCard key={testimony.author} details={testimony} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

type CardProps = {
  review: string;
  profilePic: string;
  fallback: string;
  author: string;
  role: string;
  brand: string;
};
const TestimonyCard = ({ details }: { details: CardProps }) => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{details.review}</p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              width={40}
              height={40}
              className="mx-auto h-10 w-10 rounded-full"
              src={details.profilePic}
              alt={details.author}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                {details.author}
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">
                {details.role}, {details.brand}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
