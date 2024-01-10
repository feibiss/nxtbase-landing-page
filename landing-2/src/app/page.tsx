import { StatsCard } from "@/components/containers/statscard";
import Brands from "@/components/containers/brands";
import Hero from "@/components/containers/hero";
import { Showcase } from "@/components/containers/showcase";
import Spacer from "@/components/ui/spacer";
import FeatureList from "@/components/containers/featurelist";
import Testimonials from "@/components/containers/testimonials";
import ContactCard from "@/components/containers/contact";
import Globe from "@/components/containers/globe";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start">
      <Spacer type="md" />
      <Hero />
      <Spacer type="md" />
      <Showcase />
      <Spacer type="md" />
      <Brands />
      <Globe />
      <StatsCard />
      <Spacer type="lg" />
      <FeatureList />
      <Testimonials />
      <Spacer type="sm" />
      <ContactCard />
    </div>
  );
}
