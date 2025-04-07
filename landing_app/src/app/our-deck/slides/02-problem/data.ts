// src/app/our-deck/slides/01-intro/data.ts
// src/app/our-deck/slides/02-problem/data.ts

export const slideData = {
  title: "The Problem: Broken Order-to-Cash Cripples SMBs",
  subtitle:
    "Manual processes lead to delayed payments, wasted time, and stunted growth.",

  painPointOverview:
    "Small businesses struggle to get paid on time. They manually invoice, track payments in spreadsheets, and spend countless hours chasing late payments, choking their cash flow lifeline.",

  consequences: [
    "Severe cash flow crunches threatening survival.",
    "High Days Sales Outstanding (DSO) - waiting 60+ days for cash.",
    "Significant lost productivity (10%+ of workday) on manual follow-ups.",
    "Revenue leakage from errors, missed invoices, and write-offs.",
    "Inability to forecast cash or invest in growth.",
  ],

  // Example scenario can be integrated into the slide narrative
  example:
    "A typical startup finance team spends 10% of their time just chasing invoices, while manual errors cost thousands in lost revenue.",

  currentSolutionsFailures: {
    title: "Why Current Tools Fail SMBs",
    points: [
      "Accounting software, Excel, and email are disconnected silos.",
      "Lack of automation means repetitive manual tasks.",
      "No real-time visibility into who owes what and when.",
      "Things inevitably slip through the cracks.",
    ],
  },

  scope: {
    title: "A Universal SMB Headache",
    description:
      "From 5-person startups to mid-size retailers, millions of businesses bleed time and money due to antiquated O2C processes.",
  },

  keyMetrics: [
    {
      value: "50%+ Paid Late",
      label: "Over half of B2B invoices face delays.",
      source: "UPFLOW.IO",
      icon: "Clock", // Lucide icon
    },
    {
      value: "~10% Workday Lost",
      label: "Time spent by SMB owners chasing payments.",
      source: "UPFLOW.IO",
      icon: "UserX", // Lucide icon
    },
    {
      value: "90% Cost Inefficiency",
      label: "Manual invoice processing ($16-$22) vs. automated ($2).",
      source: "MORDORINTELLIGENCE.COM",
      icon: "DollarSign", // Lucide icon
    },
    {
      value: "25% Bankruptcies",
      label: "European SMB failures linked to late payments.",
      source: "UPFLOW.IO",
      icon: "TrendingDown", // Lucide icon
    },
    {
      value: "60+ Days DSO",
      label: "Common wait time for cash, hindering growth.",
      source: "UPFLOW.IO (Typical)",
      icon: "CalendarClock", // Lucide icon
    },
  ],

  // Removed old problemStatement, keyProblems, costMetric, conclusion
};
