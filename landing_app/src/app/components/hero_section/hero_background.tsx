"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

// Separate component for the glowing dots
const GlowingDots = () => {
  // Create dots array only once using useMemo
  const dots = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: 3 + Math.random() * 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          style={{
            position: "absolute",
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            top: dot.top,
            left: dot.left,
            boxShadow: "0 0 3px 1px rgba(255, 255, 255, 0.7)",
            opacity: 0.2 + Math.random() * 0.3,
          }}
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            boxShadow: [
              "0 0 2px 1px rgba(255, 255, 255, 0.5)",
              "0 0 5px 2px rgba(255, 255, 255, 0.8)",
              "0 0 2px 1px rgba(255, 255, 255, 0.5)",
            ],
          }}
          transition={{
            duration: dot.animationDuration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

const HeroBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);
  const heroRef = React.useRef<HTMLDivElement>(null);

  // Get hero height after mounting
  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    // Handle window resize
    const handleResize = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate fade progress for gradient
  const fadeProgress = Math.min(scrollY / (heroHeight * 0.5), 1);

  return (
    <div className="relative" ref={heroRef}>
      {/* Main Hero Container */}
      <div
        style={{
          ...styles.container,
          // Add gradient mask directly to the container
          maskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 85%, transparent 100%)`,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.text}
        >
          Systems built to Power the Next Generation of Businesses.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 style={styles.subtext}>
            Dismantling the complexity of traditional business software through
            automation.
          </h2>
        </motion.div>

        {/* Add the persistent glowing dots */}
        <GlowingDots />
      </div>

      {/* Single clean gradient transition */}
      <div
        className="absolute -bottom-1 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent"
        style={{
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
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backgroundImage: "radial-gradient(circle, #1a1a1a, #000000)",
    position: "relative",
    overflow: "hidden",
    paddingBottom: "80px",
  },
  text: {
    fontSize: "4rem",
    color: "#FFFFFF",
    textShadow:
      "0 0 1px #FFFFFF, 0 0 3px #FFFFFF, 0 0 6px #FFFFFF, 0 0 1px #FFFFFF",
    fontFamily: "Roboto, Arial, sans-serif",
    maxWidth: "80%",
    textAlign: "center",
    zIndex: 10,
  },
  subtext: {
    fontSize: "1.5rem",
    color: "#CCCCCC",
    textAlign: "center",
    fontFamily: "Roboto, Arial, sans-serif",
    marginTop: "1rem",
    zIndex: 10,
  },
};

export default HeroBackground;
