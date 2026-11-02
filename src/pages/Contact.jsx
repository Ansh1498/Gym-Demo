import PageHero from "@/sections/shared/PageHero";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";
import WhatsAppBanner from "@/sections/contact/WhatsAppBanner";
import CTABanner from "@/sections/shared/CTABanner";
import Seo from "@/components/Seo";

export default function Contact() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in"
        highlight="Touch"
        subtitle="Questions or want a free trial? We reply within 24 hours."
      />

      <section className="py-10">
        <Container className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="right">
            <ContactForm />
          </FadeIn>
          <ContactInfo />
        </Container>
      </section>

      <WhatsAppBanner />
      <CTABanner />
    </>
  );
}

<Seo
  title="Contact"
  description="Contact FitIndia Gym for a free trial, membership questions or directions."
/>