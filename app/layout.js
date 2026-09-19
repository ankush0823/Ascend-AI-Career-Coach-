import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ascend | AI Career Coach & Mock Interview Platform",
  description:
    "Accelerate your career with Google Gemini-powered AI mock interviews, intelligent ATS resume building, personalized salary insights, and tailored cover letters.",
  keywords: [
    "AI Career Coach",
    "Mock Interview AI",
    "ATS Resume Builder",
    "STAR method interview prep",
    "Tech Salary Insights",
    "Cover Letter Generator",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050814] text-slate-100 selection:bg-emerald-500 selection:text-white">
        <ClerkProvider>
          <AppNavigation />
          <main className="flex-1 flex flex-col">{children}</main>
          <AppFooter />
        </ClerkProvider>
      </body>
    </html>
  );
}