import React, { useContext, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FolioContext } from "../context/FolioContext";
import { BsCodeSlash } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleTheme, theme } = useContext(FolioContext);
  const [animateShake, setAnimateShake] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenueClose = () => {
    setIsMenuOpen(false);
  };

  const handleCodeAnimation = () => {
    setAnimateShake(true);
    setTimeout(() => setAnimateShake(false), 1000);
  };

  return (
    <>
      <nav className="bg-white dark:bg-slate-700 fixed top-0 left-0 w-full z-20 mb-16 flex pb-1.5 justify-between border-b border-gray-300 shadow-sm">
        <div className="flex  justify-evenly flex-row-reverse md:flex-row">
          <div className="flex flex-row justify-center m-5">
            <h1>
              <BsCodeSlash
                className={`text-3xl text-white cursor-pointer ${
                  animateShake ? "animate-shake" : ""
                } hover:animate-shake`}
                onClick={handleCodeAnimation}
              />
            </h1>
          </div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoCloseOutline className="text-3xl" />
              ) : (
                <RxHamburgerMenu className="text-3xl" />
              )}
            </button>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-700 md:dark:bg-slate-700 dark:border-gray-700">
                <li className="flex items-center ">
                  <Link
                    to="/"
                    className="flex items-center justify-center text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={toggleMenueClose}
                  >
                    <IoHomeOutline className="text-xl md:text-2xl ml-3" />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/projects"
                    className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent custom-font"
                    onClick={toggleMenueClose}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent custom-font"
                    onClick={toggleMenueClose}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ml-auto mt-3 mr-4 
    ${theme ? "bg-gray-300" : "bg-gray-600"}`}
          onClick={handleTheme}
        >
          {theme ? (
            <CiLight className="text-gray-900 dark:text-black text-xl md:text-2xl" />
          ) : (
            <CiDark className="text-gray-300 dark:text-white text-xl md:text-2xl" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
