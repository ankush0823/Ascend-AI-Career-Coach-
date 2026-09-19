import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";
import { refreshIndustryInsights } from "@/lib/inngest-functions";

// Inngest webhook handler — required for background jobs
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [refreshIndustryInsights],
});
