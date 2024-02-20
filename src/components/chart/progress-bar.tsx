import { ProgressBarProps } from "@/types";

const ProgressBar = ({ value, color }: ProgressBarProps) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-2 bg-gray-200 rounded" />
    <div className="flex-1 flex items-center gap-4">
      <div className="flex-1 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-gray-400 text-sm min-w-[40px]">{value}%</span>
    </div>
  </div>
);

export default ProgressBar;
