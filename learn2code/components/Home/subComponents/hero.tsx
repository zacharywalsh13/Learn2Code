import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-white flex items-center justify-center text-gray-900 py-10">
      <div className="flex items-center justify-between w-11/12">
        <div className="p-10 z-10">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-blue-500">Learn to Code,</h1>
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-blue-500"> Change Your Life</h1>
          <p className="text-2xl mb-8 bg-clip-text text-black">Master coding with our comprehensive and interactive online courses</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-shadow duration-200">Get Started</button>
        </div>
        <div className="w-1/2 h-full pr-3">
          <img className="h-full w-full object-cover" src="images/hero.webp" alt="Background"/>
        </div>
      </div>
    </div>
  );
}
