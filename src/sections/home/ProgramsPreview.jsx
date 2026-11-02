import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import ProgramCard from "@/components/cards/ProgramCard";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { programs } from "@/data/programs";

export default function ProgramsPreview() {
  const featured = programs.filter((p) => p.featured);

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Programs"
          title="Our"
          highlight="Programs"
          subtitle="Training matched to your goal"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <StaggerItem key={p.id}>
              <ProgramCard program={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 text-center">
          <Button to="/training" variant="outline">
            View All Programs
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}