import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, TimLight } from '../assets';


const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-[50] overflow-hidden backdrop-blur-lg bg-white/30 `}>
      <div className="w-full flex justify-between items-center max-w-7xl  mx-[-10px]">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={TimLight} alt="logo" className="w-24 object-contain cursor-pointer" />
          
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${active === link.title ? "text-[#151030]" : "text-white"} hover:text-[#151030] text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE NAV */}
          <div className="sm:hidden flex flex-1 justify-end items-center z-[60] ">
            <img 
              src={toggle ? close : menu } 
              alt="menu" 
              className="w-[28px] h-[28px] object-contain cursor-pointer" 
              onClick={() => setToggle(!toggle)}
            />

            
          </div>
      </div>
    </nav>
    <div
              className={`${!toggle ? 'hidden' : 'flex' } p-[1px] sm:hidden green-pink-gradient items-center justify-center z-[60] fixed top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
            
              <ul className="list-none min-w-[140px] p-4 flex justify-center items-center flex-col gap-4 bg-tertiary rounded-xl">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${active === link.title ? "text-[#151030]" : "text-white"} hover:text-[#151030] font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {{
                  setToggle(!toggle);
                  setActive(link.title);
                }}}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
              </ul>
            </div>
    </>
  )
}

export default Navbar