import { Button } from "@/components/ui/button";
import { Typography } from "../ui/typography";
import Container from "./container";

export default function ContactCard() {
  return (
    <Container className="py-20 bg-foreground dark:bg-secondary text-white">
      <div className="flex max-w-3xl gap-8 mx-auto flex-col items-center justify-center px-4  ">
        <Typography
          variant={"h2"}
          className="text-center text-balance text-inherit mx-auto"
        >
          See if Decadent is right for you.
        </Typography>
        <Button variant={"default"}>Estimate project</Button>
      </div>
    </Container>
  );
}
