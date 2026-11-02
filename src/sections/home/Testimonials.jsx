import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Reviews"
          title="Member"
          highlight="Stories"
          subtitle="Real results from our community."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <TestimonialCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}