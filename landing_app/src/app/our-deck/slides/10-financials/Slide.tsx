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

// Simple Bar Chart Component for ARR Growth
const ARRBarChart: React.FC<{
  data: typeof slideData.financialProjections.arrData;
}> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.arr), 0) || 1;

  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-around items-end h-40 pt-4 gap-4">
        {data.map((item, index) => {
          const barHeightPercentage = (item.arr / maxValue) * 100;
          return (
            <div
              key={item.year}
              className="flex flex-col items-center w-1/4 group relative h-full"
            >
              <div className="absolute -top-5 text-xs font-semibold text-gray-700">
                ${item.arr.toFixed(1)}M
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${barHeightPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="w-3/4 rounded-t transition-all duration-300 ease-in-out group-hover:opacity-80 bg-gradient-to-t from-cyan-300 to-blue-400 mt-auto"
                style={{ backgroundColor: item.color }} // Fallback or primary color
              />
              <span className="text-xs font-medium text-gray-500 mt-1">
                {item.year}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-[10px] text-gray-500 text-center mt-2">
        *Projected Annual Recurring Revenue (ARR)
      </p>
    </div>
  );
};

const FinancialsSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative bg-white text-gray-800 p-6 md:p-8"
    >
      {/* Slide Title - Removed conditional style */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center flex-shrink-0"
      >
        {slideData.title}
      </motion.h2>

      {/* Main content grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-hidden">
        {/* === Left Column: Projections & Milestones === */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2">
          {/* Financial Projections - ARR Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800">
              <GetIcon
                name={slideData.financialProjections.icon}
                size={22}
                className="mr-2 text-blue-500"
              />
              {slideData.financialProjections.title}
            </h3>
            {/* Added max-w-lg and mx-auto to the chart container */}
            <div className="max-w-lg mx-auto">
              <ARRBarChart data={slideData.financialProjections.arrData} />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {slideData.financialProjections.description}
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              Note: {slideData.financialProjections.note}
            </p>
          </motion.div>

          {/* Key Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-auto pt-4"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-800">
              <GetIcon
                name={slideData.keyMilestones.icon}
                size={22}
                className="mr-2 text-green-500"
              />
              {slideData.keyMilestones.title}
            </h3>
            <ol className="space-y-1 list-decimal list-outside pl-5 text-sm text-gray-700">
              {slideData.keyMilestones.milestones.map((milestone, i) => (
                <li key={i}>{milestone}</li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* === Right Column: The Ask & Use of Funds === */}
        <div className="flex flex-col gap-6 overflow-y-auto pr-2 justify-center">
          {/* Fundraising Ask */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-100 to-cyan-100 p-5 rounded-lg shadow text-center border-t-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center text-blue-800">
              <GetIcon
                name={slideData.fundraisingAsk.icon}
                size={24}
                className="mr-2"
              />
              {slideData.fundraisingAsk.title}
            </h3>
            <p className="text-3xl font-bold text-blue-700 my-2">
              {slideData.fundraisingAsk.amount}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              {slideData.fundraisingAsk.purpose}
            </p>
            <p className="text-sm text-gray-700 font-medium">
              {slideData.fundraisingAsk.runway}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              ({slideData.fundraisingAsk.status})
            </p>
          </motion.div>

          {/* Use of Funds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
              <GetIcon
                name={slideData.useOfFunds.icon}
                size={22}
                className="mr-2 text-orange-500"
              />
              {slideData.useOfFunds.title}
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              {slideData.useOfFunds.description}
            </p>
            {/* Simple Text Breakdown for Use of Funds */}
            <div className="space-y-2">
              {slideData.useOfFunds.allocation.map((item) => (
                <div key={item.category} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex justify-between w-full">
                    <span className="text-sm text-gray-700">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {item.percentage}%
                    </span>
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

export default FinancialsSlide;
