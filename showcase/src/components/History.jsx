import React from 'react'
import gathering from '../../Images/gathering.png'
function History() {
  return (
    <div className='mt-10 relative w-full overflow-hidden'>
        <div className='flex sm:flex-row items-center sm:justify-center'>
            <div className='sm:w-2/3 w-2/3 p-4 pl-7 pt-8 sm:p-11 sm:px-20 sm:py-10 flex flex-col gap-4 sm:pr-80 bg-white sm:bg-[#fdf8f5] mt-9'>
                <p className='sm:text-4xl text-base font-semibold'>History and Background</p>
                <p className='sm:font-medium font-normal sm:text-xl text-lg'>Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus facilisis</p>
            </div>
            <div className='sm:w-[415px] w-[116px] sm:p-0 p-0 sm:mr-6 sm:h-[435px] h-[121px]'><img className='h-full rounded-2xl sm:rounded-none w-full object-cover sm:object-fill' src={gathering} alt="" /></div>
        </div>
        <div className='sm:w-3/4 w-full sm:mt-0  hidden sm:flex mt-5 h-52 bg-[#fdf8f5] flex-col justify-center items-center sm:pl-10'><p className='font-medium p-4 sm:p-0 text-start hidden sm:block  sm:text-center w-full sm:w-2/3 text-xl'>Lorem ipsum dolor sit amet consectetur. Duis in duis fa quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus ucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus facilisis volutpat neque amet non.</p></div>
        <div className='w-24 top-0 left-7 absolute h-[70px] rounded-tl-3xl rounded-br-3xl bg-[#ffc5ae]'></div>
    </div>
  )
}

export default History