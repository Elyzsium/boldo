"use client";

import React, { useState } from "react";
import WidthWrapper from "./ui/WidthWrapper";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <WidthWrapper className="py-6 sm:py-8 md:py-12 lg:py-20 px-4 sm:px-6">
      <div className="min-h-[300px] sm:min-h-[350px] md:min-h-[400px] w-full bg-[#002851] flex items-center justify-center px-4 sm:px-6 md:px-8 rounded-xl">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 sm:mb-8 md:mb-12 leading-tight">
            An enterprise template to ramp
            <br className="hidden md:block" />
            up your company website
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center items-center max-w-[320px] sm:max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-80 lg:w-96 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-emerald-400 hover:bg-emerald-500 text-gray-900 font-medium rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              Start now
            </button>
          </form>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default NewsLetter;
