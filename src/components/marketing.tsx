import { BarChart} from "./chart/bar-chart";
import Image from "next/image";
import WidthWrapper from "./ui/WidthWrapper";
import { Check } from "lucide-react";

const Marketing = () => {
  return (
    <WidthWrapper className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-40 items-center">
        <div className="relative">
          <div className="relative h-full rounded-lg overflow-hidden">
            <Image
              src="/images/img4.png"
              alt="Business professional on phone"
              width={300}
              height={450}
              layout="responsive"
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg"
            />
            <BarChart percentage={30} label="More income in June" />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-normal text-slate-900">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              "We connect our customers with the best.",
              "Advisor success customer launch party.",
              "Business-to-consumer long tail.",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-[24px]">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center">
                  <Check className="text-white  w-4 h-4 " />
                </div>
                <span className="text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
            Start now
          </button>
        </div>
      </div>
    </WidthWrapper>
  );
};

export default Marketing;
