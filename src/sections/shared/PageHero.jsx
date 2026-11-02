import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function PageHero({ badge, title, highlight, subtitle }) {
  return (
    <section className="pb-4 pt-14 sm:pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          {badge && <Badge>{badge}</Badge>}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {title} {highlight && <span className="text-brand">{highlight}</span>}
          </h1>
          {subtitle && <p className="mt-4 text-base text-muted">{subtitle}</p>}
        </motion.div>
      </Container>
    </section>
  );
}