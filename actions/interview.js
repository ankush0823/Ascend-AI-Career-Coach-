"use server";

import { db } from "@/lib/prisma";
import { generateContent } from "@/lib/gemini";

// ─── Generate 10 mock interview questions via Gemini ─────────────────────────
export async function generateInterviewQuestions({ role, seniority, category }) {
  const prompt = `
You are an expert technical interviewer at a top-tier tech company.

Generate exactly 10 ${category} interview questions for a "${seniority}" "${role}".
Each question must have:
- A clear scenario-based question
- 4 answer choices (A, B, C, D) — only ONE is correct
- The correct answer key
- A concise explanation (2-3 sentences) of why the correct answer is right
- A STAR framework tip (1 sentence) for behavioral questions

Return ONLY a valid JSON array like this — NO markdown, NO code blocks, just raw JSON:
[
  {
    "id": 1,
    "category": "...",
    "question": "...",
    "options": [
      { "id": "A", "text": "...", "isCorrect": false, "explanation": "" },
      { "id": "B", "text": "...", "isCorrect": true, "explanation": "Why B is correct..." },
      { "id": "C", "text": "...", "isCorrect": false, "explanation": "" },
      { "id": "D", "text": "...", "isCorrect": false, "explanation": "" }
    ],
    "starTip": "..."
  }
]
`;

  const raw = await generateContent(prompt);

  // Clean up any markdown code fences if model returns them
  const cleaned = raw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

// ─── Save completed assessment to database ────────────────────────────────────
export async function saveAssessment({ userId, quizScore, questions, category }) {
  // Generate a personalized improvement tip
  const tipPrompt = `
A candidate completed a "${category}" interview simulation with ${Math.round(quizScore)}% score.
Write ONE concise, actionable improvement tip (max 2 sentences) to help them in their next session.
Return ONLY the tip text, no formatting.
`;
  const improvementTip = await generateContent(tipPrompt);

  const assessment = await db.assessment.create({
    data: {
      userId,
      quizScore,
      questions,
      category,
      improvementTip: improvementTip.trim(),
    },
  });

  return assessment;
}

// ─── Fetch assessment history for a user ─────────────────────────────────────
export async function getAssessmentHistory(userId) {
  return db.assessment.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 10,
  });
}
