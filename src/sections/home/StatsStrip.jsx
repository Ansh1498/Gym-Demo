import Container from "@/components/ui/Container";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import useCountUp from "@/hooks/useCountUp";
import { stats } from "@/data/stats";

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);

  return (
    <div className="rounded-2xl border border-orange-100 bg-white p-6">
      <p ref={ref} className="text-3xl font-extrabold text-brand">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="pb-16">
      <Container>
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <Stat {...s} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}