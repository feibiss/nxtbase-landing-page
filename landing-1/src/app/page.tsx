import Hero from "@/components/containers/hero";
import Banner from "@/components/containers/banner";
import Carousal from "@/components/containers/carousal";
import ContactCard from "@/components/containers/contactCard";
import Testimonials from "@/components/containers/testimonials";
import FeatureCardsList from "@/components/containers/featureCardsList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between snap-y overflow-y-scroll">
      <Hero />
      <Banner />
      <Testimonials />
      <FeatureCardsList />
      <Carousal />
      <ContactCard />
    </main>
  );
}
