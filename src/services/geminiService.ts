import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getElectionAdvice(prompt: string, history: { role: 'user' | 'model', content: string }[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: `You are CivicPulse AI, a professional, neutral, and helpful assistant dedicated to explaining the election process. 
Your goal is to help users understand:
1. Voter registration steps and requirements.
2. Important election timelines and deadlines.
3. How to vote (in-person, mail-in, early voting).
4. Ballot information and how to research candidates.
5. Post-election processes like count certification.

Keep your tone:
- Trustworthy and non-partisan.
- Simple and easy to understand (grade 8 level).
- Action-oriented.

Avoid:
- Expressing personal or political bias.
- Recommending specific candidates or parties.
- Making definitive claims about future election outcomes.

If asked about specific local rules, remind users that requirements vary by jurisdiction and suggest checking their official local election board website.`,
      },
    });

    // We can't use sendMessageStream for simple non-streaming responses easily without a loop,
    // so we'll use generateContent for now, or just implement streaming if the UI supports it.
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(item => ({
          role: item.role,
          parts: [{ text: item.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ]
    });

    return result.text || "I'm sorry, I couldn't generate a response at this time. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Unable to connect to the election assistant service. Please check your connection.";
  }
}

export async function* getElectionAdviceStream(prompt: string, history: { role: 'user' | 'model', content: string }[] = []) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: "You are CivicPulse AI, a neutral election process expert. Help users with registration, voting steps, and deadlines at a simple 8th-grade level.",
      },
    });

    const stream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(item => ({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.content }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ]
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Error: Connection lost.";
  }
}
