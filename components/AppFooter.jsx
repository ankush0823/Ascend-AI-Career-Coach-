"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function AppFooter() {
  const pathname = usePathname();
  const isAppRoute = 
    pathname?.startsWith("/dashboard") || 
    pathname?.startsWith("/interview") || 
    pathname?.startsWith("/resume") || 
    pathname?.startsWith("/ai-cover-letter") ||
    pathname?.startsWith("/onboarding");

  // Don't clutter app screens with marketing footer
  if (isAppRoute) {
    return null;
  }

  return <Footer />;
}
