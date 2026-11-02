import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import TrainerCard from "@/components/cards/TrainerCard";
import { trainers } from "@/data/trainers";

export default function TrainersPreview() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Team"
          title="Our"
          highlight="Trainers"
          subtitle="Certified coaches who care about your progress."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {trainers.map((t) => (
            <StaggerItem key={t.id}>
              <TrainerCard trainer={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}