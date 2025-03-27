import React from "react";

const EnterpriseHeader = () => {
  return (
    <section className="py-16 w-full overflow-hidden">
      {/* Header with mission statement */}
      <div className="text-center mb-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          Reimagining Enterprise Software <br />
          Through Intelligent Automation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are building a new system of enterprise software that automates all
          data flows, starting with the order-to-cash process. Our platform
          combines operations and business development capabilities with
          seamless accounting automation.
        </p>
      </div>

      {/* Order-to-Cash Process - Wide Screen Friendly */}
      <div className="mb-32 relative w-full max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h3 className="inline-block text-2xl font-bold mb-3 pb-2 border-b-2 border-black">
            Starting With Order-to-Cash
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our initial focus is revolutionizing the order-to-cash process - the
            lifeblood of business operations and a critical driver of company
            growth and cash flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHeader;
