import ContactCard from "@/components/containers/contact";
import FAQ from "@/components/containers/faq";
import FeatureCardsList from "@/components/containers/featureCardsList";
import FeaturedTestimonial from "@/components/containers/featuresTestimonial";
import Hero from "@/components/containers/hero";

export default function Home() {
  return (
    <>
      {" "}
      <Hero />
      <FeaturedTestimonial />
      <FeatureCardsList />
      <ContactCard />
      <FAQ />
    </>
  );
}
