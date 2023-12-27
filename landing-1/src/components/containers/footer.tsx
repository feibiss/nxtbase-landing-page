import Link from "next/link";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FooterCategory = {
  id: number;
  title: string;
  links: { link: string; title: string }[];
};

export default function Footer() {
  const FOOTER_LINKS: FooterCategory[] = [
    {
      id: 1,
      title: "Product",
      links: [
        {
          link: "#",
          title: "Pricing",
        },
        {
          link: "#",
          title: "Demos",
        },
        {
          link: "#",
          title: "Changelog",
        },
        {
          link: "#",
          title: "Roadmap",
        },
      ],
    },
    {
      id: 2,
      title: "Features",
      links: [
        {
          link: "#",
          title: "Authentication",
        },
        {
          link: "#",
          title: "Organization and Teams",
        },
        {
          link: "#",
          title: "Admin Panel",
        },
        {
          link: "#",
          title: "Payments",
        },
      ],
    },
    {
      id: 3,
      title: "Support",
      links: [
        {
          link: "#",
          title: "Docs",
        },
        {
          link: "#",
          title: "Blog",
        },
        {
          link: "#",
          title: "FAQ",
        },
      ],
    },
    {
      id: 4,
      title: "Legal",
      links: [
        {
          link: "#",
          title: "Privacy Policy",
        },
        {
          link: "#",
          title: "Terms of Services",
        },
      ],
    },
    {
      id: 5,
      title: "Other",
      links: [
        {
          link: "#",
          title: "Resources",
        },
        {
          link: "#",
          title: "Professional Services",
        },
        {
          link: "#",
          title: "Contact Us",
        },
        {
          link: "#",
          title: "Affliates",
        },
      ],
    },
  ];
  return (
    <footer className=" bg-gray-900 lg:pt-8 md:pt-4 mt-8 md:mt-6 lg:h-[calc(100dvh-var(--navbar-height))]">
      <div className="flex-col lg:flex-row flex justify-between items-start">
        <div className="grid grid-cols-3 md:grid-cols-5 w-full gap-0 md:gap-8 px-8 pt-12 order-2 lg:order-1 lg:w-2/3 md:w-full md:order-2 md:mt-8 lg:mt-0  md:mx-auto  md:max-w-3xl">
          {FOOTER_LINKS.map((details) => {
            return <FooterCategory key={details.id} footerDetails={details} />;
          })}
        </div>
        <div className="w-full px-8 mx-auto pt-16 md:pt-8 lg:pt-12 lg:max-w-md space-y-4 md:px-10 md:max-w-2xl">
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
      <div className="border-t-2 border-gray-700 py-8 px-8 lg:px-24 md:px-10 lg:mt-16 md:mt-0 mt-8">
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
