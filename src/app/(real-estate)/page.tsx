import HeroSection from "@/components/hero/HeroSection";
import FeatureSection from "@/components/feature/FeatureSection";
import FeaturedPropertiesSection from "@/components/feature-properties/FeaturedPropertiesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <HeroSection/>
      <FeatureSection/>
      <FeaturedPropertiesSection/>
    </div>
  );
}
