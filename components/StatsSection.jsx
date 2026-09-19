import { Trophy, Users, Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "94%",
      label: "Interview Pass Rate",
      subtext: "Reported by candidates who prepped 3+ sessions",
    },
    {
      value: "3.2x",
      label: "More ATS Callbacks",
      subtext: "Optimized with STAR quantified impact bullets",
    },
    {
      value: "150+",
      label: "Specialized Roles",
      subtext: "Software, Cloud, Data, Finance, and Product",
    },
    {
      value: "< 30s",
      label: "Cover Letter Speed",
      subtext: "Instant bespoke generation matched to JD",
    },
  ];

  return (
    <section className="py-20 bg-[#070b1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center px-4 ${i !== 0 ? 'pt-6 md:pt-0' : ''}`}
            >
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-emerald">
                {stat.value}
              </span>
              <span className="text-base font-bold text-white mt-2">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-1 max-w-[200px]">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
