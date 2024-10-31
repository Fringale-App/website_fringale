import React from 'react'
import bike from '../../Images/bike.png'
import hat from '../../Images/hat.png'
import drinks from '../../Images/drinks.png'

function WhyUs() {
    return (
        <div className='sm:px-20 px-6 flex flex-col sm:gap-0 gap-4 w-full overflow-hidden'>
            <div className='sm:text-4xl text-base font-medium'><p>Why choose us over <br /><span className='text-[#C11F27] font-semibold'>Tomato</span> or <span className='text-[#F98C08] font-semibold'>Chwiggy</span>?</p></div>
            <div className='flex sm:flex-row gap-1 sm:gap-0 items-center sm:items-start justify-center sm:ml-0 ml-1 sm:justify-around'>
                <div className='sm:pt-16 relative sm:mt-28'>
                    <div className='flex flex-col justify-center items-center gap-8 w-[102px] sm:min-w-64 sm:max-w-80 p-6 sm:border-2 border rounded-3xl border-black h-[67px] sm:h-[360px]'>
                        <p className='font-semibold text-xs text-center sm:text-2xl'>Quick Delivery</p>
                        <p className='font-medium text-center hidden sm:block text-base'> Hunger doesn't wait, and neither do we. Fringale is committed to delivering your food as quickly as possible. 
                            Our efficient delivery system ensures that your fries arrives hot and
                             crispy, right when you need it.</p>
                        <div className="absolute -top-4 sm:top-1 sm:w-[100px] sm:h-[100px] w-[30px] h-[30px] left-10 sm:left-24 border-4 border-white bg-white">
                            <img className='w-full h-full' src={bike} alt="" />
                        </div>
                    </div>

                </div>
                <div className='sm:pt-16 relative sm:mt-12'>
                    <div className='flex flex-col justify-center items-center gap-8 w-[102px] sm:min-w-64 sm:max-w-80 p-6 border sm:border-2 rounded-3xl border-black h-[67px] sm:h-[360px]'>
                        <p className='font-semibold text-xs text-center sm:text-2xl'>Student Friendly</p>
                        <p className='font-medium text-center hidden sm:block text-base'>We know that students have limited budgets, but that shouldn't mean sacrificing taste. 
                            Fringale offers a wide range of affordable options without
                             compromising on quality. Enjoy delicious meals without worrying
                              about breaking the bank.</p>
                        <div className="absolute sm:w-[100px] sm:h-[100px] -top-4 sm:top-0 w-[30px] h-[30px] left-10 sm:left-24 border-4 border-white bg-white">
                            <img className='w-full h-full' src={hat} alt="" />
                        </div>
                    </div>

                </div>
                <div className='sm:pt-16 relative'>
                    <div className='flex flex-col justify-center items-center gap-8 w-[102px] sm:min-w-64 sm:max-w-80 p-6 border sm:border-2 rounded-3xl border-black h-[67px] sm:h-[360px]'>
                        <p className='font-semibold text-xs text-center sm:text-2xl'>Variety</p>
                        <p className='font-medium hidden sm:block text-center text-base'>From spicy biryanis to comforting plates of pasta, we've got you covered. Fringale offers a diverse range of cuisines to satisfy every craving. Explore new flavors or stick to your favorites – the choice is yours.</p>
                        <div className="absolute sm:w-[100px] sm:h-[100px] w-[30px] h-[30px] -top-4 sm:top-1 left-10 sm:left-24 border-4 border-white bg-white">
                            <img className='w-full h-full' src={drinks} alt="" />
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default WhyUs