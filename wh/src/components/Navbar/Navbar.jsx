import React, { useState } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { FaMoon, FaSun } from "react-icons/fa";
import { menuItems } from "../../constants";
import logo from "../../assets/logo100.png";

const Navbar = ({ handleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='fixed left-0 right-0 top-5 z-50 px-5 md:px-16'>
      <nav className='mx-auto flex max-w-6xl flex-col items-center justify-between rounded-xl shadow-2xl bg-transparent  text-gray-400 px-10 py-3 dark:bg-transparent dark:text-gray-100 md:flex-row'>
        <div className='flex w-full items-center justify-between md:flex-row'>
          <h1 className='font-bold'>
            <a href='#'><img className='w-12' src={logo} alt="Logo" /></a>
          </h1>
          <button
            className='cursor-pointer rounded-full bg-gray-500 p-1 text-gray-400 dark:bg-gray-100 dark:text-gray-500 md:hidden'
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
                  className='block rounded-xl p-2 px-8 hover:text-gray-100 dark:hover:text-gray-300 whitespace-nowrap' // Ensure text is on one line
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
