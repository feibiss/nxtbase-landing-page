import React from "react";
import Container from "./container";
import { Typography } from "../ui/typography";
import { Card } from "../ui/card";
import Image from "next/image";

const BLOGS = [
  "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1708335146/photo-1534670007418-fbb7f6cf32c3_ty8euj.webp",
  "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1708335117/photo-1601445638532-3c6f6c3aa1d6_q6uiun.webp",
  "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1708335115/photo-1558655146-d09347e92766_pct3tg.webp",
];
const Blogs = () => {
  return (
    <Container classNames="bg-muted">
      <div className="flex w-full flex-col justify-start items-start py-20 mx-auto">
        <div className="flex justify-between items-center w-full">
          <Typography variant={"h2"}>Blogs</Typography>
          <Typography>Stay in the know for all things hepta.</Typography>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 pt-10 items-center">
          {BLOGS.map((blog) => (
            <BlogCard key={blog} src={blog} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const BlogCard = ({ src }: { src: string }) => {
  return (
    <Card className="flex w-full lg:w-1/2 rounded-sm flex-col items-center justify-start border-2 hover:border-transparent overflow-hidden transition-all shadow-none hover:shadow-lg">
      <div className="w-full overflow-hidden h-64">
        <Image
          src={src}
          className="object-cover w-full"
          width={600}
          height={400}
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start justify-start space-y-4 p-8">
        <Typography variant={"mutedText"} className="text-primary text-sm">
          Brand Name
        </Typography>
        <Typography variant={"h5"} className="font-medium hover:underline">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
          assumenda?
        </Typography>
        <Typography>Author</Typography>
        <Typography variant={"smallText"} className="text-primary font-light">
          February 14, 2024 • 4 min read
        </Typography>
      </div>
    </Card>
  );
};

export default Blogs;
