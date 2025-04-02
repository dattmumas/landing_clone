"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";

// Import slides and components
import { slides, slidesMetadata } from "./slides";
import SlideNavigation from "./components/SlideNavigation";

export default function OurDeck() {
  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Current slide component
  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <h1 className="text-xl font-bold">Payce Investor Deck</h1>

          <a
            href="#"
            className="flex items-center text-sm hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("Download functionality will be added later");
            }}
          >
            <Download className="mr-1 h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main content area - taking up more space */}
      <main className="flex-grow flex flex-col">
        {/* Slide navigation at top - made more compact */}
        <SlideNavigation
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />

        {/* Slide display area - maximized space */}
        <div className="flex-grow flex items-center justify-center p-0 sm:p-2">
          <div className="w-full max-w-7xl mx-auto">
            {/* Slide container with 16:9 aspect ratio - made responsive */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <div className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-y-auto h-full">
                <AnimatePresence mode="wait">
                  <CurrentSlideComponent key={currentSlide} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Slide title and description - made more compact */}
        <div className="bg-white py-2 px-6 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-800">
              {slidesMetadata[currentSlide].title}
            </h2>
            <p className="text-sm text-gray-600">
              {slidesMetadata[currentSlide].description}
            </p>
          </div>
        </div>
      </main>

      {/* Footer - made more compact */}
      <footer className="bg-white py-3 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Payce, Inc. All rights reserved.</p>
          <p className="mt-1 md:mt-0">
            Public Deck - Please Inquire for Private Version
          </p>
        </div>
      </footer>
    </div>
  );
}
