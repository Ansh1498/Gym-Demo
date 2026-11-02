import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const avatars = ["bg-orange-300", "bg-amber-400", "bg-orange-400"];

export default function Hero() {
  const root = useRef(null);
  const percentRef = useRef(null);
  const [imgOk, setImgOk] = useState(true);

  useGSAP(
    () => {
      const counter = { val: 0 };
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.5 })
        .from(".hero-line", { yPercent: 110, duration: 0.8, stagger: 0.15 }, "-=0.2")
        .from(".hero-text", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".hero-proof", { opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".hero-image", { scale: 0.92, opacity: 0, duration: 0.9 }, 0.3)
        .from(".hero-card", { y: 40, opacity: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-bar", { width: "92%", duration: 1.4, ease: "power2.out" }, "<")
        .to(
          counter,
          {
            val: 92,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              if (percentRef.current) {
                percentRef.current.textContent = `${Math.round(counter.val)}% Completed`;
              }
            },
          },
          "<"
        )
        .to(".hero-card", {
          y: -8,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        
        gsap.to(".hero-parallax", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }); 
    },
    { scope: root }
  );

  return (
    <section ref={root} className="overflow-hidden">
      <Container className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-20">
        <div>
          <div className="hero-badge">
            <Badge>Beginner friendly community</Badge>
          </div>

          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-1">
              <span className="hero-line block">Train Hard.</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line block text-brand">Stay Strong.</span>
            </span>
          </h1>

          <p className="hero-text mt-6 max-w-md text-base text-muted">
            Experience world-class fitness training tailored for all ages 12+.
            Join the premier gym community in India and transform your
            lifestyle today.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/membership" className="hero-btn">
              Join Now
            </Button>
            <Button to="/contact" variant="outline" className="hero-btn">
              Book Free Trial
            </Button>
          </div>

          <div className="hero-proof mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatars.map((c, i) => (
                <span
                  key={i}
                  className={`h-10 w-10 rounded-full border-2 border-white ${c}`}
                />
              ))}
            </div>
            <p className="text-sm font-bold">10K+ members already joined</p>
          </div>
        </div>

        <div className="hero-parallax relative">
          <div className="hero-image relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-peach">
            {imgOk ? (
              <img
                src="/images/hero.jpg"
                alt="Member lifting weights at FitIndia Gym"
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-sm font-bold text-orange-700">
                Add your photo at public/images/hero.jpg
              </div>
            )}
          </div>

          <div className="hero-card absolute inset-x-6 bottom-6 rounded-2xl bg-navy p-4 text-white shadow-xl">
            <p className="text-xs text-slate-300">This week&apos;s goal</p>
            <p ref={percentRef} className="mt-1 text-lg font-extrabold">
              0% Completed
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
              <div
                className="hero-bar h-full rounded-full bg-brand"
                style={{ width: 0 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}