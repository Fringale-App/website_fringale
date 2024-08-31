import React from 'react'
import logo from '../../Images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full h-[110px]  flex justify-between items-center'>
            <div className='sm:w-1/2 pl-6 sm:pl-16'>
                <div className='sm:w-[172px] w-40 h-10 sm:h-[45px]'>
                    <img className='w-full h-full sm:object-cover' src={logo} alt="" />
                </div>

            </div>

            <div className='flex sm:gap-12 sm:pl-7 w-1/2'>
                <NavLink to="/" className="sm:text-[24px] p-[10px] font-normal">
                    About
                </NavLink>
                <NavLink to="/" className="sm:text-[24px] p-[10px] font-normal">
                    Reviews
                </NavLink>
                <NavLink to="/" className="sm:text-[24px] p-[10px] font-normal">
                    Restaurant Partner
                </NavLink>


            </div>
        </div>
    )
}

export default Header