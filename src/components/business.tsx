import { Link, Eye, Sun } from "lucide-react";
import Image from "next/image";

import WidthWrapper from "./ui/WidthWrapper";
import { ChartCard } from "./chart/chart-card";

const Business = () => {
  return (
    <WidthWrapper className="py-10 sm:py-12 md:py-16 lg:py-20 mb-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-40 items-center">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal text-slate-900 max-w-[500px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="space-y-3 sm:space-y-4">
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
          </div>
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
