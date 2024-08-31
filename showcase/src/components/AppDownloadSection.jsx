import React, { useState } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import PhoneMockup from '../../Images/Phoneimg.png'; // Use the correct path for the phone mockup image

const AppDownloadSection = () => {
  const [contactMethod, setContactMethod] = useState('email');

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f3f7f4] p-8 rounded-lg gap-6">
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Get the Fringale App</h2>
        <p className="mb-6 text-lg text-gray-600">We will send you a link, open it on your phone to download the app</p>
        
        {/* Contact Method Selection */}
        <div className="flex items-center mb-4 gap-4">
          <div 
            className={`flex items-center gap-2 cursor-pointer ${contactMethod === 'email' ? 'text-[#00643c]' : 'text-gray-600'}`}
            onClick={() => setContactMethod('email')}
          >
            <input type="radio" checked={contactMethod === 'email'} readOnly />
            <label>Email</label>
          </div>
          <div 
            className={`flex items-center gap-2 cursor-pointer ${contactMethod === 'phone' ? 'text-[#00643c]' : 'text-gray-600'}`}
            onClick={() => setContactMethod('phone')}
          >
            <input type="radio" checked={contactMethod === 'phone'} readOnly />
            <label>Phone</label>
          </div>
        </div>

        {/* Input and Share Button */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder={contactMethod === 'email' ? 'Email' : 'Phone'}
            className="w-full lg:w-[250px] p-3 border rounded-lg focus:outline-none focus:border-[#00643c]"
          />
          <button className="bg-[#00643c] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium text-sm lg:text-base">Share App Link</button>
        </div>

        {/* App Store Links */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a href="https://play.google.com" className="flex items-center bg-black text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm lg:text-base">
            <FaGooglePlay className="mr-2" />
            <span>Get it on Google Play</span>
          </a>
          <a href="https://www.apple.com/app-store/" className="flex items-center bg-black text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm lg:text-base">
            <FaApple className="mr-2" />
            <span>Download on the App Store</span>
          </a>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
        <img src={PhoneMockup} alt="App Preview" className="max-w-xs lg:max-w-md" />
      </div>
    </div>
  );
};

export default AppDownloadSection;
