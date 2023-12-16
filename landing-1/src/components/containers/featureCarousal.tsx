export default function FeatureCarousel() {
  const logos = [
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
    <div className="flex flex-col items-start justify-start gap-8">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start gap-6 will-change-transform mx-4 animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li
              className="min-w-[12rem] cursor-pointer hover:border-primary/20 hover:text-primary hover:bg-primary-foreground border-4 border-transparent py-4 bg-gray-100 w-full font-medium rounded-full flex-nowrap flex justify-center items-center"
              key={index}
            >
              {logo.src}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start gap-6 will-change-transform mx-4 animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li
              className=" min-w-[12rem] cursor-pointer hover:border-primary/20 hover:text-primary hover:bg-primary-foreground border-4 border-transparent py-4 bg-gray-100 w-full font-medium rounded-full flex-nowrap flex justify-center items-center"
              key={index}
            >
              {logo.src}
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start gap-6 will-change-transform mx-4 animate-infinite-scroll">
          {logos.map((logo, index) => (
            <li
              className="min-w-[12rem] cursor-pointer hover:border-primary/20 hover:text-primary hover:bg-primary-foreground border-4 border-transparent py-4 bg-gray-100 w-full font-medium rounded-full flex-nowrap flex justify-center items-center"
              key={index}
            >
              {logo.src}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
