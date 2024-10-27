import { BarChartProps } from "@/types";
import { Card, CardContent } from "../ui/card";

export const BarChart = ({ percentage, label }: BarChartProps) => {
  return (
    <Card className="absolute mb-10 w-52 md:w-64 h-80 md:h-80 overflow-hidden">
      <CardContent className="p-4 relative h-full">
        <div className="absolute inset-0 p-4 overflow-y-auto scrollbar-thin">
          <div className="flex flex-col items-center justify-center mt-16 h-48 md:h-40 w-full">
          
              <div className="grid grid-cols-8 gap-3 w-full px-4 h-full items-center">
                {[-30, -20, 80, 60, 90, 75, 85, 50].map((value, index) => (
                  <div
                    key={index}
                    className="relative h-full flex items-center justify-center"
                  >
                    <div
                      className={`absolute w-2.5 ${
                        index === 4 ? "bg-slate-800" : "bg-blue-400"
                      } rounded-sm transition-all duration-300 ${
                        value > 0 ? "bottom-1/2" : "top-1/2"
                      }`}
                      style={{ height: `${Math.abs(value)}%` }}
                    />
                  </div>
                ))}
              </div>
      
            <div className="flex flex-col p-2">
              <div className="text-xl md:text-2xl font-bold text-slate-900">{percentage}%</div>
              <div className="text-sm text-gray-600">{label}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};