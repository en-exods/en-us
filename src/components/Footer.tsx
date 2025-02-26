import React from 'react';
import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">EXODUS</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              The next generation of cryptocurrency, designed for the future of finance.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Tutorials</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">About</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Blog</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Careers</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Press</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Terms</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-purple-500">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Exodus Cryptocurrency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;