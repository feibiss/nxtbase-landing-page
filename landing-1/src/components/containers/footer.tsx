import Link from "next/link";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FOOTER_LINKS, FooterCategory } from "@/lib/enums";

export default function Footer() {
  return (
    <footer className=" bg-gray-900 relative lg:pt-8 md:pt-8 lg:h-[calc(100dvh-var(--navbar-height))] px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-40">
        <div className="col-span-1 lg:col-span-2 grid grid-cols-3 md:grid-cols-5 w-full gap-4 md:gap-8 pt-12 order-2 lg:order-1 md:order-2 md:mt-8 lg:mt-0  md:mx-auto">
          {FOOTER_LINKS.map((details) => {
            return <FooterCategory key={details.id} footerDetails={details} />;
          })}
        </div>
        <div className="w-full col-span-1 mx-auto pt-16 md:pt-8 lg:pt-12 space-y-4 md:px-10">
          <div className="text-start space-y-2">
            <Typography variant={"h4"} className=" text-gray-200">
              Subscribe to our Newsletter
            </Typography>
            <Typography className=" text-gray-400">
              Stay updated with our latest news, articles, and updates.
            </Typography>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-300" htmlFor="email">
                Email
              </Label>
              <Input
                className=" bg-gray-800 border-gray-600 placeholder:text-gray-100"
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <Button variant={"outline"} className="w-full" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t-2 lg:px-8 lg:absolute bottom-0 left-0 w-full overflow-x-none border-gray-700 py-8  md:mt-0 mt-8">
        <Typography variant={"mutedText"}>
          Disclaimer: This is just a template website and is not endorsed by or
          affiliated with any Corporation, registered in the U.S. and other
          countries.
        </Typography>
        <Typography variant={"mutedText"}>
          Copyright © 2023 NextBase. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

const FooterCategory = ({
  footerDetails,
}: {
  footerDetails: FooterCategory;
}) => {
  return (
    <div className="flex flex-col mb-8 md:items-baseline">
      <Typography
        variant={"h5"}
        className="text-lg font-bold text-gray-100 mb-4"
      >
        {footerDetails.title}
      </Typography>
      <ul className="space-y-2 flex flex-col w-fit">
        {footerDetails.links?.map(({ link, title }) => (
          <Link
            key={title}
            href={link}
            className="text-gray-500 font-medium hover:text-gray-200 transition-colors prose"
          >
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
