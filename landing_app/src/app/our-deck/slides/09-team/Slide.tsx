import React from "react";
import { motion } from "framer-motion";
import { slideData } from "./data";
import * as Icons from "lucide-react"; // Import all icons
import Image from "next/image"; // Import Next.js Image component

// Helper function copied from previous slides
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.UserCircle {...props} />; // Default user icon if image/icon name fails
  }
  return <IconComponent {...props} />;
};

// Define a simple type for Advisor for type checking
interface Advisor {
  name: string;
  expertise?: string; // Optional expertise field
}

const TeamSlide: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col relative bg-white text-gray-800 p-6 md:p-8"
    >
      {/* Slide Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center flex-shrink-0"
      >
        {slideData.title}
      </motion.h2>

      {/* Main content area */}
      <div className="flex-grow flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-8 overflow-y-auto px-4 max-w-2xl mx-auto">
        {/* Team Member Cards */}
        {slideData.teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="w-full bg-gray-50 rounded-xl shadow-lg p-5 text-center border-t-4 border-blue-400 flex flex-col items-center"
          >
            {/* Placeholder Image/Icon */}
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 flex items-center justify-center overflow-hidden">
              {/* Basic check if imageUrl is a placeholder or potentially real */}
              {member.imageUrl &&
              !member.imageUrl.includes("placeholder") &&
              !member.imageUrl.includes("path/to") ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              ) : (
                <GetIcon
                  name="UserCircle2"
                  size={48}
                  className="text-gray-400"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-blue-600 mb-2">
              {member.title}
            </p>
            <p className="text-xs text-gray-600 mb-3 leading-relaxed italic">
              {member.bio}
            </p>
            <ul className="text-left text-xs text-gray-700 space-y-1 list-disc list-outside pl-4">
              {member.keyPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Team Philosophy / Why Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 md:mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg text-center max-w-3xl mx-auto flex-shrink-0"
      >
        <h4 className="text-lg font-semibold mb-1 flex items-center justify-center text-cyan-700">
          <GetIcon
            name={slideData.teamPhilosophy.icon}
            size={20}
            className="mr-2"
          />
          {slideData.teamPhilosophy.title}
        </h4>
        <p className="text-sm text-gray-700">
          {slideData.teamPhilosophy.description}
        </p>
      </motion.div>

      {/* Optional Placeholder for Advisors */}
      {slideData.advisors && slideData.advisors.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-4 text-xs text-gray-500 flex-shrink-0"
        >
          Advisors: {slideData.advisors.map((a: Advisor) => a.name).join(", ")}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamSlide;
