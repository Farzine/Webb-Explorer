'use client';
import React from 'react';
import Image from 'next/image'; // For optimized images
import { Carousel } from 'react-responsive-carousel'; // Carousel library
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import Navbar from '@/components/navbar';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/bg.jpg" // Replace with your space image
          alt="Space background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 -z-10"
        />
        <Navbar />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vel suscipit voluptate? Culpa aliquam deleniti nisi autem fugit ratione illum cupiditate officiis. Ea, consequatur. Tempore quasi excepturi velit! Impedit, quaerat?
          </p>
          <Link href='#section2' className="mt-6 px-6 py-3 bg-gray-500 bg-opacity-60 text-white rounded-full">See More</Link>
        </div>
        </div>

      {/* Content Section */}
      <section id='section2' className="py-16 px-8 bg-gradient-to-r from-[#3C424D] to-[#3C424D]">
        <h2 className="text-3xl text-center font-bold mb-12 text-white">Meet our member</h2>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto ">
          {[
            { title: 'Rifat', img: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { title: 'Farzine', img: 'https://randomuser.me/api/portraits/men/2.jpg' },
            { title: 'Rahik', img: 'https://randomuser.me/api/portraits/men/3.jpg' },
            { title: 'Shahed', img: 'https://randomuser.me/api/portraits/men/4.jpg' },
          ].map((item, index) => (
            <div key={index} className="bg-black rounded-lg shadow-lg p-6 text-center">
              <Image src={item.img} alt={item.title} width={300} height={300} className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers Carousel */}
      <section className="py-16 bg-gradient-to-r from-[#3C424D] to-[#3C424D]">
        <h2 className="text-3xl text-center font-bold mb-12 text-white">Achievement</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          className="max-w-4xl mx-auto"
        >
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="text-center">
              {/* <Image src={`/teacher-${index + 1}.jpg`} alt={`Teacher ${index + 1}`} width={200} height={200} className="rounded-full mx-auto mb-4" /> */}
              <Image src={`https://randomuser.me/api/portraits/men/4.jpg`} alt={`Teacher ${index + 1}`} width={200} height={200} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Miss Smith Ellen</h3>
              <p className="text-gray-600">Experienced Teacher</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Why it Works Section */}
      <section className="py-16 px-8 bg-yellow-50">
        <h2 className="text-3xl text-center font-bold mb-12">Why it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { title: 'Personalized Learning', icon: '📘' },
            { title: 'Trusted Content', icon: '🏛️' },
            { title: 'Empowering Teachers', icon: '🛠️' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet nihil numquam? Omnis consequatur pariatur tenetur sequi adipisci, aperiam at illo.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
