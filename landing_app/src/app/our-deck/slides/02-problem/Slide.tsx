// src/app/our-deck/slides/02-problem/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";

const ProblemSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative overflow-hidden bg-white"
    >
      {/* Main content */}
      <div className="w-full h-full grid grid-cols-2 gap-8 p-12 z-10 relative">
        {/* Left side - Title and Problem Statement */}
        <div className="flex flex-col justify-start pt-16 items-start">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {slideData.title}
          </motion.h1>

          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-2xl md:text-3xl mb-10 text-gray-700"
          >
            {slideData.subtitle}
          </motion.h2>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mb-8"
          >
            <p className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
              {slideData.problemStatement}
            </p>
          </motion.div>

          {/* Cost Metric */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-auto"
          >
            <div
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 max-w-md"
              style={{ borderLeftColor: "#118ab2" }}
            >
              <p
                className="text-4xl font-bold mb-2"
                style={{ color: "#118ab2" }}
              >
                {slideData.costMetric.figure}
              </p>
              <p className="text-gray-700">{slideData.costMetric.label}</p>
            </div>
          </motion.div>
        </div>

        {/* Right side - Key Problems */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Key Problems */}
          {slideData.keyProblems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="bg-white shadow-lg rounded-xl p-6 flex items-start"
              style={{
                borderLeft: "3px solid #06d6a0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{
                  backgroundColor: "rgba(6, 214, 160, 0.1)",
                }}
              >
                <span className="text-xl">{problem.icon}</span>
              </div>
              <div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "#06d6a0" }}
                >
                  {problem.title}
                </h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4"
          >
            <p
              className="text-lg text-gray-800 italic px-4 border-l-2"
              style={{ borderLeftColor: "#118ab2" }}
            >
              {slideData.conclusion}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemSlide;
