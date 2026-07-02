// src/components/Navbar.tsx
"use client"; // Kailangan ito dahil gagamit tayo ng 'useState' para sa interaction

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo at Text */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/LOGO-OFFICIAL.png" 
            alt="EKG Productions Logo" 
            width={70} 
            height={70} 
            priority 
          />
          <span className="text-xl font-bold text-[white] tracking-tight">
            EKG PRODUCTIONS
          </span>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/help" className="text-sm text-gray-400 hover:text-white transition-colors">
            Need Help?
          </Link>
          <button className="text-sm font-medium text-white hover:text-[#00E5FF] transition-colors">
            Sign In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-all duration-200">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu (Lalabas lang pag naka-mobile) */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col gap-4">
          <Link href="/help" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
            Need Help?
          </Link>
          <button className="text-left text-white hover:text-[#00E5FF]">
            Sign In
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full font-bold w-full text-center">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}