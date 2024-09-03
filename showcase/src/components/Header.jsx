import React from 'react'
import logo from '../../Images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='w-full h-[110px] flex flex-col sm:flex-row justify-between items-center p-4'>
            {/* Logo */}
            <div className='w-full sm:w-1/2 flex justify-center sm:justify-start sm:pl-16'>
                <div className='w-32 sm:w-[172px] h-10 sm:h-[45px] '>
                    <img className='w-full h-full object-contain' src={logo} alt="Logo" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className='w-full sm:w-1/2 flex justify-around sm:justify-end gap-6 mt-4 sm:mt-0'>
                <NavLink to="/about" className=" hover:text-green-500 text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal ">
                    About
                </NavLink>
                <NavLink to="/reviews" className="text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal hover:text-green-500">
                    Reviews
                </NavLink>
                <NavLink to="/contact" className="text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal hover:text-green-500">
                   Contact Us
                </NavLink>
            </div>
        </div>
    )
}

export default Header
