import clsx from "clsx";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
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
    <footer className=" bg-gray-900 pt-32 w-screen">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="grid grid-cols-3 w-2/3">
          {FOOTER_LINKS.map((details) => {
            return <FooterCategory key={details.id} footerDetails={details} />;
          })}
        </div>
        <div className="mx-auto max-w-md space-y-4">
          <div className="text-start space-y-2">
            <Typography variant={"h4"} className=" text-primary-foreground">
              Subscribe to our Newsletter
            </Typography>
            <Typography className=" text-primary-foreground">
              Stay updated with our latest news, articles, and updates.
            </Typography>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-primary-foreground" htmlFor="email">
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
      <div className="border-t-2 border-gray-700 py-6 px-24 mt-16">
        <Typography variant={"mutedText"}>
          Disclaimer: This is just a template website and is not endorsed by or
          affiliated with the LinkedIn Corporation, registered in the U.S. and
          other countries. LinkedIn is a trademark of the LinkedIn Corporation.
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
    <div className="flex flex-col mb-8">
      <Typography
        variant={"h5"}
        className="text-lg font-bold text-gray-100 mb-4"
      >
        {footerDetails.title}
      </Typography>
      <ul className="space-y-2 flex flex-col">
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
