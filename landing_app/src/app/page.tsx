import React from "react";
import HeroBackground from "./components/hero_section/hero_background";
import EnterpriseHeader from "@/app/components/infosection/enterpriseHeader";
import Footer from "@/app/components/footer/footerSection";
import NavBar from "./components/nav_bar/nav_bar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroBackground />
      <EnterpriseHeader />
      <Footer />
    </div>
  );
}
