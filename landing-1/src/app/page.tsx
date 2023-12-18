import Banner from "@/components/containers/banner";
import ContactCard from "@/components/containers/contactCard";
import FeatureCard from "@/components/containers/featureCard";
import FeatureCarousel from "@/components/containers/featureCarousal";
import Hero from "@/components/containers/hero";
import Testimonials from "@/components/containers/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Banner />
      <Testimonials />
      <FeatureCarousel />
      <div className="w-full flex flex-col ">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
      <ContactCard />
    </main>
  );
}
