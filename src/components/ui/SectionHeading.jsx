import FadeIn from "@/components/animations/FadeIn";
import Badge from "./Badge";
import { cn } from "@/lib/cn";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <FadeIn
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}{" "}
        {highlight && <span className="text-brand">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted">{subtitle}</p>}
    </FadeIn>
  );
}