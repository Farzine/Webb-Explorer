"use client";

import Navbar from "@/components/navbar";
import Image from 'next/image';

export default function GalacticWave() {
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
    </div>
  );
}
