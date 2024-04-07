import Brands from "@/components/containers/brands";
import Community from "@/components/containers/community";
import ContactCard from "@/components/containers/contact";
import FeaturedTestimonial from "@/components/containers/featuredTestimonial";
import Features from "@/components/containers/features";
import Hero from "@/components/containers/hero";
import Preview from "@/components/containers/preview";
import Primitives from "@/components/containers/primitives";
import Showcase from "@/components/containers/showcase";
import Testimonials from "@/components/containers/testimonials";

import {
  featuredTestimonial,
  featuredTestimonial_2,
  featuredTestimonial_3,
  featuredTestimonial_4,
  featuredTestimonial_5,
} from "@/lib/enums";

export default function Home() {
  return (
    <main className="flex w-full max-w-full bg-gray-100 dark:bg-transparent flex-grow min-h-screen flex-col items-center justify-between pt-20 lg:pt-40 overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.5),rgba(255,255,255,0))]"></div>
      <Hero />
      <Brands />
      <Primitives />
      <FeaturedTestimonial testimony={featuredTestimonial} />
      <Features />
      <FeaturedTestimonial testimony={featuredTestimonial_2} />
      <Preview />
      <FeaturedTestimonial testimony={featuredTestimonial_3} />
      <Showcase />
      <FeaturedTestimonial testimony={featuredTestimonial_4} />
      <Testimonials />
      <FeaturedTestimonial testimony={featuredTestimonial_5} />
      <ContactCard />
    </main>
  );
}
