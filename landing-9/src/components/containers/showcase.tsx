import * as React from "react";
import Image from "next/image";

const CAROUSAL_IMAGES = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1705432514/usenextbase/orgs-teams_1_zzemcg.webp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1705432528/usenextbase/user-impersonation_h77zul.webp",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1705432517/usenextbase/stripe-integration_rham5f.webp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1705432513/usenextbase/auth_yhrpj6.webp",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dkqrmlxlg/image/upload/v1705432519/usenextbase/layouts_wmhadw.webp",
  },
];
export function Showcase() {
  return (
    <div className=" bg-primary-background flex justify-center items-end pt-16 pb-20 mx-auto w-full overflow-hidden gap-4">
      {CAROUSAL_IMAGES.map((_) => (
        <div
          key={_.id}
          className=" group  min-w-[20rem] scale-100 hover:z-50 hover:scale-110 hover:shadow-lg shadow-gray-900 transition-all rounded-md overflow-hidden"
        >
          <Image
            alt={"Carousal-Image-"}
            width={600}
            height={800}
            src={_.src}
            className="object-cover aspect-square w-full  "
          />
        </div>
      ))}
    </div>
  );
}
