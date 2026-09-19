import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 relative bg-[#050814] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-emerald-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-[#050814] shadow-2xl text-center space-y-6">
          
          {/* Subtle glowing accent */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast-track your job search today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Stop Guessing. <br />
            <span className="gradient-text-emerald">Start Interviewing with Total Confidence.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Create your account in 30 seconds. Run customized mock interviews, optimize your resume with STAR bullets, and negotiate with real market data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-all duration-200"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/interview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <span>Try Mock Interview Simulator</span>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>No credit card required • Instant access to core features</span>
          </div>

        </div>
      </div>
    </section>
  );
}
