import React from 'react';
import logo from '../../Images/logo.png'; // Ensure to use the correct path to your image

const Introduction = () => {
  return (
    <div className="p-8 md:p-12 lg:p-16 xl:p-24 max-w-screen-xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="text-green-600">Introduction</span> to Fringale
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Logo Section */}
        <div className="md:w-1/3 sm:mr-7 flex justify-center md:h-full">
          <div className="bg-green-50 mb-4 sm:p-20 p-6 rounded-lg flex justify-center items-center md:h-full">
            <img src={logo} alt="Fringale Logo" className="h-auto max-h-full" />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 md:pl-8 flex flex-col justify-center h-full">
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Fringale is revolutionizing food delivery on college campuses, especially those beyond the city center. We understand the struggle of limited options and long wait times. That's why our mobile app connects students with nearby hidden gems, offering a wider variety of delicious food at affordable prices.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            Our innovative scan-to-order feature eliminates the need for menus - simply scan, tap, and enjoy! We also partner with local vendors on flexible terms, ensuring everyone wins. Join Fringale and experience food delivery, reimagined for students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
