import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { TESTIMONIES } from "@/lib/enums";
import { Typography } from "../ui/typography";

export default function Testimonials() {
  return (
    <section className="snap-start w-full max-w-6xl">
      <div className="mx-auto text-center bg-background">
        <Typography variant={"h2"} className="prose text-pretty">
          What Our Users Are Saying
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {TESTIMONIES.map((testimony) => (
            <TestimonyCard key={testimony.author} details={testimony} />
          ))}
        </div>
      </div>
    </section>
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
    <Card className="flex bg-card relative overflow-hidden cursor-pointer group flex-col z-[1] items-start justify-start p-4 shadow-md">
      <div
        aria-hidden
        className="absolute h-[20rem] transition-all -bottom-72 -left-40 bg-transparent group:hover:bottom-0  group-hover:left-0 rounded-tr-3xl w-full group-hover:bg-primary/10 blur-xl -z-[1]"
      ></div>
      <CardContent className="">
        <Typography
          variant={"p"}
          className="prose text-start text-pretty max-h-[18rem]"
        >
          {details.review}
        </Typography>
      </CardContent>
      <CardFooter className="mt-auto">
        <Avatar className="mr-4">
          <AvatarImage
            alt={details.author}
            src={details.profilePic}
            className="object-cover"
          />
          <AvatarFallback>{details.fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-start items-start mt-2 gap-2">
          <Typography className="text-card-foreground">
            {details.author}
          </Typography>
          <Typography variant={"mutedText"}>
            {details.role + ", " + details.brand}
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
};
