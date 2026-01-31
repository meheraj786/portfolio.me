import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiBeekeeperstudio,
  SiPrisma,
  SiAstro,
  SiJest,
  SiPostman,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import bug from "../../public/bug.png";
import chat from "../../public/chat.png";
import cer1 from "../../public/cer1.png";
import collabrix from "../../public/collabrix.png";
import cookpal from "../../public/cookpal.png";

export const skills = [
  {
    icon: FaHtml5,
    name: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: FaJs,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  { icon: SiMongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: SiExpress, name: "Express.js", link: "https://expressjs.com/" },
  { icon: FaReact, name: "React.js", link: "https://react.dev/" },
  { icon: FaNodeJs, name: "Node.js", link: "https://nodejs.org/" },
  { icon: SiNextdotjs, name: "Next.js", link: "https://nextjs.org/" },
  { icon: SiMysql, name: "MySQL", link: "https://www.mysql.com/" },
  {
    icon: SiBeekeeperstudio,
    name: "Beekeeper",
    link: "https://www.beekeeperstudio.io/",
  },
  { icon: SiPrisma, name: "Prisma", link: "https://www.prisma.io/" },
  { icon: SiAstro, name: "Astro", link: "https://astro.build/" },
  { icon: SiJest, name: "Jest", link: "https://jestjs.io/" },
  { icon: SiPostman, name: "Postman", link: "https://www.postman.com/" },
  {
    icon: SiTailwindcss,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
  },
  { icon: SiRedux, name: "Redux", link: "https://redux.js.org/" },
  { icon: FaGitAlt, name: "Git", link: "https://git-scm.com/" },
  { icon: FaDocker, name: "Docker", link: "https://www.docker.com/" },
  { icon: FaFigma, name: "Figma", link: "https://www.figma.com/" },
];

export const projects = [
  {
    title: "BUG-Social App",
    desc: "A full-stack social networking platform built with React, Tailwind CSS, and Firebase. Features include user authentication, profile management, posts (text, image, events, jobs, products), likes, comments, messaging, notifications, pages, and groups. Designed with protected routes, responsive UI, and real-time interactions.",
    image: bug,
    tags: ["React", "Tailwind", "Firebase", "Redux", "Motion"],
    link: "",
    git: "",
  },
  {
    title: "Collabrix- A project management Application",
    desc: "A collaborative project management platform built with React, Redux, Tailwind, and Firebase. It includes secure authentication, task & subtask tracking, project dashboards with charts, real-time chat with team members, and role-based group management. Designed with a responsive UI and Kanban-style productivity flow.",
    image: collabrix,
    tags: ["React", "Tailwind", "Firebase", "Redux", "ChartJs"],
    link: "",
    git: "",
  },
  {
    title: "Top Chat- a chatting application",
    desc: "A chatting application with many features like send friend request, accept or reject friend request, make friends and also block your friends. You can create group, add friends to your group, remove member or send join request to other group. Notification feature also included.",
    image: chat,
    tags: ["React", "Tailwind", "Firebase", "Redux"],
    link: "",
    git: "",
  },
  {
    title: "Cookpal - Cooking recipe website",
    desc: "Cooking recipe website built with React, Redux Toolkit Query,and TailwindCSS. It fetches recipes from TheMealDB API, lets users browse by category. The site features organized pages and a modern navigation bar for easy use.",
    image: cookpal,
    tags: ["React", "Tailwind", "RTK Query", "Rest Api"],
    link: "",
    git: "",
  },
];

export const articles = [
  {
    title: "Building a Smooth Custom Mouse Follower in React & Tailwind",
    description:
      "A deep dive into creating buttery-smooth cursor animations using requestAnimationFrame, useRef, and direct DOM manipulation to avoid re-renders. Includes performance tips and CSS alternatives.",
    content: `
# Building a Smooth Custom Mouse Follower in React & Tailwind

Custom mouse followers add a premium, interactive feel to modern websites — think creative agencies, portfolios, or SaaS landing pages. But most implementations feel laggy or cause unnecessary re-renders.

In this guide, we'll build one that's **buttery smooth**, performant, and GPU-accelerated using React + Tailwind.

## Why Traditional Approaches Lag

- Using React state + mousemove → frequent re-renders kill performance.
- CSS :hover tricks → limited control over easing/trails.

Solution: **requestAnimationFrame + direct DOM style updates** (no state in loop).

## The Code (MouseFollower Component)

\`\`\`tsx
"use client";
import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const raf = () => {
      cx += (tx - cx) * 0.16; // easing factor
      cy += (ty - cy) * 0.16;

      cursor.style.transform = \`translate(\${cx - 20}px, \${cy - 20}px)\`;

      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    raf();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-black pointer-events-none z-[9999] will-change-transform bg-transparent hidden md:block"
    />
  );
}
\`\`\`

## Pro Tips

- **will-change: transform** → enables GPU acceleration.
- Easing: 0.12–0.18 feels most natural.
- Mobile: hide with \`hidden md:block\`.
- Bonus: add scale on hover with CSS variables or IntersectionObserver.

Try it — your cursor will thank you!

Happy coding!
    `,
    slug: "building-a-smooth-custom-mouse-follower-in-react-tailwind",
    image: "/images/blog/mouse-follower.jpg",
    tags: ["React", "Tailwind", "Animation", "Performance"],
    date: "January 2026",
    link: "https://yourblog.com/mouse-follower-guide",
    github: "https://github.com/yourusername/mouse-follower-demo",
    author: "Meheraj Hosen",
    readTime: "6 min read",
  },

  {
    title: "The JWT Handbook: Secure Authentication in Modern Web Apps",
    description:
      "JWT stands for JSON Web Token — learn how to implement secure token-based auth, handle refresh tokens, avoid common pitfalls like XSS/CSRF, and best practices for frontend-backend integration.",
    content: `
# The JWT Handbook: Secure Authentication in Modern Web Apps

JWT (JSON Web Token) is the de-facto standard for stateless authentication in APIs and SPAs. This handbook covers theory, implementation, security, and common mistakes.

## JWT Structure

\`\`\`text
Header.Payload.Signature
\`\`\`

- Header: algorithm & type (base64)
- Payload: claims (sub, iat, exp, roles...)
- Signature: HMAC/SHA with secret

## Secure Implementation (Next.js + Express)

**Backend (login route):**

\`\`\`js
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  // validate credentials...
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
  const refresh = jwt.sign({ userId: user.id }, process.env.REFRESH_SECRET, { expiresIn: '7d' });

  res.cookie('refreshToken', refresh, { httpOnly: true, secure: true });
  res.json({ accessToken: token });
});
\`\`\`

**Frontend (Axios interceptor for refresh):**

Use a library like \`axios-auth-refresh\` or custom logic.

## Security Checklist

- Never store JWT in localStorage → XSS risk.
- Use httpOnly + secure cookies for refresh token.
- Short access token lifetime (5-15 min).
- Validate alg ≠ 'none'.
- Use strong secrets & rotate them.

## Common Attacks & Fixes

- **XSS** → Sanitize inputs, use CSP.
- **CSRF** → SameSite=Strict/Lax cookies.
- **Token theft** → Short expiry + refresh rotation.

Master JWT — build secure apps!

Stay safe!
    `,
    slug: "the-jwt-handbook-secure-authentication-in-modern-web-apps",
    image: "/images/blog/jwt-handbook.jpg",
    tags: ["JWT", "Authentication", "Security", "Node.js", "React"],
    date: "October 2025",
    link: "https://yourblog.com/jwt-handbook",
    github: "https://github.com/yourusername/jwt-auth-guide",
    author: "Meheraj Hosen",
    readTime: "9 min read",
  },

  {
    title: "Frontend Trends to Master in 2026: Astro, TanStack & React Compiler",
    description:
      "Exploring the biggest shifts — from Islands architecture in Astro, TanStack ecosystem expansion, to how React Compiler eliminates manual memoization. What to learn next for performant UIs.",
    content: `
# Frontend Trends to Master in 2026: Astro, TanStack & React Compiler

2026 is here — and frontend is evolving faster than ever. Here's what you need to learn to stay ahead.

## 1. Astro Islands Architecture

Astro 4+ brings "Islands" to the next level — partial hydration, zero-JS by default.

**Why it wins:**
- 90% faster TTI
- SEO + performance out of the box
- Framework-agnostic (React/Vue/Svelte islands)

## 2. TanStack Ecosystem Explosion

TanStack Query v5, TanStack Table v8, TanStack Router — all unified under TanStack brand.

**Key features:**
- Infinite queries + suspense
- Server-state + client-state unification
- Type-safe routers

## 3. React Compiler (Forget useMemo/useCallback)

React 19+ Compiler auto-memoizes components — no more manual optimization hell.

**Before:**
\`\`\`tsx
const memoized = useMemo(() => expensiveCalc(), [dep]);
\`\`\`

**After:** Compiler does it for you.

## Other Trends

- React Server Components (RSC) everywhere
- Edge-first deployment (Vercel, Netlify Edge)
- AI-assisted coding (Cursor, GitHub Copilot Workspace)

Start experimenting today — 2026 belongs to performant & smart UIs.

Which trend excites you most?
    `,
    slug: "frontend-trends-to-master-in-2026-astro-tanstack-react-compiler",
    image: "/images/blog/frontend-trends-2026.jpg",
    tags: ["Frontend", "Astro", "React", "TanStack", "Trends"],
    date: "December 2025",
    link: "https://yourblog.com/frontend-trends-2026",
    github: null,
    author: "Meheraj Hosen",
    readTime: "7 min read",
  },

  {
    title: "System Design for Beginners: From Monolith to Microservices",
    description:
      "A practical guide covering load balancers, caching (Redis), queues (Kafka), fault tolerance, and real-world patterns like SAGA/CQRS — inspired by ride-sharing apps like Pathao/Uber.",
    content: `
# System Design for Beginners: From Monolith to Microservices

Many developers jump straight into microservices without understanding trade-offs. This guide starts from basics and builds up to production patterns.

## Phase 1: Monolith (Good for MVP)

Single codebase, single DB — fast iteration.

**Pros:** Simple deployment, easy transactions  
**Cons:** Scaling bottleneck, tech debt

## Phase 2: Vertical Scaling → Horizontal Scaling

Add servers → introduce **Load Balancer** (Nginx, AWS ALB).

## Phase 3: Caching Layer

**Redis** for hot data — reduce DB load by 70-90%.

## Phase 4: Message Queues & Async

**Kafka / RabbitMQ** for order processing, notifications.

## Advanced Patterns (Ride-Sharing Example)

- **SAGA** for distributed transactions (booking → payment → driver assign)
- **CQRS** — separate read/write models
- **Circuit Breaker** + Retry (Resilience4j / Polly)

## When to Go Microservices?

Only when monolith hurts team velocity or scaling.

Key: Start simple, evolve gradually.

Happy designing!
    `,
    slug: "system-design-for-beginners-from-monolith-to-microservices",
    image: "/images/blog/system-design-basics.jpg",
    tags: ["System Design", "Microservices", "Distributed Systems", "Backend"],
    date: "November 2025",
    link: "https://yourblog.com/system-design-intro",
    github: "https://github.com/yourusername/system-design-examples",
    author: "Meheraj Hosen",
    readTime: "10 min read",
  },


  {
    title: "Building Progressive Web Apps (PWAs) in 2025: The Complete Guide",
    description: "...",
    content: `... (full Markdown content similar style-এ লিখো: headings, lists, code examples সহ) ...`,
    slug: "building-progressive-web-apps-pwas-in-2025-the-complete-guide",
    image: "/images/blog/pwa-guide.jpg",
    tags: ["PWA", "Offline", "Service Worker", "Performance"],
    date: "September 2025",
    link: "https://yourblog.com/pwa-complete-guide",
    github: "https://github.com/yourusername/pwa-starter",
    author: "Meheraj Hosen",
    readTime: "12 min read",
  },

  {
    title: "TypeScript Best Practices for Large-Scale React Apps",
    description: "...",
    content: `... (generics, utility types, discriminated unions, TanStack integration ইত্যাদি) ...`,
    slug: "typescript-best-practices-for-large-scale-react-apps",
    image: "/images/blog/typescript-react.jpg",
    tags: ["TypeScript", "React", "Best Practices", "Scalability"],
    date: "October 2025",
    link: "https://yourblog.com/typescript-react-advanced",
    github: null,
    author: "Meheraj Hosen",
    readTime: "8 min read",
  },

  {
    title: "AI-Powered Frontend: Integrating ChatGPT & Image Generation APIs",
    description: "...",
    content: `... (OpenAI API calls, rate limiting, streaming responses, error handling) ...`,
    slug: "ai-powered-frontend-integrating-chatgpt-image-generation-apis",
    image: "/images/blog/ai-frontend.jpg",
    tags: ["AI", "OpenAI", "Next.js", "Frontend"],
    date: "November 2025",
    link: "https://yourblog.com/ai-frontend-integration",
    github: "https://github.com/yourusername/ai-chat-app",
    author: "Meheraj Hosen",
    readTime: "9 min read",
  },

  {
    title: "Edge Computing & Serverless: The Future of Fast Web Apps",
    description: "...",
    content: `... (Vercel Edge, Cloudflare Workers, global latency reduction, examples) ...`,
    slug: "edge-computing-serverless-the-future-of-fast-web-apps",
    image: "/images/blog/edge-computing.jpg",
    tags: ["Edge", "Serverless", "Next.js", "Performance"],
    date: "December 2025",
    link: "https://yourblog.com/edge-serverless-future",
    github: null,
    author: "Meheraj Hosen",
    readTime: "7 min read",
  },
];

// npmPackagesData.ts
export const npmPackages = [
  {
    title: "smooth-cursor-follower",
    description:
      "A lightweight, performant custom mouse follower for React apps with buttery-smooth easing using requestAnimationFrame and direct DOM updates. No re-renders, GPU-accelerated.",
    tags: ["React", "Animation", "UI", "Performance"],
    github: "https://github.com/yourusername/smooth-cursor-follower",
    npm: "https://www.npmjs.com/package/smooth-cursor-follower",
    downloads: "2.5k weekly",
  },
  {
    title: "react-jwt-utils",
    description:
      "Utility hooks and functions for handling JWT authentication in React/Next.js apps. Includes token refresh, storage strategies, and secure decoding without exposing sensitive data.",
    tags: ["JWT", "Auth", "React Hooks", "Security"],
    github: "https://github.com/yourusername/react-jwt-utils",
    npm: "https://www.npmjs.com/package/react-jwt-utils",
    downloads: "1.8k weekly",
  },
  {
    title: "nextjs-api-helpers",
    description:
      "Collection of helper functions for Next.js API routes: rate limiting, error handling, validation, CORS, and common response patterns to speed up backend development.",
    tags: ["Next.js", "API", "Backend", "Utilities"],
    github: "https://github.com/yourusername/nextjs-api-helpers",
    npm: "https://www.npmjs.com/package/nextjs-api-helpers",
  },
];
