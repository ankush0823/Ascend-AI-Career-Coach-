"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Bot, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  HelpCircle 
} from "lucide-react";

export default function InterviewPage() {
  const [sessionState, setSessionState] = useState("setup"); // setup | in-progress | completed
  const [role, setRole] = useState("Full Stack Engineer");
  const [seniority, setSeniority] = useState("Senior");
  const [interviewType, setInterviewType] = useState("technical");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [scoreCount, setScoreCount] = useState(0);

  const sampleQuestions = [
    {
      id: 1,
      category: "System Design & Caching",
      question:
        "You are designing a high-throughput API with Next.js and PostgreSQL. Traffic spikes 10x during flash sales. What is the most effective architectural pattern to prevent database connection exhaustion?",
      options: [
        {
          id: "A",
          text: "Increase the PostgreSQL max_connections setting on the primary database to 5,000.",
          isCorrect: false,
          explanation: "Increasing max_connections causes heavy memory pressure and context switching overhead in PostgreSQL, often resulting in complete database lockup.",
        },
        {
          id: "B",
          text: "Implement connection pooling with PgBouncer/Neon Proxy combined with Redis distributed caching for read-heavy payloads.",
          isCorrect: true,
          explanation: "Correct! Connection poolers maintain a lightweight pool of persistent connections, while Redis offloads repetitive reads, protecting PostgreSQL during spikes.",
        },
        {
          id: "C",
          text: "Convert all server actions to client-side fetching with direct client database connections.",
          isCorrect: false,
          explanation: "Exposing direct database connections to clients is a catastrophic security vulnerability and does not solve connection contention.",
        },
        {
          id: "D",
          text: "Wrap all database queries inside a retry loop without backoff.",
          isCorrect: false,
          explanation: "Retrying without exponential backoff creates a thundering herd problem, worsening database overload.",
        },
      ],
      starTip: "In interviews, clearly state the trade-offs: pooling layer + edge cache vs horizontal read replicas.",
    },
    {
      id: 2,
      category: "Next.js & Frontend Architecture",
      question:
        "When rendering large dynamic data in Next.js App Router, how do React Server Components (RSC) improve performance compared to standard Client Components?",
      options: [
        {
          id: "A",
          text: "RSCs execute solely on the server and keep heavy dependencies out of the client JavaScript bundle.",
          isCorrect: true,
          explanation: "Correct! RSCs run on the server, streaming pre-rendered HTML and JSON wire format, significantly shrinking the client bundle size.",
        },
        {
          id: "B",
          text: "RSCs automatically convert all React state hooks (useState) to server cookies.",
          isCorrect: false,
          explanation: "RSCs cannot use useState or client interactivity hooks directly.",
        },
        {
          id: "C",
          text: "RSCs eliminate the need for any CSS styling.",
          isCorrect: false,
          explanation: "RSCs have no effect on CSS requirements.",
        },
        {
          id: "D",
          text: "RSCs bypass DNS lookups entirely.",
          isCorrect: false,
          explanation: "DNS resolution is handled by the network layer, unrelated to React components.",
        },
      ],
      starTip: "Mention Zero-Bundle-Size dependencies (like date-fns or markdown parsers) as a core benefit.",
    },
    {
      id: 3,
      category: "Behavioral & STAR Leadership",
      question:
        "A critical production deployment introduced a performance regression 2 hours before a major product launch. How do you structure your response using the STAR method?",
      options: [
        {
          id: "A",
          text: "Focus primarily on explaining which junior developer caused the bug to demonstrate accountability.",
          isCorrect: false,
          explanation: "Effective leaders prioritize blameless post-mortems and system safeguards rather than finger-pointing.",
        },
        {
          id: "B",
          text: "Situation: tight launch; Task: restore stability; Action: executed immediate rollback via blue/green deployment; Result: latency normalized in 90s.",
          isCorrect: true,
          explanation: "Exemplary STAR answer: concisely states the challenge, specific mitigation actions taken, and quantified measurable outcome.",
        },
        {
          id: "C",
          text: "Explain that launches always have regressions and it's best to fix it live in production.",
          isCorrect: false,
          explanation: "Hot-patching live during peak launch windows without rollback procedures signals reckless release engineering.",
        },
        {
          id: "D",
          text: "Delay the product launch by 3 weeks to rewrite the entire codebase.",
          isCorrect: false,
          explanation: "Disproportionate response showing poor business alignment and lack of incident triage ability.",
        },
      ],
      starTip: "Highlight automated canary deployments and blameless retrospectives in your followup.",
    },
  ];

  const currentQ = sampleQuestions[currentQuestionIndex];

  // Timer logic
  useEffect(() => {
    let timer;
    if (sessionState === "in-progress" && !showFeedback && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [sessionState, showFeedback, timeLeft]);

  const handleStart = () => {
    setSessionState("in-progress");
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setTimeLeft(120);
    setScoreCount(0);
  };

  const handleSelect = (option) => {
    if (showFeedback) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;
    setShowFeedback(true);
    if (selectedOption.isCorrect) {
      setScoreCount((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < sampleQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      setTimeLeft(120);
    } else {
      setSessionState("completed");
    }
  };

  return (
    <div className="flex-1 bg-[#050814] text-slate-100 flex flex-col">
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Setup Screen */}
        {sessionState === "setup" && (
          <div className="max-w-2xl mx-auto space-y-8 text-center animate-in fade-in duration-300">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400">
              <Bot className="w-4 h-4" />
              <span>Gemini 2.0 Mock Interview Simulator</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Calibrate Your AI Interview Session
              </h1>
              <p className="text-sm text-slate-400">
                Configure your target discipline and experience level to generate realistic technical and STAR behavioral scenarios.
              </p>
            </div>

            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 text-left space-y-6">
              {/* Role */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Target Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
                >
                  <option>Full Stack Engineer</option>
                  <option>Frontend Specialist (React / Next.js)</option>
                  <option>Backend & Distributed Systems</option>
                  <option>Cloud / DevOps Engineer</option>
                  <option>Engineering Manager</option>
                </select>
              </div>

              {/* Seniority */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Experience Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Entry Level", "Mid-Level", "Senior / Lead"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSeniority(level)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        seniority === level
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                          : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Interview Category
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInterviewType("technical")}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                      interviewType === "technical"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span>Technical & System Design</span>
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setInterviewType("behavioral")}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold border text-left flex items-center justify-between transition-all ${
                      interviewType === "behavioral"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span>Behavioral & STAR Method</span>
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Start Button */}
              <button
                onClick={handleStart}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Interview Simulation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Active In-Progress Screen */}
        {sessionState === "in-progress" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Status Bar */}
            <div className="flex items-center justify-between p-4 rounded-xl glass-panel border border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                  Question {currentQuestionIndex + 1} of {sampleQuestions.length}
                </span>
                <span className="text-xs text-emerald-400 font-medium">
                  {currentQ.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 space-y-6 text-left">
              <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option) => {
                  let optionStyle = "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900";
                  if (selectedOption?.id === option.id) {
                    optionStyle = "border-emerald-500 bg-emerald-500/10 text-white";
                  }
                  if (showFeedback) {
                    if (option.isCorrect) {
                      optionStyle = "border-emerald-500 bg-emerald-500/20 text-emerald-300";
                    } else if (selectedOption?.id === option.id && !option.isCorrect) {
                      optionStyle = "border-red-500/80 bg-red-500/10 text-red-300";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelect(option)}
                      disabled={showFeedback}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3.5 ${optionStyle}`}
                    >
                      <span className="w-6 h-6 rounded-md bg-slate-800 flex items-center justify-center shrink-0 text-xs font-bold text-slate-300">
                        {option.id}
                      </span>
                      <span className="flex-1 leading-relaxed">{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback box */}
              {showFeedback && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {selectedOption?.isCorrect ? (
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer (+100 STAR points)
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" /> Room for Improvement
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedOption?.explanation}
                  </p>
                  <p className="text-[11px] text-emerald-400/90 pt-1 border-t border-slate-800">
                    💡 <strong>STAR Tip:</strong> {currentQ.starTip}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex justify-end">
                {!showFeedback ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOption}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:pointer-events-none transition-colors"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 transition-all"
                  >
                    <span>{currentQuestionIndex + 1 < sampleQuestions.length ? "Next Question" : "Complete Assessment"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Completed Screen */}
        {sessionState === "completed" && (
          <div className="max-w-xl mx-auto rounded-2xl glass-panel p-8 border border-slate-800 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Simulation Completed!
              </h2>
              <p className="text-xs text-slate-400">
                You evaluated {sampleQuestions.length} scenarios for {role} ({seniority}).
              </p>
            </div>

            {/* Score Ring / Box */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-semibold text-slate-400">Overall Accuracy</span>
              <div className="text-4xl font-extrabold text-emerald-400">
                {Math.round((scoreCount / sampleQuestions.length) * 100)}%
              </div>
              <p className="text-xs text-slate-300">
                {scoreCount === sampleQuestions.length
                  ? "Flawless technical & STAR execution! You demonstrated deep seniority."
                  : "Great foundation! Review the STAR tips above to sharpen trade-off communication."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleStart}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200 transition-colors"
              >
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span>Retake Simulation</span>
              </button>
              <Link
                href="/dashboard"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-lg shadow-emerald-500/20"
              >
                <span>Save to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
