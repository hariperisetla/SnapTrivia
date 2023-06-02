import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-white font-bold text-4xl mb-4 md:mb-0">
          SnapTrivia
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/categories" className="text-white hover:text-gray-200">
            Categories
          </Link>
          <Link href="/quiz" className="text-white hover:text-gray-200">
            Quiz
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-full">
            Log In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
