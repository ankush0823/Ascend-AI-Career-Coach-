import Link from "next/link";
import { Sparkles, Globe, Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#030612] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#070b19] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Ascend
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering ambitious professionals with generative AI mock interviews, 
              ATS resume tailoring, and real-time industry intelligence.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Global Career Intelligence</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Gemini 2.0 Engine</span>
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  AI Mock Interview
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  ATS Resume Builder
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  Cover Letter Writer
                </Link>
              </li>
              <li>
                <Link href="#insights" className="hover:text-emerald-400 transition-colors">
                  Salary & Market Outlook
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                  Preparation Roadmap
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-emerald-400 transition-colors">
                  Interview Questions Bank
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-emerald-400 transition-colors">
                  STAR Method Guide
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-emerald-400 transition-colors">
                  Platform Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Powered By
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Google Gemini 2.0</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Next.js 16 & React 19</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Prisma ORM & PostgreSQL</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Clerk Authentication</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ascend AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
