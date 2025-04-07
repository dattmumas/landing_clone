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

// Reusable Card component for sections
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

const TechnologySlide: React.FC = () => {
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
          {/* Architecture Overview */}
          <SectionCard
            title={slideData.architectureOverview.title}
            icon={slideData.architectureOverview.icon}
            color="#06d6a0"
            delay={0.2}
          >
            <p>{slideData.architectureOverview.description}</p>
            {/* Placeholder for Diagram - Added max-w-lg and mx-auto */}
            <div className="mt-2 p-4 border border-dashed border-gray-300 rounded text-center text-gray-500 text-xs max-w-lg mx-auto">
              [Placeholder: High-Level Architecture Diagram]
            </div>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.architectureOverview.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Innovation & IP */}
          <SectionCard
            title={slideData.innovationIP.title}
            icon={slideData.innovationIP.icon}
            color="#118ab2"
            delay={0.3}
          >
            <p>{slideData.innovationIP.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.innovationIP.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Technical Progress */}
          <SectionCard
            title={slideData.technicalProgress.title}
            icon={slideData.technicalProgress.icon}
            color="#ef476f"
            delay={0.4}
          >
            <p>{slideData.technicalProgress.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.technicalProgress.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* === Right Column === */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {/* Scalability & Reliability */}
          <SectionCard
            title={slideData.scalabilityReliability.title}
            icon={slideData.scalabilityReliability.icon}
            color="#ffd166"
            delay={0.5}
          >
            <p>{slideData.scalabilityReliability.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.scalabilityReliability.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Integration & Data Strategy */}
          <SectionCard
            title={slideData.integrationDataStrategy.title}
            icon={slideData.integrationDataStrategy.icon}
            color="#06d6a0"
            delay={0.6}
          >
            <p>{slideData.integrationDataStrategy.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs mt-2 space-y-1">
              {slideData.integrationDataStrategy.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionCard>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white rounded-lg shadow p-4 border-l-4 border-gray-400 mt-auto"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-600 flex items-center">
              <Icons.BarChart3 size={20} className="mr-2" />
              Key Technical Metrics/Targets
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {slideData.keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-2 bg-gray-50 rounded border border-gray-200"
                >
                  <GetIcon
                    name={metric.icon}
                    size={20}
                    className="mx-auto mb-1 text-gray-500"
                  />
                  <p className="text-xs font-semibold text-gray-700">
                    {metric.label}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologySlide;
