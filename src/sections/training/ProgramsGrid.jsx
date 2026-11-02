import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ProgramCard from "@/components/cards/ProgramCard";
import { programs } from "@/data/programs";
import { cn } from "@/lib/cn";

const categories = ["All", "Weight Loss", "Muscle Gain", "Yoga", "Kids 12+"];

export default function ProgramsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? programs
      : programs.filter((p) => p.category === active);

  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full border border-orange-100 bg-white px-5 py-2.5 text-sm font-bold transition-colors",
                active === cat ? "text-white" : "text-navy hover:border-brand"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramCard program={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}