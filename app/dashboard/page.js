"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { 
  TrendingUp, 
  Bot, 
  FileText, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  DollarSign, 
  BarChart2, 
  Target, 
  Award, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Zap,
  Activity,
  ArrowUpRight
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useUser();
  const [selectedIndustry, setSelectedIndustry] = useState("software-engineering");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user?.firstName) {
      setUserName(user.firstName);
    }
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ascend_user_profile");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.name && !user?.firstName) {
            setUserName(parsed.name.split(" ")[0]);
          }
          if (parsed.subIndustry?.toLowerCase().includes("data") || parsed.subIndustry?.toLowerCase().includes("machine")) {
            setSelectedIndustry("data-ai");
          } else if (parsed.subIndustry?.toLowerCase().includes("product")) {
            setSelectedIndustry("product");
          } else {
            setSelectedIndustry("software-engineering");
          }
        } catch (e) {}
      }
    }
  }, [user]);

  const industryData = {
    "software-engineering": {
      name: "Software Engineering (Full Stack & Cloud)",
      outlook: "High Demand",
      growth: "+14.8%",
      sentiment: "Bullish",
      salaries: [
        { level: "Entry Level (0-2 yrs)", min: "$95,000", median: "$118,000", max: "$135,000", percent: 55 },
        { level: "Mid-Level (3-5 yrs)", min: "$130,000", median: "$152,000", max: "$175,000", percent: 72 },
        { level: "Senior (6-9 yrs)", min: "$165,000", median: "$188,000", max: "$225,000", percent: 88 },
        { level: "Staff / Principal (10+ yrs)", min: "$210,000", median: "$255,000", max: "$320,000", percent: 100 },
      ],
      topSkills: [
        { skill: "Next.js App Router & React 19", demand: 96 },
        { skill: "Distributed Caching & Redis", demand: 89 },
        { skill: "LLM Agentic Systems & RAG", demand: 94 },
        { skill: "PostgreSQL & Prisma ORM", demand: 91 },
        { skill: "Cloud Architecture (AWS / GCP)", demand: 85 },
      ],
      keyTrends: [
        "Massive hiring surge for engineers with practical LLM API & vector database experience.",
        "Increased focus on end-to-end system design & asynchronous background job orchestration.",
        "Companies prioritizing full-stack ownership over narrow specialization.",
      ],
    },
    "data-ai": {
      name: "Data Science & Machine Learning",
      outlook: "Extremely High Demand",
      growth: "+22.4%",
      sentiment: "Very Bullish",
      salaries: [
        { level: "Entry Level (0-2 yrs)", min: "$105,000", median: "$126,000", max: "$145,000", percent: 58 },
        { level: "Mid-Level (3-5 yrs)", min: "$140,000", median: "$168,000", max: "$195,000", percent: 78 },
        { level: "Senior (6-9 yrs)", min: "$180,000", median: "$215,000", max: "$260,000", percent: 92 },
        { level: "Staff / Lead (10+ yrs)", min: "$235,000", median: "$285,000", max: "$360,000", percent: 100 },
      ],
      topSkills: [
        { skill: "PyTorch & Fine-Tuning", demand: 98 },
        { skill: "Vector Databases (Pinecone, Qdrant)", demand: 93 },
        { skill: "Model Evaluation & Benchmarking", demand: 88 },
        { skill: "Python & Fast-API Pipelines", demand: 92 },
        { skill: "Data Engineering (Snowflake, Spark)", demand: 86 },
      ],
      keyTrends: [
        "Transition from prompt engineering to complex agentic multi-step reasoning workflows.",
        "High compensation premiums for engineers who can deploy and monitor models in production.",
      ],
    },
    "product": {
      name: "Product Management (Tech)",
      outlook: "Moderate Demand",
      growth: "+8.5%",
      sentiment: "Selective",
      salaries: [
        { level: "Associate PM (0-2 yrs)", min: "$90,000", median: "$110,000", max: "$128,000", percent: 50 },
        { level: "Product Manager (3-5 yrs)", min: "$125,000", median: "$148,000", max: "$172,000", percent: 70 },
        { level: "Senior PM (6-9 yrs)", min: "$160,000", median: "$185,000", max: "$215,000", percent: 85 },
        { level: "Director of Product (10+ yrs)", min: "$210,000", median: "$245,000", max: "$310,000", percent: 100 },
      ],
      topSkills: [
        { skill: "AI Product Definition & Roadmapping", demand: 95 },
        { skill: "Data-Driven A/B Experimentation", demand: 90 },
        { skill: "Technical Architecture Literacy", demand: 87 },
        { skill: "Cross-Functional Agile Leadership", demand: 84 },
      ],
      keyTrends: [
        "Employers seeking PMs with hands-on technical and AI prototyping literacy.",
        "Increased focus on unit economics and quantifiable business ROI.",
      ],
    },
  };

  const current = industryData[selectedIndustry];

  return (
    <div className="flex-1 bg-[#050814] text-slate-100 flex flex-col">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {userName ? `Welcome back, ${userName}!` : "Career Intelligence Dashboard"}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                Live Data
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Personalized salary distributions, skill benchmarks, and interview readiness.
            </p>
          </div>

          {/* Industry Selector Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">Domain:</span>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2.5 font-semibold focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
            >
              <option value="software-engineering">Software Engineering (Full Stack)</option>
              <option value="data-ai">Data Science & AI</option>
              <option value="product">Product Management (Tech)</option>
            </select>
          </div>
        </div>

        {/* Top 3 Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          {/* Market Outlook */}
          <div className="rounded-2xl glass-panel p-5 border border-slate-800/90 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Hiring Demand
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                <span>{current.outlook}</span>
                <span className="text-xs font-semibold text-emerald-400">{current.growth}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Sentiment: <span className="text-emerald-300 font-medium">{current.sentiment}</span> • Updated via Gemini
              </p>
            </div>
          </div>

          {/* Interview Readiness */}
          <div className="rounded-2xl glass-panel p-5 border border-slate-800/90 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Interview Readiness
              </span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-white flex items-baseline gap-2">
                <span className="text-emerald-400">92%</span>
                <span className="text-xs font-medium text-slate-400">Readiness Score</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Based on your last 4 technical & STAR assessments
              </p>
            </div>
          </div>

          {/* Target Median Salary */}
          <div className="rounded-2xl glass-panel p-5 border border-slate-800/90 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Senior Median Salary
              </span>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-bold text-white">
                {current.salaries[2].median} <span className="text-xs font-normal text-slate-400">/ yr</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Top tier compensation reaches {current.salaries[2].max}
              </p>
            </div>
          </div>

        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Salary Distribution & Career Trends */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Salary Breakdown Chart Card */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-emerald-400" />
                    <span>Compensation Distribution by Seniority</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Aggregated US remote and major tech hub compensation figures.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  2026 Benchmarks
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {current.salaries.map((sal, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-white font-semibold">{sal.level}</span>
                      <div className="text-slate-400 space-x-3">
                        <span>Min: <strong className="text-slate-300">{sal.min}</strong></span>
                        <span>Median: <strong className="text-emerald-400">{sal.median}</strong></span>
                        <span>Max: <strong className="text-cyan-400">{sal.max}</strong></span>
                      </div>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${sal.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic AI Insights & Key Trends */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800/80">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">
                  Gemini Market Intelligence & Actionable Tips
                </h3>
              </div>
              <div className="mt-5 space-y-3">
                {current.keyTrends.map((trend, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </div>
                    <p className="leading-relaxed">{trend}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 1 Col: In-Demand Skills & Action Shortcuts */}
          <div className="space-y-8">
            
            {/* Top In-Demand Skills */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>High-Priority Skills</span>
                </h3>
                <span className="text-[11px] text-slate-400">Demand Score</span>
              </div>

              <div className="space-y-3 pt-1">
                {current.topSkills.map((sk, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-300">
                      <span>{sk.skill}</span>
                      <span className="text-emerald-400 font-bold">{sk.demand}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full"
                        style={{ width: `${sk.demand}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Feature Launchers */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">
                Next Preparation Steps
              </h3>

              <div className="space-y-3">
                <Link
                  href="/interview"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-300">
                        Launch Mock Interview
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        10 tailored questions with STAR review
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/resume"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-teal-300">
                        ATS Resume Builder
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        STAR bullet point optimizer
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/ai-cover-letter"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">
                        Tailored Cover Letter
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Match any target job description
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
