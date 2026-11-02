import { motion } from "framer-motion";

export default function InfoCard({ icon: Icon, title, children }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-white p-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-100 text-brand">
        <Icon size={20} />
      </span>
      <div>
        <h3 className="text-sm font-extrabold">{title}</h3>
        <div className="mt-1 text-sm text-muted">{children}</div>
      </div>
    </motion.div>
  );
}