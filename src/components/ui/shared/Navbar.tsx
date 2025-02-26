/* eslint-disable @next/next/no-img-element */
// components/Navigation.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex gap-3 items-center">
            <Link className="flex gap-3" href="/">
              <span className="flex-shrink-0 flex gap-2  items-center">
                {/* Replace with your actual logo */}
                <img className="w-8 h-8 object-cover" src="/logo.png" alt="" />
                <span className="text-xl font-bold text-blue-900">
                  Pruiz Global
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/">
              <span className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">
                Services
              </span>
            </Link>

            <Link href="/contact">
              <span className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white pb-3 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <span className="block px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md font-medium">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md font-medium">
              About
            </span>
          </Link>
          <Link href="/services">
            <span className="block px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md font-medium">
              Services
            </span>
          </Link>
          <Link href="/fleet">
            <span className="block px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md font-medium">
              Fleet
            </span>
          </Link>
          <Link href="/contact">
            <span className="block px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-600 rounded-md font-medium">
              Contact
            </span>
          </Link>
          <Link href="/quote">
            <span className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium">
              Get Quote
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
