"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import WidthWrapper from "./ui/WidthWrapper";

const Faq = () => {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  return (
    <WidthWrapper className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] mb-8 sm:mb-12 md:mb-16 overflow-hidden rounded-lg">
          <Image
            src="/images/img9.png"
            alt="Modern office space with people working"
            width={300}
            height={350}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          <div className="max-w-[450px] mt-4 sm:mt-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 leading-normal sm:leading-[44px] md:leading-[52px]">
              We connect our customers with the best, and help them keep up-and stay open.
            </h1>
          </div>
          <div className="space-y-0">
            <div>
              <button
                onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}
                className="w-full flex items-center justify-between py-8 group relative"
              >
                <span className="text-lg text-gray-900 pr-8">
                  We connect our customers with the best?
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-200 absolute  ${
                      isFirstDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
                {/* Bottom line - gets darker on hover */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 group-hover:bg-gray-400 transition-colors" />
              </button>

              {isFirstDropdownOpen && (
                <div className="py-6 animate-fadeIn">
                  <p className="text-gray-700">
                    We help businesses connect with the best talent and
                    resources to grow their operations.
                  </p>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}
                className="w-full flex items-center justify-between py-8 group relative"
              >
                <span className="text-lg text-gray-900 pr-8">
                  Android research & development rockstar?
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                  <ChevronDown
                    className={`w-5 h-5 text-white transition-transform duration-200 absolute  ${
                      isSecondDropdownOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 group-hover:bg-gray-400 transition-colors" />
              </button>

              {isSecondDropdownOpen && (
                <div className="py-6 animate-fadeIn">
                  <p className="text-gray-700">
                    Our platform connects you with experienced Android
                    developers and R&D specialists.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Faq;
