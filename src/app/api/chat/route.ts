import { streamText } from "ai";
import { NextRequest } from "next/server";
import Project, { IProject } from "@/models/Project";
import SystemDesign, { ISystemDesign } from "@/models/SystemDesign";
import { skills } from "@/layouts/seed";
import { connectDB } from "@/lib/db/connect";
import { createGroq } from "@ai-sdk/groq";

const groq = createGroq({
  apiKey: process.env.API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { messages } = await req.json();

    const [projects, systemDesigns] = await Promise.all([
      Project.find({}).select("title description tags liveLink githubLink"),
      SystemDesign.find({}).select("title description githubLink"),
    ]);

    const skillsText = skills
      .map((s) => `${s.name} (${s.category})`)
      .join(", ");

const contextData = `
**About Me:**
I am Meheraj, a Full Stack Developer from Bangladesh specializing in Next.js, TypeScript, Tailwind CSS, and MongoDB.

**Skills:**
${skillsText}

**Projects:**
${projects.map((p: IProject, i: number) =>
  `${i + 1}. **${p.title}** — ${p.description?.slice(0, 120) || 'N/A'} | Tags: ${p.tags?.slice(0, 5).join(', ') || 'N/A'}`
).join('\n')}

**System Designs:**
${systemDesigns.map((s: ISystemDesign, i: number) =>
  `${i + 1}. **${s.title}** — ${s.description?.slice(0, 120) || 'N/A'}`
).join('\n')}
`;

    // 5. Build System Prompt
    const systemPrompt = `You are "Ask Meheraj" — Meheraj's personal AI assistant.
You are friendly, professional, concise, and helpful.

Here is accurate and up-to-date information about Meheraj:

Passionate Software Engineer with expertise in MERN and MERN stack. I enjoy System Design, High-Level Design (HLD), and building scalable, distributed systems — turning complex problems into clean, maintainable, and production-ready solutions using the modern JavaScript ecosystem and strong architectural practices.

Dhaka, Bangladesh

Have a project in mind? Want to collaborate? Or just say hi? Feel free to reach out — I reply within 24 hours!

Email

meherajhosen786@gmail.com
Phone

+880 1989162543
Location

Dhaka, Bangladesh

linkedin https://www.linkedin.com/in/mehraj-h/
github https://github.com/meheraj786
facebook https://www.facebook.com/mehrajh786minor

**Context:**

${contextData}
you can see more information about Meheraj from his portfolio website at https://meherajdev.vercel.app/ and github at https://github.com/meheraj786

**Rules:**
- Always answer using the information provided above.
- If the user asks about something not mentioned, politely say you don't have that information yet.
- Speak in first person as if you are representing Meheraj.
- Use Markdown for better readability.
- Keep answers clear and to the point.`;



const trimmedMessages = messages.slice(-6);

const result = await streamText({
  model: groq('llama-3.3-70b-versatile'),
  system: systemPrompt,
  messages: trimmedMessages,  
  temperature: 0.7,
  maxOutputTokens: 2000,
});

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response("Something went wrong. Please try again.", {
      status: 500,
    });
  }
}
