import React, { useState, useEffect } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import { menuItems } from "../../constants";
import logo from "../../assets/logo100.png";

const Navbar = ({ handleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed left-0 right-0 top-5 z-50 px-5 md:px-16 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <nav className='mx-auto flex max-w-6xl flex-col items-center justify-between rounded-xl shadow-2xl bg-transparent text-gray-400 px-10 py-3 dark:bg-transparent dark:text-gray-100 md:flex-row'>
        <div className='flex w-full items-center justify-between md:flex-row'>
          <a href='#'><img className='w-12' src={logo} alt="Logo" /></a>
          <button
            className='cursor-pointer rounded-full bg-slate-600 p-2 text-gray-100 dark:bg-gray-100 dark:text-gray-900 md:hidden'
            onClick={handleToggleMenu}
          >
            <BiMenuAltLeft />
          </button>
        </div>

        <div className={`${toggleMenu ? "block" : "hidden"} w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}>
          <ul className='mt-5 flex flex-col items-center space-y-3 md:mt-0 md:flex-row md:space-y-0 md:space-x-8'>
            {menuItems.map((item, index) => (
              <li key={index} className='w-full md:w-auto'>
                <a
                  href={item.href}
                  className='block rounded-xl p-2 px-8 hover:text-gray-100 dark:hover:text-gray-300 whitespace-nowrap'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className='cursor-pointer mt-5 rounded-full p-2 dark:bg-gray-50 dark:text-gray-700 md:ml-5 md:mt-0'
            onClick={handleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
