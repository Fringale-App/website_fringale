import React from 'react'
import akshay from '../../Images/akshay.png'
import devansh from '../../Images/devansh.png'

function Founder({bg}) {
  return (
    <div className='flex items-center justify-start mt-14 relative z-10'>
      <div className='w-full min-h-[70vh] sm:flex sm:justify-start sm:pl-36 sm:gap-10'>
        <div className='sm:w-1/4 w-full relative'>
          <div className='flex sm:flex-col sm:justify-start justify-center'>
            <p className='text-[#FA9269] sm:text-5xl text-4xl font-semibold'>WHO</p>
            <p className='text-black sm:text-5xl text-4xl font-semibold ml-7 mt-1'>WE ARE</p>
          </div>

          {/* Image Section */}
          <div className='flex p-2 sm:p-0 absolute sm:justify-start justify-center sm:gap-5 mt-4'>
            <div>
              <div className='mt-14'>
                <img src={akshay} alt="" />
              </div>
              <p className='font-semibold text-center mt-2'>Akshay Mohpal</p>
            </div>
            <div>
              <div>
                <img src={devansh} alt="" />
              </div>
              <p className='font-semibold text-center mt-2'>Devansh Rao</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div
          className='w-full sm:pr-96 sm:flex sm:justify-start sm:items-start mt-80 sm:mt-12'
          style={bg ? { backgroundImage: `url(${bg})` } : {}}
        >
          <div className='flex flex-col gap-3 sm:gap-5'>
            <p className='font-semibold text-center sm:text-start mt-6 text-4xl'>Co-Founders</p>
            <div className='p-5 sm:p-0'>
              <p>
                We're a group of passionate food lovers and tech enthusiasts who understand the challenges of student life. We believe that everyone deserves to enjoy great food without breaking the bank. That's why we created Fringale – to bring the best of every city's culinary scene right to your doorstep. With a shared love for food and a commitment to exceptional service, we're dedicated to making your food experience unforgettable.
              </p>
            </div>
            <div className='sm:mt-14 flex sm:items-start sm:justify-start items-center justify-center'>
              <button className='bg-[#00643C] text-white rounded-full py-2 px-7'>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder;
