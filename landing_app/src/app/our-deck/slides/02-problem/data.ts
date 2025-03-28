// src/app/our-deck/slides/01-intro/data.ts
// src/app/our-deck/slides/02-problem/data.ts

export const slideData = {
  title: "The Problem",
  subtitle: "Modern Financial Operations Face Critical Challenges",

  problemStatement:
    "Modern finance and operations systems are not designed to optimally handle automation as a presumed reality. They require manual intervention at every step, communication between parties to translate operational information into financial entries, and are designed with yesterday's realities at their core.",

  keyProblems: [
    {
      title: "Manual Processing",
      description:
        "Finance teams spend 75% of their time on repetitive tasks rather than strategic initiatives.",
      icon: "⏱️",
    },
    {
      title: "Data Silos",
      description:
        "Fragmented financial data across systems creates reconciliation nightmares and visibility gaps.",
      icon: "🧩",
    },
    {
      title: "Compliance Risk",
      description:
        "Human error in accounting processes leads to regulatory issues and financial discrepancies.",
      icon: "⚠️",
    },
  ],

  costMetric: {
    figure: "$120B+",
    label: "Annual cost of manual accounting processes for US businesses",
  },

  conclusion:
    "These traditional finance operations create bottlenecks that prevent businesses from scaling, and necessitate teams of people who aren't pushing the ball forward",
};
