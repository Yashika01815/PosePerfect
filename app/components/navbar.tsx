"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuSlideOpen, setMenuSlideOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-500">
          PosePerfect
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            How It Works
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            Contact Us
          </Link>
          <Link href="#login" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
            Login
          </Link>
          <button
            onClick={() => setMenuSlideOpen(!isMenuSlideOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 flex items-center"
            aria-label="Toggle sliding menu"
          >
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-green-600"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-2">
          <div className="flex flex-col space-y-4">
            <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
              How It Works
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
              Contact Us
            </Link>
            <Link href="#login" className="text-gray-700 dark:text-gray-300 hover:text-green-600">
              Login
            </Link>
          </div>
        </div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-white dark:bg-neutral-800 shadow-lg transform ${
          isMenuSlideOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h3>
            <button
              onClick={() => setMenuSlideOpen(false)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close sliding menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <Link href="#profile" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600">
              View Profile
            </Link>
            <Link href="/upload" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600">
              Upload Video/Live Session
            </Link>
            <Link href="#diet-plan" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600">
              Diet Plan
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;