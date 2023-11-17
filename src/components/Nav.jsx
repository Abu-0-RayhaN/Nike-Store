// import React from 'react'
import { useEffect, useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Nav = () => {
  const [theme, setTheme] = useState("dark");
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };
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
      <nav className="flex justify-between items-center max-container relative">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul
          className={`flex-1 flex max-lg:flex-col justify-center items-center  ${
            isVisible
              ? "bg-coral-red absolute top-28 left-[20%] w-[70%] rounded-2xl gap-6 py-5 flex z-10"
              : "max-lg:hidden"
          }`}
        >
          {navLinks.map((item) => (
            <li
              key={item.label}
              className=" hover:scale-105 rounded-full hover:bg-red-50 max-lg:hover:bg-red-500 p-4 transition-all duration-300 ease-in-out cursor-pointer pt-5"
            >
              <Link
                to={item.route}
                className="font-montserrat leading-normal text-slate-gray text-xl max-lg:text-white"
              >
                {item.label}
              </Link>
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

            {isVisible ? (
              <ImCross
                alt="hamburger"
                className="hidden max-lg:block h-9 w-9 pt-2"
                onClick={handleButtonClick}
              />
            ) : (
              <GiHamburgerMenu
                className="hidden max-lg:block h-9 w-9 pt-2"
                onClick={handleButtonClick}
              />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
