import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./backimg.webp"
      ></img>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-white opacity-60"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-extrabold text-blue-500 mb-4">
          Welcome to Our Landing Page
        </h1>
        <p className="text-2xl font-bold text-blue-500">
          Discover our amazing services!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
