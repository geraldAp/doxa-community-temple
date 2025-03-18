import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { SYSTEM_PROMPT } from "@/util/systemPrompt";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const google = createGoogleGenerativeAI({
    // custom settings
    apiKey: process.env.GOOGLE_AI_API_KEY,
  });
  const result = streamText({
    model: google("gemini-1.5-pro-latest", {}),
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
  });

  return result.toDataStreamResponse();
}
