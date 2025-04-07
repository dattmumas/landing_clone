"use client";

import React, { useEffect, useState } from "react";
import {
  ClipboardList,
  CheckCircle2,
  Truck,
  FileText,
  CircleDollarSign,
} from "lucide-react";

// Define icons using lucide-react components
const icons = {
  PO: <ClipboardList size={48} />, // Order
  OA: <CheckCircle2 size={48} />, // Acceptance
  FU: <Truck size={48} />, // Fulfillment
  IN: <FileText size={48} />, // Invoice
  PA: <CircleDollarSign size={48} />, // Payment
};

const LiveDataPointsComponent: React.FC = () => {
  const [animationState, setAnimationState] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const steps = [
    {
      id: "order",
      title: "Order Creation",
      icon: icons.PO,
      color: "#06d6a0",
      status: "Created",
      details: {
        id: "#PO-8742",
        amount: "$10,500.00",
        date: "Mar 15, 2025",
      },
    },
    {
      id: "accept",
      title: "Order Acceptance",
      icon: icons.OA,
      color: "#1a9988",
      status: "Terms Updated",
      details: {
        id: "#PO-8742",
        amount: "$10,850.00",
        date: "Mar 20, 2025",
      },
    },
    {
      id: "fulfill",
      title: "Fulfillment",
      icon: icons.FU,
      color: "#118ab2",
      status: "Shipping",
      details: {
        id: "#PO-8742",
        progress: "100%",
        date: "Apr 05, 2025",
      },
    },
    {
      id: "invoice",
      title: "Invoicing",
      icon: icons.IN,
      color: "#073b4c",
      status: "Pending Payment",
      details: {
        id: "#INV-8742",
        amount: "$10,850.00",
        date: "Apr 30, 2025",
      },
    },
    {
      id: "payment",
      title: "Payment",
      icon: icons.PA,
      color: "#06d6a0", // Re-using color for cycle
      status: "Paid",
      details: {
        id: "#INV-8742",
        amount: "$10,850.00",
        date: "Apr 15, 2025",
      },
    },
  ];

  const currentStep = steps[animationState];
  const totalSteps = steps.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setAnimationState((prev) => (prev + 1) % totalSteps);
        setIsTransitioning(false);
      }, 500); // Half of the transition duration
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSteps]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "var(--card-foreground)" }}
        >
          Live Order Tracking
        </h2>
        <p
          className="text-lg md:text-xl mb-4"
          style={{ color: "var(--card-foreground)", opacity: 0.9 }}
        >
          Follow your order through the automated process in real-time.
        </p>
      </div>

      {/* Animated Card Visualization */}
      <div
        className="bg-white rounded-2xl shadow-xl p-8 mb-12 transition-all duration-1000 ease-in-out relative"
        style={{
          borderTop: `8px solid ${currentStep.color}`,
          minHeight: "350px", // Ensure consistent height during transitions
        }}
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200 rounded-t-lg overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#06d6a0] to-[#118ab2] transition-all duration-1000 ease-in-out"
            style={{
              width: `${((animationState + 1) / totalSteps) * 100}%`,
            }}
          />
        </div>

        {/* Card Content */}
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-8">
            {/* Icon */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center transition-colors duration-1000 ease-in-out flex-shrink-0"
              style={{
                backgroundColor: `${currentStep.color}20`,
                color: currentStep.color,
              }}
            >
              {currentStep.icon}
            </div>

            {/* Details */}
            <div className="flex-grow text-center md:text-left">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors duration-1000 ease-in-out"
                style={{
                  backgroundColor: `${currentStep.color}15`,
                  color: currentStep.color,
                }}
              >
                {currentStep.status}
              </span>

              <h3
                className="text-2xl md:text-3xl font-bold my-3 transition-colors duration-1000 ease-in-out"
                style={{ color: currentStep.color }}
              >
                {currentStep.title}
              </h3>

              <div
                className="text-sm space-y-2"
                style={{ color: "var(--card-foreground)" }}
              >
                <div className="flex justify-between border-b pb-1">
                  <span className="opacity-70">Document ID:</span>
                  <span className="font-mono font-medium">
                    {currentStep.details.id}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="opacity-70">
                    {currentStep.details.amount ? "Amount:" : "Progress:"}
                  </span>
                  <span className="font-mono font-medium">
                    {currentStep.details.amount || currentStep.details.progress}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Date:</span>
                  <span className="font-mono font-medium">
                    {currentStep.details.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-full bg-[#06d6a0]/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-[#06d6a0]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Auto-Updating Documents
          </h3>
          <p className="text-sm opacity-70">
            Changes in terms, pricing, or schedules automatically update across
            all related documents.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-full bg-[#118ab2]/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-[#118ab2]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Intelligent Data Connectivity
          </h3>
          <p className="text-sm opacity-70">
            Documents maintain relationships with each other, ensuring
            consistency across your financial operations.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06d6a0]/10 to-[#118ab2]/10 flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Automated Workflows</h3>
          <p className="text-sm opacity-70">
            From approval processes to payment scheduling, customizable
            workflows that guarantee payments are collected timely and
            accurately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveDataPointsComponent;
