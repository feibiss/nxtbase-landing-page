import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { TESTIMONIES } from "@/lib/enums";

export default function Testimonials() {
  return (
    <section className="container w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-6 lg:px-8 text-center bg-background">
        <h2 className="text-3xl text-foreground flex justify-center items-center text-center pb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <Card className="flex cursor-pointer min-w-[20rem] min-h-[24rem] flex-col items-start justify-start px-6 py-8 shadow-lg">
      <blockquote className="text-lg first-letter:text-primary first-letter:text-xl font-medium leading-relaxed mb-20 justify-start text-left">
        {details.review}
      </blockquote>
      <Avatar className="mt-auto">
        <AvatarImage
          alt={details.author}
          src={details.profilePic}
          className="object-cover"
        />
        <AvatarFallback>{details.fallback}</AvatarFallback>
      </Avatar>
      <h3 className="font-semibold mt-2">{details.author}</h3>
      <p className="text-sm text-gray-500">
        {details.role + ", " + details.brand}
      </p>
    </Card>
  );
};
