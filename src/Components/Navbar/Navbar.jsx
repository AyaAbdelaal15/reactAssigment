import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
    const navItems = [
      { id: 1, text: 'About' , path: '/about'},
      { id: 2, text: 'portfolio', path: '/portfolio' },
      { id: 3, text: 'Contact', path: '/conatct' },
    ];
  
    return (
      <div className='fixed bg-[#2C3E50] flex justify-between items-center h-24 w-full mx-auto lg:px-28 md:px-10 px-5 text-white z-[999]'>
        <div>
        <Link  className='w-full md:text-[32px] text-xl font-bold '> Start Framework  </Link>
        </div>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 m-2  duration-300 hover:text-white active:bg-[#1ABC9C] focus-within:bg-[#1ABC9C] rounded-lg text-xl'
            >
             <Link to={item.path}> {item.text}</Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <AiOutlineMenu size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 right-0 md:top-[-950px] top-[97px] w-full h-auto  bg-[#2C3E50] ease-in-out duration-500 '
              : 'ease-in-out w-full duration-500 fixed top-[-490px] bottom-auto left-[0] right-0  '
          }
        >
          {navItems.map(item => (
            <li
              key={item.id} 
              className='p-4 duration-300 cursor-pointer active:bg-[#1ABC9C] focus-within:bg-[#1ABC9C] rounded-lg ml-24 text-xl max-w-28'
            >
             <Link to={item.path}> {item.text}</Link>
            </li>
          ))}
        </ul>
       
      </div>
    );
  };
  
  export default Navbar;