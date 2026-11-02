export const YEARLY_DISCOUNT = 0.2; // 20% off

export const plans = [
  {
    id: "basic",
    name: "Basic",
    monthly: 999,
    popular: false,
    features: [
      "Gym floor access",
      "Locker room",
      "1 free trainer session",
      "Mon-Sat timing",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 1799,
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Diet plan",
      "Progress tracking",
      "Free guest pass",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    monthly: 2999,
    popular: false,
    features: [
      "Everything in Pro",
      "Personal trainer",
      "Monthly body scan",
      "Steam and recovery",
      "Priority booking",
    ],
  },
];

export const compareRows = [
  { label: "Gym access", basic: true, pro: true, elite: true },
  { label: "Group classes", basic: false, pro: true, elite: true },
  { label: "Personal trainer", basic: false, pro: false, elite: true },
  { label: "Diet plan", basic: false, pro: true, elite: true },
  { label: "Guest pass", basic: false, pro: true, elite: true },
];

// Monthly ya yearly ke hisaab se per-month price nikalta hai
export const getPrice = (plan, billing) =>
  billing === "yearly"
    ? Math.round(plan.monthly * (1 - YEARLY_DISCOUNT))
    : plan.monthly;

export const formatPrice = (n) => `₹${n.toLocaleString("en-IN")}`;