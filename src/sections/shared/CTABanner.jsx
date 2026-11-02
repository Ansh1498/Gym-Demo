import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-16">
      <Container>
        <FadeIn className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Your first day is free. Try it today.
            </h2>
            <p className="mt-2 text-orange-50">
              Book a free trial and our team will guide you.
            </p>
          </div>
          <Button to="/contact" variant="white" className="shrink-0">
            Book Free Trial
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}