export const slideData = {
  title: "Business Model: Predictable SaaS Revenue",

  revenueModel: {
    title: "Core Revenue: SaaS Subscription",
    description:
      "Payce operates on a tiered SaaS subscription model. Businesses pay a recurring monthly or annual fee based on usage (e.g., invoice volume) or features, ensuring predictable ARR.",
    primary: "Subscription Fees (Monthly/Annual)",
    icon: "Repeat", // Lucide icon
  },

  pricingStrategy: {
    title: "Tiered Pricing Strategy",
    description:
      "Pricing scales with customer size and needs, ensuring accessibility for startups and capturing value from larger SMBs. Benchmarked against comparable fintech tools.",
    tiers: [
      {
        name: "Basic",
        price: "~$49/mo",
        description: "For small teams, core automation.",
      },
      {
        name: "Pro",
        price: "~$199/mo",
        description: "Advanced features, higher volumes.",
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Tailored solutions, premium support.",
      },
    ],
    note: "Final pricing TBD based on pilot feedback.",
    icon: "Tags", // Lucide icon
  },

  recurringRevenueMargin: {
    title: "High-Margin Recurring Revenue",
    description:
      "Our SaaS model drives predictable ARR/MRR with low incremental cost per customer, typical of software businesses.",
    points: [
      "Focus on Annual Recurring Revenue (ARR).",
      "Target Gross Margins: ~80% at scale.",
      "Low marginal cost to serve additional users.",
    ],
    icon: "TrendingUp", // Lucide icon
  },

  additionalRevenueStreams: {
    title: "Future Monetization Opportunities",
    description:
      "Beyond subscriptions, the platform allows for future expansion into value-added services.",
    streams: [
      "Payment Facilitation Fees (Optional, e.g., % of invoice paid via Payce).",
      "Premium Add-ons (e.g., Advanced credit checks, dynamic discounting).",
      "Embedded Financial Products (e.g., Invoice financing partnerships).",
    ],
    icon: "PlusCircle", // Lucide icon
  },

  unitEconomics: {
    title: "Attractive Unit Economics (Targets)",
    description:
      "Designed for strong LTV/CAC ratio, driven by product stickiness and efficient acquisition channels.",
    targets: [
      "Target LTV/CAC Ratio > 3x.",
      "Customer Lifetime: 5+ years (low expected churn <10% annually).",
      "Payback Period: < 12 months.",
    ],
    icon: "Ratio", // Lucide icon
  },

  keyMetrics: [
    {
      label: "Target ARPU (Pro Tier)",
      value: "~$2.4k / year",
      icon: "User",
    },
    {
      label: "Gross Margin Target",
      value: "~80%",
      icon: "TicketPercent",
    },
    {
      label: "Target LTV/CAC",
      value: "> 3x",
      icon: "Target",
    },
    {
      label: "Target Churn (Annual)",
      value: "< 10%",
      icon: "LogOut",
    },
  ],
};
