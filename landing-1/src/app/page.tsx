import Hero from "@/components/containers/hero";
import Banner from "@/components/containers/banner";
import ContactCard from "@/components/containers/contactCard";
import Testimonials from "@/components/containers/testimonials";
import FeatureCardsList from "@/components/containers/featureCardsList";
import Spacer from "@/components/containers/spacer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Banner />
      <Testimonials />
      <Spacer type="lg" />
      <FeatureCardsList />
      <Spacer type="lg" />
      <ContactCard />
    </main>
  );
}
