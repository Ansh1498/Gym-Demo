import PageHero from "@/sections/shared/PageHero";
import PricingSection from "@/sections/membership/PricingSection";
import ComparePlans from "@/sections/membership/ComparePlans";
import FAQSection from "@/sections/shared/FAQSection";
import CTABanner from "@/sections/shared/CTABanner";
import { membershipFaqs } from "@/data/faqs";
import Seo from "@/components/Seo";

export default function Membership() {
  return (
    <>
      <PageHero
        badge="Membership"
        title="Choose Your"
        highlight="Plan"
        subtitle="No hidden charges. Cancel anytime."
      />
      <PricingSection />
      <ComparePlans />
      <FAQSection items={membershipFaqs} />
      <CTABanner />
    </>
  );
}

<Seo
  title="Membership"
  description="Simple membership plans with no hidden charges. Choose Basic, Pro or Elite."
/>