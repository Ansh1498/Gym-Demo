import { motion } from "framer-motion";
import ImageBox from "@/components/ui/ImageBox";

export default function TrainerCard({ trainer }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-xl"
    >
      <ImageBox
        src={trainer.image}
        alt={trainer.name}
        label="Photo: Trainer"
        className="aspect-[4/4.5] rounded-2xl"
        imgClassName="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="px-2 pb-2 pt-5">
        <h3 className="text-lg font-extrabold">{trainer.name}</h3>
        <p className="text-sm font-semibold text-brand">{trainer.role}</p>
        <p className="mt-1 text-xs text-muted">{trainer.experience}</p>
      </div>
    </motion.article>
  );
}