import { GoogleGenerativeAI } from "@google/generative-ai";

// Singleton Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Default model: gemini-1.5-flash – fast and capable for our use cases
export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Convenience wrapper that returns cleaned text output
export async function generateContent(prompt) {
  const result = await geminiModel.generateContent(prompt);
  return result.response.text();
}
