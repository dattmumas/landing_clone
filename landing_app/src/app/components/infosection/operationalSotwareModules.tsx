"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, LineChart, TrendingUp } from "lucide-react";

// Operational software modules data
const operationalSoftware = [
  { name: "Business Intelligence", icon: <BarChart3 size={24} /> },
  { name: "Supply Chain Optimization", icon: <TrendingUp size={24} /> },
  { name: "Revenue Forecasting", icon: <LineChart size={24} /> },
];

const OperationalSoftwareModules = () => {
  return (
    // Bottom flow section with gradient background
    <div className="pt-20 pb-32 relative px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="inline-block text-2xl font-bold mb-3 pb-2 border-b-2 border-black">
            Operational Software Modules
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Turn your financial data into powerful operational tools that drive
            better business decisions.
          </p>
        </div>

        <div className="relative p-8 rounded-3xl overflow-hidden">
          {/* Extended gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10"></div>

          {/* Connector line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-black transform -translate-y-1/2 z-0 hidden lg:block"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 px-4 space-y-8 lg:space-y-0">
            {/* AI Automation - Starting point */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
              className="p-6 bg-black text-white rounded-2xl shadow-lg w-64 flex items-center justify-center flex-col gap-2"
            >
              <div className="bg-blue-500 rounded-full p-3 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 3a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Z"></path>
                  <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center">
                AI-Powered Automation
              </h3>
              <p className="text-sm text-gray-300">
                Transforming manual work into digital intelligence
              </p>
            </motion.div>

            {/* Directional arrow - Desktop only */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <svg
                width="50"
                height="12"
                viewBox="0 0 50 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.5303 6.53033C49.8232 6.23744 49.8232 5.76256 49.5303 5.46967L44.7574 0.696699C44.4645 0.403806 43.9896 0.403806 43.6967 0.696699C43.4038 0.989593 43.4038 1.46447 43.6967 1.75736L47.9393 6L43.6967 10.2426C43.4038 10.5355 43.4038 11.0104 43.6967 11.3033C43.9896 11.5962 44.4645 11.5962 44.7574 11.3033L49.5303 6.53033ZM0 6.75H49V5.25H0V6.75Z"
                  fill="white"
                />
              </svg>
            </motion.div>

            {/* Operational Software - Flowing section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              {operationalSoftware.map((software, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    backgroundColor:
                      index === 0
                        ? "#EBF8FF"
                        : index === 1
                        ? "#E6FFFA"
                        : "#F0FFF4",
                  }}
                  className={`p-6 bg-white border border-black rounded-xl shadow-md text-center flex flex-col items-center justify-center h-40`}
                >
                  <div
                    className={`mb-3 text-${
                      index === 0 ? "blue" : index === 1 ? "purple" : "green"
                    }-500`}
                  >
                    {software.icon}
                  </div>
                  <span className="text-lg font-semibold">{software.name}</span>
                  <div className="w-12 h-1 bg-black mt-2 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Subtle animated dots background overlay */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Use client-side only rendering for random elements */}
            {typeof window !== "undefined" &&
              [...Array(20)].map((_, i) => {
                // These values are calculated only on the client side
                const posX = (i * 5.7) % 100;
                const posY = (i * 4.3) % 100;
                const dotScale = 0.5 + (i % 10) / 10;
                const duration = 10 + (i % 10);

                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white opacity-30"
                    initial={{
                      x: `${posX}%`,
                      y: `${posY}%`,
                      scale: dotScale,
                    }}
                    animate={{
                      y: [`${posY}%`, `${(posY + 30) % 100}%`],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalSoftwareModules;
