"use client";

import { useState } from "react";
import { 
  FileText, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Briefcase, 
  GraduationCap, 
  Award,
  Eye
} from "lucide-react";

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState("editor"); // editor | preview
  const [atsScore, setAtsScore] = useState(94);
  const [isEnhancing, setIsEnhancing] = useState(false);

  // Resume form state
  const [formData, setFormData] = useState({
    fullName: "Alex Rivera",
    title: "Senior Full Stack & Distributed Systems Engineer",
    email: "alex.rivera@example.com",
    phone: "+1 (555) 349-2810",
    location: "San Francisco, CA (Open to Remote)",
    website: "https://alexrivera.dev",
    summary:
      "Senior Full Stack Engineer with 7+ years of experience architecting resilient distributed systems and responsive web applications using Next.js, React, Node.js, and PostgreSQL. Proven track record of scaling high-throughput APIs to 20k req/sec and mentoring cross-functional engineering squads.",
    experience: [
      {
        company: "Apex Cloud Technologies",
        role: "Senior Full Stack Engineer",
        duration: "2022 - Present",
        bullets:
          "• Spearheaded migration from legacy monolithic architecture to Next.js 15 micro-frontends, reducing load times by 48% across 1.2M active users.\n• Architected asynchronous event-driven pipelines using Redis and background jobs, achieving 99.98% uptime during traffic surges.\n• Mentored 6 junior/mid engineers and introduced automated end-to-end testing, cutting release regressions by 35%.",
      },
      {
        company: "Vanguard Systems",
        role: "Full Stack Software Engineer",
        duration: "2019 - 2022",
        bullets:
          "• Built high-performance REST and GraphQL APIs handling 5,000+ operations/second using Node.js and PostgreSQL.\n• Partnered with product and design teams to launch responsive web interfaces with sub-second interaction latencies.\n• Optimized database indexing and query patterns, lowering p99 database response times from 350ms to 42ms.",
      },
    ],
    skills: "Next.js 15, React 19, TypeScript, Node.js, PostgreSQL, Prisma, Redis, AWS (ECS, Lambda, RDS), Docker, System Design, GraphQL, Tailwind CSS",
    education: "B.S. in Computer Science — University of California, Berkeley (2015 - 2019)",
  });

  const handleEnhanceSummary = () => {
    setIsEnhancing(true);
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        summary:
          "High-impact Senior Full Stack Engineer with 7+ years of expertise scaling mission-critical cloud applications with Next.js, TypeScript, and distributed databases. Demonstrated success driving 48% latency reductions and scaling event-driven architectures to 20,000+ RPS while upholding 99.99% system availability.",
      }));
      setIsEnhancing(false);
      setAtsScore(98);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 bg-[#050814] text-slate-100 flex flex-col">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header with Title & Export Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-slate-800/80">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>ATS Resume Builder</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                STAR Optimizer
              </span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Craft clean, keyword-dense resumes that pass corporate ATS filters and impress hiring managers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab("editor")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTab === "editor"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Form Editor
              </button>
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTab === "preview"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                ATS Preview
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* ATS Score Meter Banner */}
        <div className="rounded-2xl glass-panel p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-extrabold text-lg">
              {atsScore}
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>ATS Readiness Score:</span>
                <span className="text-emerald-400 font-extrabold">{atsScore}/100 (Optimal)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Quantified metrics present • Strong action verbs • High tech keyword alignment
              </p>
            </div>
          </div>

          <button
            onClick={handleEnhanceSummary}
            disabled={isEnhancing}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isEnhancing ? "Optimizing..." : "AI Auto-Enhance All Bullets"}</span>
          </button>
        </div>

        {/* Editor / Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Editor (6 cols or full if tab=editor) */}
          <div className={`${activeTab === "preview" ? "hidden lg:block lg:col-span-6" : "lg:col-span-6"} space-y-6`}>
            
            {/* Personal Details */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                1. Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Target Job Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  2. Professional Summary
                </h2>
                <button
                  onClick={handleEnhanceSummary}
                  className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enhance with AI</span>
                </button>
              </div>
              <textarea
                rows={4}
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-slate-200 leading-relaxed focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Work Experience */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-4">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                3. Work Experience & STAR Bullets
              </h2>
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-slate-400">{exp.company} • {exp.duration}</span>
                  </div>
                  <textarea
                    rows={4}
                    value={exp.bullets}
                    onChange={(e) => {
                      const newExp = [...formData.experience];
                      newExp[idx].bullets = e.target.value;
                      setFormData({ ...formData, experience: newExp });
                    }}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-300 leading-relaxed font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                4. Core Competencies & Tech Stack
              </h2>
              <textarea
                rows={2}
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

          </div>

          {/* Clean ATS Preview Document (Right 6 cols) */}
          <div className={`${activeTab === "editor" ? "hidden lg:block lg:col-span-6" : "lg:col-span-6"}`}>
            <div className="sticky top-24 rounded-2xl bg-white text-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-200 font-sans text-left space-y-6">
              
              {/* Resume Header */}
              <div className="text-center pb-4 border-b border-slate-300 space-y-1">
                <h1 className="text-2xl font-bold uppercase tracking-wide text-black">
                  {formData.fullName}
                </h1>
                <p className="text-xs font-semibold text-slate-700">
                  {formData.title}
                </p>
                <p className="text-[11px] text-slate-600 space-x-2">
                  <span>{formData.email}</span>
                  <span>•</span>
                  <span>{formData.phone}</span>
                  <span>•</span>
                  <span>{formData.location}</span>
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                  Professional Summary
                </h2>
                <p className="text-[11px] leading-relaxed text-slate-800">
                  {formData.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                  Professional Experience
                </h2>
                {formData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-[11px] font-normal text-slate-600">{exp.duration}</span>
                    </div>
                    <div className="text-[11px] text-slate-800 leading-relaxed whitespace-pre-line pl-1">
                      {exp.bullets}
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                  Technical Skills & Expertise
                </h2>
                <p className="text-[11px] leading-relaxed text-slate-800">
                  {formData.skills}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-0.5">
                  Education
                </h2>
                <p className="text-[11px] leading-relaxed text-slate-800">
                  {formData.education}
                </p>
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
