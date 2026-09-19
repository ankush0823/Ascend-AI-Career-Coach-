"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Sparkles, 
  LayoutDashboard, 
  Bot, 
  FileText, 
  Mail, 
  ArrowLeft,
  Bell,
  User
} from "lucide-react";

export default function DashboardNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Mock Interview", href: "/interview", icon: Bot },
    { name: "Resume Builder", href: "/resume", icon: FileText },
    { name: "Cover Letter", href: "/ai-cover-letter", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#070b1a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Left: Brand & Back to Home */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#070b19] rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Ascend
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Quick actions & User badge */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Landing Page</span>
          </Link>

          <div className="h-4 w-px bg-slate-800"></div>

          {/* User Profile Pill */}
          <div className="flex items-center gap-2.5 pl-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-bold text-white">
                JD
              </div>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-white leading-tight">Alex Rivera</span>
              <span className="text-[10px] text-emerald-400">Senior Full Stack</span>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Sub-Navigation */}
      <div className="md:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-slate-800/80 gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
