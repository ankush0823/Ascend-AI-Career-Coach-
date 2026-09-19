"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Bot, 
  FileText, 
  Award, 
  Play, 
  BarChart3, 
  ShieldCheck,
  Briefcase
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("interview");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Aurora glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/50 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Next-Gen AI Career Copilot • Gemini 2.0 Powered</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-slate-400">v2.0 Live</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Master Every Interview. <br />
            <span className="gradient-text-emerald">Land Your Dream Role</span> <br />
            <span className="text-slate-200">3x Faster with AI.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
            Ascend is your personalized career coach. Experience role-specific mock interviews with real-time feedback, generate ATS-optimized resumes, and track live market salary trends.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 active:scale-[0.99]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>45,000+ Mock Quizzes Taken</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>94% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free to Try</span>
            </div>
          </div>
        </div>

        {/* Interactive Showcase Preview Widget */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl glass-panel p-2 sm:p-4 shadow-2xl border border-slate-700/60 glow-emerald">
            
            {/* Top Widget Tabs */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 px-2 sm:px-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  ascend.ai/live-workspace
                </span>
              </div>

              {/* Toggle Demo Tabs */}
              <div className="flex items-center bg-slate-900/90 rounded-lg p-1 border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab("interview")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === "interview"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>AI Interview</span>
                </button>
                <button
                  onClick={() => setActiveTab("resume")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === "resume"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>ATS Resume</span>
                </button>
                <button
                  onClick={() => setActiveTab("insights")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === "insights"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Market Trends</span>
                </button>
              </div>
            </div>

            {/* Tab 1: Mock Interview Preview */}
            {activeTab === "interview" && (
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                <div className="md:col-span-2 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Technical & Behavioral Simulator
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Question 4 of 10</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    "Describe how you architect a resilient Next.js app with micro-frontends and manage distributed cache invalidation."
                  </h3>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 space-y-2">
                    <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Gemini Real-time STAR Analysis
                      </span>
                      <span>Confidence: High (94%)</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "Excellent explanation of ISR and stale-while-revalidate tags. You demonstrated strong system design depth. Consider adding metrics on how latency was reduced."
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Session Score</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-extrabold text-emerald-400">92%</span>
                      <span className="text-xs text-emerald-500 font-semibold">+8% vs last week</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Technical Precision</span>
                      <span className="text-emerald-400 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[95%]"></div>
                    </div>
                    <div className="flex justify-between">
                      <span>STAR Framework</span>
                      <span className="text-teal-400 font-bold">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors">
                    Next Question →
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: ATS Resume Preview */}
            {activeTab === "resume" && (
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                <div className="md:col-span-2 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      ATS STAR Bullet Enhancer
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ATS Score: 98/100
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-medium text-slate-500 uppercase">Original Bullet</span>
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-800/30 text-xs text-red-200 line-through">
                      "Worked on the backend APIs and helped improve the website loading speed."
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-medium text-emerald-400 uppercase flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> AI Enhanced (Quantified & Action-Oriented)
                    </span>
                    <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/40 text-xs text-emerald-200 leading-relaxed font-medium">
                      "Spearheaded distributed cache architecture with Redis and optimized GraphQL queries, reducing p99 API latency by 42% and scaling throughput to 15,000 req/sec."
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Target Match</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">Staff Software Engineer</h4>
                    <p className="text-[11px] text-slate-400 mt-1">Matched 14/15 core job keywords</p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-slate-300">Extracted Keywords:</span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400">Next.js 15</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400">PostgreSQL</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400">Distributed Systems</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-400">AWS</span>
                    </div>
                  </div>
                  <button className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors">
                    Export ATS PDF ↓
                  </button>
                </div>
              </div>
            )}

            {/* Tab 3: Market Insights Preview */}
            {activeTab === "insights" && (
              <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
                <div className="md:col-span-2 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Real-Time Industry Compensation
                    </span>
                    <span className="text-xs text-cyan-400 font-mono">Updated today via Gemini</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">Full Stack & AI Engineer (US / Remote)</h3>
                    <p className="text-xs text-slate-400 mt-1">Market Outlook: <span className="text-emerald-400 font-semibold">High Demand (+14.2% YoY growth)</span></p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Min: $125k</span>
                      <span className="text-emerald-400 font-bold">Median: $168,000 / yr</span>
                      <span>Top 10%: $220k+</span>
                    </div>
                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex">
                      <div className="bg-slate-700 w-1/4"></div>
                      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 w-1/2"></div>
                      <div className="bg-cyan-600 w-1/4"></div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col justify-between text-left space-y-3">
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Top In-Demand Skills</span>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-200">LLM Integration & RAG</span>
                        <span className="text-emerald-400 font-semibold">+48%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-200">Next.js App Router</span>
                        <span className="text-emerald-400 font-semibold">+32%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-200">Distributed Microservices</span>
                        <span className="text-emerald-400 font-semibold">+24%</span>
                      </div>
                    </div>
                  </div>
                  <Link href="/dashboard" className="w-full py-2 text-center rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors">
                    View Complete Report →
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
