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

const IntroSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative min-h-[500px] bg-black text-white p-6 md:p-8"
    >
      {/* Subtle glow elements with new colors */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "#06d6a0" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: "#118ab2" }}
        ></div>
      </div>

      {/* Main content grid - Updated layout */}
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 z-10 relative">
        {/* === Left Column: Company Info & Vision === */}
        <div className="flex flex-col justify-center items-start overflow-y-auto pr-2">
          {/* Company Name (was Title) & Tagline */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-3"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
            >
              {slideData.companyName}
            </h1>
            <h2
              className="text-xl md:text-2xl mb-6"
              style={{
                color: "#06d6a0",
                textShadow: "0 0 8px rgba(6, 214, 160, 0.7)",
              }}
            >
              {slideData.tagline}
            </h2>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {slideData.valueProposition}
            </p>
          </motion.div>

          {/* Target Customer & Market Context */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-4"
          >
            <p className="text-md text-gray-400">
              <span className="font-semibold text-gray-200">Target:</span>{" "}
              {slideData.targetCustomer}
            </p>
          </motion.div>

          {/* Core Beliefs - Added below Target Customer, before Current Stage which is mt-auto */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }} // Adjusted delay slightly
            className="mb-4 md:mb-6 mt-4 md:mt-6"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-200">
              Our Core Belief
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {slideData.coreBeliefs}
            </p>
          </motion.div>

          {/* Current Stage - kept at the bottom with mt-auto */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-auto pt-4 w-full" // Added w-full for better spacing
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border-l-4 border-[#118ab2]">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-[#118ab2]">
                  Current Stage:
                </span>{" "}
                {slideData.currentStage}
              </p>
            </div>
          </motion.div>
        </div>

        {/* === Right Column: Key Metrics === */}
        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8">
          {/* Updated Key Metrics - displayed vertically */}
          {slideData.keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center"
              style={{
                borderColor:
                  index === 0 ? "#06d6a0" : index === 1 ? "#118ab2" : "#FFC107", // Example alternating colors
                boxShadow: `0 0 15px rgba(${
                  index === 0
                    ? "6, 214, 160"
                    : index === 1
                    ? "17, 138, 178"
                    : "255, 193, 7"
                }, 0.2)`,
              }}
            >
              <GetIcon
                name={metric.icon}
                size={32}
                className={`mr-4 flex-shrink-0 ${
                  index === 0
                    ? "text-[#06d6a0]"
                    : index === 1
                    ? "text-[#118ab2]"
                    : "text-[#FFC107]"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-semibold ${
                    index === 0
                      ? "text-[#06d6a0]"
                      : index === 1
                      ? "text-[#118ab2]"
                      : "text-[#FFC107]"
                  }`}
                >
                  {metric.label}
                </p>
                <p className="text-lg font-bold text-white">{metric.value}</p>
                <p className="text-xs text-gray-400">
                  {metric.subValue}{" "}
                  <span className="text-gray-500">({metric.source})</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSlide;
