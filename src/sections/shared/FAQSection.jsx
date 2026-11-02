import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";

export default function FAQSection({ items }) {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
        />
        <FadeIn className="mt-10">
          <Accordion items={items} />
        </FadeIn>
      </Container>
    </section>
  );
}