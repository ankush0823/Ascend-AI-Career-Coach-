"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Code, 
  TrendingUp, 
  Briefcase, 
  Award, 
  Plus, 
  X 
} from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form State
  const [industry, setIndustry] = useState("Tech");
  const [subIndustry, setSubIndustry] = useState("Software Engineering");
  const [experience, setExperience] = useState(4);
  const [currentRole, setCurrentRole] = useState("Full Stack Developer");
  const [skills, setSkills] = useState(["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"]);
  const [newSkill, setNewSkill] = useState("");
  const [bio, setBio] = useState("Software engineer passionate about building high-performance web systems and developer tooling.");

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleComplete = () => {
    // In production this synchronizes to PostgreSQL via Prisma
    router.push("/dashboard");
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-12 bg-grid-pattern">
      <div className="max-w-2xl w-full rounded-2xl glass-panel p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-8 animate-in fade-in duration-300">
        
        {/* Progress Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step {step} of 3</span>
            </span>
            <span className="text-slate-400">Profile Calibration</span>
          </div>

          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Industry & Domain */}
        {step === 1 && (
          <div className="space-y-6 text-left animate-in fade-in">
            <div>
              <h2 className="text-2xl font-bold text-white">Select Your Field</h2>
              <p className="text-xs text-slate-400 mt-1">
                We calibrate interview questions and salary benchmarks to your exact industry.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Primary Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option>Technology & Software</option>
                  <option>Finance & Fintech</option>
                  <option>Healthcare & Biotech</option>
                  <option>Product & Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Sub-Discipline / Specialization
                </label>
                <select
                  value={subIndustry}
                  onChange={(e) => setSubIndustry(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option>Software Engineering (Full Stack)</option>
                  <option>Frontend Engineering</option>
                  <option>Backend & Distributed Systems</option>
                  <option>Data Science & Machine Learning</option>
                  <option>DevOps & Cloud Architecture</option>
                  <option>Product Management</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Seniority & Role */}
        {step === 2 && (
          <div className="space-y-6 text-left animate-in fade-in">
            <div>
              <h2 className="text-2xl font-bold text-white">Experience & Career Level</h2>
              <p className="text-xs text-slate-400 mt-1">
                Tell us where you are on your career trajectory.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Current or Target Job Title
                </label>
                <input
                  type="text"
                  value={currentRole}
                  onChange={(e) => setCurrentRole(e.target.value)}
                  placeholder="e.g. Senior Full Stack Engineer"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase text-slate-300 mb-2">
                  <span>Years of Professional Experience</span>
                  <span className="text-emerald-400 font-bold">{experience} Years</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={experience}
                  onChange={(e) => setExperience(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>0 (Entry)</span>
                  <span>5 (Mid)</span>
                  <span>10+ (Lead/Staff)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Skills & Bio */}
        {step === 3 && (
          <div className="space-y-6 text-left animate-in fade-in">
            <div>
              <h2 className="text-2xl font-bold text-white">Skills & Summary</h2>
              <p className="text-xs text-slate-400 mt-1">
                These keywords will be used to personalize your mock interview scenarios and cover letters.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Core Skills & Technologies
                </label>
                <form onSubmit={handleAddSkill} className="flex gap-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Type a skill (e.g. Docker) and press Enter"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Add
                  </button>
                </form>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs text-emerald-300"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-300 mb-1.5">
                  Professional Bio
                </label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white leading-relaxed focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-800 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div></div>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 text-xs font-bold text-white shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleComplete}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 text-xs font-bold text-white shadow-xl shadow-emerald-500/25 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Complete Setup & Launch Dashboard</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
