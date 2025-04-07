import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react";
import {
  useTextStyles,
  getSpacing,
  getIconClass,
  motionVariants,
  getGridConfig,
} from "../../util/responsiveStyles";

// Helper function
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />;
  }
  return <IconComponent {...props} />;
};

// Basic Bar Chart Component for ARR Growth with responsive scaling
const ARRBarChart: React.FC<{
  data: typeof slideData.financialProjections.arrData;
}> = ({ data }) => {
  const textStyles = useTextStyles();
  const maxValue = Math.max(...data.map((item) => item.arr), 0) || 1;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-grow flex justify-around items-end gap-4 px-2">
        {data.map((item, index) => {
          const barHeightPercentage = Math.max((item.arr / maxValue) * 100, 1); // Ensure min height
          return (
            <div
              key={item.year}
              className="flex flex-col items-center w-1/4 h-full group relative"
            >
              {/* Value Label on Top */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="font-semibold text-gray-700 mb-1 whitespace-nowrap"
                style={textStyles.small}
              >
                ${item.arr.toFixed(1)}M
              </motion.div>
              {/* Bar */}
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: `${barHeightPercentage}%` }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="w-3/4 rounded-t bg-gradient-to-b from-cyan-400 to-blue-500 mt-auto group-hover:opacity-90"
                style={{ minHeight: "2px" }} // Ensure even tiny values are visible
              />
            </div>
          );
        })}
      </div>
      {/* Year Labels Below */}
      <div className="flex justify-around items-start mt-1 border-t border-gray-200 pt-1">
        {data.map((item) => (
          <span
            key={item.year}
            className="font-medium text-gray-500 w-1/4 text-center"
            style={textStyles.tiny}
          >
            {item.year}
          </span>
        ))}
      </div>
    </div>
  );
};

const FinancialsSlide: React.FC = () => {
  const textStyles = useTextStyles();

  return (
    <motion.div
      {...motionVariants.fadeIn}
      className="w-full h-full flex flex-col relative bg-white text-gray-800"
      style={getSpacing.container}
    >
      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-bold mb-6 text-gray-900 flex-shrink-0 text-center"
        style={textStyles.title}
      >
        Financials & Fundraising: Fueling Our Growth
      </motion.h2>

      {/* Main content grid - 2 Columns */}
      <div
        className={getGridConfig.twoColumns.className}
        style={getGridConfig.twoColumns.style}
      >
        {/* === Left Column: Projections & Milestones === */}
        <div className="flex flex-col h-full" style={getSpacing.gap.medium}>
          {/* Financial Projections - ARR Chart */}
          <motion.div
            {...motionVariants.slideUp}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 flex flex-col flex-grow"
            style={getSpacing.padding.medium}
          >
            <h3
              className="font-semibold mb-4 flex items-center text-gray-700 flex-shrink-0"
              style={textStyles.subtitle}
            >
              <GetIcon
                name="TrendingUp"
                size={20}
                className={`${getIconClass(20)} mr-2 text-blue-600`}
              />
              High-Level Financial Projections (ARR)
            </h3>
            {/* Chart container - ensuring it takes available space */}
            <div className="flex-grow flex flex-col justify-center min-h-[250px]">
              <ARRBarChart data={slideData.financialProjections.arrData} />
            </div>
            <p
              className="mt-2 text-center flex-shrink-0 text-gray-500"
              style={textStyles.small}
            >
              {slideData.financialProjections.description}
            </p>
            <p
              className="mt-1 text-center flex-shrink-0 text-gray-400"
              style={textStyles.tiny}
            >
              *{slideData.financialProjections.note}
            </p>
          </motion.div>

          {/* Key Milestones */}
          <motion.div
            {...motionVariants.slideUp}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 flex-shrink-0"
            style={getSpacing.padding.medium}
          >
            <h3
              className="font-semibold mb-3 flex items-center text-gray-700"
              style={textStyles.subtitle}
            >
              <GetIcon
                name="ListChecks"
                size={20}
                className={`${getIconClass(20)} mr-2 text-green-600`}
              />
              Key Milestones with Funding
            </h3>
            <ol
              className="space-y-1.5 text-gray-700 list-decimal list-outside pl-5"
              style={textStyles.body}
            >
              {slideData.keyMilestones.milestones.map((milestone, i) => (
                <li key={i}>{milestone}</li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* === Right Column: The Ask & Use of Funds === */}
        <div className="flex flex-col h-full" style={getSpacing.gap.medium}>
          {/* Fundraising Ask - Styled like screenshot */}
          <motion.div
            {...motionVariants.slideUp}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg shadow-md text-gray-800 border border-blue-200"
            style={getSpacing.padding.large}
          >
            <h3
              className="font-semibold mb-2 flex items-center justify-center text-blue-700"
              style={textStyles.subtitle}
            >
              <GetIcon
                name="PiggyBank"
                size={22}
                className={`${getIconClass(22)} mr-2`}
              />
              Seed Round Fundraising
            </h3>
            <p
              className="font-bold text-blue-800 my-3 text-center"
              style={{ fontSize: "calc(1.75rem + 1cqi)" }}
            >
              {slideData.fundraisingAsk.amount}
            </p>
            <p
              className="mb-2 text-center text-gray-700"
              style={textStyles.body}
            >
              {slideData.fundraisingAsk.purpose}
            </p>
            <p
              className="mb-3 text-center font-medium text-gray-700"
              style={textStyles.body}
            >
              {slideData.fundraisingAsk.runway}
            </p>
            <p className="text-center text-gray-500" style={textStyles.small}>
              ({slideData.fundraisingAsk.status})
            </p>
          </motion.div>

          {/* Use of Funds - Styled like screenshot */}
          <motion.div
            {...motionVariants.slideUp}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 flex-grow"
            style={getSpacing.padding.medium}
          >
            <h3
              className="font-semibold mb-3 flex items-center text-gray-700"
              style={textStyles.subtitle}
            >
              <GetIcon
                name="PieChart"
                size={20}
                className={`${getIconClass(20)} mr-2 text-orange-500`}
              />
              Use of Funds
            </h3>
            <p className="mb-4 text-gray-600" style={textStyles.body}>
              {slideData.useOfFunds.description}
            </p>
            {/* Use of Funds Breakdown - List format */}
            <div className="space-y-3">
              {slideData.useOfFunds.allocation.map((item) => (
                <div
                  key={item.category}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div
                      className="rounded-full mr-3 flex-shrink-0"
                      style={{
                        backgroundColor: item.color,
                        width: "calc(0.75rem + 0.15cqi)",
                        height: "calc(0.75rem + 0.15cqi)",
                      }}
                    ></div>
                    <span className="text-gray-700" style={textStyles.body}>
                      {item.category}
                    </span>
                  </div>
                  <span
                    className="font-semibold text-gray-800"
                    style={textStyles.body}
                  >
                    {item.percentage}%
                  </span>
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
