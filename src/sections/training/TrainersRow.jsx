import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import TrainerCard from "@/components/cards/TrainerCard";
import { trainers } from "@/data/trainers";

export default function TrainersRow() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Coaches"
          title="Train With"
          highlight="Experts"
          subtitle="Every program is led by a certified trainer."
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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