import clsx from "clsx";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

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
    <footer className="bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_LINKS.map((details) => {
            return <FooterCategory key={details.id} footerDetails={details} />;
          })}
        </div>
        <div className="border-t border-gray-200 py-6 mt-8">
          <p className="text-muted-foreground text-sm text-center">
            Disclaimer: This is just a template website and is not endorsed by
            or affiliated with the LinkedIn Corporation, registered in the U.S.
            and other countries. LinkedIn is a trademark of the LinkedIn
            Corporation.
          </p>
          <p className="text-muted-foreground text-sm text-center mt-4">
            Copyright © 2023 NextBase. All rights reserved.
          </p>
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
    <div className="flex flex-col space-y-4">
      <h5 className="text-lg font-semibold mb-4">{footerDetails.title}</h5>
      <ul className="space-y-2 flex flex-col">
        {footerDetails.links?.map(({ link, title }) => (
          <Link
            key={title}
            href={link}
            className={clsx(buttonVariants({ variant: "link" }), "px-0")}
          >
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
