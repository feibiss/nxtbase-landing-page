"use client";
import Image from "next/image";
import Container from "./container";
import { Typography } from "../ui/typography";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <Container>
      <div className="relative col-span-12 isolate bg-transparent md:pb-32   pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center flex flex-col gap-4">
            <Typography variant={"h1"}>Testimonials</Typography>
            <Typography variant={"h5"}>
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
                {/* <Image
                  className="h-10 w-auto flex-none"
                  src={featuredTestimonial.author}
                  alt=""
                /> */}
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
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
            ))}
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
