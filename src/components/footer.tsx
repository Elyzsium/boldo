import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 pb-6 sm:pb-7 md:pb-8 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Left column - Logo and description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-[#0A2640]"></div>
                <span className="text-[#0A2640] text-xl sm:text-2xl md:text-3xl font-bold">Boldo</span>
              </div>
            </Link>
            <p className="mt-4 sm:mt-5 md:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
            </p>
            <p className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-gray-600 text-xs sm:text-sm">
              All rights reserved.
            </p>
          </div>

          {/* Right columns - Navigation */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Landings Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-6 md:mb-8">
                  Landings
                </h3>
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  <li>
                    <Link href="/home" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Section */}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-6 md:mb-8">
                  Company
                </h3>
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  <li>
                    <Link href="/home" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="flex items-center space-x-1 sm:space-x-2">
                      <span className="text-sm sm:text-base text-gray-600 hover:text-gray-900">Careers</span>
                      <span className="bg-[#65E4A3] text-black text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        Hiring!
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Section */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-6 md:mb-8">
                  Resources
                </h3>
                <ul className="space-y-3 sm:space-y-4 md:space-y-6">
                  <li>
                    <Link href="/blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
