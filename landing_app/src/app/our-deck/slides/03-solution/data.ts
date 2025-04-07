// src/app/our-deck/slides/03-solution/data.ts

export const slideData = {
  title: "Our Solution: Payce - Automated Order-to-Cash",
  solutionSummary:
    "Payce is a cloud-based automation tool that handles the entire order-to-cash process – from invoicing to reminders to reconciliation – with minimal human input, acting as an 'autopilot' for your receivables.",

  keyFeatures: [
    {
      title: "One-Click Invoicing",
      description:
        "Automated invoice generation and delivery, eliminating manual work.",
      icon: "FileText", // Lucide icon name
    },
    {
      title: "Smart Collections",
      description:
        "Automated reminders & AI-driven nudges for late payers, accelerating cash flow.",
      icon: "BellRing", // Lucide icon name
    },
    {
      title: "Real-Time Receivables Dashboard",
      description:
        "Instant visibility into cash flow, DSO, and aging receivables.",
      icon: "BarChart3", // Lucide icon name
    },
    {
      title: "Automated Reconciliation",
      description:
        "Integrates with sales and banking data to automatically match payments.",
      icon: "RefreshCw", // Lucide icon name
    },
  ],

  valueProposition: [
    {
      metric: "~50% Faster Payments", // Example: Cut 60 days to 30
      description: "Reduce average payment cycle significantly.",
      icon: "Zap",
    },
    {
      metric: "70%+ Less Manual Work",
      description: "Free up team time from tedious follow-ups and data entry.",
      icon: "UserMinus",
    },
    {
      metric: "Improved Cash Flow",
      description: "Gain better control and predictability of cash inflows.",
      icon: "TrendingUp",
    },
  ],

  differentiation: {
    title: "What Makes Payce Different?",
    points: [
      "End-to-end automation in a single, user-friendly platform designed for SMBs.",
      "AI-driven predictions to proactively manage payment risks.",
      "Seamless integration with existing accounting (QuickBooks, Xero) & banking systems.",
      "Acts as an 'autopilot', not just another tool, by connecting disparate data.",
    ],
    icon: "Sparkles",
  },

  validation: {
    title: "Stage & Early Validation",
    status: "Working MVP processing internal test data.",
    nextSteps: "Pilot programs slated for Q3.",
    earlyInterest: "5+ target startups confirmed for beta program.", // Example validation point
    icon: "CheckCircle",
  },

  keyMetrics: [
    {
      label: "DSO Reduction Potential",
      value: "30%+",
      source: "Industry benchmarks / Projections",
      icon: "Clock",
    },
    {
      label: "Invoice Processing Cost Reduction",
      value: "~90%",
      source: "MORDORINTELLIGENCE.COM (Automation Savings)",
      icon: "DollarSign",
    },
    {
      label: "Setup Time",
      value: "< 1 Day",
      source: "Target User Experience",
      icon: "Play",
    },
    {
      label: "Beta Program Signups",
      value: "5+",
      source: "Pre-launch interest",
      icon: "Users",
    },
    // Removed old 'technologies' and 'impactMetric'
  ],
};
