import React, { useState } from 'react';
import logo from '../../Images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from "react-icons/io"; // Added close icon

function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

    function slideToHome() {
        navigate('/');
    }

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className='w-full h-[110px] flex flex-col sm:flex-row justify-between items-center p-4 relative'>
            {/* Logo */}
            <div className='w-full relative sm:w-1/2 flex justify-center sm:justify-start sm:pl-16'>
                <div className='w-32 sm:w-[172px] h-10 sm:h-[45px]'>
                    <img onClick={slideToHome} className='w-full h-full  object-contain' src={logo} alt="Logo" />
                </div>
                {/* Menu Button (Visible on small screens only) */}
                <button onClick={toggleMenu} className='absolute top-1 right-1 sm:hidden'>
                    {isMenuOpen ? <IoMdClose size={25} /> : <IoIosMenu size={25} />}
                </button>
            </div>

            {/* Navigation Links */}
            <div className='hidden sm:flex w-full sm:w-1/2 justify-around sm:justify-end gap-6 mt-4 sm:mt-0'>
                <NavLink to="/about" className="text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal hover:text-green-500">
                    About
                </NavLink>
                <NavLink to="/reviews" className="text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal hover:text-green-500">
                    Reviews
                </NavLink>
                <NavLink to="/contact" className="text-sm sm:text-[24px] p-2 sm:p-[10px] font-normal hover:text-green-500">
                    Contact Us
                </NavLink>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isMenuOpen && (
                <div className="absolute top-[110px] right-0 w-2/3 bg-white shadow-lg p-5 transition-transform duration-300 transform translate-x-0 sm:hidden z-20">
                    <nav className="flex flex-col items-start space-y-4">
                        <NavLink onClick={toggleMenu} to="/" className="text-lg font-medium hover:text-green-500">
                            Home
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/about" className="text-lg font-medium hover:text-green-500">
                            About
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/reviews" className="text-lg font-medium hover:text-green-500">
                            Reviews
                        </NavLink>
                        <NavLink onClick={toggleMenu} to="/contact" className="text-lg font-medium hover:text-green-500">
                            Contact Us
                        </NavLink>

                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;

