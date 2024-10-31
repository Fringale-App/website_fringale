import React from "react";
import visionImage from "../../Images/Vision.png"; // Replace with the correct path to your image

const VisionMission = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Image Section */}
        <div className="w-full relative h-auto">
          <img
            src={visionImage}
            alt="Vision and Mission"
            className="max-w-full h-auto rounded-xl object-cover"
          />
          <div className='absolute block sm:hidden -bottom-2 left-16 z-10 bg-white px-5 py-3 rounded-lg shadow-lg'>
            <p className="text-sm font-semibold">Vision and Mission</p>
          </div>

        </div>

        {/* Text Section Inside a Box */}
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Left Side: Heading */}
            <div className="sm:flex flex-col hidden sm:w-1/3 justify-center items-center">
              <h2 className="text-3xl text-center font-semibold text-black">
                Vision and Mission
              </h2>
            </div>


            {/* Divider: Vertical Line */}
            <div className="hidden sm:block w-px bg-black"></div>

            {/* Right Side: Text Content */}
            <div className="sm:w-2/3">
              <p className="text-gray-600 leading-relaxed mb-4">
                Fringale envisions a world where every student has convenient access to
                a diverse range of delicious, affordable, and authentic local cuisine,
                while empowering small businesses and fostering a thriving campus
                community.
              </p>

              {/* Decorative Line (Horizontal) */}
              <div className="flex items-center mt-4">
                <div className="h-1 w-full bg-black"></div>
                <div className="ml-2 h-4 w-4 bg-black rounded-full"></div>
              </div>

              <p className="text-gray-600 leading-relaxed mt-4">
                Fringale is committed to revolutionizing the campus food experience by
                connecting students with local businesses, providing lightning-fast
                delivery, and offering exceptional value. We strive to create a
                sustainable ecosystem that benefits both students and local eateries
                while promoting cultural diversity and community engagement.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
