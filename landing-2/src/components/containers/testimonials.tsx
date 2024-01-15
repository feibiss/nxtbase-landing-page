"use client";
import Image from "next/image";
import Container from "./container";
import { Typography } from "../ui/typography";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { featuredTestimonial, testimonials } from "@/lib/enums";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <Container>
      <div className="relative col-span-12 isolate bg-transparent md:pb-32   pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center flex flex-col justify-start items-center gap-4">
            <Typography variant={"h2"}>
              Loved by{" "}
              <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                10k users
              </span>
            </Typography>
            <Typography variant={"p"} className="">
              We have worked with thousands of amazing people
            </Typography>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <Image
                  width={40}
                  height={40}
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
            {[...testimonials, ...testimonials, ...testimonials].map(
              (columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className="space-y-8 xl:contents xl:space-y-0"
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? "xl:row-span-2"
                          : "xl:row-start-1",
                        "space-y-8"
                      )}
                    >
                      {column.map((testimonial) => (
                        <TestimonialCard
                          key={testimonial.body}
                          testimonial={testimonial}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
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
      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
    >
      <blockquote className="text-gray-900">
        <p>{`“${testimonial.body}”`}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
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
