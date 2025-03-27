// src/app/our-deck/components/SlideNavigation.tsx

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slidesMetadata } from "../slides";

interface SlideNavigationProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  setCurrentSlide,
}) => {
  const totalSlides = slidesMetadata.length;

  const nextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  return (
    <>
      {/* Top navigation bar */}
      <div className="bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700">
            Slide {currentSlide + 1} of {totalSlides}
          </span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-1 rounded ${
              currentSlide === 0
                ? "text-gray-400"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Slide indicators */}
          <div className="hidden md:flex space-x-1 items-center">
            {slidesMetadata.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === i ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-1 rounded ${
              currentSlide === totalSlides - 1
                ? "text-gray-400"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile navigation (bottom) */}
      <div className="py-4 px-6 flex justify-between items-center border-t border-gray-200 bg-white md:hidden">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center py-2 px-4 rounded ${
            currentSlide === 0 ? "text-gray-400" : "text-gray-700 bg-gray-100"
          }`}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`flex items-center py-2 px-4 rounded ${
            currentSlide === totalSlides - 1
              ? "text-gray-400"
              : "text-gray-700 bg-gray-100"
          }`}
        >
          <span>Next</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default SlideNavigation;
