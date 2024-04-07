import Blogs from "@/components/container/blogs";
import ContactCard from "@/components/container/contact";
import FeatureSection from "@/components/container/featureSection";
import Hero from "@/components/container/hero";
import Showcase from "@/components/container/showcase";
import Testimonials from "@/components/container/testimonials";
import Walkthrough from "@/components/container/walkthrough";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <FeatureSection />
      <Walkthrough />
      <Testimonials />
      <Blogs />
      <Showcase />
      <ContactCard />
    </main>
  );
}
