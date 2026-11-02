import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageBox from "@/components/ui/ImageBox";

export default function ProgramCard({ program }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-xl"
    >
      <ImageBox
        src={program.image}
        alt={program.title}
        label={`Photo: ${program.title}`}
        className="aspect-[4/3] rounded-2xl"
        imgClassName="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="px-2 pb-2 pt-5">
        <h3 className="text-lg font-extrabold">{program.title}</h3>
        <p className="mt-1 text-sm text-muted">{program.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-bold text-brand">
            {program.duration} | {program.level}
          </span>
          <Link
            to="/training"
            aria-label={`Learn more about ${program.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-brand transition-colors group-hover:bg-brand group-hover:text-white"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}