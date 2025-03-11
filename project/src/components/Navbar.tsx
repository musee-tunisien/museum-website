import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-12 w-auto" 
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#galerie" className="text-gray-900 hover:text-gray-600">Galerie</a>
            <a href="#apropos" className="text-gray-900 hover:text-gray-600">A propos</a>
            <a href="#contact" className="text-gray-900 hover:text-gray-600">Contact</a>
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Inscription
            </button>
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;