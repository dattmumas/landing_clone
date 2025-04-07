import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react"; // Import all icons

// Helper function copied from previous slides
const GetIcon = ({ name, ...props }: { name: string } & Icons.LucideProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle {...props} />; // Default icon
  }
  return <IconComponent {...props} />;
};

// Reusable Card component specifically for this slide's styling
const PillarCard: React.FC<{
  title: string;
  icon: string;
  color: string;
  children: React.ReactNode;
  delay: number;
}> = ({ title, icon, color, children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 border-l-4 h-full"
      style={{ borderLeftColor: color }}
    >
      <h3
        className="text-md font-semibold mb-2 flex items-center"
        style={{ color }}
      >
        <GetIcon name={icon} size={18} className="mr-2" />
        {title}
      </h3>
      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </motion.div>
  );
};

const TechnologySlide: React.FC = () => {
  // Match data structure from screenshot (example)
  const techData = {
    technicalProgress: {
      title: "Technical Progress & Team",
      icon: "Rocket",
      color: "#ef476f", // Pink/Red
      description:
        "MVP built (Python/Node, React) and internally tested. Beta planned for Q3. Our experienced CTO previously scaled a similar fintech platform.",
      points: [
        "Working MVP Completed (Internal Tests Successful)",
        "Alpha automates core O2C tasks",
        "Beta Launch: Q3 Target",
      ],
    },
    innovationIP: {
      title: "Innovation & IP",
      icon: "Lightbulb",
      color: "#118ab2", // Blue
      description:
        "Our core innovation lies in the AI-driven risk scoring for invoice payments, leveraging a proprietary algorithm unique in the SMB space. We are building a defensible data asset on payment behaviors.",
      points: [
        "Proprietary AI Payment Risk Scoring",
        "Unique SMB-focused dataset creation (Network Effect)",
      ],
    },
    coreArchitecture: {
      title: "Core Architecture",
      icon: "Network",
      caption:
        "High-level representation of our scalable and secure architecture.",
    },
    scalabilityReliability: {
      title: "Scalability & Reliability",
      icon: "ShieldCheck",
      color: "#ffd166", // Yellow
      description:
        "Engineered for high availability and volume on scalable cloud infrastructure. Security and compliance are foundational, protecting sensitive financial data.",
      points: [
        "Scalable Cloud Infrastructure (Millions of transactions)",
        "Enterprise-grade Security (Encryption, Access Controls)",
        "Compliance Roadmap (SOC2 Target)",
      ],
    },
    integrationDataStrategy: {
      title: "Integration & Data Strategy",
      icon: "GitMerge",
      color: "#06d6a0", // Teal/Green
      description:
        "Plug-and-play integrations ensure quick adoption. Aggregated, anonymized payment data continuously improves AI predictions, enhancing value for all users.",
      points: [
        "Easy Integration (QuickBooks, Xero, Shopify etc.)",
        "Data Network Effect: Improves AI with usage",
      ],
    },
    techMetrics: {
      title: "Tech Metrics",
      icon: "BarChart3",
      metrics: [
        {
          label: "Development Speed",
          value: "MVP in 4 Months",
          icon: "FastForward",
        },
        {
          label: "Target Capacity",
          value: "1k+ Clients / ~$1B Invoice Volume Annually",
          icon: "Database",
        },
        {
          label: "Prediction Accuracy (Target)",
          value: "85%+ Late Payment Flagging",
          icon: "Crosshair",
        },
        {
          label: "Security Standard",
          value: "Bank-Grade Encryption (AES-256)",
          icon: "Lock",
        },
        { label: "Uptime Target", value: "99.9% SLA", icon: "CheckCircle" },
      ],
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Light theme matching screenshot
      className="w-full h-full flex flex-col relative bg-white text-gray-800 p-6 md:p-8"
    >
      {/* Slide Title - Matching Screenshot */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex-shrink-0 text-center"
      >
        Payce Technology: Built for Scale, Security, and Intelligence
      </motion.h2>

      {/* Main Content Area - 3 Columns */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Left Column: Technical Progress, Innovation */}
        <div className="flex flex-col gap-5 md:col-span-1">
          <PillarCard
            title={techData.technicalProgress.title}
            icon={techData.technicalProgress.icon}
            color={techData.technicalProgress.color}
            delay={0.2}
          >
            <p className="text-xs mb-2">
              {techData.technicalProgress.description}
            </p>
            <ul className="list-disc list-outside pl-4 text-xs space-y-1">
              {techData.technicalProgress.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </PillarCard>

          <PillarCard
            title={techData.innovationIP.title}
            icon={techData.innovationIP.icon}
            color={techData.innovationIP.color}
            delay={0.3}
          >
            <p className="text-xs mb-2">{techData.innovationIP.description}</p>
            <ul className="list-disc list-outside pl-4 text-xs space-y-1">
              {techData.innovationIP.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </PillarCard>
        </div>

        {/* Center Column: Core Architecture Diagram */}
        <div className="flex flex-col md:col-span-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }} // Animate slightly earlier
            className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col items-center border border-gray-200"
          >
            <h3 className="text-md font-semibold mb-3 text-center text-gray-700 flex items-center">
              <GetIcon
                name={techData.coreArchitecture.icon}
                size={18}
                className="inline mr-2"
              />
              {techData.coreArchitecture.title}
            </h3>
            <div className="w-full flex-grow flex items-center justify-center p-2">
              {/* SVG Placeholder matching screenshot */}
              <svg
                className="w-full h-[150px] text-gray-300"
                fill="none"
                viewBox="0 0 100 60"
                stroke="currentColor"
                strokeWidth="1"
              >
                {/* Top Box */}
                <rect x="30" y="5" width="40" height="12" rx="2" />
                {/* Middle Boxes */}
                <rect x="5" y="25" width="35" height="15" rx="2" />
                <rect x="60" y="25" width="35" height="15" rx="2" />
                {/* Bottom Box */}
                <rect x="30" y="45" width="40" height="12" rx="2" />
                {/* Connecting Lines */}
                <path d="M50 17 V 25" />
                <path d="M22.5 25 V 45" />
                <path d="M77.5 25 V 45" />
                <path d="M22.5 40 H 77.5" />
              </svg>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              {techData.coreArchitecture.caption}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Scalability, Integration, Metrics */}
        <div className="flex flex-col gap-5 md:col-span-1">
          <PillarCard
            title={techData.scalabilityReliability.title}
            icon={techData.scalabilityReliability.icon}
            color={techData.scalabilityReliability.color}
            delay={0.4}
          >
            <p className="text-xs mb-2">
              {techData.scalabilityReliability.description}
            </p>
            <ul className="list-disc list-outside pl-4 text-xs space-y-1">
              {techData.scalabilityReliability.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </PillarCard>

          <PillarCard
            title={techData.integrationDataStrategy.title}
            icon={techData.integrationDataStrategy.icon}
            color={techData.integrationDataStrategy.color}
            delay={0.5}
          >
            <p className="text-xs mb-2">
              {techData.integrationDataStrategy.description}
            </p>
            <ul className="list-disc list-outside pl-4 text-xs space-y-1">
              {techData.integrationDataStrategy.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </PillarCard>

          {/* Tech Metrics - Replicating Screenshot Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-3 border border-gray-200 mt-auto"
          >
            <h4 className="text-md font-semibold mb-2 text-gray-700 flex items-center">
              <GetIcon
                name={techData.techMetrics.icon}
                size={16}
                className="mr-1.5"
              />
              {techData.techMetrics.title}
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {techData.techMetrics.metrics.slice(0, 3).map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-2 bg-gray-50 rounded border border-gray-100 h-full flex flex-col justify-center"
                >
                  <GetIcon
                    name={metric.icon}
                    size={18}
                    className="mx-auto mb-1 text-gray-500"
                  />
                  <p className="text-[9px] font-semibold text-gray-700 leading-tight">
                    {metric.label}
                  </p>
                  <p className="text-[8px] text-gray-500 leading-tight">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {techData.techMetrics.metrics.slice(3, 5).map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-2 bg-gray-50 rounded border border-gray-100 h-full flex flex-col justify-center"
                >
                  <GetIcon
                    name={metric.icon}
                    size={18}
                    className="mx-auto mb-1 text-gray-500"
                  />
                  <p className="text-[9px] font-semibold text-gray-700 leading-tight">
                    {metric.label}
                  </p>
                  <p className="text-[8px] text-gray-500 leading-tight">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologySlide;
