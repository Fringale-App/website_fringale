import React from 'react'
import { useState } from 'react';
import akshay from '../../Images/akshay.png'
import devansh from '../../Images/devansh.png'

function Founder({ bg }) {
  const [showFullText, setShowFullText] = useState(false);

  // Original paragraph text
  const text = "We're a group of passionate food lovers and tech enthusiasts who understand the challenges of student life. We believe that everyone deserves to enjoy great food without breaking the bank. That's why we created Fringale – to bring the best of every city's culinary scene right to your doorstep. With a shared love for food and a commitment to exceptional service, we're dedicated to making your food experience unforgettable.";

  // Function to toggle text display
  const toggleText = () => setShowFullText(!showFullText);
  return (
    <div className='flex items-center justify-start mt-14 relative z-10'>
      <div className='w-full min-h-[70vh] flex sm:justify-start sm:pl-36 sm:gap-10'>
        <div className='sm:w-1/4 w-full flex sm:flex-row relative'>
          <div className='flex ml-2 sm:flex-col sm:justify-start justify-center'>
            <p className='text-[#FA9269] sm:text-5xl text-xl font-semibold'>WHO</p>
            <p className='text-black sm:text-5xl sm:w-60 text-xl font-semibold ml-7 sm:mt-4 mt-1'>WE ARE</p>
          </div>

          {/* Image Section */}
          <div className='flex p-2 sm:p-0 absolute sm:justify-start justify-center gap-0 sm:gap-5 sm:mt-36 mt-9'>
            <div>
              <div className='mt-14 sm:w-[186px] sm:h-[251px] w-[74px] h-[100px]'>
                <img className='w-full h-full' src={akshay} alt="" />
              </div>
              <p className='font-semibold text-xs text-center mt-2'>Akshay Mohpal</p>
            </div>
            <div>
              <div className='sm:w-[186px] sm:h-[251px] w-[74px] h-[100px]'>
                <img className='w-full h-full' src={devansh} alt="" />
              </div>
              <p className='font-semibold text-xs text-center mt-2'>Devansh Rao</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div
          className='w-full sm:pr-96 sm:flex sm:justify-start sm:items-start mt-4 sm:ml-72 sm:mt-5'
          style={bg ? { backgroundImage: `url(${bg})` } : {}}
        >
          <div className='flex flex-col gap-3 w-full sm:gap-5'>
            <p className='font-semibold ml-5 sm:ml-0 w-full sm:w-60 text-start mt-6 text-base sm:text-4xl'>Co-Founders</p>
            <div className='p-5 sm:p-0'>
              <p className='text-xs sm:text-sm font-medium'>
                {showFullText ? text : `${text.substring(0, 90)}...`}
              </p>
              <div className='sm:mt-14 flex sm:items-start sm:justify-start items-center justify-center'>
                <button
                  className='bg-[#00643C] text-white rounded-full py-2 px-7 mt-2'
                  onClick={toggleText}
                >
                  {showFullText ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder;
