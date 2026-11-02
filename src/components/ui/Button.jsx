import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white",
  white: "bg-white text-brand hover:bg-cream",
};

export default function Button({
  to,
  href,
  variant = "primary",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200",
    variants[variant],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}