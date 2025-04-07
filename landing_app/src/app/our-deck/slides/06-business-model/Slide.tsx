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

// Reusable Card component for sections (assuming it might be reused or placed in a shared location later)
const SectionCard: React.FC<{
  title: string;
  icon: string;
  color?: string;
  children: React.ReactNode;
  delay: number;
}> = ({ title, icon, color = "#118ab2", children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow p-4 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <h3
        className="text-lg font-semibold mb-2 flex items-center"
        style={{ color }}
      >
        <GetIcon name={icon} size={20} className="mr-2" />
        {title}
      </h3>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </motion.div>
  );
};

const BusinessModelSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative bg-gray-50 text-gray-800 p-6 md:p-8"
    >
      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 flex-shrink-0"
      >
        {slideData.title}
      </motion.h2>

      {/* Main content grid - 2 Columns */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
        {/* === Left Column === */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {/* Revenue Model */}
          <SectionCard
            title={slideData.revenueModel.title}
            icon={slideData.revenueModel.icon}
            color="#06d6a0"
            delay={0.2}
          >
            <p>{slideData.revenueModel.description}</p>
            <p className="mt-2 font-medium">
              Primary Stream:{" "}
              <span className="font-normal">
                {slideData.revenueModel.primary}
              </span>
            </p>
          </SectionCard>

          {/* Pricing Strategy */}
          <SectionCard
            title={slideData.pricingStrategy.title}
            icon={slideData.pricingStrategy.icon}
            color="#118ab2"
            delay={0.3}
          >
            <p>{slideData.pricingStrategy.description}</p>
            {/* Pricing Tiers Table */}
            <div className="mt-2 space-y-2">
              {slideData.pricingStrategy.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex justify-between items-center border-b border-gray-100 pb-1 last:border-0"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{tier.name}</p>
                    <p className="text-xs text-gray-600">{tier.description}</p>
                  </div>
                  <p className="font-semibold text-blue-600 whitespace-nowrap pl-2">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              *{slideData.pricingStrategy.note}
            </p>
          </SectionCard>

          {/* Additional Revenue Streams */}
          <SectionCard
            title={slideData.additionalRevenueStreams.title}
            icon={slideData.additionalRevenueStreams.icon}
            color="#ef476f"
            delay={0.4}
          >
            <p>{slideData.additionalRevenueStreams.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.additionalRevenueStreams.streams.map((stream, i) => (
                <li key={i}>{stream}</li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* === Right Column === */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {/* Recurring Revenue & Margin */}
          <SectionCard
            title={slideData.recurringRevenueMargin.title}
            icon={slideData.recurringRevenueMargin.icon}
            color="#ffd166"
            delay={0.5}
          >
            <p>{slideData.recurringRevenueMargin.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.recurringRevenueMargin.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Unit Economics */}
          <SectionCard
            title={slideData.unitEconomics.title}
            icon={slideData.unitEconomics.icon}
            color="#06d6a0"
            delay={0.6}
          >
            <p>{slideData.unitEconomics.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.unitEconomics.targets.map((target, i) => (
                <li key={i}>{target}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Key Metrics Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-lg shadow p-4 border-l-4 border-gray-400 mt-auto"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-600 flex items-center">
              <Icons.Target size={20} className="mr-2" />
              Key Business Model Metrics (Targets)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {slideData.keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-left p-2 bg-gray-50 rounded border border-gray-200 flex items-center"
                >
                  <GetIcon
                    name={metric.icon}
                    size={24}
                    className="mr-2 text-gray-500 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      {metric.label}
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessModelSlide;
