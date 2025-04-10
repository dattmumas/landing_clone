"use client";

import React from "react";
import { motion } from "framer-motion";

const EnterpriseHeader = () => {
  return (
    <section className="py-24 w-full overflow-hidden relative">
      {/* Subtle background pattern with new green color */}
      <div className="absolute inset-0" style={{ background: "var(--background)" }}>
        <div
          className="absolute inset-0 opacity-5 bg-[radial-gradient(#06d6a0_1px,transparent_1px)]"
          style={{ backgroundSize: "20px 20px" }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-8 leading-tight" style={{ color: "var(--foreground)" }}>
            Reimagining Enterprise Software
            <br />
            {/* Updated gradient colors to green and blue */}
            <span className="bg-gradient-to-r from-[#06d6a0] to-[#118ab2] text-transparent bg-clip-text">
              Through Automation
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto mb-16" style={{ color: "var(--foreground)", opacity: 0.7 }}
          >
            At Payce, our mission is to enable individuals to achieve
            organizational feats. Our plan is to build an ecosystem of
            enterprise software that puts operations and growth first, and
            reduces the need for manual processes wherever possible. By
            leveraging breakthroughs in financial technology, banking, and
            automation - Payce is putting the power back in the hands of
            operations and business development, and breaking down the barriers
            to growth.
          </motion.p>
        </motion.div>

        {/* Decorative divider with new color scheme */}
        <div className="flex justify-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#06d6a0] to-[#118ab2] rounded-full"
          ></motion.div>
        </div>

        {/* Order-to-Cash Focus Section with updated colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl shadow-lg border" style={{ 
            background: "linear-gradient(to right, var(--card-background), #e6fff9)", 
            borderColor: "var(--card-background)" 
          }}
        >
          <div className="text-center">
            <h3 className="inline-block text-2xl font-bold mb-4 pb-2 border-b-2 border-[#06d6a0]" style={{ color: "var(--foreground)" }}>
              Our Current Focus -
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              We&apos;re currently focused on fixing the order-to-cash process —
              the messy, manual process that slows down revenue and cash flow.
              Our goal: get businesses paid faster, and systems completely in
              sync with less friction, fewer errors, and zero conversation -
              either internal or external.
            </p>

            {/* Button with new green color */}
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-[#06d6a0] text-white rounded-lg shadow-md hover:bg-[#05c091] transition-colors"
                onClick={() => {
                  window.location.href = "/our-products/order-to-cash";
                }}
                style={{
                  border: "1px solid #06d6a0",
                  boxShadow: "0 0 10px rgba(6, 214, 160, 0.3)",
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements with new colors */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#06d6a0] opacity-10 blur-xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#118ab2] opacity-10 blur-xl"
      ></motion.div>
    </section>
  );
};

export default EnterpriseHeader;
