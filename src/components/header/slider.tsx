import React from 'react';
import { cn } from "@/lib/utils";
import { logos } from '@/types';

const Slider = () => {
 

  return (
    <div className="w-full overflow-hidden relative ">
      <div className="flex whitespace-nowrap animate-marquee">

        {logos.map((logo, index) => (
          <div
            key={`logo-1-${index}`}
            className={cn(
              "inline-flex items-center justify-center min-w-[200px] px-8",
              (index === 0 || index === logos.length - 1)
            )}
          >
            <span className="text-white text-xl font-bold">
              {logo.name}
            </span>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className={cn(
              "inline-flex items-center justify-center min-w-[200px] px-8",
              (index === 0 || index === logos.length - 1) 
            )}
          >
            <span className="text-white text-xl font-bold">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;