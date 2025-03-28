// src/app/our-deck/slides/03-transformation/Slide.tsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";

const SolutionSlide: React.FC = () => {
  // Add state to track viewport dimensions for responsiveness
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if we're on mobile or small screen
  const isMobile = dimensions.width < 768;
  const isSmallHeight = dimensions.height < 600;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-black to-gray-900"
    >
      {/* Subtle technology pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Glowing elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className={`absolute ${
            isMobile
              ? "top-10 right-10 w-32 h-32"
              : "top-1/4 right-1/4 w-64 h-64"
          } rounded-full opacity-20 blur-3xl`}
          style={{ backgroundColor: "#06d6a0" }}
        ></div>
        <div
          className={`absolute ${
            isMobile
              ? "bottom-10 left-10 w-48 h-48"
              : "bottom-1/4 left-1/4 w-96 h-96"
          } rounded-full opacity-20 blur-3xl`}
          style={{ backgroundColor: "#118ab2" }}
        ></div>
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 w-full h-full ${
          isMobile ? "flex flex-col" : "grid grid-cols-2"
        } gap-8 p-8 md:p-12`}
      >
        {/* Left column: Title and Technologies */}
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="mb-8">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className={`${
                isMobile ? "text-3xl" : "text-4xl md:text-5xl"
              } font-bold text-white mb-3`}
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              {slideData.title}
            </motion.h2>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`${isMobile ? "text-xl" : "text-2xl md:text-3xl"}`}
              style={{
                color: "#06d6a0",
                textShadow: "0 0 8px rgba(6, 214, 160, 0.5)",
              }}
            >
              {slideData.subtitle}
            </motion.p>
          </div>

          {/* Technologies Section with Progress Bars */}
          <div className="flex-grow">
            <motion.h3
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-white ${
                isMobile ? "text-lg" : "text-xl"
              } font-semibold mb-4`}
            >
              Technology Stack
            </motion.h3>

            <div className="space-y-5">
              {slideData.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="mb-3"
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-300">{tech.percentage}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="h-2.5 rounded-full"
                      style={{
                        background: `linear-gradient(to right, #06d6a0, #118ab2)`,
                        boxShadow: "0 0 10px rgba(6, 214, 160, 0.5)",
                      }}
                    ></motion.div>
                  </div>

                  <p
                    className={`text-gray-400 ${
                      isMobile || isSmallHeight
                        ? "text-xs mt-1"
                        : "text-sm mt-2"
                    }`}
                  >
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Impact Metric */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-auto pt-4"
          >
            <div
              className="bg-black bg-opacity-50 rounded-lg p-4 border-l-4 inline-flex items-center"
              style={{ borderLeftColor: "#118ab2" }}
            >
              <div>
                <p
                  className={`${isMobile ? "text-3xl" : "text-4xl"} font-bold`}
                  style={{
                    color: "#06d6a0",
                    textShadow: "0 0 10px rgba(6, 214, 160, 0.5)",
                  }}
                >
                  {slideData.impactMetric.figure}
                </p>
                <p className="text-white text-sm">
                  {slideData.impactMetric.label}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column: Main Points */}
        <div
          className={`flex flex-col justify-center ${isMobile ? "mt-6" : ""}`}
        >
          <div className="space-y-6">
            {slideData.mainPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-5 border border-opacity-30"
                style={{
                  borderColor:
                    index === 0
                      ? "#06d6a0"
                      : index === 1
                      ? "#118ab2"
                      : "#ffffff",
                  boxShadow: `0 0 15px rgba(${
                    index === 0
                      ? "6, 214, 160"
                      : index === 1
                      ? "17, 138, 178"
                      : "255, 255, 255"
                  }, 0.15)`,
                }}
              >
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${
                      isMobile || isSmallHeight
                        ? "h-8 w-8 text-lg"
                        : "h-10 w-10 text-xl"
                    } rounded-full flex items-center justify-center mr-4`}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      border: "1px solid",
                      borderColor:
                        index === 0
                          ? "#06d6a0"
                          : index === 1
                          ? "#118ab2"
                          : "#ffffff",
                    }}
                  >
                    <span>{point.icon}</span>
                  </div>

                  <div>
                    <h3
                      className={`${
                        isMobile || isSmallHeight ? "text-lg" : "text-xl"
                      } font-semibold mb-2`}
                      style={{
                        color:
                          index === 0
                            ? "#06d6a0"
                            : index === 1
                            ? "#118ab2"
                            : "#ffffff",
                        textShadow: `0 0 8px rgba(${
                          index === 0
                            ? "6, 214, 160"
                            : index === 1
                            ? "17, 138, 178"
                            : "255, 255, 255"
                        }, 0.3)`,
                      }}
                    >
                      {point.title}
                    </h3>

                    <p
                      className={`text-gray-200 ${
                        isMobile || isSmallHeight ? "text-sm" : "text-base"
                      }`}
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Connector Lines - Only show on desktop */}
          {!isMobile && (
            <div className="relative mt-4 mx-auto w-3/4 h-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="absolute top-0 left-1/4 w-1/2 h-full"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,25 C50,55 150,-5 200,25"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06d6a0" />
                      <stop offset="100%" stopColor="#118ab2" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionSlide;
