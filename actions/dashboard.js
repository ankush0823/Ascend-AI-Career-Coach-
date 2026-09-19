"use server";

import { db } from "@/lib/prisma";
import { generateContent } from "@/lib/gemini";

// ─── Get or create industry insights for a given industry ─────────────────────
export async function getIndustryInsights(industry) {
  // Check if we have fresh data (updated within last 7 days)
  const existing = await db.industryInsight.findUnique({
    where: { industry },
  });

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  if (existing && existing.lastUpdated > weekAgo) {
    return existing;
  }

  // Generate fresh data with Gemini
  return refreshIndustryInsights(industry, existing?.id);
}

// ─── (Re)generate industry insights with Gemini AI ───────────────────────────
async function refreshIndustryInsights(industry, existingId) {
  const prompt = `
You are a senior labor market analyst with access to live industry compensation and hiring data.

Generate comprehensive, realistic 2026 industry insights for: "${industry}"

Return ONLY valid JSON (no markdown, no code blocks):
{
  "salaryRanges": [
    { "role": "Entry Level (0-2 yrs)", "min": 90000, "max": 130000, "median": 110000, "location": "US Remote" },
    { "role": "Mid Level (3-5 yrs)", "min": 125000, "max": 165000, "median": 148000, "location": "US Remote" },
    { "role": "Senior (6-9 yrs)", "min": 160000, "max": 220000, "median": 188000, "location": "US Remote" },
    { "role": "Staff / Lead (10+ yrs)", "min": 210000, "max": 320000, "median": 255000, "location": "US Remote" }
  ],
  "growthRate": 14.8,
  "demandLevel": "High",
  "marketOutlook": "Positive",
  "topSkills": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "keyTrends": ["Trend 1 description", "Trend 2 description", "Trend 3 description"],
  "recommendedSkills": ["Skill A", "Skill B", "Skill C"]
}
`;

  const raw = await generateContent(prompt);
  const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
  const data = JSON.parse(cleaned);

  const nextUpdate = new Date();
  nextUpdate.setDate(nextUpdate.getDate() + 7);

  if (existingId) {
    return db.industryInsight.update({
      where: { id: existingId },
      data: { ...data, lastUpdated: new Date(), nextUpdate },
    });
  }

  return db.industryInsight.create({
    data: { industry, ...data, lastUpdated: new Date(), nextUpdate },
  });
}

// ─── Save/update user profile from onboarding ────────────────────────────────
export async function saveUserProfile({ clerkUserId, email, name, industry, subIndustry, experience, skills, bio }) {
  return db.user.upsert({
    where: { clerkUserId },
    create: { clerkUserId, email, name, industry, subIndustry, experience, skills, bio },
    update: { name, industry, subIndustry, experience, skills, bio, updatedAt: new Date() },
  });
}

// ─── Fetch user profile ───────────────────────────────────────────────────────
export async function getUserProfile(clerkUserId) {
  return db.user.findUnique({ where: { clerkUserId } });
}
