"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does the AI Mock Interview simulator evaluate my answers?",
      a: "Our simulator uses Google Gemini 2.0 to evaluate your technical and behavioral responses against established hiring rubrics. It assesses your use of the STAR framework (Situation, Task, Action, Result), technical precision, and communication clarity, providing a percentage score and targeted improvement tips.",
    },
    {
      q: "What makes the ATS Resume Builder different from basic templates?",
      a: "Unlike static template generators, Ascend analyzes your bullet points and suggests AI-enhanced rewrites with quantifiable metrics and active verbs. It also performs keyword alignment matching against your target role to maximize ATS passing rates before human recruiters review it.",
    },
    {
      q: "Can I generate cover letters tailored to different job descriptions?",
      a: "Yes! In the AI Cover Letter section, you simply paste the specific job description and company name. Ascend extracts your saved skills, experience, and achievements from your profile to draft a persuasive, role-tailored letter in seconds.",
    },
    {
      q: "Where does the industry salary and market outlook data come from?",
      a: "Our platform leverages scheduled background jobs (Inngest) to continuously query and aggregate current market compensation data, hiring trends, and required skillsets, ensuring you receive up-to-date benchmarks during negotiations.",
    },
    {
      q: "Can I export my resume directly to PDF?",
      a: "Yes, you can export your optimized resume directly to an ATS-friendly, clean PDF format with print-perfect margins and layout preservation at any time with 1 click.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#070b1a] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Everything you need to know about preparing with Ascend AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl glass-panel border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
