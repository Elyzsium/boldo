import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/constants";
import WidthWrapper from "./ui/WidthWrapper";

const Service = () => {
  return (
    <WidthWrapper className="py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-lg sm:text-xl text-gray-600">Our Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-normal text-gray-900 mt-4">
            Handshake infographic mass market
            <br className="hidden sm:block" />
            crowdfunding iteration.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={350}
                    layout="responsive"
                    className="w-full h-40 sm:h-48 rounded-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                <button className="flex items-center space-x-2 text-gray-700 font-bold hover:text-primary transition-colors">
                  <span className="text-sm sm:text-base">Explore page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WidthWrapper>
  );
};
export default Service;

