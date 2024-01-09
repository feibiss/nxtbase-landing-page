import { StatsCard } from "@/components/containers/statscard";
import Brands from "@/components/containers/brands";
import Hero from "@/components/containers/hero";
import { Showcase } from "@/components/containers/showcase";
import Spacer from "@/components/ui/spacer";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start">
      <Spacer type="md" />
      <Hero />
      <Spacer type="md" />
      <Showcase />
      <Spacer type="md" />
      <Brands />
      <Spacer type="lg" />
      <StatsCard />
    </div>
  );
}
