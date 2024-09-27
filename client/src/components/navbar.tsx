import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center w-full">
      {/* Left Navbar */}
      <nav className="w-1/3 flex items-center bg-gray-600 bg-opacity-70 p-4 rounded-br-3xl justify-between px-10">
        <div className="flex items-center space-x-4">
          {/* Circle icon */}
          <div className="space-y-1 ">
            <div className='flex space-x-1'>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className='flex space-x-1'>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
          </div>

          {/* About Us link */}
          <Link href="/about" className="text-white text-lg">
            About US
          </Link>
        </div>

        {/* Features dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white text-lg flex items-center"
          >
            Features <span className="ml-1">&#9662;</span> {/* Down arrow */}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-600 bg-opacity-70 rounded-md shadow-lg z-10">
              <Link href="/feature1" className="block px-4 py-2 text-white hover:bg-gray-500">
                Feature 1
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

      <span className='text-white text-4xl font-roboto font-semibold'>Dark Star</span>

      {/* Right Navbar */}
      <nav className="w-1/3 flex items-center bg-gray-600 bg-opacity-70 p-4 rounded-bl-3xl justify-between px-10">
        <div className="flex items-center space-x-4">

          {/* About Us link */}
          <Link href="/about" className="text-white text-lg">
            Home
          </Link>
        </div>

        <div className="flex items-center space-x-4">

          {/* About Us link */}
          <Link href="/about" className="text-white text-lg">
            About JWST
          </Link>

          {/* Circle icon */}
          <div className="space-y-1 ">
            <div className='flex space-x-1'>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>
            <div className='flex space-x-1'>
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
