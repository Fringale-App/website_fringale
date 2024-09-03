import React from 'react'

function Card({name,img,designation,description}) {
  return (
    <div className='sm:min-w-80 min-w-56 bg-white p-4 h-60 flex flex-col rounded-lg gap-5'>
        <div className='flex gap-3'>
            <div className='rounded-full overflow-hidden w-20 h-20'><img className='h-full w-full object-cover ' src={img} alt="" /></div>
            <div>
                <p className='text-base font-semibold'>{name}</p>
                <p className='text-sm text-[#696969]'>{designation}</p>
            </div>

        </div>

        <div className='text-sm font-medium'>
            {description}
        </div>
        
    </div>
  )
}

export default Card