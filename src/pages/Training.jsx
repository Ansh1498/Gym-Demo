import PageHero from "@/sections/shared/PageHero";
import ProgramsGrid from "@/sections/training/ProgramsGrid";
import WeeklySchedule from "@/sections/training/WeeklySchedule";
import TrainersRow from "@/sections/training/TrainersRow";
import FAQSection from "@/sections/shared/FAQSection";
import CTABanner from "@/sections/shared/CTABanner";
import { trainingFaqs } from "@/data/faqs";
import Seo from "@/components/Seo";

export default function Training() {
  return (
    <>
      <PageHero
        badge="Programs"
        title="Training for"
        highlight="Every Goal"
        subtitle="Pick your program and start today"
      />
      <ProgramsGrid />
      <WeeklySchedule />
      <TrainersRow />
      <FAQSection items={trainingFaqs} />
      <CTABanner />
    </>
  );
}

<Seo
  title="Training"
  description="Weight loss, muscle gain, yoga and kids programs led by certified trainers. See our weekly schedule."
/>