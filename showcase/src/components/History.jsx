import React from 'react'
import gathering from '../../Images/gathering.png'
function History() {
  return (
    <div className='mt-10 relative w-full overflow-hidden'>
        <div className='flex sm:flex-row flex-col sm:justify-center'>
            <div className='sm:w-2/3 w-full p-11 sm:px-20 sm:py-10 flex flex-col gap-4 sm:pr-80 bg-[#fdf8f5] mt-9'>
                <p className='text-4xl font-semibold'>History and Background</p>
                <p className='sm:font-medium font-normal sm:text-xl text-lg'>Lorem ipsum dolor sit amet consectetur. Duis in duis faucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus facilisis volutpat neque amet non. quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus</p>
            </div>
            <div className='sm:w-1/3 w-full sm:p-0 p-4 h-[435px]'><img className='h-full rounded-2xl sm:rounded-none w-full object-cover sm:object-fill' src={gathering} alt="" /></div>
        </div>
        <div className='sm:w-3/4 w-full sm:mt-0 mt-5 h-52 bg-[#fdf8f5] flex justify-center items-center sm:pl-10'><p className='font-medium p-4 sm:p-0 text-start  sm:text-center w-full sm:w-2/3 text-xl'>Lorem ipsum dolor sit amet consectetur. Duis in duis fa quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus ucibus cras ac quis aliquet dolor. Amet urna quam nunc sit velit faucibus id. Lectus facilisis volutpat neque amet non.</p></div>
        <div className='w-24 top-0 left-7 absolute h-[70px] rounded-tl-3xl rounded-br-3xl bg-[#ffc5ae]'></div>
    </div>
  )
}

export default History