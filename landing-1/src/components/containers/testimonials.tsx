import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center px-6 py-8 shadow-lg">
            <blockquote className="text-lg font-semibold leading-snug mb-4">
              "The user experience is top-notch. I've never used a more
              intuitive platform."
            </blockquote>
            <Avatar>
              <AvatarImage
                alt="User 1"
                src="/placeholder.svg?height=64&width=64"
              />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold mt-2">John Doe</h3>
            <p className="text-sm text-gray-500">CEO, XYZ Corp</p>
          </Card>
          <Card className="flex flex-col items-center px-6 py-8 shadow-lg">
            <blockquote className="text-lg font-semibold leading-snug mb-4">
              "The customer service is phenomenal. The support team is always
              ready to help."
            </blockquote>
            <Avatar>
              <AvatarImage
                alt="User 2"
                src="/placeholder.svg?height=64&width=64"
              />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold mt-2">Jane Smith</h3>
            <p className="text-sm text-gray-500">CTO, ABC Inc</p>
          </Card>
          <Card className="flex flex-col items-center px-6 py-8 shadow-lg">
            <blockquote className="text-lg font-semibold leading-snug mb-4">
              "The product features are innovative and help us stay ahead of our
              competitors."
            </blockquote>
            <Avatar>
              <AvatarImage
                alt="User 3"
                src="/placeholder.svg?height=64&width=64"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold mt-2">Mark Johnson</h3>
            <p className="text-sm text-gray-500">COO, LMN Ltd</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
