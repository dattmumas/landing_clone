export const slideData = {
  title: "Go-to-Market: Efficiently Reaching Our Target SMBs",

  targetCustomerDefinition: {
    title: "Beachhead Target Customers",
    description:
      "Initial focus: Tech-savvy SMBs (10-100 employees) like Series A startups, digital agencies, and e-commerce firms who feel O2C pain acutely and are receptive to automation.",
    icon: "Target",
  },

  acquisitionChannels: {
    title: "Key Acquisition Channels",
    channels: [
      {
        name: "Content Marketing & SEO",
        detail: "Educating on cash flow, attracting organic search traffic.",
        icon: "Search",
      },
      {
        name: "Inbound & Community",
        detail:
          "Targeted outreach in founder/CFO communities (Slack, LinkedIn).",
        icon: "Users",
      },
      {
        name: "Partnerships",
        detail:
          "Accounting software marketplaces (QuickBooks), fractional CFOs, accelerators.",
        icon: "Handshake",
      },
      {
        name: "Product-Led Growth",
        detail: "Free trial/tier to drive adoption and self-serve onboarding.",
        icon: "PlayCircle",
      },
      // { name: "Direct Sales (Later)", detail: "Inside sales for larger SMBs/Mid-Market (Phase 2/3).", icon: "Phone" },
    ],
    icon: "Megaphone",
  },

  marketingStrategy: {
    title: "Marketing & Messaging",
    description:
      "Positioning Payce as the champion of SMB cash flow through educational content, webinars, and leveraging founder networks for early testimonials. Potential for viral loop via invoice branding.",
    icon: "Lightbulb",
  },

  salesCycleFunnel: {
    title: "Sales Cycle & Funnel",
    description:
      "Primarily self-serve signup and onboarding (<1 day). Short sales cycle (1-2 months) for assisted onboarding/demos for larger SMBs, focusing on clear ROI.",
    funnelStages: [
      "Awareness (Content/Referral)",
      "Trial/Signup (Website)",
      "Activation (Integration Setup)",
      "Conversion (Paid Plan)",
      "Expansion (Upsell/Referral)",
    ],
    icon: "Filter",
  },

  scalingPlan: {
    title: "Phased Scaling Plan",
    phases: [
      "Phase 1: Direct online acquisition (startups/SMBs), founder networks.",
      "Phase 2: Scale via partnerships (accounting firms, resellers).",
      "Phase 3: Introduce targeted sales for Mid-Market expansion.",
    ],
    icon: "TrendingUp",
  },

  earlyTraction: {
    title: "Early Traction & Pipeline",
    points: [
      "50+ sign-ups for beta waitlist via landing page.", // Example
      "5 pilot customers lined up (tech startups from network).", // Example
      // "Positive feedback on messaging from LinkedIn outreach tests."
    ],
    icon: "Sparkles",
  },

  keyMetrics: [
    {
      label: "Beta Waitlist",
      value: "50+",
      icon: "ListChecks",
    },
    {
      label: "Pilot Commitments",
      value: "5",
      icon: "ClipboardCheck",
    },
    {
      label: "Target CAC",
      value: "< $1000",
      icon: "DollarSign",
    },
    {
      label: "Target Funnel Conversion (Trial>Paid)",
      value: "~20%",
      icon: "Percent",
    },
    {
      label: "Year 1 Customer Goal",
      value: "200+",
      icon: "Goal",
    },
  ],

  // Added data for Quarterly Growth Bar Chart
  quarterlyGrowthData: [
    { quarter: "Q1", customers: 20, color: "#a7f3d0" }, // Example target numbers
    { quarter: "Q2", customers: 50, color: "#6ee7b7" },
    { quarter: "Q3", customers: 80, color: "#34d399" },
    { quarter: "Q4", customers: 100, color: "#10b981" }, // Cumulative > 200 target
  ],
};
