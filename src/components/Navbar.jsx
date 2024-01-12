import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar relative'>
      {/* Logo */}
      <img src={logo} alt='campuscodehub' className='w-[254px] h-[92px]' />

      {/* Desktop Navbar */}
      <ul className='hidden sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navbar */}
      <div className='sm:hidden flex flex-1 justify-end items-center relative'>
        {/* Toggle Button */}
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain hover:opacity-80 transition-opacity duration-300 cursor-pointer z-10'
          onClick={() => setToggle((previous) => !previous)}
        />

        {/* Background Overlay */}
        {toggle && <div className='fixed inset-0 bg-black-opacity z-10' onClick={() => setToggle(false)}></div>}

        {/* Dropdown Menu */}
        <div className={`transition-opacity duration-300 ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg sidebar z-20`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white transition-colors duration-300 hover:text-gray-300`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
