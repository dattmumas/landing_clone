import NavBar from "../../components/nav_bar/nav_bar";
import LiveDataPointsComponent from "./components/liveDataPoints";
import TwoWayDashboardSection from "./components/TwoWayDashboardSection";
import AccountingAutomationSection from "./components/AccountingAutomationSection";

export default function OurProducts() {
  return (
    <div>
      <NavBar />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto space-y-16 md:space-y-24">
        <div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: "var(--card-foreground)" }}
          >
            Order to Cash Automation
          </h1>
          <p
            className="text-lg text-center mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--card-foreground)" }}
          >
            Streamline your entire order-to-cash process with intelligent
            automation, connecting every step from order creation to payment
            reconciliation.
          </p>
          <LiveDataPointsComponent />
        </div>

        <TwoWayDashboardSection />

        <AccountingAutomationSection />
      </div>
    </div>
  );
}
