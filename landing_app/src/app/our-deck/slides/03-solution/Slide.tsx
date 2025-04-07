// src/app/our-deck/slides/03-solution/Slide.tsx

import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
// Import Lucide icons dynamically based on data
import * as Icons from "lucide-react";

// Helper to get icon component by name
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // Use 'any' cast specifically for the dynamic lookup and disable lint rule for this line
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Return a default icon or null if not found
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  // Render the dynamically found component
  return <IconComponent {...props} />;
};

const SolutionSlide: React.FC = () => {
  // We can keep the responsive logic if needed, but simplify for clarity now
  // const [dimensions, setDimensions] = useState(/* ... */);
  // useEffect(/* ... */);
  // const isMobile = dimensions.width < 768;

  // Simplified classes for demonstration
  // Removed unused isMobile variable
  // const isMobile = false; // Assume desktop for now

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Retain the dark theme background
      className="w-full h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white p-6 md:p-8"
    >
      {/* Keep the subtle pattern and glows */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl`}
          style={{ backgroundColor: "#06d6a0" }}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl`}
          style={{ backgroundColor: "#118ab2" }}
        ></div>
      </div>

      {/* Main content - Balanced 2 Column Layout */}
      <div className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* === Left Column === */}
        <div className="flex flex-col gap-4 h-full">
          {/* Title & Solution Summary */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-2"
          >
            <h2
              className={`text-2xl md:text-3xl font-bold text-white mb-2`}
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              {slideData.title}
            </h2>
            <p className={`text-sm md:text-md text-gray-300`}>
              {slideData.solutionSummary}
            </p>
          </motion.div>

          {/* Value Proposition (Outcomes) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#06d6a0]">
              Key Outcomes
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {slideData.valueProposition.map((prop, index) => (
                <div key={index} className="flex items-center">
                  <GetIcon
                    name={prop.icon}
                    size={24}
                    className="mr-3 text-[#06d6a0] flex-shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-white">{prop.metric}</p>
                    <p className="text-sm text-gray-400">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Differentiation */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex-grow"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#118ab2] flex items-center">
              <GetIcon
                name={slideData.differentiation.icon}
                size={20}
                className="mr-2"
              />
              {slideData.differentiation.title}
            </h3>
            <ul className="space-y-2 list-inside text-sm text-gray-300">
              {slideData.differentiation.points.map((point, index) => (
                <li key={index} className="flex">
                  <GetIcon
                    name="Check"
                    size={16}
                    className="mr-2 mt-1 text-[#118ab2] flex-shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* === Right Column === */}
        <div className="flex flex-col gap-4 h-full">
          {/* Key Features */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-4 text-[#06d6a0]">
              Core Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {slideData.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-2 rounded bg-black/20"
                >
                  <GetIcon
                    name={feature.icon}
                    size={24}
                    className="mr-3 text-[#06d6a0] flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-medium text-white text-sm">
                      {feature.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-black/50 rounded-lg p-4 border border-dashed border-white/30 flex items-center justify-center flex-grow"
          >
            <div className="aspect-video w-full max-w-md mx-auto flex items-center justify-center">
              <p className="text-gray-400 text-center text-sm">
                [Placeholder: Product Screenshot/Mockup]
                <br />
                (e.g., Dashboard showing automated workflow)
              </p>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#118ab2]">
              Expected Impact (Metrics)
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {slideData.keyMetrics.map((metric, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center text-gray-300">
                    <GetIcon
                      name={metric.icon}
                      size={16}
                      className="mr-2 text-[#118ab2]"
                    />
                    {metric.label}
                  </span>
                  <span className="font-semibold text-white">
                    {metric.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionSlide;
