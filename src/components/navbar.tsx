"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-emerald-400 text-xl sm:text-2xl font-bold">
          Boldo
        </div>

        <button
          className="md:hidden text-white hover:bg-navy-700 p-2 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link
            href="#product"
            className="text-white hover:text-emerald-400 text-sm lg:text-base"
          >
            Product
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-emerald-400 text-sm lg:text-base"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-emerald-400 text-sm lg:text-base"
          >
            About
          </Link>
          <button className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm lg:text-base rounded-full hover:bg-emerald-400 hover:text-white transition-colors">
            Log In
          </button>
        </div>
      </div>

      <div
        className={` md:hidden absolute right-4 top-16 w-60 border border-navy-600 rounded-lg 
            shadow-lg transform  transition-all  duration-200 ease-in-out
            ${
              isMenuOpen
                ? "bg-gray-200 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
      >
        <div className="flex flex-col py-2">
          <Link
            href="#product"
            className=" hover:text-emerald-400 hover:bg-navy-700 px-4 py-3 text-sm transition-colors"
          >
            Product
          </Link>
          <Link
            href="#services"
            className=" hover:text-emerald-400 hover:bg-navy-700 px-4 py-3 text-sm transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className=" hover:text-emerald-400 hover:bg-navy-700 px-4 py-3 text-sm transition-colors"
          >
            About
          </Link>
          <div className="px-4 py-3">
            <button className="w-full bg-white px-3 py-1.5 text-sm rounded-full hover:bg-emerald-400 hover: transition-colors">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
