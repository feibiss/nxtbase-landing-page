import Brands from "@/components/containers/brands";
import Hero from "@/components/containers/hero";
import { Showcase } from "@/components/containers/showcase";
import Spacer from "@/components/ui/spacer";
import FeatureList from "@/components/containers/featurelist";
import Testimonials from "@/components/containers/testimonials";
import ContactCard from "@/components/containers/contact";
import WalkThrough from "@components/containers/walkthrough";
import ShowcaseFeatures from "@components/containers/showcaseFeatures";
import Questions from "@components/ui/question";
import FAQ from "@components/ui/faq";
import Pricing from "@components/containers/pricing";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start">
      <Spacer type="md" />
      <Hero />
      <Spacer type="md" />
      <Showcase />
      <Spacer type="md" />
      <WalkThrough />
      <ShowcaseFeatures />
      <Brands />
      <Questions />
      <Spacer type="lg" />
      <Testimonials />
      <Spacer type="lg" />
      <FAQ />
      <Pricing />
      <ContactCard />
    </div>
  );
}
