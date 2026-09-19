import Link from "next/link";
import { 
  Bot, 
  FileText, 
  Mail, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Layers, 
  BarChart, 
  Cpu, 
  Download 
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      id: "interview",
      icon: Bot,
      color: "emerald",
      badge: "Flagship Feature",
      title: "AI Mock Interview Simulator",
      description:
        "Generate 10 role-specific behavioral and technical interview questions powered by Google Gemini. Practice under timed conditions and receive instant STAR evaluation.",
      highlights: [
        "Dynamic question generation based on your exact seniority",
        "STAR framework scoring with actionable feedback",
        "Historical trajectory tracking to measure readiness",
      ],
      link: "/interview",
      actionText: "Try Mock Interview",
    },
    {
      id: "resume",
      icon: FileText,
      color: "teal",
      badge: "ATS Optimized",
      title: "Intelligent ATS Resume Builder",
      description:
        "Transform raw bullet points into compelling, quantified achievements with our STAR Enhancer. Validate ATS keyword density and export clean PDFs.",
      highlights: [
        "1-Click 'Enhance with AI' for bullet points and summary",
        "Real-time ATS compatibility scoring & keyword checker",
        "Print-optimized PDF download with clean formatting",
      ],
      link: "/resume",
      actionText: "Build Your Resume",
    },
    {
      id: "cover-letter",
      icon: Mail,
      color: "indigo",
      badge: "High Conversion",
      title: "AI Tailored Cover Letter Generator",
      description:
        "Paste any target job description and company name. Our AI cross-references your skills and work history to craft a persuasive, tailored cover letter in under 30 seconds.",
      highlights: [
        "Bespoke alignment with target role requirements",
        "Markdown editor with instant copy-to-clipboard",
        "Letter history archive for multi-company applications",
      ],
      link: "/ai-cover-letter",
      actionText: "Draft Cover Letter",
    },
    {
      id: "insights",
      icon: TrendingUp,
      color: "cyan",
      badge: "Live Market Data",
      title: "Industry & Salary Intelligence",
      description:
        "Stay ahead of hiring cycles with automated industry insights. Explore real-time salary distributions, growth rates, and high-demand skills radar for your field.",
      highlights: [
        "Min, median, and top 10% compensation analytics",
        "Market outlook & hiring demand forecasting",
        "Weekly automated data refreshes via background jobs",
      ],
      link: "/dashboard",
      actionText: "Explore Market Data",
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-[#050814]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <br />
            <span className="gradient-text-emerald">Ace Your Career Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Built specifically for ambitious tech, finance, and engineering professionals seeking rapid career advancement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative rounded-2xl glass-panel p-8 sm:p-10 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
              >
                {/* Top Badge & Icon */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-2 space-y-2.5">
                    {feat.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-8 mt-6 border-t border-slate-800/70">
                  <Link
                    href={feat.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                  >
                    <span>{feat.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
