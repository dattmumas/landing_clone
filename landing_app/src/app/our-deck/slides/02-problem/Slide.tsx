// src/app/our-deck/slides/01-intro/Slide.tsx

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
      className="w-full h-full flex flex-col justify-center items-center p-8 md:p-12" // Increased padding
    >
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-8">
        {" "}
        {/* Larger font size */}
        {slideData.title}
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-600 text-center mb-12">
        {" "}
        {/* Larger subtitle */}
        {slideData.subtitle}
      </h2>

      <div className="w-full max-w-4xl mx-auto mb-12">
        {" "}
        {/* Wider container */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-10 text-white text-center">
          <p className="text-2xl md:text-3xl font-medium mb-4">
            {slideData.tagline}
          </p>
          <p className="text-xl text-gray-300">{slideData.description}</p>
        </div>
      </div>

      {/* Larger logo */}
      {slideData.showLogo && (
        <div className="flex justify-center mt-6">
          <div className="h-16 w-64 bg-black rounded-md flex items-center justify-center text-white text-2xl font-bold">
            PAYCE
          </div>
        </div>
      )}

      {/* Added key metrics section for filling more space */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {slideData.keyMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
          >
            <p className="text-gray-500 text-sm mb-1">{metric.label}</p>
            <p className="text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroSlide;
