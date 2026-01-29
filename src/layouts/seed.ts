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
    description: "A deep dive into creating buttery-smooth cursor animations using requestAnimationFrame, useRef, and direct DOM manipulation to avoid re-renders. Includes performance tips and CSS alternatives.",
    image: "/images/blog/mouse-follower.jpg",
    tags: ["React", "Tailwind", "Animation", "Performance"],
    date: "January 2026",
    link: "https://yourblog.com/mouse-follower-guide",
    github: "https://github.com/yourusername/mouse-follower-demo",
    author: "By Meheraj",
  },
  {
    title: "The JWT Handbook: Secure Authentication in Modern Web Apps",
    description: "JWT stands for JSON Web Token — learn how to implement secure token-based auth, handle refresh tokens, avoid common pitfalls like XSS/CSRF, and best practices for frontend-backend integration.",
    image: "/images/blog/jwt-handbook.jpg",
    tags: ["JWT", "Authentication", "Security", "Node.js", "React"],
    date: "October 2025",
    link: "https://yourblog.com/jwt-handbook",
    github: "https://github.com/yourusername/jwt-auth-guide",
    author: "By Meheraj",
  },
  {
    title: "Frontend Trends to Master in 2026: Astro, TanStack & React Compiler",
    description: "Exploring the biggest shifts — from Islands architecture in Astro, TanStack ecosystem expansion, to how React Compiler eliminates manual memoization. What to learn next for performant UIs.",
    image: "/images/blog/frontend-trends-2026.jpg",
    tags: ["Frontend", "Astro", "React", "TanStack", "Trends"],
    date: "December 2025",
    link: "https://yourblog.com/frontend-trends-2026",
    github: null, // optional
    author: "By Meheraj",
  },
  {
    title: "System Design for Beginners: From Monolith to Microservices",
    description: "A practical guide covering load balancers, caching (Redis), queues (Kafka), fault tolerance, and real-world patterns like SAGA/CQRS — inspired by ride-sharing apps like Pathao/Uber.",
    image: "/images/blog/system-design-basics.jpg",
    tags: ["System Design", "Microservices", "Distributed Systems", "Backend"],
    date: "November 2025",
    link: "https://yourblog.com/system-design-intro",
    github: "https://github.com/yourusername/system-design-examples",
    author: "By Meheraj",
  },
  {
    title: "Building Progressive Web Apps (PWAs) in 2025: The Complete Guide",
    description: "Turn your web app into installable, offline-capable experiences with service workers, manifest, and push notifications. Why PWAs are still dominating mobile-first development.",
    image: "/images/blog/pwa-guide.jpg",
    tags: ["PWA", "Offline", "Service Worker", "Performance"],
    date: "September 2025",
    link: "https://yourblog.com/pwa-complete-guide",
    github: "https://github.com/yourusername/pwa-starter",
    author: "By Meheraj",
  },
  {
    title: "TypeScript Best Practices for Large-Scale React Apps",
    description: "Advanced patterns: generics, utility types, discriminated unions, and how to avoid 'any' hell. Plus integration with TanStack Query, Zustand, and React Hook Form.",
    image: "/images/blog/typescript-react.jpg",
    tags: ["TypeScript", "React", "Best Practices", "Scalability"],
    date: "October 2025",
    link: "https://yourblog.com/typescript-react-advanced",
    github: null,
    author: "By Meheraj",
  },
  {
    title: "AI-Powered Frontend: Integrating ChatGPT & Image Generation APIs",
    description: "How to build smart features like auto-complete search, content generation, or dynamic UI using OpenAI APIs in Next.js — with rate limiting and error handling tips.",
    image: "/images/blog/ai-frontend.jpg",
    tags: ["AI", "OpenAI", "Next.js", "Frontend"],
    date: "November 2025",
    link: "https://yourblog.com/ai-frontend-integration",
    github: "https://github.com/yourusername/ai-chat-app",
    author: "By Meheraj",
  },
  {
    title: "Edge Computing & Serverless: The Future of Fast Web Apps",
    description: "Deploying Next.js apps to Vercel Edge, using Cloudflare Workers, and why edge functions are beating traditional servers for global latency reduction in 2026.",
    image: "/images/blog/edge-computing.jpg",
    tags: ["Edge", "Serverless", "Next.js", "Performance"],
    date: "December 2025",
    link: "https://yourblog.com/edge-serverless-future",
    github: null,
    author: "By Meheraj",
  },
];

// npmPackagesData.ts
export const npmPackages = [
  {
    title: "smooth-cursor-follower",
    description: "A lightweight, performant custom mouse follower for React apps with buttery-smooth easing using requestAnimationFrame and direct DOM updates. No re-renders, GPU-accelerated.",
    tags: ["React", "Animation", "UI", "Performance"],
    github: "https://github.com/yourusername/smooth-cursor-follower",
    npm: "https://www.npmjs.com/package/smooth-cursor-follower",
    downloads: "2.5k weekly",
  },
  {
    title: "react-jwt-utils",
    description: "Utility hooks and functions for handling JWT authentication in React/Next.js apps. Includes token refresh, storage strategies, and secure decoding without exposing sensitive data.",
    tags: ["JWT", "Auth", "React Hooks", "Security"],
    github: "https://github.com/yourusername/react-jwt-utils",
    npm: "https://www.npmjs.com/package/react-jwt-utils",
    downloads: "1.8k weekly",
  },
  {
    title: "nextjs-api-helpers",
    description: "Collection of helper functions for Next.js API routes: rate limiting, error handling, validation, CORS, and common response patterns to speed up backend development.",
    tags: ["Next.js", "API", "Backend", "Utilities"],
    github: "https://github.com/yourusername/nextjs-api-helpers",
    npm: "https://www.npmjs.com/package/nextjs-api-helpers",
  },
];
