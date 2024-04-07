import Brands from "@/components/containers/brands";
import ContactCard from "@/components/containers/contact";
import FeaturedTestimonial from "@/components/containers/featuresTestimonial";
import Hero from "@/components/containers/hero";
import Membership from "@/components/containers/membership";
import Overview from "@/components/containers/overview";
import Pricing from "@/components/containers/pricing";
import RecentWork from "@/components/containers/recentWork";
import { Showcase } from "@/components/containers/showcase";
import ShowcaseFeatures from "@/components/containers/showcaseFeatures";
import WalkThrough from "@/components/containers/walkthrough";
import FAQ from "@/components/ui/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between max-w-[100vw] overflow-hidden">
      <Hero />
      <Showcase />
      <Brands />
      <WalkThrough />
      <FeaturedTestimonial />
      <Overview />
      <Membership />
      <RecentWork />
      <ShowcaseFeatures />
      <Pricing />
      <FAQ />
      <ContactCard />
    </main>
  );
}
