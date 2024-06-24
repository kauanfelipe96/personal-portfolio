import React, { useState } from 'react';
import { PiBriefcaseThin, PiFilesThin, PiUserThin, PiHouseThin } from "react-icons/pi";

export default function SidebarComponent({ setDarkMode, darkMode }) {

  console.log(darkMode)
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="dark:shadow-black md:flex flex-col md:flex-row md:min-h-screen w-full shadow-xl">
      <div onClick={() => setOpenDropdown(false)} className="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0" x-data="{ open: false }">
        <div className="dark:bg-slate-900 flex-shrink-0 pl-8 pr-2 py-4 flex flex-row items-center justify-between">
          <div className="flex flex-col w-full">
            <label className="switch self-end">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
              <span className="slider"></span>
            </label>
            <a href="#" className="dark:text-slate-50 text-[50px] font-bold text-blue-900 mb-36">kf<span className="text-blue-500">.</span></a>
          </div>
          <button className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {openMenu ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              )}
            </svg>
          </button>
        </div>
        <nav className={`dark:bg-slate-900 flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${openMenu ? 'block' : 'hidden'}`}>
          <a href="#home" className="dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 text-blue-900 hover:text-blue-500"><PiHouseThin className="text-[25px] mr-2 font-extralight" /> Início</a>
          <a href="#about" className="dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500"><PiUserThin className="text-[25px] mr-2" /> Sobre</a>
          <a href="#experience" className="dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500"><PiBriefcaseThin className="text-[25px] mr-2" /> Experiências</a>
          <a href="#works" className="dark:text-slate-50 dark:hover:text-blue-500 flex items-center px-4 py-2 mt-2 text-blue-900 hover:text-blue-500"><PiFilesThin className="text-[25px] mr-2" /> Projetos</a>
        </nav>
      </div>
    </div>
  );
}

