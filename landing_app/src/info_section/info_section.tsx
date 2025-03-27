import React from "react";
import EnterpriseHeader from "@/app/components/infosection/enterpriseHeader";
import OrderToCashFlow from "@/app/components/infosection/orderToCashFlow";
import HowItWorks from "@/app/components/infosection/howItWorks";
import BusinessImpact from "@/app/components/infosection/businessImpact";
import FutureVision from "@/app/components/infosection/futureVision";
import OperationalSoftwareModules from "@/app/components/infosection/operationalSotwareModules";

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
