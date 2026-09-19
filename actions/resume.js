"use server";

import { db } from "@/lib/prisma";
import { generateContent } from "@/lib/gemini";

// ─── Save or update user resume ───────────────────────────────────────────────
export async function saveResume({ userId, content }) {
  return db.resume.upsert({
    where: { userId },
    create: { userId, content },
    update: { content, updatedAt: new Date() },
  });
}

// ─── Load user's saved resume ─────────────────────────────────────────────────
export async function getResume(userId) {
  return db.resume.findUnique({ where: { userId } });
}

// ─── AI Enhance a summary or bullet ──────────────────────────────────────────
export async function enhanceBulletPoint(rawText, context = "work experience") {
  const prompt = `
You are a professional resume coach and technical writer.

Rewrite the following ${context} text to be:
1. Action-oriented with strong verbs (e.g. "Engineered", "Spearheaded", "Architected")
2. Quantified with specific metrics and percentages wherever possible
3. Aligned with STAR format (Situation implied, Action clear, Result measurable)
4. ATS-optimized with relevant technical keywords

Original text:
"${rawText}"

Return ONLY the improved text. No explanations, no preamble.
`;
  return generateContent(prompt);
}

// ─── Compute ATS score and feedback ──────────────────────────────────────────
export async function computeAtsScore({ resumeContent, targetRole }) {
  const prompt = `
You are an ATS (Applicant Tracking System) expert.

Analyze this resume for the role "${targetRole}" and return a JSON object:
{
  "score": <number 0-100>,
  "strengths": ["...", "..."],
  "gaps": ["...", "..."],
  "feedback": "2-3 sentence overall ATS summary"
}

Resume content:
${resumeContent}

Return ONLY valid JSON. No markdown, no code blocks.
`;
  const raw = await generateContent(prompt);
  const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(cleaned);
}
