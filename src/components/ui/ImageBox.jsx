import { useState } from "react";
import { cn } from "@/lib/cn";

export default function ImageBox({ src, alt, label, className, imgClassName }) {
  const [ok, setOk] = useState(Boolean(src));

  return (
    <div className={cn("overflow-hidden bg-peach", className)}>
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs font-bold text-orange-700">
          {label || "Add photo"}
        </div>
      )}
    </div>
  );
}