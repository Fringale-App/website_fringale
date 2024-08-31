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

function Home() {
  return (
    <div className="w-full overflow-y-scroll no-scrollbar flex flex-col gap-3 overflow-x-hidden">
      <Header />

      {/* Background Image Section */}
      <div className="h-[300px] sm:h-[485px] w-full relative flex flex-col items-center justify-center">
        <img className="w-full h-full object-cover" src={bgimg} alt="" />
        <div className="absolute flex flex-col items-center justify-center gap-2 px-4 sm:px-0 text-center">
          {/* Font Sizes Adjusted */}
          <p className="sm:text-[40px] text-xl font-semibold">
            Where affordability meets Variety
          </p>
          <p className="sm:text-[20px] text-sm font-normal">
            Fringale connects college students to local hidden gems, offering
            diverse,
          </p>
          <p className="sm:text-[20px] text-sm font-normal">
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
      <div className="mt-5 px-4 sm:px-0">
        <p className="text-center font-semibold sm:text-[36px] text-2xl">
          Discover Flavors from{" "}
          <span className="text-[#00643c] italic">Hidden Corners</span>
        </p>

        {/* Flex Layout Adjusted */}
        <div className="sm:flex-row flex flex-col-reverse sm:flex-1 w-full mt-5">
          {/* Image Grid */}
          <div className="p-3 flex flex-col sm:px-36 gap-2 w-full sm:w-1/2">
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
            <p>
              Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras
              ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id.
              Lectus facilisis volutpat neque amet non.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex mt-4 items-center gap-4">
                <div className="p-2 rounded-full border-2 border-[#00643c]">
                  <FaMobileAlt className="text-[#00643c] size-8" />
                </div>
                <div>
                  <p className="font-semibold sm:text-[16px] text-sm">
                    Online Food Ordering
                  </p>
                  <p className="font-normal sm:text-[15px] text-xs">
                    Easy food delivery from our app
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full border-2 border-[#00643c]">
                  <FaMoneyCheckDollar className="text-[#00643c] size-8" />
                </div>
                <div>
                  <p className="font-semibold sm:text-[16px] text-sm">
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
          <div className="w-full sm:w-[903px] h-auto sm:h-[112px] p-3 text-white rounded-tl-3xl flex flex-col sm:flex-row items-center gap-5 rounded-bl-3xl bg-[#4BAE8F]">
            <div className="p-1 px-8 border-b-2 sm:border-b-0 sm:border-r-2 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">30+</p>
              <p className="text-[16px] sm:text-[20px] font-medium">
                Restaurants
              </p>
            </div>
            <div className="p-1 px-8 border-b-2 sm:border-b-0 sm:border-r-2 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">24x7</p>
              <p className="text-[16px] sm:text-[20px] font-medium">Delivery</p>
            </div>
            <div className="p-1 px-8 flex-grow text-center sm:text-left">
              <p className="text-[24px] sm:text-[36px] font-semibold">4.5</p>
              <p className="text-[16px] sm:text-[20px] font-medium">Rating</p>
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
    </div>
  );
}

export default Home;
