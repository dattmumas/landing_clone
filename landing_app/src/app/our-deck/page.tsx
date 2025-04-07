"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Download, ArrowLeft, Expand, Shrink } from "lucide-react";

// Import slides and components
import { slides, slidesMetadata } from "./slides";
import SlideNavigation from "./components/SlideNavigation";

export default function OurDeck() {
  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const deckContainerRef = useRef<HTMLDivElement>(null);

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

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      // Check document property, not element, as element might be null on exit
      setIsFullscreen(document.fullscreenElement != null);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Fullscreen toggle function
  const toggleFullscreen = () => {
    const element = deckContainerRef.current;
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
        // Optionally, alert the user or provide fallback
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

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

          <div className="flex items-center space-x-4">
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
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              className="flex items-center text-sm hover:text-gray-300 transition-colors"
            >
              {isFullscreen ? (
                <Shrink className="mr-1 h-4 w-4" />
              ) : (
                <Expand className="mr-1 h-4 w-4" />
              )}
              <span>{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main content area - Ensure flex items don't overflow */}
      <main className="flex-grow flex flex-col min-h-0">
        {/* Slide navigation at top - made more compact */}
        <SlideNavigation
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />

        {/* Slide display area - outer flex container */}
        <div
          ref={deckContainerRef}
          className="flex-grow flex items-center justify-center p-2 sm:p-4 bg-gray-200 w-full min-h-0"
          style={{
            containerType: "size",
            containerName: "slide-container",
          }}
        >
          {/* Inner container respects parent bounds, aspect ratio, and max dimensions */}
          <div
            className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full h-full"
            style={
              {
                aspectRatio: "16/9",
                // Set max dimensions ONLY when not in fullscreen
                // These act as upper bounds within the available flex space
                maxWidth: isFullscreen ? "none" : "1600px",
                maxHeight: isFullscreen ? "none" : "900px",
                // Inherit size from parent, let aspect ratio constrain it
                // Margin auto centers it if space is larger than max dimensions
                margin: "auto",
                // CSS custom properties for slides (no changes here)
                "--slide-padding-base": "clamp(0.75rem, 2vw, 1.5rem)",
                "--slide-padding-scale": "clamp(0.25cqi, 0.5cqi, 0.75cqi)",
              } as React.CSSProperties
            }
          >
            {/* Absolute positioned content container */}
            <div className="absolute inset-0 flex flex-col rounded-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <CurrentSlideComponent key={currentSlide} />
              </AnimatePresence>
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
