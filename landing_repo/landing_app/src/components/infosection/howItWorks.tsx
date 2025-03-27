"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  CreditCard,
  Receipt,
  Database,
  TrendingUp,
  BarChart3,
  Clock,
  Zap,
  RefreshCcw,
} from "lucide-react";

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="inline-block text-2xl font-bold mb-3 pb-2 border-b-2 border-black">
            How It Works
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI automation engine transforms traditional financial data into
            actionable operational intelligence.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Process visualization with hexagon grid */}
          <div className="relative w-full max-w-6xl mx-auto h-80">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl"></div>
            </div>

            {/* Process visualization */}
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16">
              {/* Left side - Accounting processes */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:mr-12 mb-8 lg:mb-0"
              >
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-lg mb-4">
                  <h3 className="font-bold text-lg mb-2">
                    Finance & Accounting
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                      <FileText size={20} className="text-blue-600 mr-2" />
                      <span>Invoicing</span>
                    </div>
                    <div className="flex items-center p-2 bg-purple-50 rounded-lg">
                      <CreditCard size={20} className="text-purple-600 mr-2" />
                      <span>Payments</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded-lg">
                      <Receipt size={20} className="text-green-600 mr-2" />
                      <span>Expenses</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm text-center">
                  Traditional time-consuming processes
                </div>
              </motion.div>

              {/* Middle - Automation Engine */}
              <motion.div
                variants={itemVariants}
                className="relative z-10 mb-8 lg:mb-0"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <RefreshCcw size={30} className="text-blue-500" />
                </motion.div>
                <motion.div
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(59, 130, 246, 0.5)",
                      "0px 0px 20px rgba(59, 130, 246, 0.5)",
                      "0px 0px 0px rgba(59, 130, 246, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-24 h-24 bg-black rounded-full flex items-center justify-center border-4 border-blue-500"
                >
                  <Zap size={36} className="text-white" />
                </motion.div>
                <div className="mt-3 text-center">
                  <h3 className="font-semibold">AI Automation</h3>
                  <div className="flex items-center justify-center mt-1">
                    <Clock size={14} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-600">
                      80% Time Saved
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Operations Software */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center lg:ml-12"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-black rounded-xl p-4 shadow-lg mb-4">
                  <h3 className="font-bold text-lg mb-2 text-center">
                    Operations Software
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                      <Database size={20} className="text-blue-600 mr-2" />
                      <span>Real-time Data</span>
                    </div>
                    <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                      <TrendingUp size={20} className="text-purple-600 mr-2" />
                      <span>Smart Insights</span>
                    </div>
                    <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                      <BarChart3 size={20} className="text-green-600 mr-2" />
                      <span>Performance Metrics</span>
                    </div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm text-center">
                  Actionable operational intelligence
                </div>
              </motion.div>
            </div>

            {/* Animated connecting lines for desktop */}
            <svg
              className="absolute inset-0 w-full h-full hidden lg:block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M220,120 C270,120 270,120 320,120"
                stroke="url(#gradientLeft)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M380,120 C430,120 430,120 480,120"
                stroke="url(#gradientRight)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <defs>
                <linearGradient
                  id="gradientLeft"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#000000" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient
                  id="gradientRight"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
