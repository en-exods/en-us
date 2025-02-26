import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">The Future of Digital Finance</span>
            <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">EXODUS Cryptocurrency</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Secure, decentralized, and designed for the future. Experience the next generation of cryptocurrency with Exodus.
          </p>
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="rounded-md shadow">
              <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105">
                Explore Exodus <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="ml-3 rounded-md shadow">
              <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-200 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-200">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-black text-sm text-gray-400">Trusted by crypto enthusiasts worldwide</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-gray-400 font-bold text-xl">500K+</div>
            <div className="ml-2 text-gray-500 text-sm">Users</div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-gray-400 font-bold text-xl">120+</div>
            <div className="ml-2 text-gray-500 text-sm">Countries</div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-gray-400 font-bold text-xl">$2B+</div>
            <div className="ml-2 text-gray-500 text-sm">Transactions</div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="text-gray-400 font-bold text-xl">99.9%</div>
            <div className="ml-2 text-gray-500 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;