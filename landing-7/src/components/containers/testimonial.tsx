import React from "react";
import Container from "./container";
import { TESTIMONIES } from "@/lib/enums";
import { Typography } from "../ui/typography";
import { Card, CardContent } from "../ui/card";

const Testimonials = ({}) => {
  return (
    <Container classNames="bg-background py-20">
      <Typography variant={"h2"}>What Our Partners Say</Typography>
      <div className="grid grid-cols-1 gap-8 pt-5 lg:grid-cols-3">
        {TESTIMONIES.map((testimonial) => {
          return (
            <Card key={testimonial.author}>
              <CardContent>
                <Typography className="mb-8 h-40 lg:h-64">
                  {testimonial.review}
                </Typography>
                <Typography variant={"lead"} className="font-semibold">
                  {testimonial.author}
                </Typography>
                <Typography>{testimonial.role}</Typography>
                <Typography>{testimonial.brand}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Testimonials;
