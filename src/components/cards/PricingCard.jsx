import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { getPrice, formatPrice } from "@/data/plans";

export default function PricingCard({ plan, billing }) {
  const price = getPrice(plan, billing);
  const popular = plan.popular;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative flex h-full flex-col rounded-[2rem] p-8 shadow-sm",
        popular
          ? "bg-brand text-white shadow-xl md:py-12"
          : "border border-orange-100 bg-white"
      )}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-navy px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
          Most popular
        </span>
      )}

      <h3 className="text-xl font-extrabold">{plan.name}</h3>

      <div className="mt-4 flex items-end gap-1">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={price}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-extrabold leading-tight"
            >
              {formatPrice(price)}
            </motion.p>
          </AnimatePresence>
        </div>
        <span className={cn("pb-1.5 text-sm", popular ? "text-orange-50" : "text-muted")}>
          / month
        </span>
      </div>

      <p className={cn("mt-1 text-xs", popular ? "text-orange-50" : "text-muted")}>
        {billing === "yearly"
          ? `Billed ${formatPrice(price * 12)} per year`
          : "Billed monthly"}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                popular ? "bg-white text-brand" : "bg-orange-100 text-brand"
              )}
            >
              <Check size={13} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        to="/contact"
        variant={popular ? "white" : "primary"}
        className="mt-8 w-full"
      >
        Join {plan.name}
      </Button>
    </motion.article>
  );
}