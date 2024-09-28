"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Dark Star';
      case '/about':
        return 'About Us';
      case '/galactic-wave':
        return 'Galactic Wave';
      case '/feature2':
        return 'Feature 2';
      case '/feature3':
        return 'Feature 3';
      default:
        return 'Dark Star';
    }
  };

  return (
    <div className="flex justify-between items-center w-full">
      {/* Left Navbar */}
      <nav className="w-1/3 flex items-center bg-gray-600 bg-opacity-70 p-4 rounded-br-3xl justify-between px-10">
        <div className="flex items-center space-x-4">

          <div className="space-y-1">
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>

          <Link href="/about" className="text-white text-lg">
            About Us
          </Link>
        </div>

        {/* Features dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            className="text-white text-lg flex items-center"
          >
            Features <span className="ml-1">&#9662;</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-600 bg-opacity-70 rounded-md shadow-lg z-10">
              <Link href="/galactic-wave" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Galactic Wave
              </Link>
              <Link href="/feature2" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Feature 2
              </Link>
              <Link href="/feature3" className="block px-4 py-2 text-white hover:bg-gray-500">
                  Feature 3
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Center Title */}
      <span className="text-white text-4xl font-roboto font-semibold">
        {getPageTitle()}
      </span>

      {/* Right Navbar */}
      <nav className="w-1/3 flex items-center bg-gray-600 bg-opacity-70 p-4 rounded-bl-3xl justify-between px-10">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white text-lg">
            Home
          </Link>
        </div>

        <div className="flex items-center space-x-4" >
          <Link href="https://science.nasa.gov/mission/webb/" className="text-white text-lg">
            About JWST
          </Link>

          <div className="space-y-1">
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
