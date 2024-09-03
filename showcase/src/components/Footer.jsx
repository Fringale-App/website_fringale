import React from 'react';
import logo from '../../Images/logo.png';
import google from '../../Images/google-play.png';
import appstore from '../../Images/app-store.png';
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-2 items-center">
          <img src={logo} alt="Fringale Logo" className="h-10 mb-4"/>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">COMPANY</h3>
          <ul>
            <li className="mb-2"><a href="/about">About</a></li>
            <li className="mb-2"><a href="#">Mission & Vision</a></li>
            <li className="mb-2"><a href="#">Blog</a></li>
            <li className="mb-2"><a href="#">Testimonials</a></li>
            <li className="mb-2"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">INFORMATION</h3>
          <ul>
            <li className="mb-2"><a href="#">Help & Support</a></li>
            <li className="mb-2"><a href="#">Partners</a></li>
            <li className="mb-2"><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">SOCIAL MEDIA</h3>
          <ul>
            <li className="mb-2"><a href="#">Instagram</a></li>
            <li className="mb-2"><a href="#">LinkedIn</a></li>
            <li className="mb-2"><a href="#">Twitter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">DOWNLOAD APP</h3>
          <div className="flex flex-col">
            <a href="#" className="mb-2">
              <img src={google} alt="Google Play Store" className="h-10"/>
            </a>
            <a href="#">
              <img src={appstore} alt="Apple App Store" className="h-10"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
