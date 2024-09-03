import React from 'react'
import mrburger from '../../Images/mrburger.png'
import upes from '../../Images/upes.jpg'
import runaway from '../../Images/runaway.png'

function Amazing() {
  return (
    <div className='flex flex-col gap-6 p-3 mt-4'>
        <div>
            <p className='text-5xl text-center font-semibold'>Amazing Partners</p>
        </div>
        <div>
            <p className='font-normal text-center text-[#000000]'>Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit  neque amet non. </p>
        </div>
        <div className='flex justify-around pr-2 sm:p-3'>
            <div className='sm:mt-9 mt-3'><img src={upes} alt="" /></div>
            <div className='sm:mt-4'><img src={runaway} alt="" /></div>
            <div className='h-16 w-32 sm:mt-10'><img className='object-cover w-full h-full' src={mrburger} alt="" /></div>
        </div>
    </div>
  )
}

export default Amazing