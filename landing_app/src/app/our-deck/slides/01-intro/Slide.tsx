import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react"; // Import all icons
import {
  useTextStyles,
  getSpacing,
  getIconClass,
  motionVariants,
} from "../../util/responsiveStyles";

// Helper function copied from previous slides
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  return <IconComponent {...props} />;
};

const IntroSlide: React.FC = () => {
  const textStyles = useTextStyles();

  // Custom title style for intro slide
  const titleStyle = {
    ...textStyles.title,
    fontSize: "clamp(2rem, 3.5cqi + 0.5rem, 3.5rem)",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
  };

  // Custom subtitle style with glow
  const taglineStyle = {
    ...textStyles.subtitle,
    color: "#06d6a0",
    textShadow: "0 0 8px rgba(6, 214, 160, 0.7)",
  };

  return (
    <motion.div
      {...motionVariants.fadeIn}
      className="w-full h-full flex flex-col relative bg-black text-white overflow-hidden"
      style={getSpacing.container}
    >
      {/* Subtle glow elements with responsive sizing */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-[20%] left-[20%] rounded-full opacity-15 blur-3xl"
          style={{
            backgroundColor: "#06d6a0",
            width: "clamp(10rem, 30%, 20rem)",
            height: "clamp(10rem, 30%, 20rem)",
          }}
        ></div>
        <div
          className="absolute bottom-[20%] right-[20%] rounded-full opacity-15 blur-3xl"
          style={{
            backgroundColor: "#118ab2",
            width: "clamp(15rem, 40%, 30rem)",
            height: "clamp(15rem, 40%, 30rem)",
          }}
        ></div>
      </div>

      {/* Main content grid - responsive two-column layout */}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 z-10 relative gap-4 sm:gap-6">
        {/* === Left Column: Company Info & Vision === */}
        <div className="flex flex-col justify-center items-start overflow-y-auto">
          {/* Company Name & Tagline */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1
              className="font-bold text-white mb-2 sm:mb-3"
              style={titleStyle}
            >
              {slideData.companyName}
            </h1>
            <h2 className="mb-4 sm:mb-6" style={taglineStyle}>
              {slideData.tagline}
            </h2>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-3 sm:mb-4"
          >
            <p
              className="text-gray-300 leading-relaxed"
              style={textStyles.body}
            >
              {slideData.valueProposition}
            </p>
          </motion.div>

          {/* Target Customer & Market Context */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-3 sm:mb-4"
          >
            <p className="text-gray-400" style={textStyles.body}>
              <span className="font-semibold text-gray-200">Target:</span>{" "}
              {slideData.targetCustomer}
            </p>
          </motion.div>

          {/* Core Beliefs */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <h3
              className="font-semibold mb-1 sm:mb-2 text-gray-200"
              style={textStyles.small}
            >
              Our Core Belief
            </h3>
            <p
              className="text-gray-400 leading-relaxed"
              style={textStyles.small}
            >
              {slideData.coreBeliefs}
            </p>
          </motion.div>

          {/* Current Stage - kept at the bottom with mt-auto */}
          <motion.div
            {...motionVariants.slideIn}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-auto pt-2 sm:pt-4 w-full"
          >
            <div
              className="bg-black/40 backdrop-blur-sm rounded-lg border-l-4 border-[#118ab2]"
              style={getSpacing.padding.small}
            >
              <p className="text-gray-300" style={textStyles.small}>
                <span className="font-semibold text-[#118ab2]">
                  Current Stage:
                </span>{" "}
                {slideData.currentStage}
              </p>
            </div>
          </motion.div>
        </div>

        {/* === Right Column: Key Metrics === */}
        <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6">
          {/* Key Metrics - displayed vertically with consistent spacing */}
          {slideData.keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              className="w-full max-w-md mx-auto bg-black/40 backdrop-blur-sm rounded-xl border border-white/20 flex items-center"
              style={{
                borderColor:
                  index === 0 ? "#06d6a0" : index === 1 ? "#118ab2" : "#FFC107",
                boxShadow: `0 0 15px rgba(${
                  index === 0
                    ? "6, 214, 160"
                    : index === 1
                    ? "17, 138, 178"
                    : "255, 193, 7"
                }, 0.2)`,
                padding: "clamp(0.75rem, 1cqi, 1.25rem)",
              }}
            >
              <GetIcon
                name={metric.icon}
                size={32}
                className={`${getIconClass(32)} mr-3 sm:mr-4 flex-shrink-0 ${
                  index === 0
                    ? "text-[#06d6a0]"
                    : index === 1
                    ? "text-[#118ab2]"
                    : "text-[#FFC107]"
                }`}
              />
              <div>
                <p
                  className={`font-semibold ${
                    index === 0
                      ? "text-[#06d6a0]"
                      : index === 1
                      ? "text-[#118ab2]"
                      : "text-[#FFC107]"
                  }`}
                  style={textStyles.small}
                >
                  {metric.label}
                </p>
                <p className="font-bold text-white" style={textStyles.body}>
                  {metric.value}
                </p>
                <p className="text-gray-400" style={textStyles.tiny}>
                  {metric.subValue}{" "}
                  <span className="text-gray-500">({metric.source})</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSlide;
