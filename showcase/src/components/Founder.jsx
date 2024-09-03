import React from 'react'
import akshay from '../../Images/akshay.png'
import devansh from '../../Images/devansh.png'

function Founder() {
    return (
        <div className='flex items-center justify-start mt-14'>
            <div className='w-full h-[66.67vh] sm:flex sm:justify-start sm:pl-36 sm:gap-10'>
                <div className='sm:w-1/4 w-full relative'>
                    <div className='flex sm:flex-col sm:justify-start justify-center'>
                        <p className='text-[#FA9269] sm:text-5xl text-4xl font-semibold'>WHO</p>
                        <p className='text-black sm:text-5xl text-4xl font-semibold ml-7 mt-1'>WE ARE</p>
                    </div>
                    <div className='flex p-2 sm:p-0 absolute sm:justify-start justify-center sm: gap-5 mt-4'>
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
                    <div className='flex w-full sm:justify-start justify-center sm: gap-5 mt-4'></div>

                </div>
                <div className='sm:w-1/3 w-full sm:flex sm:justify-start sm:items-center mt-80 sm:mt-12'>
                    <div className='flex flex-col gap-3 sm:gap-5'>
                        <div>
                            <p className='font-semibold text-center sm:text-start text-4xl'>Co-Founders</p>
                        </div>
                        <div className='p-5 sm:p-0'>
                            <p>Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus facilisis </p>
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

export default Founder