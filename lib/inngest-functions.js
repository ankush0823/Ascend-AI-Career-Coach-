import { inngest } from "@/lib/inngest";
import { db } from "@/lib/prisma";
import { generateContent } from "@/lib/gemini";

// ─── Weekly cron: refresh all tracked industry insights ───────────────────────
export const refreshIndustryInsights = inngest.createFunction(
  {
    id: "refresh-industry-insights",
    name: "Weekly Industry Insights Refresh",
    triggers: [{ cron: "0 3 * * 1" }], // Every Monday at 3 AM UTC
  },
  async ({ step }) => {
    // 1. Fetch all distinct industries from users
    const industries = await step.run("fetch-industries", async () => {
      const records = await db.user.findMany({
        where: { industry: { not: null } },
        select: { industry: true },
        distinct: ["industry"],
      });
      return records.map((r) => r.industry);
    });

    // 2. Refresh each industry's data via Gemini
    const results = await step.run("refresh-each-industry", async () => {
      const refreshed = [];

      for (const industry of industries) {
        try {
          const prompt = `
Generate comprehensive 2026 industry insights for: "${industry}"
Return ONLY valid JSON:
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
  "keyTrends": ["Trend 1", "Trend 2", "Trend 3"],
  "recommendedSkills": ["Skill A", "Skill B", "Skill C"]
}`;

          const raw = await generateContent(prompt);
          const cleaned = raw.replace(/```json/g, "").replace(/```/g, "").trim();
          const data = JSON.parse(cleaned);

          const nextUpdate = new Date();
          nextUpdate.setDate(nextUpdate.getDate() + 7);

          await db.industryInsight.upsert({
            where: { industry },
            create: { industry, ...data, lastUpdated: new Date(), nextUpdate },
            update: { ...data, lastUpdated: new Date(), nextUpdate },
          });

          refreshed.push({ industry, status: "updated" });
        } catch (err) {
          refreshed.push({ industry, status: "error", error: err.message });
        }
      }

      return refreshed;
    });

    return { processed: industries.length, results };
  }
);
