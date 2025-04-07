import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react"; // Import all icons

// Helper function copied from previous slides
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  return <IconComponent {...props} />;
};

const BusinessModelSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-8"
    >
      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-6 text-white flex-shrink-0 text-center"
      >
        Business Model: Predictable SaaS Revenue
      </motion.h2>

      {/* Main Content Area - 2x2 Grid Layout */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top-Left: Core Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-green-700/20 to-teal-700/10 p-5 rounded-lg shadow-lg border border-green-600/30 h-full"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-green-400">
            <GetIcon name="RefreshCw" size={20} className="mr-2" />
            Core Revenue: SaaS Subscription
          </h3>
          <p className="text-sm text-gray-300 mb-3">
            {slideData.revenueModel.description}
          </p>
          <p className="text-sm font-medium text-gray-200">
            Primary Stream:{" "}
            <span className="font-normal text-gray-400">
              {slideData.revenueModel.primary}
            </span>
          </p>
        </motion.div>

        {/* Top-Right: Pricing Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800/50 p-5 rounded-lg shadow-lg border border-gray-700 h-full"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-400">
            <GetIcon name="Layers" size={20} className="mr-2" />
            Tiered Pricing Strategy
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            {slideData.pricingStrategy.description}
          </p>
          {/* Placeholder for Pricing Tiers - matching screenshot */}
          <div className="flex justify-around gap-3 text-center">
            {[1, 2, 3].map((tier) => (
              <div
                key={tier}
                className="border border-dashed border-gray-600 rounded p-3 flex-1 bg-gray-700/30"
              >
                <p className="text-xs text-gray-500">[Tier {tier}]</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom-Left: Recurring Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/50 p-5 rounded-lg shadow-lg border border-gray-700 h-full"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-yellow-400">
            <GetIcon name="TrendingUp" size={20} className="mr-2" />
            High-Margin Recurring Revenue
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            {slideData.recurringRevenueMargin.description}
          </p>
          <ul className="list-disc list-outside pl-5 text-sm text-gray-300 space-y-1.5">
            {slideData.recurringRevenueMargin.points
              .slice(0, 3)
              .map((point, i) => (
                <li key={i}>{point}</li>
              ))}
          </ul>
        </motion.div>

        {/* Bottom-Right: Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800/50 p-5 rounded-lg shadow-lg border border-gray-700 h-full flex flex-col"
        >
          <h3 className="text-lg font-semibold mb-3 flex items-center text-purple-400">
            <GetIcon name="Target" size={20} className="mr-2" />
            Attractive Unit Economics (Targets)
          </h3>
          <p className="text-sm text-gray-400 mb-4 flex-shrink-0">
            {slideData.unitEconomics.description}
          </p>
          {/* Placeholder for LTV/CAC graphic - matching screenshot */}
          <div className="flex-grow flex items-center justify-center border border-dashed border-gray-600 rounded p-4 bg-gray-700/30">
            <div className="text-center">
              <p className="text-lg font-bold text-purple-400 mb-1">
                LTV : CAC &gt; 3:1
              </p>
              <p className="text-xs text-gray-500">
                [Visual Representation Placeholder]
              </p>
              {/* Basic SVG Flywheel/Loop Concept Placeholder */}
              <svg
                className="w-16 h-16 mx-auto mt-2 text-gray-600"
                fill="none"
                viewBox="0 0 100 100"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 50,10 A 40,40 0 1 1 10,50" />
                <path d="M 50,90 A 40,40 0 1 1 90,50" />
                <polyline points="10,50 5,55 15,55" />
                <polyline points="90,50 95,45 85,45" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BusinessModelSlide;
