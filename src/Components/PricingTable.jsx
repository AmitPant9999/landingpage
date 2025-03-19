import React from "react";

const PricingTable = () => {
  return (
    <div className="md:p-24 px-4">
      <section className="pricing max-w-7xl w-full mx-auto bg-white p-10 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Pricing
        </h2>

        <div className="pricing-table grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="pricing-card bg-gray-100 border border-gray-300 rounded-lg p-6 text-center transition-transform transform hover:translate-y-2 hover:shadow-2xl hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
            <p className="text-xl text-gray-600 mb-6">$10/month</p>
            <p className="text-gray-500 mb-6">
              Ideal for individuals or small teams.
            </p>
            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Choose Plan
            </button>
          </div>

          <div className="pricing-card bg-gray-100 border border-gray-300 rounded-lg p-6 text-center transition-transform transform hover:translate-y-2 hover:shadow-2xl hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Premium
            </h3>
            <p className="text-xl text-gray-600 mb-6">$20/month</p>
            <p className="text-gray-500 mb-6">
              Best for growing businesses or teams.
            </p>
            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Choose Plan
            </button>
          </div>

          <div className="pricing-card bg-gray-100 border border-gray-300 rounded-lg p-6 text-center transition-transform transform hover:translate-y-2 hover:shadow-2xl hover:bg-blue-50">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Enterprise
            </h3>
            <p className="text-xl text-gray-600 mb-6">$50/month</p>
            <p className="text-gray-500 mb-6">
              For large teams and enterprises.
            </p>
            <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTable;
