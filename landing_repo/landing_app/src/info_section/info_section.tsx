import React from "react";
import EnterpriseHeader from "@/components/infosection/enterpriseHeader";
import OrderToCashFlow from "@/components/infosection/orderToCashFlow";
import HowItWorks from "@/components/infosection/howItWorks";
import BusinessImpact from "@/components/infosection/businessImpact";
import FutureVision from "@/components/infosection/futureVision";
import OperationalSoftwareModules from "@/components/infosection/operationalSotwareModules";

export default function infoSection() {
  return (
    <div>
      <EnterpriseHeader />
      <OrderToCashFlow />
      <HowItWorks />
      <BusinessImpact />
      <FutureVision />
      <OperationalSoftwareModules />
    </div>
  );
}
