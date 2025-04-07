// src/app/our-deck/slides/04-market/data.ts

export const slideData = {
  title: "Market Opportunity: Large, Growing, and Ready for Automation",

  marketStats: {
    tam: "~$6 Billion",
    tamYear: "in 2025",
    tamDescription:
      "Global Accounts Receivable/Order-to-Cash automation software market (software & services)",
    tamSource: "MORDORINTELLIGENCE.COM",
    growthRate: "~11.8% CAGR",
    growthRateDescription:
      "Fueled by digital transformation and cloud adoption in finance.",
    growthRateSource: "MORDORINTELLIGENCE.COM",
  },

  segmentation: {
    title: "Segmentation & Beachhead Focus",
    totalTam: "$6B TAM",
    smbSegment: "~$2B SMB Segment",
    smbDescription: "Our initial beachhead market.",
    midMarketEnterprise: "$3-4B Mid-Market & Enterprise",
    midMarketEnterpriseDescription: "Addressable as Payce scales.",
    smbPotentialCustomers: "~600k mid-sized US SMBs",
    smbPotentialCustomersDescription:
      "Ideal early adopters who invoice at scale.",
  },

  expansionVision: {
    title: "Vision: Expanding Addressable Market",
    initialFocus: "Order-to-Cash is the starting point.",
    broaderMarket: "Broader Quote-to-Cash & Finance Automation Market",
    broaderMarketSize: "$10B+ TAM",
    broaderMarketDescription:
      "Including billing, payments, and forecasting tools.",
    longTermGoal:
      "Plan to expand into adjacencies, building a platform company.",
  },

  marketSpend: {
    title: "Market Pain Drives Spending",
    workingCapitalLoss:
      "Tens of billions lost annually in working capital due to slow collections.",
    upgradeIntent: "62% of companies plan to upgrade AR tech.",
    upgradeIntentSource: "UPFLOW.IO",
    smbSpendContext:
      "Significant SMB spend on internal AR staff and inefficient processes is convertible to automation tools like Payce.",
  },

  keyMetrics: [
    { label: "TAM", value: "~$6B (2025)", source: "MORDORINTELLIGENCE.COM" },
    { label: "Growth", value: "11.8% CAGR", source: "MORDORINTELLIGENCE.COM" },
    { label: "SAM (US/EU SMB & Mid-Market)", value: "~$2B" },
    { label: "Beachhead Customer Base", value: "~600k Mid-Sized SMBs (US)" },
    { label: "AR Tech Upgrade Intent", value: "62%", source: "UPFLOW.IO" },
  ],

  chartData: [
    { name: "SMB (Beachhead)", value: 2, color: "#06d6a0", segment: "SAM" },
    {
      name: "Mid-Market/Enterprise",
      value: 4,
      color: "#118ab2",
      segment: "Expansion",
    },
  ],
  chartTitle: "Market Segmentation ($6B TAM)",
  chartSubtitle: "Initial Focus: $2B SMB Segment (SAM)",
};
