import { motion } from "framer-motion";

const container = (stagger, delayChildren) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Stagger({
  children,
  stagger = 0.12,
  delay = 0,
  className,
}) {
  return (
    <motion.div
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}