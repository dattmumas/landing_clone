"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart, CheckCircle, Zap } from "lucide-react";

const BusinessImpact = () => {
  const businessBenefits = [
    {
      title: "30% Faster Cash Flow",
      icon: <BarChart size={30} />,
      color: "bg-blue-500",
      description:
        "Accelerate your order-to-cash cycle and improve liquidity with automated processes.",
    },
    {
      title: "95% Reduction in Errors",
      icon: <CheckCircle size={30} />,
      color: "bg-purple-500",
      description:
        "Eliminate human error in data entry and processing with AI-driven validation.",
    },
    {
      title: "70% Less Manual Work",
      icon: <Zap size={30} />,
      color: "bg-green-500",
      description:
        "Free your team to focus on strategic initiatives rather than administrative tasks.",
    },
  ];

  return (
    <div className="mb-32 py-16 w-full">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h3 className="inline-block text-2xl font-bold mb-3 pb-2 border-b-2 border-black">
            Business Impact
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our customers see dramatic improvements across their operations when
            they implement our platform.
          </p>
        </div>

        {/* Benefits grid - Three columns for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`${benefit.color} h-2`}></div>
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessImpact;
