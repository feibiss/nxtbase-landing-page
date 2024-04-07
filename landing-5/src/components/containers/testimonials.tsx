"use client";
import Image from "next/image";
import Container from "@ui/container";
import { Typography } from "../ui/typography";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { testimonials } from "@/lib/enums";
import Marquee from "../ui/marquee";

export default function Testimonials() {
  return (
    <Container classNames="py-10 relative">
      <div className="col-span-12 row-span-1 min-h-[50rem] flex flex-col justify-start items-start space-y-16 pt-20 pb-10">
        <div className="flex w-full flex-col justify-start items-center space-y-4">
          <Typography variant={"h2"}>Don&apos;t take it from us.</Typography>
          <Typography className="text-center">
            Shipixen has been used by hundreds of people to create their own
            websites.
          </Typography>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[100vw] space-y-8 absolute bottom-20 inset-x-0  overflow-hidden">
          {testimonials.map((columnGrp, columnIdx) => {
            return (
              <Marquee
                numberOfCopies={columnGrp.length - 1}
                pauseOnHover
                fade
                key={columnIdx}
                className="py-2"
              >
                {columnGrp.map((testimony, testimonyIdx) => (
                  <TestimonialCard
                    key={`${testimony.author.name}-${testimonyIdx}`}
                    testimonial={testimony}
                  />
                ))}
              </Marquee>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const TestimonialCard = ({ testimonial }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const handelMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percX = mouseX / width - 0.5;
    const percY = mouseY / height - 0.5;

    x.set(percX);
    y.set(percY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.figure
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handelMouseMove}
      onMouseLeave={handleMouseLeave}
      key={testimonial.author.handle}
      className="rounded-2xl max-w-[20rem] bg-card p-6 shadow-md flex justify-between flex-col items-start space-y-4"
    >
      <blockquote className=" text-card-foreground">
        <p>{`“${testimonial.body}”`}</p>
      </blockquote>
      <figcaption className="flex items-center mt-auto gap-x-4">
        <Image
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-gray-50"
          src={testimonial.author.imageUrl}
          alt=""
        />
        <div>
          <div className="font-semibold">{testimonial.author.name}</div>
          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
};
