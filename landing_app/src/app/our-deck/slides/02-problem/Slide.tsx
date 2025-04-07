// src/app/our-deck/slides/02-problem/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react"; // Import all icons

// Helper function copied from 03-solution/Slide.tsx
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  return <IconComponent {...props} />;
};

const ProblemSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Keep light theme
      className="w-full h-full flex flex-col relative overflow-hidden bg-white text-gray-800 p-6 md:p-8"
    >
      {/* Main content - Updated 2 Column Layout */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-hidden">
        {/* === Left Column: Problem Narrative === */}
        <div className="flex flex-col justify-center overflow-y-auto pr-2">
          {/* Title & Subtitle */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {slideData.title}
            </h1>
            <h2 className="text-lg md:text-xl text-gray-700">
              {slideData.subtitle}
            </h2>
          </motion.div>

          {/* Pain Point Overview */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4 md:mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg"
          >
            <p className="text-md text-red-800">
              {slideData.painPointOverview}
            </p>
          </motion.div>

          {/* Consequences */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-4 md:mb-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Consequences:
            </h3>
            <ul className="space-y-1 list-disc list-inside text-gray-700 text-sm md:text-base">
              {slideData.consequences.map((consequence, index) => (
                <li key={index}>{consequence}</li>
              ))}
            </ul>
          </motion.div>

          {/* Removed the old Cost Metric section that caused the error */}
        </div>

        {/* === Right Column: Metrics & Failures === */}
        <div className="flex flex-col gap-4 md:gap-6 overflow-y-auto pr-2">
          {/* Key Metrics - Displayed as Cards */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {slideData.keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow rounded-lg p-3 md:p-4 text-center border-b-4 border-blue-300"
              >
                <GetIcon
                  name={metric.icon}
                  size={24}
                  className="mx-auto mb-2 text-blue-600"
                />
                <p className="text-lg md:text-xl font-bold text-blue-700">
                  {metric.value}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {metric.label}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  ({metric.source})
                </p>
              </div>
            ))}
          </motion.div>

          {/* Current Solutions Failures */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-100 rounded-lg p-4"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {slideData.currentSolutionsFailures.title}
            </h3>
            <ul className="space-y-1 list-disc list-inside text-sm text-gray-700">
              {slideData.currentSolutionsFailures.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>

          {/* Scope */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-blue-50 rounded-lg p-4 mt-auto border-t-4 border-blue-200"
          >
            <h3 className="text-lg font-semibold mb-1 text-blue-800">
              {slideData.scope.title}
            </h3>
            <p className="text-sm text-blue-700">
              {slideData.scope.description}
            </p>
          </motion.div>

          {/* Removed the old Key Problems & Conclusion sections */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemSlide;
