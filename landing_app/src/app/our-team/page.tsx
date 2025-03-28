"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/nav_bar/nav_bar";

// Team member data
const teamData = [
  {
    name: "Matthew Dumas",
    role: "Co-Founder & CEO",
    bio: "MBA graduate with extensive experience in financial strategy and operations. Currently serving as Director of Finance at a VC-backed CPG startup, bringing a wealth of knowledge in operations software, capital raising, and strategic growth initiatives.",
    experience: [
      "Director of Finance at VC-backed CPG startup",
      "Expertise in financial modeling and capital allocation",
      "Background in venture finance and fundraising strategy",
    ],
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "Christopher Dumas",
    role: "Co-Founder & CTO",
    bio: "Senior Engineer at Amazon with over 12 years of development experience. Expertise in building scalable systems, cloud architecture, and enterprise software solutions that serve millions of users.",
    experience: [
      "Senior Engineer at Amazon",
      "15+ years of software development experience",
      "Expert in cloud infrastructure and distributed systems",
      "Track record of building high-performance teams and products",
    ],
    linkedin: "https://linkedin.com/in/cofounderprofile",
  },
];

const OurTeamPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <div
          className="bg-black text-white py-20"
          style={{
            background: "linear-gradient(to right, #000000, #1a1a1a)",
          }}
        >
          <div className="container mx-auto px-6">
            <h1
              className="text-5xl font-bold mb-4"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              Our Team
            </h1>
          </div>
        </div>

        {/* Team Members */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Headshot placeholder */}
                  <div className="md:w-2/5 bg-gray-200 h-80 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-24 h-24 text-gray-400"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <p className="absolute text-gray-500 mt-32">
                      Headshot Placeholder
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="md:w-3/5 p-6">
                    <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                    <p className="text-lg mb-4" style={{ color: "#118ab2" }}>
                      {member.role}
                    </p>
                    <p className="text-gray-700 mb-6">{member.bio}</p>

                    <h3 className="font-semibold mb-2 text-gray-900">
                      Experience
                    </h3>
                    <ul className="space-y-1">
                      {member.experience.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span
                            className="text-sm mr-2 mt-1"
                            style={{ color: "#06d6a0" }}
                          >
                            ●
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-6 px-4 py-2 rounded transition-colors"
                      style={{
                        color: "#118ab2",
                        border: "1px solid #118ab2",
                      }}
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We&apos;re looking for passionate individuals who want to reshape
              the future of enterprise software and financial operations.
            </p>
            <div
              className="inline-block px-6 py-3 rounded-lg text-white text-lg font-medium cursor-pointer"
              style={{
                backgroundColor: "#118ab2",
                boxShadow: "0 4px 6px rgba(17, 138, 178, 0.25)",
              }}
            >
              View Open Positions
            </div>
          </div>
        </div>

        {/* Advisors Section - Placeholder for future expansion */}
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Advisors</h2>
          <div className="text-center text-gray-500 py-16 border-2 border-dashed border-gray-200 rounded-xl">
            <p className="text-xl">Advisor profiles coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamPage;
