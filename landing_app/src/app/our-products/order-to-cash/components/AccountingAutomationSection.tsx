"use client";

import React from "react";
import {
  Zap, // Represents automation/speed
  CreditCard, // Represents payments/credits
  RefreshCw, // Represents reconciliation/sync
  Users, // Represents team/collaboration
  Lock, // Represents security
  ScrollText, // Represents audit trail/logs
} from "lucide-react";

const featureList = [
  {
    icon: Zap,
    title: "Auto-Payment Matching",
    description:
      "Incoming payments are automatically matched and applied to the correct open invoices, eliminating manual guesswork.",
    color: "#2a9d8f", // Teal variant
  },
  {
    icon: CreditCard,
    title: "Automated Credits",
    description:
      "Resolved disputes automatically generate corresponding credit memos, keeping ledger balances accurate without intervention.",
    color: "#e76f51", // Orange variant
  },
  {
    icon: RefreshCw,
    title: "Real-time Reconciliation",
    description:
      "Your books are continuously reconciled as transactions occur, providing an always up-to-date view of your financial health.",
    color: "#264653", // Dark blue variant
  },
  {
    icon: Users,
    title: "Reduced Manual Effort",
    description:
      "Free your team from tedious data entry and reconciliation tasks. Focus on growth, not manual accounting chores.",
    color: "#f4a261", // Light orange variant
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description:
      "All automated processes adhere to strict security protocols and financial compliance standards, ensuring data integrity.",
    color: "#e9c46a", // Yellow variant
  },
  {
    icon: ScrollText,
    title: "Complete Audit Trail",
    description:
      "Every automated action, from payment matching to credit generation, is logged, providing full transparency and traceability for audits.",
    color: "#8d99ae", // Grayish-blue variant
  },
];

const AccountingAutomationSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 rounded-2xl mt-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--heading-color, #1a202c)" }} // Added default color
        >
          Effortless Accounting, Powered by Automation
        </h2>
        <p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: "var(--text-color, #4a5568)", opacity: 0.9 }} // Added default color
        >
          Let the system handle the tedious work. Payments, credits, and
          reconciliation happen automatically, keeping your books accurate and
          freeing up your team.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 transition-shadow hover:shadow-lg"
            style={{ borderColor: feature.color }}
          >
            <div className="flex items-center mb-3">
              <feature.icon
                size={24}
                className="mr-3 flex-shrink-0"
                style={{ color: feature.color }}
              />
              <h3
                className="text-lg font-semibold"
                style={{ color: feature.color }}
              >
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountingAutomationSection;
