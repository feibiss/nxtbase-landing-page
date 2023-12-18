import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="container w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-6 lg:px-8 text-center bg-background">
        <h2 className="text-3xl text-slate-900 flex justify-center items-center text-center pb-4 font-bold tracking-tighter sm:text-4xl md:text-5xl mb-20">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonyCard />
          <TestimonyCard />
          <TestimonyCard />
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  testimony: string;
  avatar: string;
  fallback: string;
  name: string;
  title: string;
  brand: string;
};
const TestimonyCard = () => {
  return (
    <Card className="flex cursor-pointer min-w-[20rem] min-h-[24rem] flex-col items-start justify-start px-6 py-8 shadow-lg">
      <blockquote className="text-lg font-medium leading-snug mb-20 justify-start text-left">
        The product features are innovative and help us stay ahead of our
        competitors.
      </blockquote>
      <Avatar className="mt-auto">
        <AvatarImage alt="User 3" src="/placeholder.svg?height=64&width=64" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <h3 className="font-semibold mt-2">Mark Johnson</h3>
      <p className="text-sm text-gray-500">COO, LMN Ltd</p>
    </Card>
  );
};
