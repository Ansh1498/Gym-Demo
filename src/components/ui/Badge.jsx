import { cn } from "@/lib/cn";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-orange-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}