import React from "react";
import NavBar from "./nav_bar/nav_bar";
import HeroBackground from "./hero_section/hero_background";
import EnterpriseHeader from "@/components/infosection/enterpriseHeader";
import OrderToCashFlow from "@/components/infosection/orderToCashFlow";
import HowItWorks from "@/components/infosection/howItWorks";
import BusinessImpact from "@/components/infosection/businessImpact";
import FutureVision from "@/components/infosection/futureVision";
import OperationalSoftwareModules from "@/components/infosection/operationalSotwareModules";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroBackground />
      <EnterpriseHeader />
      <OrderToCashFlow />
      <HowItWorks />
      <BusinessImpact />
      <FutureVision />
      <OperationalSoftwareModules />
    </div>
  );
}
