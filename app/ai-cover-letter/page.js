"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { 
  Mail, 
  Sparkles, 
  Copy, 
  Check, 
  Building2, 
  Briefcase, 
  Clock, 
  Download, 
  Trash2, 
  ExternalLink 
} from "lucide-react";

export default function CoverLetterPage() {
  const { user } = useUser();
  const [userName, setUserName] = useState("Applicant Name");
  const [userEmail, setUserEmail] = useState("applicant@example.com");
  const [company, setCompany] = useState("Vercel");
  const [role, setRole] = useState("Software Engineer");
  const [jobDescription, setJobDescription] = useState(
    "Looking for an experienced Engineer with expertise in Next.js, React, serverless architectures, and distributed systems. You will build high-traffic customer-facing developer tools."
  );
  const [tone, setTone] = useState("Technical & Impact-Driven");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let name = user?.fullName || "";
    let mail = user?.primaryEmailAddress?.emailAddress || "";
    let userRole = "";

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ascend_user_profile");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.name && !name) name = parsed.name;
          if (parsed.email && !mail) mail = parsed.email;
          if (parsed.currentRole || parsed.subIndustry) userRole = parsed.currentRole || parsed.subIndustry;
        } catch (e) {}
      }
    }

    if (name) setUserName(name);
    if (mail) setUserEmail(mail);
    if (userRole) setRole(userRole);
  }, [user]);

  const [generatedLetter, setGeneratedLetter] = useState("");

  useEffect(() => {
    setGeneratedLetter(
`Dear Hiring Team at ${company},

I am writing to enthusiastically express my interest in the ${role} position. Having built and scaled production applications with modern JavaScript frameworks and cloud architectures, I have long admired ${company}'s work and industry impact.

In my recent engineering experience, I spearheaded key full-stack development initiatives, optimized database queries, and implemented scalable frontend component systems. Your requirement for an engineer who understands end-to-end performance and robust software design closely mirrors my day-to-day contributions.

Key alignments I bring include:
• Scalable Web & API Architectures: Extensive experience designing asynchronous pipelines, REST APIs, and microservices.
• Modern Stack Mastery: Deep familiarity with Next.js, React, Node.js, and TypeScript.
• Collaborative Engineering: Track record of mentoring teammates, driving code quality standards, and shipping features reliably.

I welcome the opportunity to discuss how my background can contribute to ${company}'s goals. Thank you for your time and consideration.

Warm regards,
${userName}
${userEmail}`
    );
  }, [userName, userEmail, company, role]);

  const [history, setHistory] = useState([
    {
      id: 1,
      company: "Vercel",
      role: "Software Engineer",
      date: "Today",
      tone: "Technical & Impact-Driven",
    },
    {
      id: 2,
      company: "Stripe",
      role: "Infrastructure Engineer",
      date: "3 days ago",
      tone: "Concise & Analytical",
    },
  ]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedLetter(
`Dear Hiring Team at ${company || "the company"},

I am writing to express my strong enthusiasm for the ${role || "Target Role"} position. With experience leading technical projects and building resilient web architectures, I am eager to apply my background to your team.

After reviewing your requirements—specifically around ${jobDescription.slice(0, 80)}...—I am confident that my technical skills match your key objectives.

I look forward to discussing how my experience will deliver immediate value to ${company}.

Sincerely,
${userName}
${userEmail}`
      );
      setIsGenerating(false);
      setHistory((prev) => [
        {
          id: Date.now(),
          company: company || "New Company",
          role: role || "New Role",
          date: "Just now",
          tone: tone,
        },
        ...prev,
      ]);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 bg-[#050814] text-slate-100 flex flex-col">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Title */}
        <div className="pb-2 border-b border-slate-800/80">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <span>AI Tailored Cover Letter Generator</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
              Gemini 2.0
            </span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Produce targeted, highly persuasive cover letters tailored to any specific job description in seconds.
          </p>
        </div>

        {/* 2-Column Interface: Inputs on Left, Output on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-4 text-left">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                <span>Job & Company Target</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Company Name</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Stripe, Vercel, Datadog"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Target Role</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Software Engineer"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Tone of Voice</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option>Technical & Impact-Driven</option>
                    <option>Executive & Leadership-Oriented</option>
                    <option>Creative & High-Energy</option>
                    <option>Concise & Direct</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Paste Job Description</label>
                  <textarea
                    rows={6}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the core responsibilities and requirements from the job posting..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white leading-relaxed focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-500 hover:opacity-90 shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isGenerating ? "Crafting with Gemini AI..." : "Generate Tailored Letter"}</span>
                </button>
              </div>
            </div>

            {/* Past Letters Archive */}
            <div className="rounded-2xl glass-panel p-6 border border-slate-800 space-y-3 text-left">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Generated Letters Archive</span>
              </h3>
              <div className="space-y-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between text-xs cursor-pointer"
                  >
                    <div>
                      <span className="font-bold text-white block">{item.company}</span>
                      <span className="text-[11px] text-slate-400">{item.role} • {item.date}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400">
                      {item.tone.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Preview: 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 text-left space-y-4 relative">
              
              {/* Actions bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Tailored Letter Preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Text"}</span>
                  </button>
                </div>
              </div>

              {/* Formatted Letter Output */}
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 font-sans text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line shadow-inner">
                {generatedLetter}
              </div>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
