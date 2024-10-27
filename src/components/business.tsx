"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import WidthWrapper from "./ui/WidthWrapper";
import { ChartCard } from "./chart/chart-card";
import { items } from "@/constants";

const Business = () => {
  const [activeDiv, setActiveDiv] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isClicked) {
      timeoutId = setTimeout(() => {
        setIsClicked(false);
        setActiveDiv(null);
      }, 100); // Small delay to ensure smooth transition
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isClicked]);

  const handleClick = (index: number) => {
    setActiveDiv(index);
    setIsClicked(true);
  };

  return (
    <WidthWrapper className="py-10 sm:py-12 md:py-16 lg:py-20 mb-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-40 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal text-slate-900 max-w-[500px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isFirstDiv = index === 0;
              const isActive = activeDiv === index;
              // First div should be colored when no other div is active
              const shouldBeColored = isFirstDiv ? !isClicked : isActive;

              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg
                    transform transition-bg
                    hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer
                    ${shouldBeColored ? 'bg-[#0A2640] text-white' : 'bg-white shadow-md hover:bg-[#0A2640] hover:text-white'}`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 
                ${
                  shouldBeColored
                    ? "text-white"
                    : "text-slate-700 group-hover:text-white"
                }`}
                  />
                  <span className="text-sm sm:text-base">{item.text}</span>
                </div>
              );
            })}
          </div>
          {/* <div className="space-y-3 sm:space-y-4">
  <div className="flex items-center gap-2 sm:gap-3 bg-[#0A2640] text-white p-3 sm:p-4 rounded-lg 
    transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl 
    hover:-translate-y-1 cursor-pointer">
    <Link className="w-4 h-4 sm:w-5 sm:h-5" />
    <span className="text-sm sm:text-base">
      We connect our customers with the best.
    </span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg
    transform transition-all duration-300 ease-in-out hover:scale-105 
    hover:shadow-xl hover:-translate-y-1 cursor-pointer
    hover:bg-emerald-50">
    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
    <span className="text-sm sm:text-base text-slate-700">
      Advisor success customer launch party.
    </span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg
    transform transition-all duration-300 ease-in-out hover:scale-105 
    hover:shadow-xl hover:-translate-y-1 cursor-pointer
    hover:bg-emerald-50">
    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
    <span className="text-sm sm:text-base text-slate-700">
      Business-to-consumer long tail.
    </span>
  </div>
</div> */}
          {/* <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 bg-[#0A2640] text-white p-3 sm:p-4 rounded-lg">
              <Link className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">
                We connect our customers with the best.
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white shadow-md p-3 sm:p-4 rounded-lg">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              <span className="text-sm sm:text-base text-slate-700">
                Advisor success customer launch party.
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white shadow-md p-3 sm:p-4 rounded-lg">
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              <span className="text-sm sm:text-base text-slate-700">
                Business-to-consumer long tail.
              </span>
            </div>
          </div> */}
        </div>

        <div className="relative mt-8 md:mt-0">
          <div className="relative h-full rounded-lg overflow-hidden">
            <Image
              src="/images/img5.png"
              alt="Business"
              width={300}
              height={450}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <ChartCard />
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Business;
