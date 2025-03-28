import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";

const IntroSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative overflow-hidden bg-black"
    >
      {/* Subtle glow elements with new colors */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#06d6a0" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#118ab2" }}
        ></div>
      </div>

      {/* Main content grid */}
      <div className="w-full h-full grid grid-cols-2 gap-8 p-12 z-10 relative">
        {/* Left side - Logo, Headline, and Core Beliefs */}
        <div className="flex flex-col justify-start pt-16 items-start">
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
            {slideData.title}
          </motion.h1>

          {/* Subtitle with glow using new color */}
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-2xl md:text-3xl mb-8"
            style={{
              color: "#06d6a0",
              textShadow: "0 0 8px rgba(6, 214, 160, 0.7)",
            }}
          >
            {slideData.subtitle}
          </motion.h2>

          {/* Core Beliefs Section moved to left column */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 pr-8"
          >
            <h3 className="text-white text-xl font-bold mb-3">Core Beliefs</h3>
            <p className="text-white text-md leading-relaxed">
              At Payce we believe that accounting is, to a meaningful extent,
              now fully automatable. We believe the system of rules modern
              accounting requires is entirely digestible by modern technology,
              and the translation of those rules into action requires only the
              context that can be achieved via modernized data rails. We are
              designing the technology that will serve as those data rails, and
              the systems that will power the businesses of tomorrow.
            </p>
          </motion.div>
        </div>

        {/* Right side - Tagline and Metrics */}
        <div className="flex flex-col justify-center space-y-12">
          {/* Highlighted Tagline with glow effect using new color */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="bg-black/50 backdrop-blur-sm rounded-xl p-6"
            style={{
              border: "1px solid #118ab2",
              boxShadow: "0 0 20px rgba(17, 138, 178, 0.3)",
            }}
          >
            <p
              className="text-2xl font-medium mb-4 text-center"
              style={{
                color: "#118ab2",
                textShadow: "0 0 8px rgba(17, 138, 178, 0.7)",
              }}
            >
              Our Automation Roadmap
            </p>

            <div className="flex flex-col space-y-3">
              {/* Step 1 */}
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(6, 214, 160, 0.2)",
                    border: "1px solid #06d6a0",
                    boxShadow: "0 0 10px rgba(6, 214, 160, 0.3)",
                  }}
                >
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Order-to-Cash</p>
                  <p className="text-gray-400 text-sm">
                    Automating the revenue cycle,customer onboarding, and order
                    placement
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(6, 214, 160, 0.2)",
                    border: "1px solid #06d6a0",
                    boxShadow: "0 0 10px rgba(6, 214, 160, 0.3)",
                  }}
                >
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Procure-to-Pay</p>
                  <p className="text-gray-400 text-sm">
                    Streamlining vendor payment and onboarding
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div
                  className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(6, 214, 160, 0.2)",
                    border: "1px solid #06d6a0",
                    boxShadow: "0 0 10px rgba(6, 214, 160, 0.3)",
                  }}
                >
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Inventory Management</p>
                  <p className="text-gray-400 text-sm">
                    Optimizing inventory, reducing costs
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics in horizontal layout with glow */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-row space-x-6"
          >
            {slideData.keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="flex-1 bg-black/30 rounded-lg p-5 text-center"
                style={{
                  border: "1px solid #06d6a0",
                  boxShadow: "0 0 15px rgba(6, 214, 160, 0.3)",
                }}
              >
                <p
                  className="text-md font-bold mt-2"
                  style={{ color: "#06d6a0" }}
                >
                  {metric.label}
                </p>
                <p
                  className="text-2xl font-bold text-white"
                  style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
                >
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSlide;
