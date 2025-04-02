"use client";

import React, { useEffect, useState } from "react";

const LiveDataPointsComponent: React.FC = () => {
  const [animationState, setAnimationState] = useState(0);

  // Animation cycle for data points with slower transition (3 seconds instead of 2)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 4);
    }, 3000); // Slowed down from 2000ms to 3000ms

    return () => clearInterval(interval);
  }, []);

  // Animation messages
  const animationMessages = [
    "Live financial documents continuously adapt to business needs",
    "Real-time updates when terms change",
    "Automatic status tracking across systems",
    "Smart workflows that respond to events",
  ];

  return (
    <div className="w-full my-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--card-foreground)" }}>
          In Payce, your purchase orders and invoices will exist as
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06d6a0] to-[#118ab2]">
            {" "}
            live data points
          </span>{" "}
          - automatically updating and adapting based on changing deal terms,
          and real time communication.
        </h2>
      </div>

      {/* Graphic and features in a flex layout */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Interactive SVG Graphic */}
        <div className="relative w-full md:w-2/3 h-96 md:h-[450px] rounded-xl shadow-xl overflow-hidden"
          style={{ background: "var(--card-background)" }}>
          {/* Status text at left - styled as a feature text */}
          <div className="absolute top-4 left-8 text-left z-10 max-w-sm">
            <p className="text-base font-medium transition-opacity duration-500 flex items-center" style={{ color: "var(--card-foreground)" }}>
              <span className="inline-block w-4 h-4 rounded-full bg-[#06d6a0] mr-3 flex-shrink-0"></span>
              {animationMessages[animationState]}
            </p>
          </div>

          {/* SVG Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="var(--card-foreground)"
                  strokeWidth="0.5"
                  style={{ opacity: 0.3 }}
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Document icons */}
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <svg
                className="w-28 h-28 text-[#06d6a0]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-white rounded-full shadow-lg p-1">
                <div className="text-xs font-bold px-2 py-1 rounded-full bg-[#06d6a0] text-white">
                  PO
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col items-center">
              <div className="font-semibold" style={{ color: "var(--card-foreground)" }}>Purchase Order</div>
              <div className="text-xs text-[#06d6a0] font-medium mt-1">
                Terms Updated
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <svg
                className="w-28 h-28 text-[#118ab2]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-white rounded-full shadow-lg p-1">
                <div className="text-xs font-bold px-2 py-1 rounded-full bg-[#118ab2] text-white">
                  INV
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col items-center">
              <div className="font-semibold" style={{ color: "var(--card-foreground)" }}>Invoice</div>
              <div className="text-xs text-[#118ab2] font-medium mt-1">
                Payment Processing
              </div>
            </div>
          </div>

          {/* Data Points and Connections */}
          <div className="absolute inset-0">
            {/* Connecting line */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 250,250 C 350,150 650,350 750,250"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeDasharray="10,5"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06d6a0" />
                  <stop offset="100%" stopColor="#118ab2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Data points with pulsing animation */}
            {[0, 1, 2, 3, 4].map((i) => {
              const position = 250 + i * 125;
              const pulseClass = animationState === i % 4 ? "animate-ping" : "";
              const isCurrent = animationState === i % 4;

              return (
                <div
                  key={i}
                  className="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${position / 10}%`,
                    top: `${i % 2 === 0 ? 45 : 55}%`,
                    zIndex: isCurrent ? 10 : 5,
                  }}
                >
                  <div
                    className={`w-5 h-5 rounded-full ${
                      isCurrent ? "bg-white shadow-lg" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`w-3 h-3 absolute top-1 left-1 rounded-full ${pulseClass}`}
                      style={{
                        backgroundColor: i < 2 ? "#06d6a0" : "#118ab2",
                        opacity: 0.7,
                      }}
                    ></div>
                    <div
                      className="w-3 h-3 absolute top-1 left-1 rounded-full"
                      style={{ backgroundColor: i < 2 ? "#06d6a0" : "#118ab2" }}
                    ></div>
                  </div>

                  {isCurrent && (
                    <div
                      className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs p-2 rounded shadow-md whitespace-nowrap"
                      style={{ 
                        color: i < 2 ? "#06d6a0" : "#118ab2",
                        background: "var(--card-background)"
                      }}
                    >
                      {i === 0 && "PO Received"}
                      {i === 1 && "Order Accepted"}
                      {i === 2 && "Live Changes"}
                      {i === 3 && "Approvals Processed"}
                      {i === 4 && "Invoice Sent"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Dynamic attributes updating */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-12">
            <div className="rounded-lg shadow-lg p-3 flex items-center" style={{ background: "var(--card-background)" }}>
              <div className="w-3 h-3 rounded-full bg-[#06d6a0] mr-2"></div>
              <div className="text-sm" style={{ color: "var(--card-foreground)" }}>
                <div className="font-semibold">Amount</div>
                <div
                  className={`font-mono ${
                    animationState === 1 ? "text-[#06d6a0] font-medium" : ""
                  }`}
                >
                  {animationState === 1 ? "$10,850.00" : "$10,500.00"}
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-lg p-3 flex items-center" style={{ background: "var(--card-background)" }}>
              <div className="w-3 h-3 rounded-full bg-[#118ab2] mr-2"></div>
              <div className="text-sm" style={{ color: "var(--card-foreground)" }}>
                <div className="font-semibold">Status</div>
                <div
                  className={`font-mono ${
                    animationState === 2 ? "text-[#118ab2] font-medium" : ""
                  }`}
                >
                  {animationState === 2 ? "Approved" : "Pending"}
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-lg p-3 flex items-center" style={{ background: "var(--card-background)" }}>
              <div className="w-3 h-3 rounded-full bg-[#06d6a0] mr-2"></div>
              <div className="text-sm" style={{ color: "var(--card-foreground)" }}>
                <div className="font-semibold">Due Date</div>
                <div
                  className={`font-mono ${
                    animationState === 3 ? "text-[#06d6a0] font-medium" : ""
                  }`}
                >
                  {animationState === 3 ? "Apr 15, 2025" : "Apr 30, 2025"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights in a single column to the right */}
        <div className="w-full md:w-1/3 p-6 rounded-xl shadow-xl" style={{ background: "var(--card-background)", color: "var(--card-foreground)" }}>
          <h3 className="text-xl font-bold mb-6">Key Features</h3>

          <div className="mb-6">
            <div className="flex items-start mb-2">
              <div className="w-6 h-6 bg-[#06d6a0]/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg
                  className="w-3 h-3 text-[#06d6a0]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm">
                  Auto-Updating Documents
                </h4>
                <p className="text-xs" style={{ opacity: 0.7 }}>
                  Changes in terms, pricing, or schedules automatically update
                  across all related documents.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start mb-2">
              <div className="w-6 h-6 bg-[#118ab2]/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg
                  className="w-3 h-3 text-[#118ab2]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm">
                  Intelligent Data Connectivity
                </h4>
                <p className="text-xs" style={{ opacity: 0.7 }}>
                  Documents maintain relationships with each other, ensuring
                  consistency across your financial operations.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-start mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[#06d6a0]/10 to-[#118ab2]/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <svg
                  className="w-3 h-3 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Automated Workflows</h4>
                <p className="text-xs" style={{ opacity: 0.7 }}>
                  From approval processes to payment scheduling, customizable
                  workflows that guarantee payments are collected timely and
                  accurately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDataPointsComponent;
