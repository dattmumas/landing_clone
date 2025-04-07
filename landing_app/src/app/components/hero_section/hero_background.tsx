// Updated hero_background.tsx

"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ExtendedCSSProperties } from "@/lib/cssTypes";

// Separate component for the glowing dots
const GlowingDots: React.FC = () => {
  // Create dots array only once using useMemo
  const dots = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 3 + Math.random() * 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      opacity: 0.6 + Math.random() * 0.4,
    }));
  }, []);

  // Helper function to detect low performance devices
  const isLowPerformanceDevice = useMemo(() => {
    if (typeof window === "undefined") return false;

    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if it's likely a mobile device
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    return prefersReducedMotion || isMobileDevice;
  }, []);

  // Detect color scheme
  const [, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Initial check
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Add listener for changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Calculate optimal number of dots based on device performance
  const optimizedDotCount = isLowPerformanceDevice ? 10 : 20;

  // Colors based on color scheme
  const dotColor = "white"; // Set dots to always be white
  const dotShadowColor = "rgba(255, 255, 255, 0.7)"; // Set shadow color to white with opacity

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.slice(0, optimizedDotCount).map((dot) => (
        <motion.div
          key={dot.id}
          style={{
            position: "absolute",
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            backgroundColor: dotColor,
            top: dot.top,
            left: dot.left,
            boxShadow: `0 0 3px 1px ${dotShadowColor}`,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            boxShadow: [
              `0 0 2px 1px ${dotShadowColor.replace("0.7", "0.5")}`,
              `0 0 5px 2px ${dotShadowColor.replace("0.7", "0.8")}`,
              `0 0 2px 1px ${dotShadowColor.replace("0.7", "0.5")}`,
            ],
          }}
          transition={{
            duration: isLowPerformanceDevice
              ? dot.animationDuration * 0.7
              : dot.animationDuration,
            repeat: isLowPerformanceDevice ? 5 : Infinity,
            repeatType: "reverse",
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [windowHeight, setWindowHeight] = useState(0);
  const heroRef = React.useRef<HTMLDivElement>(null);

  // Set the CSS variable for consistent vh units
  const setVH = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  // Handle window resize with useCallback for better performance
  const handleResize = useCallback(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
    setWindowHeight(window.innerHeight);
    setVH();
  }, [setVH]);

  // Handle scroll with useCallback for better performance
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Get initial state values after mounting
  useEffect(() => {
    // Set initial values
    setWindowHeight(window.innerHeight);

    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    // Initialize the vh custom property
    setVH();

    // Add event listeners
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, setVH]);

  // Track scroll position
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Calculate fade progress for gradient with useMemo
  const fadeProgress = useMemo(() => {
    // Ensure heroHeight is not zero to prevent NaN/Infinity
    if (heroHeight === 0) {
      return 0; // Default to fully transparent if height is unknown
    }
    const progress = scrollY / (heroHeight * 0.5);
    return Math.min(Math.max(progress, 0), 1); // Clamp value between 0 and 1
  }, [scrollY, heroHeight]);

  // Create the container style with proper typing
  const containerStyle = useMemo<ExtendedCSSProperties>(
    () => ({
      ...styles.container,
      // Add gradient mask with all vendor prefixes for cross-browser compatibility
      WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
      MozMaskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
      msMaskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
      OmaskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
      maskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
      // Use CSS variable for more consistent height across devices
      height: `calc(var(--vh, 1vh) * 90)`,
    }),
    []
  );

  return (
    <div className="relative" ref={heroRef}>
      {/* Main Hero Container */}
      <div style={containerStyle}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.text}
          className="text-[clamp(3.5rem,7vw,6rem)]"
        >
          Systems built to Power the Next Generation of Businesses.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2
            style={styles.subtext}
            className="text-[clamp(1.2rem,2.5vw,1.8rem)]"
          >
            Dismantling the complexity of traditional business software through
            automation.
          </h2>
        </motion.div>

        {/* Glowing dots background effect */}
        <GlowingDots />
      </div>

      {/* Gradient transition */}
      <div
        className="absolute -bottom-1 left-0 right-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, var(--gradient-from), var(--gradient-via), transparent)",
          height: "250px",
          opacity: fadeProgress,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backgroundImage: "radial-gradient(circle, #1a1a1a, #000000)",
    position: "relative",
    overflow: "hidden",
    paddingBottom: "80px",
    minHeight: "90vh", // Fallback and minimum height
  },
  text: {
    color: "#FFFFFF",
    textShadow:
      "0 0 1px #FFFFFF, 0 0 3px #FFFFFF, 0 0 6px #FFFFFF, 0 0 1px #FFFFFF",
    fontFamily: "var(--font-sans)",
    maxWidth: "80%",
    textAlign: "center",
    zIndex: 10,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontSize: "3.5rem", // Base size fallback for older browsers
  },
  subtext: {
    color: "#CCCCCC",
    textAlign: "center",
    fontFamily: "var(--font-sans)",
    marginTop: "1rem",
    zIndex: 10,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    fontSize: "1.4rem", // Base size fallback for older browsers
  },
};

export default HeroBackground;
