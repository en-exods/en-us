import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Rocket className="h-8 w-8 text-purple-500" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">EXODUS</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-purple-500 transition-colors">Home</a>
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-500 transition-colors">Features</a>
                <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-500 transition-colors">About</a>
                <a href="#roadmap" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-purple-500 transition-colors">Roadmap</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
              Get Started
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-b-lg">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-500">Home</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-500">Features</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-500">About</a>
            <a href="#roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-purple-500">Roadmap</a>
            <button className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;