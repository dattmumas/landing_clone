// src/app/our-deck/components/SlideContainer.tsx

import React from "react";
import { AnimatePresence } from "framer-motion";
import { slides } from "../slides";

interface SlideContainerProps {
  currentSlide: number;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ currentSlide }) => {
  // Get current slide component
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="relative w-full"
      style={{
        // Maintain 16:9 aspect ratio but ensure it scales properly
        paddingBottom: "56.25%", 
      }}
    >
      <div className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-y-auto h-full transform-origin-center scale-100">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideContainer;
