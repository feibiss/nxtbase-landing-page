import Hero from "@/components/containers/hero";
import Banner from "@/components/containers/banner";
import ContactCard from "@/components/containers/contactCard";
import Testimonials from "@/components/containers/testimonials";
import FeatureCardsList from "@/components/containers/featureCardsList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Banner />
      <Testimonials />
      <FeatureCardsList />
      <ContactCard />
    </main>
  );
}
