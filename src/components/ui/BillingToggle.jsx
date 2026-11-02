import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly -20%" },
];

export default function BillingToggle({ value, onChange }) {
  return (
    <div
      role="group"
      aria-label="Billing period"
      className="mx-auto flex w-fit rounded-full border border-orange-100 bg-white p-1"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "relative rounded-full px-6 py-2.5 text-sm font-bold transition-colors",
            value === opt.value ? "text-white" : "text-navy"
          )}
        >
          {value === opt.value && (
            <motion.span
              layoutId="billing-pill"
              className="absolute inset-0 rounded-full bg-brand"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}