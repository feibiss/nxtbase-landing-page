import Hero from "@/components/containers/hero";
import Spacer from "@/components/ui/spacer";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start">
      <Spacer type="md" />
      <Hero />
    </div>
  );
}
