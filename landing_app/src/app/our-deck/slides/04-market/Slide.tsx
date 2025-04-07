// src/app/our-deck/slides/04-market/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import {
  DollarSign,
  TrendingUp,
  Target,
  AlertCircle,
  Layers,
} from "lucide-react";

// Simple Bar component for TAM/SAM visualization
const TamSamBar: React.FC<{ data: typeof slideData.chartData }> = ({
  data,
}) => {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  let accumulatedWidth = 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 flex overflow-hidden my-2">
      {data.map((item, index) => {
        const percentage = (item.value / totalValue) * 100;
        accumulatedWidth += percentage;
        // Ensure the last segment fills remaining space due to rounding
        const width =
          index === data.length - 1
            ? 100 - (accumulatedWidth - percentage)
            : percentage;
        return (
          <div
            key={item.name}
            className="h-full flex items-center justify-center text-xs font-medium text-white px-1"
            style={{ width: `${width}%`, backgroundColor: item.color }}
            title={`${item.name}: $${item.value}B (${item.segment})`}
          >
            {/* Only show label if wide enough */}
            {percentage > 15 ? `$${item.value}B` : ""}
          </div>
        );
      })}
    </div>
  );
};

const MarketSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-white text-gray-800 p-6 flex flex-col"
    >
      {/* Slide Header - Updated Title */}
      <div className="mb-4 flex-shrink-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          {slideData.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06d6a0] to-[#118ab2]"></div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
        {/* Left Column */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {/* Market Stats */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-[#06d6a0] flex items-center">
              <DollarSign size={20} className="mr-2" /> Core Market Stats
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xl font-bold text-gray-800">
                  {slideData.marketStats.tam}{" "}
                  <span className="text-base font-normal text-gray-600">
                    {slideData.marketStats.tamYear}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  {slideData.marketStats.tamDescription}
                </p>
                {slideData.marketStats.tamSource && (
                  <p className="text-xs text-gray-500 mt-1">
                    Source: {slideData.marketStats.tamSource}
                  </p>
                )}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">
                  {slideData.marketStats.growthRate}
                </p>
                <p className="text-sm text-gray-600">
                  {slideData.marketStats.growthRateDescription}
                </p>
                {slideData.marketStats.growthRateSource && (
                  <p className="text-xs text-gray-500 mt-1">
                    Source: {slideData.marketStats.growthRateSource}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Market Spend */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-[#118ab2] flex items-center">
              <AlertCircle size={20} className="mr-2" /> Market Pain & Spend
              Drivers
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                {slideData.marketSpend.workingCapitalLoss}
              </p>
              <div>
                <p className="text-sm text-gray-700">
                  {slideData.marketSpend.upgradeIntent}
                </p>
                {slideData.marketSpend.upgradeIntentSource && (
                  <p className="text-xs text-gray-500 mt-1">
                    Source: {slideData.marketSpend.upgradeIntentSource}
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-700">
                {slideData.marketSpend.smbSpendContext}
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              <TrendingUp size={20} className="mr-2" /> Key Metrics Summary
            </h3>
            <ul className="space-y-2">
              {slideData.keyMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm border-b border-gray-200 pb-1 last:border-b-0"
                >
                  <span className="text-gray-600">
                    {metric.label}
                    {metric.source ? "*" : ""}
                  </span>
                  <span className="font-semibold text-gray-800">
                    {metric.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              *Sources:{" "}
              {slideData.keyMetrics
                .filter((m) => m.source)
                .map((m) => `${m.label}: ${m.source}`)
                .join(", ")}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          {/* Segmentation */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-[#06d6a0] flex items-center">
              <Target size={20} className="mr-2" />{" "}
              {slideData.segmentation.title}
            </h3>
            <div className="mb-3">
              <p className="text-md font-semibold text-gray-800">
                {slideData.segmentation.smbSegment}
              </p>
              <p className="text-sm text-gray-600">
                {slideData.segmentation.smbDescription}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">
                  {slideData.segmentation.smbPotentialCustomers}
                </span>{" "}
                {slideData.segmentation.smbPotentialCustomersDescription}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-md font-semibold text-gray-800">
                {slideData.segmentation.midMarketEnterprise}
              </p>
              <p className="text-sm text-gray-600">
                {slideData.segmentation.midMarketEnterpriseDescription}
              </p>
            </div>

            {/* TAM/SAM Bar Chart */}
            <h4 className="text-md font-semibold mt-4 mb-1 text-gray-700">
              {slideData.chartTitle}
            </h4>
            <TamSamBar data={slideData.chartData} />
            <div className="flex justify-between text-xs text-gray-600 px-1">
              {slideData.chartData.map((item) => (
                <span key={item.name} className="flex items-center">
                  <span
                    className="w-2 h-2 rounded-full mr-1"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  {item.name} ({item.segment})
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              {slideData.chartSubtitle}
            </p>
          </div>

          {/* Expansion Vision */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-[#118ab2] flex items-center">
              <Layers size={20} className="mr-2" />{" "}
              {slideData.expansionVision.title}
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                {slideData.expansionVision.initialFocus}
              </p>
              <div>
                <p className="text-md font-semibold text-gray-800">
                  {slideData.expansionVision.broaderMarket}
                </p>
                <p className="text-sm text-gray-600">
                  (Est. {slideData.expansionVision.broaderMarketSize}) -{" "}
                  {slideData.expansionVision.broaderMarketDescription}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-700">
                {slideData.expansionVision.longTermGoal}
              </p>
            </div>
          </div>

          {/* Placeholder for other elements if needed, e.g., trend icons or competitor snapshot */}
          <div className="bg-gradient-to-r from-[#06d6a0]/10 to-[#118ab2]/10 rounded-lg p-4 shadow-sm flex items-center justify-center mt-auto">
            <p className="text-center text-sm font-medium text-gray-800">
              Payce targets a large, validated, and growing market with clear
              expansion potential.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketSlide;
