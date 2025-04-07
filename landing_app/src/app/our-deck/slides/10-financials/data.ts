export const slideData = {
  title: "Financials & Fundraising: Fueling Our Growth",

  financialProjections: {
    title: "High-Level Financial Projections (ARR)",
    description:
      "Based on hitting customer acquisition targets and tiered pricing adoption.",
    // Data for ARR Bar Chart (Example: Year 0=Current/Dev, Year 1-3 Post-Launch)
    arrData: [
      { year: "Y0 (Dev)", arr: 0, color: "#d1d5db" },
      { year: "Y1", arr: 0.3, color: "#a7f3d0" }, // $0.3M
      { year: "Y2", arr: 2.0, color: "#6ee7b7" }, // $2.0M
      { year: "Y3", arr: 8.0, color: "#34d399" }, // $8.0M
    ],
    note: "Assumes avg. initial ARR/customer ramps, ~80% Gross Margin target at scale.",
    icon: "TrendingUp",
  },

  fundraisingAsk: {
    title: "Seed Round Fundraising",
    amount: "$[Amount]M", // Placeholder like $1.5M
    purpose:
      "To launch Payce, achieve initial market traction (~200 customers / ~$0.5M ARR), and reach Series A readiness.",
    runway: "Provides ~18 months of runway.",
    status: "[Round Status, e.g., Opening round / $X committed]", // Placeholder
    icon: "PiggyBank",
  },

  useOfFunds: {
    title: "Use of Funds",
    description:
      "Strategic allocation to accelerate product development and market entry.",
    // Data for Use of Funds (Example percentages)
    allocation: [
      {
        category: "Product Development (Team & R&D)",
        percentage: 50,
        color: "#06d6a0",
      },
      {
        category: "Sales & Marketing (GTM Execution)",
        percentage: 30,
        color: "#118ab2",
      },
      { category: "Operations & Buffer", percentage: 20, color: "#ffd166" },
    ],
    icon: "PieChart",
  },

  keyMilestones: {
    title: "Key Milestones with Funding",
    milestones: [
      "Month 6: Public Launch & First 50 Paying Customers",
      "Month 12: ~150 Customers / ~$250k ARR",
      "Month 18: ~300 Customers / ~$500k+ ARR & Series A Ready",
    ],
    icon: "Milestone",
  },
};
