import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import { whyChoose } from "@/data/whyChoose";

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          badge="Why us"
          title="Why"
          highlight="FitIndia Gym?"
          subtitle="Everything you need to reach your goal, under one roof."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ icon: Icon, title, text }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover="hover"
                className="h-full rounded-3xl border border-orange-100 bg-white p-6"
              >
                <motion.span
                  variants={{ hover: { rotate: -8, scale: 1.12 } }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-brand"
                >
                  <Icon size={22} />
                </motion.span>
                <h3 className="mt-5 text-base font-extrabold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}