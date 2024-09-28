"use client";

import RobotWrapper from "@/components/robot-wrapper";
import Navbar from "@/components/navbar";
import SpaceExplore from "@/components/ExplorNow";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Cosmic Background Image */}
      <Image
        src="/bg.jpg" 
        alt="Cosmic Background"
        fill 
        className="object-cover -z-10" 
        quality={100}
      />
      <Navbar />
       <div className="w-full flex justify-center bg-opacity-40">
          <RobotWrapper />
        </div>
      <div className="absolute inset-0 flex items-start px-10 mt-48 -z-10">
        {/* SpaceExplore on the left side */}
        <div className="w-1/3 mt-44">
          <SpaceExplore />
        </div> 
      </div>
    </div>
  );
}
