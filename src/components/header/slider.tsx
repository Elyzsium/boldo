import React from "react";
import { cn } from "@/lib/utils";
import { logos } from "@/constants";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-full overflow-hidden relative ">
      <div className="flex whitespace-nowrap animate-marquee cursor-pointer">
        {logos.map((logo, index) => (
          <div
            key={`logo-1-${index}`}
            className={cn(
              "inline-flex items-center justify-center min-w-[200px] px-8",
              index === 0 || index === logos.length - 1
            )}
          >
            <div className="relative h-50 w-50  overflow-hidden">
              <Image
                src={logo.image}
                alt="logo"
                width={50}
                height={50}
                layout="responsive"
                className="w-full h-full "
              />
            </div>
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className={cn(
              "inline-flex items-center justify-center min-w-[200px] px-8",
              index === 0 || index === logos.length - 1
            )}
          >
            <div className="relative h-50 w-50  overflow-hidden">
              <Image
                src={logo.image}
                alt="logo"
                width={50}
                height={50}
                layout="responsive"
                className="w-full h-full "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
