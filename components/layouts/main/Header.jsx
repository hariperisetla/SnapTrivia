import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 py-3 md:py-6 z-30">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between">
          <Link href="/" className="text-white font-bold text-4xl mb-4 md:mb-0">
            SnapTrivia
          </Link>

          <div
            className="md:hidden block items-center text-white"
            onClick={handleNav}
          >
            {nav ? <IoMdClose size={30} /> : <BiMenuAltRight size={30} />}
          </div>
        </div>
        <nav
          className={`${
            nav ? "flex flex-col space-y-5 text-left text-xl pt-5" : "hidden"
          }  md:flex md:space-x-4 md:items-center`}
        >
          <Link
            onClick={handleNav}
            href="/"
            className="text-white hover:text-gray-200"
          >
            Home
          </Link>
          <Link
            onClick={handleNav}
            href="/categories"
            className="text-white hover:text-gray-200"
          >
            Categories
          </Link>
          <Link
            onClick={handleNav}
            href="/quiz"
            className="text-white hover:text-gray-200"
          >
            Quiz
          </Link>
          <Link
            onClick={handleNav}
            href="/about"
            className="text-white hover:text-gray-200"
          >
            About
          </Link>
          <Link
            onClick={handleNav}
            href="/contact"
            className="text-white hover:text-gray-200"
          >
            Contact
          </Link>
          <button
            onClick={handleNav}
            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full"
          >
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
