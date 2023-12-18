import clsx from "clsx";

type Props = {
  direction: "reverse" | "default";
};
export default function FeatureCarousel() {
  const FEATURES = [
    { src: "LinkedIn Carousalling", alt: "Facebook" },
    { src: "Add Emoji", alt: "Disney" },
    { src: "Posts for you", alt: "Airbnb" },
    { src: "Post Formatting", alt: "Apple" },
    { src: "Seamless Scheduling", alt: "Spark" },
    { src: '"See more" Preview', alt: "Samsung" },
    { src: "Calendar View", alt: "Quora" },
    { src: "Bold & Italic", alt: "Sass" },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-12 max-w-screen w-screen overflow-hidden mb-8">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <AnimatingList features={FEATURES} />
        <AnimatingList features={FEATURES} />
        <AnimatingList features={FEATURES} />
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <AnimatingList features={FEATURES} direction="reverse" />
        <AnimatingList features={FEATURES} direction="reverse" />
        <AnimatingList features={FEATURES} direction="reverse" />
      </div>
    </div>
  );
}

const AnimatingList = ({
  features,
  direction = "default",
}: {
  features: { src: string }[];
  direction?: "reverse" | "default";
}) => {
  return (
    <ul
      className={clsx(
        "flex items-center justify-center md:justify-start gap-6 will-change-transform mx-4 md:py-4 py-2",
        direction === "default"
          ? "animate-infinite-scroll"
          : "animate-reverse-infinite-scroll"
      )}
    >
      {features.map((feat: { src: string }) => (
        <li
          className="min-w-[12rem] cursor-pointer bg-gradient-to-t from-gray-100 to-transparent bg-white hover:text-primary/70 hover:from-primary/20   shadow-[2px_-1px_1px_1px,-2px_2px_0px_1px] shadow-gray-300/40 hover:shadow-primary/20  md:py-4 py-2  w-full font-medium rounded-full flex-nowrap flex justify-center items-center"
          key={feat.src}
        >
          {feat.src}
        </li>
      ))}
    </ul>
  );
};
