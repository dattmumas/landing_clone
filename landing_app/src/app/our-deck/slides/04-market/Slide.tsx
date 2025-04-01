// src/app/our-deck/slides/04-market/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";

const MarketSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-white text-gray-800 p-6 flex flex-col"
    >
      {/* Slide Header */}
      <div className="mb-5">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          {slideData.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#06d6a0] to-[#118ab2]"></div>
      </div>

      {/* Top Row - 2 Columns */}
      <div className="flex flex-col md:flex-row gap-5 mb-5 flex-grow-0">
        {/* Left Column - Market Size */}
        <div className="md:w-1/2">
          <div className="bg-gray-50 rounded-xl p-5 h-full shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#06d6a0]">
              Addressable Market
            </h3>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-[#06d6a0] mr-3"></div>
                <p className="text-xl font-bold text-gray-800">
                  {slideData.marketStats.marketSize}
                </p>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                {slideData.marketStats.marketSizeDescription}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-[#06d6a0] mr-3"></div>
                <p className="text-xl font-bold text-gray-800">
                  {slideData.marketStats.growthRate}
                </p>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                {slideData.marketStats.growthRateDescription}
              </p>
            </div>

            <div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-[#06d6a0] mr-3"></div>
                <p className="text-xl font-bold text-gray-800">
                  {slideData.marketStats.startups}
                </p>
              </div>
              <p className="text-sm text-gray-600 ml-7">
                {slideData.marketStats.startupsDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Market Size Table */}
        <div className="md:w-1/2">
          <div className="bg-gray-50 rounded-xl p-5 shadow-md h-full">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-center text-gray-800">
                Addressable Market by Funding Stage
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Target: $4.8B combined market (Seed through Series B)
              </p>
            </div>

            {/* Table with Progress Bars */}
            <div className="mt-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-2 text-left">Stage</th>
                    <th className="py-2 px-2 text-right">Market</th>
                    <th className="py-2 px-2 text-left">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-2 font-medium">Pre-Seed</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      $0.3B
                    </td>
                    <td className="py-2 px-2 w-1/2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-[#d1d5db]"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="py-2 px-2 font-medium">Seed</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      $0.9B
                    </td>
                    <td className="py-2 px-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-[#06d6a0]"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="py-2 px-2 font-medium">Series A</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      $1.7B
                    </td>
                    <td className="py-2 px-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-[#06d6a0]"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-blue-50 border-b border-gray-100">
                    <td className="py-2 px-2 font-medium">Series B</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      $2.2B
                    </td>
                    <td className="py-2 px-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-[#118ab2]"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-2 font-medium">Series C+</td>
                    <td className="py-2 px-2 text-right font-semibold">
                      $2.8B
                    </td>
                    <td className="py-2 px-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-[#d1d5db]"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t border-gray-300">
                    <td className="py-2 px-2 font-semibold">Target Total</td>
                    <td className="py-2 px-2 text-right font-bold">$4.8B</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - 3 Columns */}
      <div className="grid md:grid-cols-3 gap-5 mt-auto">
        {/* Customer Pain Points */}
        <div className="bg-gray-50 rounded-xl p-5 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#118ab2]">
            Customer Pain Points
          </h3>
          <ul className="space-y-3">
            {slideData.painPoints.map((point, index) => (
              <li key={index} className="flex text-sm">
                <span className="text-[#118ab2] text-lg mr-2">•</span>
                <p className="text-gray-800">
                  <span className="font-bold">{point.stat}</span>{" "}
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Segment */}
        <div className="bg-gray-50 rounded-xl p-4 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#118ab2]">
            Initial Target Segment
          </h3>
          <div className="flex flex-col space-y-4 mt-2">
            <div className="text-center py-3 px-4 border-b border-gray-200">
              <p className="font-bold text-lg text-gray-800">
                {slideData.targetSegment.funding.label}
              </p>
              <p className="text-sm text-gray-600">
                {slideData.targetSegment.funding.description}
              </p>
            </div>
            <div className="text-center py-3 px-4">
              <p className="font-bold text-lg text-gray-800">
                {slideData.targetSegment.revenue.label}
              </p>
              <p className="text-sm text-gray-600">
                {slideData.targetSegment.revenue.description}
              </p>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="bg-gradient-to-r from-[#06d6a0]/10 to-[#118ab2]/10 rounded-xl p-4 shadow-md flex items-center">
          <p className="text-center text-md font-medium text-gray-800">
            Massive opportunity to solve critical financial operations problems
            for startups
            <span className="text-[#06d6a0] font-bold"> before </span>
            they can afford dedicated finance teams
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketSlide;
