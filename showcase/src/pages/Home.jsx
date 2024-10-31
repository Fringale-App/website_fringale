import React from "react";
import Header from "../components/Header";
import bgimg from "../../Images/bgimg.png";
import { NavLink } from "react-router-dom";
import res1 from "../../Images/res1.png";
import res2 from "../../Images/res2.png";
import res3 from "../../Images/res3.png";
import res4 from "../../Images/res4.png";
import { FaMobileAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import "../index.css";
import AppDownloadSection from "../components/AppDownloadSection";
import RestaurantPartner from "../components/RestaurantOnboard";
import Founder from "../components/Founder";
import Testimonials from "../components/Testimonials";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col gap-6 overflow-x-hidden">
      <Header />

      {/* Background Image Section */}
      <div className="h-[300px] sm:h-[485px] w-full relative flex flex-col items-center justify-center">
        <div className="h-[170px] bg-slate-800 sm:h-[485px] w-full"><img className="w-full h-full object-bottom sm:object-cover" src={bgimg} alt="" /> </div>

        <div className="absolute flex flex-col items-center justify-center gap-2 px-4 sm:px-0 text-center">
          <p className="sm:text-[40px] text-lg sm:text-2xl font-semibold">
            Where affordability meets Variety
          </p>
          <p className="sm:text-[20px] text-base font-normal hidden sm:block mt-2">
            Fringale connects college students to local hidden gems, offering
            diverse,
          </p>
          <p className="sm:text-[20px] text-sm hidden sm:block font-normal">
            affordable food options with faster delivery.
          </p>
          <NavLink>
            <button className="border-2 border-black text-[16px] sm:text-[20px] font-medium text-black py-2 sm:py-3 px-4 rounded-full">
              Get the app
            </button>
          </NavLink>
        </div>
      </div>

      {/* Discover Flavors Section */}
      <div className="mt-5 px-4  sm:px-0">
        <p className="text-center sm:font-semibold sm:text-[36px] font-bold text-base">
          Discover Flavors from{" "}
          <span className="text-[#00643c] italic">Hidden Corners</span>
        </p>
        <div className="p-1 mt-2 flex flex-col sm:px-36 gap-2 w-full sm:hidden sm:w-1/2">
          <div className="flex gap-2">
            <div className="w-[149px] h-[76px]">
              <img className="w-full h-full" src={res1} alt="" />
            </div>
            <div className="w-[149px] h-[76px]">
                <img className="w-full h-full" src={res4} alt="" />
            </div>
          </div>
        </div>

        {/* Flex Layout Adjusted */}
        <div className="sm:flex-row flex flex-col-reverse sm:flex-1 w-full mt-5">
          {/* Image Grid */}
          <div className="p-3 sm:flex hidden sm:flex-col sm:px-36 gap-2 w-full sm:w-1/2">
            <div className="flex gap-2">
              <div>
                <img src={res1} alt="" />
              </div>
              <div className="mt-5">
                <img src={res2} alt="" />
              </div>
            </div>
            <div className="flex gap-2 ml-0 sm:ml-10">
              <div>
                <img src={res3} alt="" />
              </div>
              <div>
                <img src={res4} alt="" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full sm:w-1/2 sm:pr-52 mt-10 sm:mt-20 px-4 sm:px-0">
            <p className="hidden sm:block">
              Tired of the same old pizza burger monotony? Fringale is your
              passport to a world of culinary adventures. We've scoured the
              city to find the most authentic and delicious local eateries
              that are often overlooked. From spicy street food to exotic
              cultural favorites, there's something to satisfy every
              craving or as we like to say Fringale. Let us guide you to
              discover the hidden gems that will enhance your taste buds.
            </p>
            <div className="flex -mt-20 sm:-mt-0 sm:flex-col gap-3">
              <div className="flex mt-4 items-center gap-2 sm:gap-4">
                <div className="p-2 rounded-full border-2 border-[#00643c]">
                  <FaMobileAlt className="text-[#00643c] size-5 sm:size-8" />
                </div>
                <div>
                  <p className="sm:font-semibold font-bold sm:text-[16px] sm:mt-0 mt-7 text-xs">
                    Online Food Ordering
                  </p>
                  <p className="font-normal sm:text-[15px] text-xs">
                    Easy food delivery from our app
                  </p>
                </div>
              </div>
              <div className="flex mt-4 items-center gap-2 sm:gap-4">
                <div className="p-2 rounded-full border-2 border-[#00643c]">
                  <FaMoneyCheckDollar className="text-[#00643c] size-5 sm:size-8" />
                </div>
                <div>
                  <p className="sm:font-semibold font-bold sm:text-[16px] sm:mt-0 mt-7 text-xs">
                    Affordable Prices
                  </p>
                  <p className="font-normal sm:text-[15px] text-xs">
                    Easy food delivery from our app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col sm:flex-row items-center justify-end mt-10">
          <div className="w-full sm:w-[903px] h-auto sm:h-[112px] p-1 sm:p-3 text-white sm:rounded-tl-3xl flex flex-row items-center gap-5 sm:rounded-bl-3xl bg-[#4BAE8F]">
            <div className="p-1 px-1 sm:px-8 border-r-2 sm:border-b-0 sm:border-r-2 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">30+</p>
              <p className="text-[16px] sm:text-[20px] font-light sm:font-medium">
                Restaurants
              </p>
            </div>
            <div className="p-1 px-0 pr-3 sm:pr-0 sm:px-8 border-r-2 sm:border-b-0 sm:border-r-2 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">24x7</p>
              <p className="text-[16px] sm:text-[20px] font-light sm:font-medium">Delivery</p>
            </div>
            <div className="p-1 px-0 pr-3 sm:px-8 sm:border-b-0 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">4.5</p>
              <p className="text-[16px] sm:text-[20px] font-light sm:font-medium">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-12 relative">
        {/* Left Image Section */}
        <div className=" hidden sm:flex sm:w-1/2  justify-center sm:justify-start mb-6 sm:mb-0">
          <div className="relative w-[300px] sm:w-[474px] h-[250px] sm:h-[400px] rounded-tr-3xl rounded-bl-3xl bg-[#FBE5A2]">
          </div>
        </div>

        {/* Right Quote Section */}
        <div className="w-full sm:w-1/2 flex justify-center items-center text-center sm:text-left">
          <p className="text-[24px] sm:text-[40px] font-medium">
            In English we say "I love <br className="hidden sm:block" /> you",
            in Hindi we say <br className="hidden sm:block" />
            <span className="font-bold italic">
              "Tera bhi <br className="hidden sm:block" /> order kar Diya hai"
            </span>
          </p>
        </div>
      </div>

      {/* Components */}
      <RestaurantPartner />
      <AppDownloadSection />
      <Founder />
      <Testimonials />
      <Amazing />
      <Footer />
    </div>
  );
}

export default Home;

