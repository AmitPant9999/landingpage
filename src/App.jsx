import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection = lazy(() => import("./Components/HeroSection.jsx"));
const Services = lazy(() => import("./Components/Services.jsx"));
const PricingTable = lazy(() => import("./Components/PricingTable.jsx"));
const ContactForm = lazy(() => import("./Components/ContactForm.jsx"));
const UserList = lazy(() => import("./Components/Users.jsx"));

function App() {
  return (
    <div className="text-black">
      {/* Suspense wrapper to handle loading state */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="spinner"></div> {/* Your loading spinner */}
          </div>
        }
      >
        <HeroSection />
        <UserList />
        <Services />
        <PricingTable />
        <ContactForm />
      </Suspense>
    </div>
  );
}

export default App;