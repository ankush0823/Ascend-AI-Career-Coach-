import { Target, Cpu, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Set Your Target Role & Experience",
      description:
        "Select your industry, sub-discipline (e.g. Software Engineering, Data Science), and years of experience to calibrate the AI model to your exact career level.",
      icon: Target,
      color: "emerald",
    },
    {
      step: "02",
      title: "Practice Mock Quizzes & Polish Resume",
      description:
        "Experience simulated interviews with instant feedback. Use the STAR Bullet Enhancer to turn normal responsibilities into high-impact, quantified achievements.",
      icon: Cpu,
      color: "teal",
    },
    {
      step: "03",
      title: "Apply & Negotiate with Confidence",
      description:
        "Download your ATS-compliant PDF resume, generate bespoke cover letters in seconds, and leverage real-time salary benchmarks during negotiations.",
      icon: Trophy,
      color: "cyan",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-[#050814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            Roadmap to Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Ascend Prepares You in <span className="gradient-text-emerald">3 Simple Steps</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From mock interview preparation to salary negotiation, we guide your entire job search workflow.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl glass-panel p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-emerald-500 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    Step {item.step} Milestone Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-200 transition-colors"
          >
            <span>Ready to begin? Start Step 1 in your Dashboard</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
