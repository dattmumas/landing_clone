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

// Simple Bar Chart Component for Quarterly Growth
const BarChart: React.FC<{ data: typeof slideData.quarterlyGrowthData }> = ({
  data,
}) => {
  const maxValue = Math.max(...data.map((item) => item.customers), 0) || 1;

  return (
    <div className="flex justify-around items-end h-32 pt-4 gap-2">
      {data.map((item, index) => {
        const barHeightPercentage = (item.customers / maxValue) * 100;
        return (
          <div
            key={item.quarter}
            className="flex flex-col items-center w-1/4 group h-full"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${barHeightPercentage}%` }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="w-3/4 rounded-t transition-all duration-300 ease-in-out group-hover:opacity-80 relative flex items-end justify-center mt-auto"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-[10px] font-semibold text-black/70 absolute -top-4">
                {item.customers}
              </span>
            </motion.div>
            <span className="text-xs font-medium text-gray-400 mt-1">
              {item.quarter}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// Section Component (similar to previous but adapted for dark theme)
const SectionItem: React.FC<{
  title: string;
  icon: string;
  color?: string;
  children: React.ReactNode;
  delay: number;
}> = ({ title, icon, color = "#06d6a0", children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-4 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <h3
        className="text-md font-semibold mb-2 flex items-center"
        style={{ color }}
      >
        <GetIcon name={icon} size={18} className="mr-2" />
        {title}
      </h3>
      <div className="text-xs md:text-sm text-gray-300 space-y-2">
        {children}
      </div>
    </motion.div>
  );
};

const GoToMarketSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Use dark theme background from Slide 3
      className="w-full h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white p-6 md:p-8"
    >
      {/* Optional Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl bg-[#06d6a0]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-[#118ab2]"></div>
      </div>

      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-4 text-white flex-shrink-0 relative z-10"
        style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
      >
        {slideData.title}
      </motion.h2>

      {/* Main content grid - 2 Columns */}
      <div className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-hidden">
        {/* === Left Column === */}
        <div className="flex flex-col gap-3 md:gap-4 overflow-y-auto pr-2">
          <SectionItem
            title={slideData.targetCustomerDefinition.title}
            icon={slideData.targetCustomerDefinition.icon}
            delay={0.2}
            color="#06d6a0"
          >
            <p>{slideData.targetCustomerDefinition.description}</p>
          </SectionItem>

          <SectionItem
            title={slideData.acquisitionChannels.title}
            icon={slideData.acquisitionChannels.icon}
            delay={0.3}
            color="#118ab2"
          >
            <div className="grid grid-cols-2 gap-2">
              {slideData.acquisitionChannels.channels.map((channel) => (
                <div
                  key={channel.name}
                  className="bg-black/20 p-2 rounded flex items-start"
                >
                  <GetIcon
                    name={channel.icon}
                    size={16}
                    className="mr-2 mt-0.5 text-gray-400 flex-shrink-0"
                  />
                  <div>
                    <p className="font-medium text-white text-xs">
                      {channel.name}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      {channel.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionItem>

          <SectionItem
            title={slideData.marketingStrategy.title}
            icon={slideData.marketingStrategy.icon}
            delay={0.4}
            color="#ef476f"
          >
            <p>{slideData.marketingStrategy.description}</p>
          </SectionItem>

          <SectionItem
            title={slideData.earlyTraction.title}
            icon={slideData.earlyTraction.icon}
            delay={0.5}
            color="#ffd166"
          >
            <ul className="list-disc list-outside pl-4 text-xs mt-1 space-y-1">
              {slideData.earlyTraction.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </SectionItem>
        </div>

        {/* === Right Column === */}
        <div className="flex flex-col gap-3 md:gap-4 overflow-y-auto pr-2">
          <SectionItem
            title="Projected Customer Growth (Year 1)"
            icon="BarChartHorizontal"
            delay={0.6}
            color="#06d6a0"
          >
            <div className="mt-1 max-w-md mx-auto">
              <BarChart data={slideData.quarterlyGrowthData} />
            </div>
            <p className="text-[10px] text-gray-500 text-center mt-1">
              Target Cumulative Customers Acquired per Quarter
            </p>
          </SectionItem>

          <SectionItem
            title={slideData.salesCycleFunnel.title}
            icon={slideData.salesCycleFunnel.icon}
            delay={0.7}
            color="#118ab2"
          >
            <p>{slideData.salesCycleFunnel.description}</p>
          </SectionItem>

          <SectionItem
            title={slideData.scalingPlan.title}
            icon={slideData.scalingPlan.icon}
            delay={0.8}
            color="#ef476f"
          >
            <ol className="list-decimal list-outside pl-4 text-xs space-y-1">
              {slideData.scalingPlan.phases.map((phase, i) => (
                <li key={i}>{phase}</li>
              ))}
            </ol>
          </SectionItem>

          {/* Key Metrics Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-4 border-l-4 border-gray-600 mt-auto"
          >
            <h3 className="text-md font-semibold mb-2 text-gray-400 flex items-center">
              <Icons.Goal size={18} className="mr-2" />
              Key GTM Metrics & Targets
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {slideData.keyMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-1 bg-black/20 rounded"
                >
                  <GetIcon
                    name={metric.icon}
                    size={16}
                    className="mx-auto mb-0.5 text-gray-400"
                  />
                  <p className="text-[10px] font-medium text-gray-300 leading-tight">
                    {metric.label}
                  </p>
                  <p className="text-xs font-bold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoToMarketSlide;
