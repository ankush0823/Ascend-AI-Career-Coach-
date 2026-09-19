"use server";

import { db } from "@/lib/prisma";
import { generateContent } from "@/lib/gemini";

// ─── Generate tailored cover letter via Gemini ────────────────────────────────
export async function generateCoverLetter({ userId, companyName, jobTitle, jobDescription, tone, userProfile }) {
  const prompt = `
You are an expert career coach and persuasive business writer.

Write a tailored, highly personalized cover letter for this job application:
- Company: ${companyName}
- Role: ${jobTitle}
- Tone: ${tone}
- Candidate Background: ${userProfile.bio || "Experienced software engineer"}
- Candidate Skills: ${(userProfile.skills || []).join(", ")}
- Years of Experience: ${userProfile.experience || 5} years

Job Description:
${jobDescription}

Requirements:
1. 3–4 powerful paragraphs
2. Lead with a compelling hook that shows company knowledge
3. Align candidate skills directly with job requirements
4. Close with a confident, specific call to action
5. Do NOT use generic phrases like "I am writing to apply"
6. Use ${tone} tone throughout

Return ONLY the complete cover letter text. No subject line, no headers, just the body.
`;
  const content = await generateContent(prompt);

  // Persist to database
  await db.coverLetter.create({
    data: {
      userId,
      content,
      jobTitle,
      companyName,
      jobDescription,
      tone,
    },
  });

  return content.trim();
}

// ─── Get cover letter history ─────────────────────────────────────────────────
export async function getCoverLetterHistory(userId) {
  return db.coverLetter.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      companyName: true,
      jobTitle: true,
      tone: true,
      createdAt: true,
      content: true,
    },
  });
}

// ─── Delete cover letter ──────────────────────────────────────────────────────
export async function deleteCoverLetter(id) {
  return db.coverLetter.delete({ where: { id } });
}
