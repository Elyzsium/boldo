import { Card, CardContent } from "../ui/card";
import { CircularProgress } from "./circular-progress";

export const ChartCard = () => {
  return (
    <Card className="absolute bottom-4 right-4 bg-white border-0 shadow-lg w-72">
      <CardContent className="p-6">
        <div className="flex flex-col justify-between items-center">
          <CircularProgress />
          <div className="space-y-3 text-sm mt-5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span>35% - Agile Development</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span>30% - Investor bandwidth</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0A2640]"></div>
              <span>35% - A/B testing</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
