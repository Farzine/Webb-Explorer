import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Search } from 'lucide-react';

const SpaceExplore = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="container mx-auto px-4 flex flex-col justify-center items-start text-white">
        <button className='bg-[#FF0066] text-xl md:text-2xl font-bold mb-8 px-4 py-2'>
          Explore Now
        </button>
        <div className="w-64 bg-white bg-opacity-20 rounded p-2 flex items-center mb-8">
          <Search className="text-white mr-1 w-4 h-4" />
          <input
            type="text"
            placeholder="Find..."
            className="bg-transparent text-white placeholder-white flex-grow focus:outline-none text-md"
          />
        </div>

        <div className="flex space-x-4">
          <Link href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
            <Twitter className="text-white" />
          </Link>
          <Link href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
            <Linkedin className="text-white" />
          </Link>
        </div>

        <p className="mt-8 text-start text-lg max-w-xl">
          The universe is a canvas of endless possibilities, painted with celestial wonders beyond our wildest imagination.
        </p>
      </div>
    </div>
  );
};

export default SpaceExplore;