"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center relative">
      <div className="text-xl font-bold">MiLogo</div>
      <div className="hidden md:flex space-x-4">
        <a href="#inicio" className="hover:text-blue-400">
          Inicio
        </a>
        <a href="#servicios" className="hover:text-blue-400">
          Servicios
        </a>
        <a href="#contacto" className="hover:text-blue-400">
          Contacto
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none hover:text-blue-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-2 py-4 md:hidden">
          <a href="#inicio" className="hover:text-blue-400">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-blue-400">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-blue-400">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
