"use client";

import React from "react";
import { Users, DollarSign, MessageSquareWarning, History } from "lucide-react";

// Mock data for demonstration
const mockData = {
  accountBalance: "$12,345.67",
  lastPayment: "$1,500.00 on Mar 10, 2025",
  openInvoices: 3,
  disputedItems: 1,
};

// Simplified Dashboard View for "Your" perspective
const YourDashboardView = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-1">
    <h4 className="text-lg font-semibold mb-4 flex items-center">
      <Users size={20} className="mr-2 text-blue-600" /> Your View
    </h4>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Account Balance:</span>
        <span className="font-medium">{mockData.accountBalance}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Open Invoices:</span>
        <span className="font-medium">{mockData.openInvoices}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Disputed Items:</span>
        <span className="font-medium text-orange-600">
          {mockData.disputedItems}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Last Payment Received:</span>
        <span className="font-medium text-green-600">
          {mockData.lastPayment}
        </span>
      </div>
      <div className="pt-4 space-y-2">
        <button className="w-full text-sm bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Send Payment Reminder
        </button>
        <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors">
          View Transaction History
        </button>
      </div>
    </div>
  </div>
);

// Simplified Dashboard View for "Your Customer's" perspective
const CustomerDashboardView = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-1">
    <h4 className="text-lg font-semibold mb-4 flex items-center">
      <Users size={20} className="mr-2 text-teal-600" /> Your Customer&apos;s
      View
    </h4>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Account Balance:</span>
        <span className="font-medium">{mockData.accountBalance}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Open Invoices:</span>
        <span className="font-medium">{mockData.openInvoices}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Disputed Items:</span>
        <span className="font-medium text-orange-600 flex items-center">
          {mockData.disputedItems}{" "}
          <MessageSquareWarning size={16} className="ml-1.5 text-orange-500" />
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Last Payment Made:</span>
        <span className="font-medium text-green-600">
          {mockData.lastPayment}
        </span>
      </div>
      <div className="pt-4 space-y-2">
        <button className="w-full text-sm bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors flex items-center justify-center">
          <DollarSign size={16} className="mr-1.5" /> Make Payment
        </button>
        <button className="w-full text-sm bg-orange-100 text-orange-700 py-2 px-4 rounded hover:bg-orange-200 transition-colors flex items-center justify-center">
          <MessageSquareWarning size={16} className="mr-1.5" /> Dispute an Item
        </button>
        <button className="w-full text-sm bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 transition-colors flex items-center justify-center">
          <History size={16} className="mr-1.5" /> View History
        </button>
      </div>
    </div>
  </div>
);

const TwoWayDashboardSection: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "var(--heading-color)" }}
        >
          Shared Visibility, Seamless Collaboration
        </h2>
        <p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: "var(--text-color)", opacity: 0.9 }}
        >
          Give your customers a dedicated portal to view their account status,
          make payments, raise disputes, and access history – all synced with
          your view in real-time.
        </p>
      </div>

      {/* Dashboard Mockups */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        <YourDashboardView />
        <CustomerDashboardView />
      </div>
    </div>
  );
};

export default TwoWayDashboardSection;
