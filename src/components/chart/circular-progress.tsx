export const CircularProgress = () => {
  const circumference = 2 * Math.PI * 44;

  // const agileOffset = circumference * (1 - 0.35);
  // const investorOffset = circumference * (1 - 0.3);
  // const testingOffset = circumference * (1 - 0.35);

  // const agileStart = 0;
  // const investorStart = circumference * 0.35;
  // const testingStart = circumference * 0.65;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="stroke-slate-100"
          strokeWidth="12"
          fill="none"
          r="44"
          cx="50"
          cy="50"
        />
        <circle
          className="stroke-emerald-400"
          strokeWidth="12"
          fill="none"
          r="44"
          cx="50"
          cy="50"
          strokeDasharray={`${circumference * 0.35} ${circumference * 0.65}`}
          strokeDashoffset="0"
        />

        <circle
          className="stroke-[#0A2640]"
          strokeWidth="12"
          fill="none"
          r="44"
          cx="50"
          cy="50"
          strokeDasharray={`${circumference * 0.3} ${circumference * 0.7}`}
          strokeDashoffset={`-${circumference * 0.35}`}
        />
        <circle
          className="stroke-cyan-400"
          strokeWidth="12"
          fill="none"
          r="44"
          cx="50"
          cy="50"
          strokeDasharray={`${circumference * 0.35} ${circumference * 0.65}`}
          strokeDashoffset={`-${circumference * 0.65}`}
        />
      </svg>
    </div>
  );
};
