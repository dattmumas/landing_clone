export const slideData = {
  title: "Competitive Landscape: Filling the SMB Gap",

  landscapeOverview: {
    description:
      "Payce competes against legacy enterprise software (too complex/costly for SMBs), niche point solutions (incomplete), and the dominant 'competitor': manual processes (inefficient).",
    icon: "Map",
  },

  competitors: [
    {
      name: "HighRadius / Billtrust",
      description:
        "Enterprise O2C automation. Powerful but overly complex and expensive for SMBs.",
      logo: "landmark", // Placeholder icon name
      differentiation: "Payce: Designed for SMB simplicity and affordability.",
    },
    {
      name: "Bill.com",
      description:
        "Primarily AP automation; AR features are basic, not end-to-end O2C.",
      logo: "dollar-sign", // Placeholder icon name
      differentiation: "Payce: Comprehensive O2C focus, deeper AR automation.",
    },
    {
      name: "Upflow / Chaser / Kolleno",
      description: "Point solutions focused mainly on collection reminders.",
      logo: "bell-ring", // Placeholder icon name
      differentiation:
        "Payce: Broader scope (invoicing to reconciliation) + AI insights.",
    },
    {
      name: "Manual Processes (Excel/Email)",
      description:
        "The status quo for most SMBs. Highly inefficient and error-prone.",
      logo: "table", // Placeholder icon name
      differentiation: "Payce: Automation, speed, accuracy, visibility.",
    },
  ],

  marketPositioning: {
    title: "Payce's Strategic White Space",
    description:
      "No single player dominates SMB O2C automation. Payce provides a comprehensive, easy-to-use, AI-enhanced platform tailored specifically for this underserved segment.",
    position: "Easy-to-Use + Comprehensive O2C for SMBs",
    icon: "Crosshair",
  },

  // Data for a 2x2 Quadrant Chart
  quadrantData: {
    xAxisLabel: "Target Customer (SMB <-> Enterprise)",
    yAxisLabel: "Solution Breadth (Point <-> Comprehensive)",
    competitors: [
      { name: "Payce", x: 25, y: 75, logo: "star" }, // SMB, Comprehensive
      { name: "HighRadius", x: 75, y: 80, logo: "landmark" }, // Enterprise, Comprehensive
      { name: "Bill.com", x: 40, y: 40, logo: "dollar-sign" }, // SMB/Mid, Less Comprehensive AR
      { name: "Upflow/Chaser", x: 30, y: 25, logo: "bell-ring" }, // SMB, Point Solution
      { name: "Manual/Excel", x: 10, y: 10, logo: "table" }, // SMB, Point/None
    ],
  },

  // Key metrics relating to competition/market validation
  keyMetrics: [
    {
      label: "Market Validation (Enterprise)",
      value: "HighRadius: $3.1B Val.",
      source: "TECHCRUNCH.COM",
      icon: "BadgeCheck",
    },
    {
      label: "Market Validation (AR Focus)",
      value: "Billtrust Acquired: $1.7B",
      source: "REUTERS.COM",
      icon: "BadgeDollarSign",
    },
    {
      label: "SMB Market Opportunity",
      value: "90% Still Use Manual/Light AR",
      source: "UPFLOW.IO",
      icon: "MousePointerSquareDashed",
    },
  ],
};
