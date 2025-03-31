// src/app/our-deck/slides/04-market/data.ts

export const slideData = {
  title: "Market Opportunity",

  marketStats: {
    marketSize: "$5-7B",
    marketSizeDescription:
      "Financial operations software market for startups and SMBs",
    growthRate: "11.7% CAGR",
    growthRateDescription: "Growth rate of finance automation segment",
    startups: "500K+",
    startupsDescription: "New tech startups founded annually worldwide",
  },

  painPoints: [
    {
      stat: "82%",
      description: "of startup failures attributed to cash flow problems",
    },
    {
      stat: "15-20 hours",
      description: "per week spent on financial administration",
    },
    {
      stat: "Series A+",
      description:
        "Financial operations that work at seed stage break at this point",
    },
  ],

  targetSegment: {
    funding: {
      label: "Post-Seed to Series B",
      description: "$1M-$20M Raised",
    },
    revenue: {
      label: "Revenue-Generating",
      description: "$500K-$10M ARR",
    },
  },

  // Updated chart data to show market size by funding stage
  chartData: [
    { name: "Pre-Seed", value: 15, color: "#d1d5db", marketSize: "$0.3B" },
    { name: "Seed", value: 35, color: "#06d6a0", marketSize: "$0.9B" },
    { name: "Series A", value: 65, color: "#06d6a0", marketSize: "$1.7B" },
    { name: "Series B", value: 85, color: "#118ab2", marketSize: "$2.2B" },
    { name: "Series C+", value: 100, color: "#d1d5db", marketSize: "$2.8B" },
  ],
  chartTitle: "Addressable Market by Funding Stage",
  chartSubtitle: "Target: $4.8B combined market (Seed through Series B)",
};
