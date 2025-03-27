"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if user has scrolled enough to show footer
    const checkScroll = () => {
      // Show after scrolling 400px - adjust as needed
      if (window.scrollY > 400 && !isVisible) {
        setIsVisible(true);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", checkScroll);

    // Check once on mount for initial position
    checkScroll();

    // Clean up
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isVisible]);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white text-gray-800 py-6 mt-20 border-t border-black ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Name and Copyright */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Payce</h3>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Payce, Inc. All rights reserved.
            </p>
          </div>

          {/* Essential Links */}
          <div className="flex space-x-8">
            <a href="/our-deck" className="text-gray-700 hover:text-gray-900">
              Our Deck
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
