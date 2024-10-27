"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/constants";
import WidthWrapper from "./ui/WidthWrapper";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getCardHeight = (index: number) => {
    switch (index) {
      case 0:
        return "min-h-[350px] xl:h-[322px] lg:h-[300px] md:h-[280px] sm:h-[320px] h-[300px]";
      case 1:
        return "min-h-[350px] xl:h-[394px] lg:h-[360px] md:h-[340px] sm:h-[380px] h-[350px]";
      case 2:
        return "min-h-[350px] xl:h-[358px] lg:h-[330px] md:h-[310px] sm:h-[350px] h-[320px]";
      default:
        return "min-h-[350px] h-72";
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        return [testimonials[currentSlide]];
      } else if (window.innerWidth <= 1024) {
        return testimonials.slice(0, 2);
      }
    }
    return testimonials;
  };

  return (
    <div className="bg-[#002851] py-8 xl:py-16 lg:py-14 md:py-12 sm:py-10 px-4 xl:p-8 lg:p-6 md:p-5 sm:p-4">
      <WidthWrapper className="py-10 xl:py-20 lg:py-16 md:py-14 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-normal mb-6 sm:mb-8 md:mb-12 lg:mb-14 xl:mb-16 max-w-2xl">
            An enterprise template to ramp up your company website
          </h1>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 lg:gap-6 md:gap-5 sm:gap-4 mb-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="w-full xl:w-[350px] lg:w-[300px] md:w-[280px] mx-auto">
                  <Card
                    className={`bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-lg ${getCardHeight(
                      index
                    )} transition-all duration-300 hover:transform hover:scale-105 w-full`}
                  >
                    <div className={`flex flex-col justify-between h-full`}>
                      <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-7 sm:leading-8 md:leading-9 lg:leading-10">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="flex items-center space-x-3 sm:space-x-4 mt-4 md:mb-4">
                        <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="rounded-full w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                            {testimonial.author}
                          </p>
                          <p className="text-xs md:text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end lg:absolute lg:right-0 lg:-top-20 space-x-3 sm:space-x-4 mt-6 lg:mt-0">
              <button
                onClick={prevSlide}
                className="p-2 sm:p-3 md:p-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 sm:p-3 md:p-4 bg-white rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default Testimonial;