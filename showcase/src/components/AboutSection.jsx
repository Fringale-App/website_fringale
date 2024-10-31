import React from "react";
import aboutImage from "../../Images/AboutImg.png"; // Replace with your actual image path

const AboutSection = () => {
  return (
    <div
      className="relative w-full h-[109px] sm:h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Centered text */}
      <h2 className="relative text-white text-base sm:text-4xl font-semibold z-10">
        About us
      </h2>
    </div>
  );
};

export default AboutSection;
