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
    <div className="relative w-full h-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Axis Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
      <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

      {/* Axis Labels - Top */}
      <div className="absolute top-1 left-0 w-full flex justify-center text-center">
        <div className="text-[9px] text-gray-500 font-medium">
          Solution Breadth (Point {`<->`} Comprehensive)
        </div>
      </div>

      {/* Axis Labels - Left Side */}
      <div className="absolute left-4 top-0 h-full flex items-center">
        <div className="text-[9px] text-gray-500 font-medium rotate-[-90deg] origin-center whitespace-nowrap">
          Customer Size (SMB {`<->`} Enterprise)
        </div>
      </div>

      {/* Competitor Points */}
      {data.competitors.map((comp, index) => (
        <motion.div
          key={comp.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="absolute flex flex-col items-center text-center z-10"
          style={{
            left: `${comp.x}%`,
            bottom: `${comp.y}%`,
            transform: "translate(-50%, 50%)",
          }}
        >
          {/* Simple dot */}
          <div
            className="w-3 h-3 rounded-full shadow-sm mb-1"
            style={{
              backgroundColor: comp.name === "Payce" ? "#06d6a0" : "#ffffff",
              border:
                comp.name === "Payce"
                  ? "2px solid #06d6a0"
                  : "1px solid #d1d5db",
            }}
          ></div>

          {/* Company name */}
          <span
            className={`text-[9px] font-semibold ${
              comp.name === "Payce"
                ? "text-emerald-600 font-bold"
                : "text-gray-700"
            }`}
          >
            {comp.name}
          </span>
        </motion.div>
      ))}

      {/* Quadrant Labels */}
      <div className="absolute top-6 right-2 text-[8px] text-gray-500 font-medium">
        Enterprise / Comprehensive
      </div>
      <div className="absolute top-6 left-2 text-[8px] text-gray-500 font-medium">
        SMB / Comprehensive
      </div>
      <div className="absolute bottom-2 left-2 text-[8px] text-gray-500 font-medium">
        SMB / Point Solution
      </div>
      <div className="absolute bottom-2 right-2 text-[8px] text-gray-500 font-medium">
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
      className="w-full h-full flex flex-col relative bg-white text-gray-800 p-6 md:p-8"
    >
      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-5 text-gray-900 flex-shrink-0"
      >
        Competitive Landscape: Filling the SMB Gap
      </motion.h2>

      {/* Main content grid - 2-column layout */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-5 h-full">
          {/* Landscape Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-5 border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-700">
              <GetIcon
                name="LayoutGrid"
                size={20}
                className="mr-2 text-gray-600"
              />
              Landscape Overview
            </h3>
            <p className="text-sm text-gray-600">
              Payce competes against legacy enterprise software (too
              complex/costly for SMBs), niche point solutions (incomplete), and
              the dominant &quot;competitor&quot;: manual processes
              (inefficient).
            </p>
          </motion.div>

          {/* Strategic White Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-5 border-t-4 border-blue-500"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-600">
              <GetIcon name="Target" size={20} className="mr-2" />
              Payce&apos;s Strategic White Space
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              No single player dominates SMB O2C automation. Payce provides a
              comprehensive, easy-to-use, AI-enhanced platform tailored
              specifically for this underserved segment.
            </p>
            <div className="bg-blue-50 p-3 rounded border border-blue-100">
              <p className="text-sm font-medium text-blue-700">
                Easy-to-Use + Comprehensive O2C for SMBs
              </p>
            </div>
          </motion.div>

          {/* Market Validation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 flex-grow"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Market Validation
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <GetIcon
                  name="TrendingUp"
                  size={18}
                  className="mr-3 mt-0.5 text-green-600 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    HighRadius: $3.1B Val.
                  </p>
                  <p className="text-xs text-gray-500">
                    Market Validation (Enterprise)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <GetIcon
                  name="DollarSign"
                  size={18}
                  className="mr-3 mt-0.5 text-green-600 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Billtrust Acquired: $1.7B
                  </p>
                  <p className="text-xs text-gray-500">
                    Market Validation (AR Focus)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <GetIcon
                  name="PieChart"
                  size={18}
                  className="mr-3 mt-0.5 text-green-600 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    90% Still Use Manual/Light AR
                  </p>
                  <p className="text-xs text-gray-500">
                    SMB Market Opportunity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 h-full">
          {/* Competitive Landscape Chart - 50% height */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-5 border border-gray-200 h-[50%]"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-700 text-center">
              <GetIcon
                name="Target"
                size={20}
                className="inline-block mr-2 text-gray-600"
              />
              Competitive Landscape
            </h3>
            <div className="h-[calc(100%-40px)]">
              <QuadrantChart data={slideData.quadrantData} />
            </div>
          </motion.div>

          {/* Key Competitors Section - 50% height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[50%]">
            {/* Our Edge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-4 border-t-4 border-green-500 h-full"
            >
              <h3 className="text-md font-semibold mb-2 text-gray-800 flex items-center">
                <GetIcon
                  name="Award"
                  size={18}
                  className="mr-2 text-green-600"
                />
                Our Edge
              </h3>

              <ul className="space-y-1">
                {slideData.competitors
                  .find((c) => c.name === "Payce")
                  ?.differentiation.split(". ")
                  .slice(0, 2)
                  .map((point, i) => (
                    <li key={i} className="flex items-start text-xs">
                      <GetIcon
                        name="Check"
                        size={12}
                        className="mr-1 text-green-600 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700">{point}.</span>
                    </li>
                  ))}
              </ul>
            </motion.div>

            {/* Key Competitors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white rounded-lg shadow-sm p-4 border-t-4 border-blue-300 h-full"
            >
              <h3 className="text-md font-semibold mb-2 text-gray-700">
                Key Competitors
              </h3>
              <div className="space-y-1">
                {/* Competitors list in more compact format */}
                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-600">
                      H
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      HighRadius / Billtrust
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Enterprise O2C, complex for SMBs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-600">
                      B
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Bill.com
                    </p>
                    <p className="text-[10px] text-gray-500">
                      AP focused, limited AR features
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-600">
                      P
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      Point Solutions
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Collection reminders only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompetitionSlide;
