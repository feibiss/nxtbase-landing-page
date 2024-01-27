import FeatureCardsList from "@/components/containers/featureCardsList";
import FeaturedTestimonial from "@/components/containers/featuresTestimonial";
import Hero from "@/components/containers/hero";
import Spacer from "@/components/ui/spacer";

export default function Home() {
  return (
    <>
      {" "}
      <Hero />
      <FeaturedTestimonial />
      <FeatureCardsList />
    </>
  );
}
