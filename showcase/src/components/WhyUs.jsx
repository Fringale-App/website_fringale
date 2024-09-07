import React from 'react'
import bike from '../../Images/bike.png'
import hat from '../../Images/hat.png'
import drinks from '../../Images/drinks.png'

function WhyUs() {
    return (
        <div className='sm:px-20 px-6 flex flex-col sm:gap-0 gap-4 w-full overflow-hidden'>
            <div className='sm:text-4xl text-3xl font-medium'><p>Why choose us over <br /><span className='text-[#C11F27]'>Tomato</span> or <span className='text-[#F98C08]'>Chwiggy</span>?</p></div>
            <div className='flex sm:flex-row gap-4 sm:gap-0 flex-col items-center sm:items-start justify-around'>
                <div className='pt-16 relative sm:mt-28'>
                    <div className='flex flex-col justify-center items-center gap-8 min-w-64 max-w-80 p-6 border-2 rounded-3xl border-black h-[360px]'>
                        <p className='font-semibold text-center text-2xl'>Quick Delivery</p>
                        <p className='font-medium text-center text-base'> Hunger doesn't wait, and neither do we. Fringale is committed to delivering your food as quickly as possible. 
                            Our efficient delivery system ensures that your fries arrives hot and
                             crispy, right when you need it.</p>
                        <div className="absolute top-1 left-20 sm:left-24 border-4 border-white bg-white">
                            <img src={bike} alt="" />
                        </div>
                    </div>

                </div>
                <div className='pt-16 relative sm:mt-12'>
                    <div className='flex flex-col justify-center items-center gap-8 min-w-64 max-w-80 p-6 border-2 rounded-3xl border-black h-[360px]'>
                        <p className='font-semibold text-center text-2xl'>Student Friendly</p>
                        <p className='font-medium text-center text-base'>We know that students have limited budgets, but that shouldn't mean sacrificing taste. 
                            Fringale offers a wide range of affordable options without
                             compromising on quality. Enjoy delicious meals without worrying
                              about breaking the bank.</p>
                        <div className="absolute top-1 left-20 sm:left-24 border-4 border-white bg-white">
                            <img src={hat} alt="" />
                        </div>
                    </div>

                </div>
                <div className='pt-16 relative'>
                    <div className='flex min-w-64 max-w-80 flex-col justify-center items-center gap-8 p-6 border-2 rounded-3xl border-black h-[360px]'>
                        <p className='font-semibold text-center text-2xl'>Variety</p>
                        <p className='font-medium text-center text-base'>From spicy biryanis to comforting plates of pasta, we've got you covered. Fringale offers a diverse range of cuisines to satisfy every craving. Explore new flavors or stick to your favorites – the choice is yours.</p>
                        <div className="absolute top-1 left-20 sm:left-24 border-4 border-white bg-white">
                            <img src={drinks} alt="" />
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default WhyUs