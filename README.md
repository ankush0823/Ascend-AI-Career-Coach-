<div align="center">

<br />

# ✦ Ascend

### *Your AI-Powered Career Copilot*

**Master Every Interview. Land Your Dream Role. 3x Faster with AI.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Gemini AI](https://img.shields.io/badge/Gemini_2.0-AI_Powered-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com)

<br />

</div>

---

## 🚀 What is Ascend?

**Ascend** is a full-stack, AI-first career coaching platform built for ambitious tech, finance, and engineering professionals. It combines the power of **Google Gemini 2.0** with real-time industry data to give you everything you need to stand out in your job search — from mock interviews to ATS-optimized resumes and live market salary intelligence.

> No generic templates. No guesswork. Personalized AI guidance tailored to your industry, seniority level, and target role.

---

## ✨ Core Features

### 🤖 AI Mock Interview Simulator
Practice makes perfect — but smart practice makes you unstoppable.

- **Role-specific question generation** based on your exact seniority and industry using Google Gemini
- **Timed interview sessions** with 10 behavioral + technical questions per session
- **Real-time STAR framework scoring** with instant, actionable AI feedback
- **Historical performance tracking** to visualize your readiness trajectory over time
- Categories: **Technical**, **Behavioral**, and **System Design**

---

### 📄 Intelligent ATS Resume Builder
Stop getting filtered out before a human even reads your resume.

- **1-Click AI Bullet Enhancer** — transforms vague experience into quantified, impact-driven achievements
- **Real-time ATS compatibility scoring** with keyword density analysis
- **STAR-aligned bullet rewriting** using Gemini AI
- **Print-optimized PDF export** with clean, recruiter-friendly formatting
- Stores your resume content with version tracking

---

### ✉️ AI-Tailored Cover Letter Generator
A compelling cover letter in under 30 seconds.

- Paste any **job description + company name** and let AI do the heavy lifting
- Gemini cross-references your skills and experience to craft a **bespoke, high-conversion letter**
- Built-in **Markdown editor** with instant copy-to-clipboard
- **Letter history archive** — manage multiple cover letters for multiple companies
- Customizable tone: *Technical & Impact-Driven*, *Warm & Collaborative*, and more

---

### 📊 Industry & Salary Intelligence Dashboard
Know your worth. Know the market.

- **Live salary benchmarks** segmented by experience level (Entry → Staff / Lead)
- **Market outlook forecasting** — Positive / Neutral / Challenging
- **In-demand skills radar** showing trending technologies and growth percentages
- **Key industry trends** refreshed automatically every week via background jobs
- Powered by Gemini AI and automatically updated via **Inngest weekly cron jobs**

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Server Actions, React 19) |
| **AI Engine** | [Google Gemini 2.0](https://deepmind.google/technologies/gemini/) via `@google/generative-ai` |
| **Authentication** | [Clerk](https://clerk.com) — social login, onboarding, session management |
| **Database** | [PostgreSQL](https://postgresql.org) (hosted on [Neon](https://neon.tech)) |
| **ORM** | [Prisma 5](https://prisma.io) — type-safe DB access with migrations |
| **Background Jobs** | [Inngest](https://inngest.com) — weekly cron for industry insight refreshes |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) with custom glass morphism design system |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Language** | JavaScript (ES Modules, React Compiler via Babel) |

---

## 🗂️ Project Structure

```
ascend/
├── app/                        # Next.js App Router
│   ├── page.js                 # Landing page
│   ├── layout.js               # Root layout (Clerk + fonts)
│   ├── dashboard/              # Career intelligence dashboard
│   ├── interview/              # AI mock interview simulator
│   ├── resume/                 # ATS resume builder
│   ├── ai-cover-letter/        # Cover letter generator
│   ├── onboarding/             # User profile onboarding flow
│   ├── sign-in/                # Clerk sign-in page
│   └── sign-up/                # Clerk sign-up page
│
├── actions/                    # Next.js Server Actions
│   ├── dashboard.js            # Industry insights + user profile
│   ├── interview.js            # Quiz generation & scoring
│   ├── resume.js               # Resume save/fetch/score
│   └── coverLetter.js          # Cover letter CRUD
│
├── components/                 # Reusable UI components
│   ├── HeroSection.jsx         # Landing page hero + interactive demo
│   ├── FeatureGrid.jsx         # Feature cards section
│   ├── DashboardNav.jsx        # Authenticated navigation
│   ├── Navbar.jsx              # Public navbar
│   └── ...                     # Footer, FAQ, Stats, CTA, HowItWorks
│
├── lib/                        # Shared utilities
│   ├── gemini.js               # Google Gemini client
│   ├── prisma.js               # Prisma client singleton
│   ├── inngest.js              # Inngest client
│   └── inngest-functions.js    # Weekly insight refresh cron
│
├── prisma/
│   └── schema.prisma           # Database schema
│
└── middleware.js               # Clerk auth + route protection
```

---

## 🗄️ Database Schema

```
User ─────────────── Assessment (Mock Interview Results)
  │                 Resume (ATS Resume Content)
  │                 CoverLetter (Generated Cover Letters)
  └── IndustryInsight (Salary & Market Data, auto-refreshed weekly)
```

Key models:
- **`User`** — synced from Clerk, stores career profile (industry, skills, experience, bio)
- **`Assessment`** — stores quiz scores, per-question breakdown, and AI improvement tips
- **`Resume`** — persists resume content with ATS score and Gemini feedback
- **`CoverLetter`** — archived cover letters with job title, company, and tone metadata
- **`IndustryInsight`** — salary ranges, demand level, growth rate, key trends (weekly auto-refresh)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (recommended: [Neon](https://neon.tech) — free tier available)
- [Clerk](https://clerk.com) account (free)
- [Google AI Studio](https://aistudio.google.com) API key (Gemini)
- [Inngest](https://inngest.com) account (for background jobs; optional for local dev)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ascend.git
cd ascend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# PostgreSQL (Neon or any Postgres)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Inngest (leave blank for local dev)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

### 4. Push the database schema

```bash
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **For Inngest background jobs locally**, run the Inngest Dev Server in a separate terminal:
> ```bash
> npx inngest-cli@latest dev
> ```

---

## 🔄 How the AI & Authentication Work

```
User Sign In (Google OAuth / Clerk)
         │
         ▼
Onboarding Calibration (/onboarding) ───► Collects Target Role, Industry, Skills, Bio
         │                                (Pre-fills Google Name & Email)
         ▼
Personalized Platform Ecosystem
 ├── Dashboard: Welcome greeting + Industry domain benchmarking
 ├── Navigation Header: Dynamic Clerk UserButton + Target Role badge
 ├── ATS Resume Builder: Personalized contact info, role & skills
 └── Cover Letter Generator: Bespoke signature with user name & email
```

**Background jobs (Inngest):**
Every Monday at 3 AM UTC, a cron job fetches all unique user industries and calls Gemini to regenerate fresh salary ranges, demand levels, growth rates, and skill recommendations — keeping your dashboard data current without manual intervention.

---

## 📸 Key Pages

| Route | Description |
|---|---|
| `/` | Landing page with interactive feature demos |
| `/sign-in` | Clerk authentication with Google OAuth integration |
| `/onboarding` | Profile calibration (industry, role, skills, experience) |
| `/dashboard` | Personalized career intelligence, salary distribution & skill radar |
| `/interview` | AI mock interview simulator |
| `/resume` | ATS resume builder pre-populated with user profile details |
| `/ai-cover-letter` | Cover letter generator with dynamic user signature |

---

## 🔐 Authentication & Profile Flow

Authentication is handled via **Clerk**:
- **Google OAuth & Passwordless Sign-In**: Clicking "Sign In" routes directly to Google authentication or Clerk sign-in.
- **Post-Login Onboarding Redirect**: Authenticated users are directed to `/onboarding` to calibrate their target role, industry, experience, skills, and bio (with Google account name and email pre-filled).
- **Dynamic Profile Synchronization**: User details are saved to PostgreSQL (and synchronized client-side) to populate user avatar (`UserButton`), name, email, target role, and resume/cover letter signatures dynamically.
- **Route Protection**: Enforced via `middleware.js` across protected routes (`/dashboard`, `/interview`, `/resume`, `/ai-cover-letter`, `/onboarding`).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ using Next.js, Gemini AI, and a lot of ambition.**

*Stop applying blindly. Start ascending.*

</div>
