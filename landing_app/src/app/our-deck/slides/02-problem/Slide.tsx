// src/app/our-deck/slides/02-problem/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react"; // Import all icons
import {
  useTextStyles,
  getSpacing,
  getIconClass,
  motionVariants,
} from "../../util/responsiveStyles";

// Helper function
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  return <IconComponent {...props} />;
};

const ProblemSlide: React.FC = () => {
  const textStyles = useTextStyles();

  return (
    <motion.div
      {...motionVariants.fadeIn}
      className="w-full h-full flex flex-col relative overflow-hidden bg-white text-gray-800"
      style={getSpacing.container}
    >
      {/* Main content - Use flex-grow and rely on container queries */}
      <div
        className="flex-grow grid grid-cols-1 md:grid-cols-12 overflow-hidden"
        style={getSpacing.gap.medium}
      >
        {/* === Left Column: Problem Narrative (5 columns) === */}
        <div className="md:col-span-5 flex flex-col justify-center overflow-y-auto pr-2 space-y-4">
          {/* Title & Subtitle - Apply responsive text styles */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1
              className="font-bold text-gray-900 mb-1"
              style={textStyles.title}
            >
              {slideData.title}
            </h1>
            <h2 className="text-gray-700" style={textStyles.body}>
              {slideData.subtitle}
            </h2>
          </motion.div>

          {/* Pain Point Overview - Apply responsive padding and text */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-red-50 border-l-4 border-red-400 rounded-r-lg shadow-sm"
            style={getSpacing.padding.medium}
          >
            <p className="text-red-800" style={textStyles.body}>
              {slideData.painPointOverview}
            </p>
          </motion.div>

          {/* Consequences - Apply responsive text and spacing */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3
              className="font-semibold mb-2 text-gray-800"
              style={textStyles.subtitle}
            >
              Consequences:
            </h3>
            <ul
              className="space-y-1 list-disc pl-5 text-gray-700"
              style={textStyles.body}
            >
              {slideData.consequences.map((consequence, index) => (
                <li key={index} className="pl-1">
                  {consequence}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* === Right Column: Metrics & Failures (7 columns) === */}
        <div
          className="md:col-span-7 flex flex-col overflow-y-auto"
          style={getSpacing.gap.medium}
        >
          {/* Key Metrics - Apply responsive grid and text styles */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={getSpacing.gap.medium}
          >
            {slideData.keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-sm rounded-lg flex flex-col items-center text-center border border-gray-200 w-full"
                style={getSpacing.padding.small}
              >
                <GetIcon
                  name={metric.icon}
                  size={22}
                  className={`${getIconClass(22)} mb-1 text-blue-600`}
                />
                <p
                  className="font-bold text-blue-700"
                  style={textStyles.subtitle}
                >
                  {metric.value}
                </p>
                <p
                  className="text-gray-600 text-center mt-1"
                  style={textStyles.small}
                >
                  {metric.label}
                </p>
                <p className="text-gray-400 mt-0.5" style={textStyles.tiny}>
                  ({metric.source})
                </p>
              </div>
            ))}
          </motion.div>

          {/* Current Solutions Failures - Apply responsive padding and text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-200"
            style={getSpacing.padding.medium}
          >
            <h3
              className="font-semibold mb-2 text-gray-800"
              style={textStyles.subtitle}
            >
              {slideData.currentSolutionsFailures.title}
            </h3>
            <ul
              className="space-y-1 list-disc pl-5 text-gray-700"
              style={textStyles.body}
            >
              {slideData.currentSolutionsFailures.points.map((point, index) => (
                <li key={index} className="list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Scope - Apply responsive padding and text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-blue-50 rounded-lg mt-auto border border-blue-200 shadow-sm"
            style={getSpacing.padding.medium}
          >
            <h3
              className="font-semibold mb-1 text-blue-800"
              style={textStyles.subtitle}
            >
              {slideData.scope.title}
            </h3>
            <p className="text-blue-700" style={textStyles.small}>
              {slideData.scope.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemSlide;
