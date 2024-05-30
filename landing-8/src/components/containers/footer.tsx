import Link from "next/link";
import { Button } from "@ui/button";
import { Typography } from "@ui/typography";
import { Input } from "@ui/input";
import { Label } from "@ui/label";
import { FOOTER_LINKS, FooterCategory } from "@/lib/enums";
import { CubeIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex mt-12 flex-col mx-auto justify-start relative bg-slate-950/80 px-8 md:pt-8 lg:pt-8">
      <div className="flex items-center justify-between pt-8">
        <div className="flex items-center">
          <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center"></div>
          <span className="ml-2 text-white">Nextbase</span>
          <span className="text-slate-50 ml-10">
            The future of computing starts now
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" aria-label="Twitter">
            <CubeIcon className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <CubeIcon className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <CubeIcon className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://github.com" aria-label="GitHub">
            <CubeIcon className="text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl xl:max-w-[1400px] flex flex-col items-center justify-start">
        <div className="grid grid-cols-1 h-full gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="order-2 col-span-1 flex flex-wrap justify-start lg:justify-normal items-start w-full content-start gap-4 pt-12 md:order-2 md:mx-auto md:mt-8 md:gap-8 lg:col-span-2  lg:mt-0">
            {FOOTER_LINKS.map((details) => {
              return (
                <FooterCategory key={details.id} footerDetails={details} />
              );
            })}
          </div>
          <div className="col-span-1 lg:order-2 order-1 mx-auto w-full space-y-4 pt-16 md:px-10 md:pt-8 lg:pt-12">
            <div className="space-y-2 text-start">
              <Typography variant={"h4"} className=" text-gray-200">
                Subscribe to Newsletter
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
                  className=" border-gray-600 bg-gray-800 placeholder:text-gray-100"
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <Button variant={"secondary"} className="w-full" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="overflow-x-none mx-auto mt-8 w-full border-t-2 border-gray-700 py-8 md:mt-0">
          <Typography variant={"mutedText"}>
            Disclaimer: This is just a template website and is not endorsed by
            or affiliated with any Corporation, registered in the U.S. and other
            countries.
          </Typography>
          <Typography variant={"mutedText"}>
            Copyright © 2023 NextBase. All rights reserved.
          </Typography>
        </div>
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
    <div className="mb-8 flex-1 md:flex-none flex lg:w-1/4 flex-col md:items-baseline">
      <Typography
        variant={"h5"}
        className="mb-4 text-lg font-bold text-gray-100"
      >
        {footerDetails.title}
      </Typography>
      <ul className="flex w-fit flex-col space-y-2">
        {footerDetails.links?.map(({ link, title }) => (
          <Link
            key={title}
            href={link}
            className="prose font-medium text-gray-500 transition-colors hover:text-gray-200"
          >
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
