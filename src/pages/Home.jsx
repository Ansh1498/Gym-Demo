import Hero from "@/sections/home/Hero";
import StatsStrip from "@/sections/home/StatsStrip";
import ProgramsPreview from "@/sections/home/ProgramsPreview";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import TrainersPreview from "@/sections/home/TrainersPreview";
import Testimonials from "@/sections/home/Testimonials";
import CTABanner from "@/sections/shared/CTABanner";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProgramsPreview />
      <WhyChooseUs />
      <TrainersPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}

<Seo description="FitIndia Gym offers world-class fitness training for all ages 12+. Book your free trial today." />