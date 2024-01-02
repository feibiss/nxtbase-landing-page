import Hero from "@/components/containers/hero";
import Banner from "@/components/containers/banner";
import ContactCard from "@/components/containers/contactCard";
import Testimonials from "@/components/containers/testimonials";
import FeatureCardsList from "@/components/containers/featureCardsList";
import Spacer from "@/components/containers/spacer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <div className="absolute inset-0 -z-10 h-full w-full dark:bg-primary-foreground bg-primary-foreground bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <Hero />
      <Spacer type="md" />
      <Banner />
      <Testimonials />
      <Spacer type="lg" />
      <FeatureCardsList />
      <Spacer type="lg" />
      <ContactCard />
    </main>
  );
}
