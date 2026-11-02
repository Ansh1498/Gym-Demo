import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import { schedule } from "@/data/schedule";

export default function WeeklySchedule() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Timetable"
          title="Weekly"
          highlight="Schedule"
          subtitle="Pick your time slot"
        />

        <FadeIn className="mt-12 overflow-x-auto rounded-3xl border border-orange-100 bg-white">
          <div className="grid min-w-[760px] grid-cols-6 gap-3 p-5">
            {schedule.map(({ day, classes }) => (
              <div key={day}>
                <p className="mb-3 text-center text-sm font-extrabold text-brand">
                  {day}
                </p>
                <div className="space-y-3">
                  {classes.map((c) => (
                    <motion.div
                      key={c.time + c.name}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer rounded-xl bg-orange-50 px-2 py-3 text-center transition-colors hover:bg-orange-100"
                    >
                      <p className="text-xs font-bold text-muted">{c.time}</p>
                      <p className="text-sm font-extrabold">{c.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}