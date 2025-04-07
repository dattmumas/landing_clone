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

// Simple 2x2 Quadrant Chart Component
const QuadrantChart: React.FC<{ data: typeof slideData.quadrantData }> = ({
  data,
}) => {
  return (
    <div className="relative w-full aspect-square bg-white border border-gray-300 rounded-lg overflow-hidden shadow">
      {/* Axis Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

      {/* Axis Labels */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 text-center leading-tight w-3/4">
        {data.yAxisLabel} (↑)
      </div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 text-center leading-tight w-3/4">
        (Point Solution ↓)
      </div>
      <div className="absolute left-1 top-1/2 -translate-y-1/2 text-[10px] text-gray-500 rotate-[-90deg] origin-bottom-left whitespace-nowrap">
        {data.xAxisLabel} (← SMB)
      </div>
      <div className="absolute right-1 bottom-1/2 translate-y-1/2 text-[10px] text-gray-500 rotate-[90deg] origin-bottom-right whitespace-nowrap">
        (Enterprise →)
      </div>

      {/* Competitor Points */}
      {data.competitors.map((comp, index) => (
        <motion.div
          key={comp.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="absolute flex flex-col items-center text-center p-1 rounded shadow bg-opacity-80"
          style={{
            left: `${comp.x}%`, // Position based on x, y (0-100)
            bottom: `${comp.y}%`,
            transform: "translate(-50%, 50%)", // Center the item
            backgroundColor:
              comp.name === "Payce" ? "#06d6a0" : "rgba(255, 255, 255, 0.8)",
            color: comp.name === "Payce" ? "white" : "#374151",
          }}
        >
          <GetIcon name={comp.logo} size={14} className="mb-0.5" />
          <span className="text-[9px] font-semibold leading-none">
            {comp.name}
          </span>
        </motion.div>
      ))}

      {/* Quadrant Labels (Optional) */}
      {/* Example: Top-Right Quadrant */}
      <div className="absolute top-2 right-2 text-[9px] text-gray-400">
        Enterprise / Comprehensive
      </div>
      {/* Example: Top-Left Quadrant */}
      <div className="absolute top-2 left-2 text-[9px] text-gray-400">
        SMB / Comprehensive
      </div>
      {/* Example: Bottom-Left Quadrant */}
      <div className="absolute bottom-2 left-2 text-[9px] text-gray-400">
        SMB / Point Solution
      </div>
      {/* Example: Bottom-Right Quadrant */}
      <div className="absolute bottom-2 right-2 text-[9px] text-gray-400">
        Enterprise / Point Solution
      </div>
    </div>
  );
};

const CompetitionSlide: React.FC = () => {
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

      {/* Main content grid - Split focus */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden">
        {/* Left Column (1/3): Overview & Positioning */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2 md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-700">
              <GetIcon
                name={slideData.landscapeOverview.icon}
                size={20}
                className="mr-2"
              />
              Landscape Overview
            </h3>
            <p className="text-sm text-gray-600">
              {slideData.landscapeOverview.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center text-blue-600">
              <GetIcon
                name={slideData.marketPositioning.icon}
                size={20}
                className="mr-2"
              />
              {slideData.marketPositioning.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {slideData.marketPositioning.description}
            </p>
            <p className="text-sm font-semibold text-blue-700 bg-blue-100 p-2 rounded">
              {slideData.marketPositioning.position}
            </p>
          </motion.div>

          {/* Key Validation Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-auto pt-4"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Market Validation
            </h3>
            <div className="space-y-2">
              {slideData.keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center bg-white p-2 rounded shadow border-l-4 border-green-400"
                >
                  <GetIcon
                    name={metric.icon}
                    size={24}
                    className="mr-3 text-green-600 flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {metric.value}
                    </p>
                    <p className="text-xs text-gray-600">
                      {metric.label}{" "}
                      <span className="text-[9px] text-gray-400">
                        ({metric.source})
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column (2/3): Quadrant Chart & Competitor Details */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2 md:col-span-2">
          {/* Quadrant Chart - Added max-w-md, max-h-[30rem], mx-auto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-4 max-w-md max-h-[30rem] mx-auto w-full"
          >
            <QuadrantChart data={slideData.quadrantData} />
          </motion.div>

          {/* Competitor Details List */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Key Competitors & Differentiation
            </h3>
            <div className="space-y-3">
              {slideData.competitors.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white p-3 rounded shadow border border-gray-200"
                >
                  <div className="flex items-center mb-1">
                    <GetIcon
                      name={comp.logo}
                      size={16}
                      className="mr-2 text-gray-500"
                    />
                    <p className="font-semibold text-gray-800 text-sm">
                      {comp.name}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mb-1">
                    {comp.description}
                  </p>
                  <p className="text-xs text-green-700 font-medium bg-green-50 p-1 rounded">
                    <span className="font-bold text-green-800">
                      Payce Edge:
                    </span>{" "}
                    {comp.differentiation}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompetitionSlide;
