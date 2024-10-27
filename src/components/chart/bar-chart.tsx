import { BarChartProps } from "@/types";
import { Card, CardContent } from "../ui/card";

export const BarChart = ({ percentage, label }: BarChartProps) => {
  return (
    <Card className="absolute bottom-4 right-10 bg-white border-0 shadow-lg w-48 h-72 ">
      <CardContent className="p-4">
        <div className="mt-20 flex items-center justify-center h-32 relative">
          <div className="grid grid-cols-7 gap-3 w-full px-4 h-full items-center">
            {[-30, -20, 80, 70, 90, 75, 85].map((value, index) => (
              <div
                key={index}
                className="relative h-full flex items-center justify-center"
              >
                <div
                  className={`absolute w-1.5 ${
                    index === 4 ? "bg-slate-800" : "bg-blue-400"
                  } rounded-sm transition-all duration-300
                      ${value > 0 ? "bottom-1/2" : "top-1/2"}`}
                  style={{ height: `${Math.abs(value)}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl font-bold text-slate-900">{percentage}%</div>
        <div className="text-sm text-gray-600">{label}</div>
      </CardContent>
    </Card>
  );
};
