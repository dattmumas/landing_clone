"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Truck,
  FileCheck,
  DollarSign,
  ArrowRightCircle,
} from "lucide-react";

const OrderToCashFlow = () => {
  // Order to Cash process steps data
  const orderToCashSteps = [
    {
      title: "Order Management",
      icon: <Package size={26} />,
      color: "blue",
      description: "Streamline order capture and processing",
    },
    {
      title: "Fulfillment",
      icon: <Truck size={26} />,
      color: "indigo",
      description: "Automate shipping and delivery tracking",
    },
    {
      title: "Invoicing",
      icon: <FileCheck size={26} />,
      color: "purple",
      description: "Generate and send invoices automatically",
    },
    {
      title: "Payment Processing",
      icon: <DollarSign size={26} />,
      color: "violet",
      description: "Handle payments and reconciliation",
    },
  ];

  return (
    <div className="mb-32 relative w-full max-w-7xl mx-auto px-8">
      {/* Process flow visualization */}
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 rounded-3xl"></div>

        {/* Process flow visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-12 px-8 relative z-10">
          {orderToCashSteps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`border-2 border-${step.color}-500 bg-white rounded-xl p-6 shadow-lg h-full`}
                >
                  <div
                    className={`text-${step.color}-500 mb-3 flex justify-center`}
                  >
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>

                  {/* Step number badge */}
                  <div
                    className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-${step.color}-500 text-white flex items-center justify-center font-bold shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Connector arrow (not for the last item) */}
                {index < orderToCashSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRightCircle size={24} className="text-black" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Automated accounting integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 mx-auto max-w-md text-center bg-black text-white p-6 rounded-xl shadow-xl relative z-20"
        >
          <h4 className="text-xl font-bold mb-2">
            Automated Accounting Integration
          </h4>
          <p className="opacity-80">
            All financial data is automatically captured, processed and recorded
            - no manual data entry required
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderToCashFlow;
