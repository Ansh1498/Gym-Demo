import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function useCountUp(end, { duration = 1.8 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, end, duration]);

  return [ref, value];
}