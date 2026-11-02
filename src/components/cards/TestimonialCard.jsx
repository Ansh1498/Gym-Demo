import { Star } from "lucide-react";

export default function TestimonialCard({ item }) {
  return (
    <article className="h-full rounded-3xl border border-orange-100 bg-white p-7">
      <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-brand text-brand" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-5 border-t border-orange-100 pt-4">
        <p className="text-sm font-extrabold">{item.name}</p>
        <p className="text-xs text-brand">{item.result}</p>
      </div>
    </article>
  );
}