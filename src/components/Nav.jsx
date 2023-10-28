// import React from 'react'
import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
const Nav = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className=" hover:scale-105 rounded-full hover:bg-red-50 p-4 transition-all dduration-700 ease-in-out"
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-slate-gray text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <div className="flex gap-2">
            <div
              className="p-4 lg:p-5 rounded-2xl dark:bg-gray-500 bg-gray-300 dark:lg:bg-slate-200 cursor-pointer"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
            </div>
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              className="hidden max-lg:block"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
