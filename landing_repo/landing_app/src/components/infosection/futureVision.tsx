"use client";
import React from "react";
import { motion } from "framer-motion";

const FutureVision = () => {
  // Business function blocks with muted colors
  const businessFunctions = [
    { name: "Finance", color: "#93c5fd" }, // Muted blue
    { name: "Sales", color: "#c4b5fd" }, // Muted purple
    { name: "Supply Chain", color: "#86efac" }, // Muted green
    { name: "Operations", color: "#fcd34d" }, // Muted yellow/orange
    { name: "Analytics", color: "#f9a8d4" }, // Muted pink
  ];

  return (
    <div className="mb-32 px-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="lg:flex items-center">
          {/* Left side - Vision Text */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h3 className="text-3xl font-bold mb-6">
              Building the Future of Enterprise Software
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our vision goes beyond just automating the order-to-cash process.
              We&apos;re creating a comprehensive platform that will eventually
              automate data flows across all business functions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              By starting with financial operations, we&apos;re tackling the
              most critical data challenges that businesses face today, while
              building the foundation for tomorrow&apos;s fully integrated
              enterprise software ecosystem.
            </p>

            <div className="flex items-center mt-8">
              <div className="w-12 h-1 bg-blue-300 mr-4"></div>
              <p className="text-gray-800 font-medium">
                Real-time data. Real business impact.
              </p>
            </div>
          </div>

          {/* Right side - Modern Architecture Visualization */}
          <div className="lg:w-1/2 h-80 relative">
            {/* Removed gray background */}

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-md">
                {/* Horizontal Connected Blocks Architecture */}
                <div className="relative pb-10">
                  {/* Function Blocks */}
                  <div className="grid grid-cols-5 gap-1 mb-6">
                    {businessFunctions.map((func, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div
                          className="w-full h-16 rounded-md shadow-sm flex items-center justify-center mb-2 border border-gray-200"
                          style={{ backgroundColor: func.color }}
                        >
                          <span className="text-gray-700 text-xs font-semibold text-center px-1">
                            {func.name}
                          </span>
                        </div>

                        {/* Connecting line to platform */}
                        <motion.div
                          className="w-px h-10 bg-gray-200"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.1,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Data Flow Animation */}
                  <div className="absolute w-full top-12 h-8 overflow-hidden">
                    {businessFunctions.map((func, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          left: `calc(${index * 20}% + 10%)`,
                          backgroundColor: func.color,
                          boxShadow: "0 0 3px rgba(0,0,0,0.1)",
                        }}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                          y: [0, 16, 16],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.7,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    ))}
                  </div>

                  {/* Horizontal Platform */}
                  <motion.div
                    className="h-16 w-full bg-gray-800 rounded-md relative shadow-sm flex items-center justify-center border border-gray-200"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <span className="text-white font-bold">
                      Unified Payce Platform
                    </span>

                    {/* Platform subtle effect - made much more subtle */}
                    <motion.div
                      className="absolute inset-0 rounded-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.03, 0.08, 0.03] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(147,197,253,0.3) 0%, rgba(249,168,212,0.3) 100%)",
                        filter: "blur(4px)",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Platform Foundation Label */}
                <motion.div
                  className="text-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Seamless data integration across all business functions
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureVision;
