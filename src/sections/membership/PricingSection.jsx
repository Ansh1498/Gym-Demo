import { useState } from "react";
import Container from "@/components/ui/Container";
import BillingToggle from "@/components/ui/BillingToggle";
import Stagger, { StaggerItem } from "@/components/animations/Stagger";
import FadeIn from "@/components/animations/FadeIn";
import PricingCard from "@/components/cards/PricingCard";
import { plans } from "@/data/plans";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-10">
      <Container>
        <FadeIn>
          <BillingToggle value={billing} onChange={setBilling} />
        </FadeIn>

        <Stagger className="mt-14 grid items-center gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <PricingCard plan={plan} billing={billing} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}