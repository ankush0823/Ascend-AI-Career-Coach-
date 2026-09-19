"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import DashboardNav from "@/components/DashboardNav";

export default function AppNavigation() {
  const pathname = usePathname();
  const isAppRoute = 
    pathname?.startsWith("/dashboard") || 
    pathname?.startsWith("/interview") || 
    pathname?.startsWith("/resume") || 
    pathname?.startsWith("/ai-cover-letter") ||
    pathname?.startsWith("/onboarding");

  if (isAppRoute) {
    return <DashboardNav />;
  }

  return <Navbar />;
}
