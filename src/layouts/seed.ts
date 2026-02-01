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
      "Learn how to create buttery-smooth custom cursors using requestAnimationFrame, useRef, and GPU-accelerated transforms without unnecessary React re-renders.",
    content: `
<h1>Building a Smooth Custom Mouse Follower in React & Tailwind</h1>

<p>
Custom mouse followers add a premium, interactive feel to modern websites like
portfolios, creative agencies, and SaaS landing pages.
</p>

<p>
Most implementations feel laggy because they rely on React state updates on every
<code>mousemove</code> event.
</p>

<h2>Why Traditional Approaches Lag</h2>
<ul>
  <li>React state updates cause frequent re-renders</li>
  <li>Mouse events fire dozens of times per second</li>
  <li>Layout and paint operations slow things down</li>
</ul>

<h2>The Solution</h2>
<p>
We use <strong>requestAnimationFrame</strong>, <strong>useRef</strong>, and direct DOM
manipulation to keep React out of the animation loop.
</p>

<h2>MouseFollower Component</h2>

<pre><code>
"use client";
import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const raf = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      cursor.style.transform = \`translate(\${cx - 20}px, \${cy - 20}px)\`;
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    raf();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return &lt;div ref={cursorRef} /&gt;;
}
</code></pre>

<h2>Performance Tips</h2>
<ul>
  <li>Use <code>will-change: transform</code> for GPU acceleration</li>
  <li>Easing between 0.12–0.18 feels most natural</li>
  <li>Hide custom cursor on mobile devices</li>
</ul>

<p>
This approach results in native-level smooth cursor animation without hurting
performance.
</p>
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
      "A complete JWT guide covering access tokens, refresh tokens, XSS/CSRF protection, secure storage, and best practices.",
    content: `
<h1>The JWT Handbook: Secure Authentication in Modern Web Apps</h1>

<p>
JWT (JSON Web Token) is the de-facto standard for authentication in modern SPAs and APIs.
</p>

<h2>JWT Structure</h2>
<p><code>Header.Payload.Signature</code></p>

<ul>
  <li><strong>Header</strong>: Algorithm and token type</li>
  <li><strong>Payload</strong>: User claims</li>
  <li><strong>Signature</strong>: Verifies integrity</li>
</ul>

<h2>Secure Login Implementation</h2>

<pre><code>
const jwt = require("jsonwebtoken");

app.post("/login", (req, res) => {
  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  res.json({ accessToken });
});
</code></pre>

<h2>Security Best Practices</h2>
<ul>
  <li>Never store JWT in localStorage</li>
  <li>Use HttpOnly cookies for refresh tokens</li>
  <li>Keep access tokens short-lived</li>
</ul>

<p>
Proper JWT handling is critical for application security.
</p>
    `,
    slug: "the-jwt-handbook-secure-authentication-in-modern-web-apps",
    image: "/images/blog/jwt-handbook.jpg",
    tags: ["JWT", "Authentication", "Security"],
    date: "October 2025",
    link: "https://yourblog.com/jwt-handbook",
    github: "https://github.com/yourusername/jwt-auth-guide",
    author: "Meheraj Hosen",
    readTime: "9 min read",
  },

  {
    title: "Frontend Trends to Master in 2026",
    description:
      "A look into Astro, TanStack, React Compiler, and performance-first frontend trends.",
    content: `
<h1>Frontend Trends to Master in 2026</h1>

<p>
Frontend development in 2026 focuses heavily on performance, DX, and scalability.
</p>

<h2>Astro Islands Architecture</h2>
<p>
Astro ships zero JavaScript by default and hydrates only what is needed.
</p>

<h2>TanStack Ecosystem</h2>
<ul>
  <li>TanStack Query</li>
  <li>TanStack Table</li>
  <li>TanStack Router</li>
</ul>

<h2>React Compiler</h2>
<p>
React Compiler automatically memoizes components, removing the need for manual
<code>useMemo</code> and <code>useCallback</code>.
</p>

<p>
2026 rewards developers who focus on performance-first thinking.
</p>
    `,
    slug: "frontend-trends-to-master-in-2026",
    image: "/images/blog/frontend-trends-2026.jpg",
    tags: ["Frontend", "React", "Astro"],
    date: "December 2025",
    link: "https://yourblog.com/frontend-trends-2026",
    github: null,
    author: "Meheraj Hosen",
    readTime: "7 min read",
  },

  {
    title: "System Design for Beginners: From Monolith to Microservices",
    description:
      "A beginner-friendly system design guide covering scaling, caching, queues, and architecture patterns.",
    content: `
<h1>System Design for Beginners</h1>

<p>
System design is about understanding trade-offs and evolving systems gradually.
</p>

<h2>Monolith Architecture</h2>
<p>
Single codebase and single database—great for MVPs.
</p>

<h2>Scaling Strategies</h2>
<ul>
  <li>Vertical Scaling</li>
  <li>Horizontal Scaling</li>
  <li>Load Balancers</li>
</ul>

<h2>Caching Layer</h2>
<p>
Redis helps reduce database load significantly.
</p>

<h2>Message Queues</h2>
<p>
Use Kafka or RabbitMQ for asynchronous processing.
</p>
    `,
    slug: "system-design-for-beginners",
    image: "/images/blog/system-design-basics.jpg",
    tags: ["System Design", "Backend"],
    date: "November 2025",
    link: "https://yourblog.com/system-design-intro",
    github: "https://github.com/yourusername/system-design-examples",
    author: "Meheraj Hosen",
    readTime: "10 min read",
  },

  {
    title: "Building Progressive Web Apps (PWAs) in 2025",
    description:
      "A complete guide to offline-first, installable web apps using service workers.",
    content: `
<h1>Building Progressive Web Apps (PWAs)</h1>

<p>
PWAs combine the best features of web and native applications.
</p>

<h2>Core Features</h2>
<ul>
  <li>Offline support</li>
  <li>Installable</li>
  <li>Fast loading</li>
</ul>

<h2>Service Worker Example</h2>
<pre><code>
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request));
});
</code></pre>

<p>
PWAs significantly improve user experience on slow networks.
</p>
    `,
    slug: "building-progressive-web-apps",
    image: "/images/blog/pwa-guide.jpg",
    tags: ["PWA", "Offline"],
    date: "September 2025",
    link: "https://yourblog.com/pwa-complete-guide",
    github: "https://github.com/yourusername/pwa-starter",
    author: "Meheraj Hosen",
    readTime: "12 min read",
  },
];

export const caseStudies = [
  {
    slug: "scalable-ride-sharing-platform-pathao-uber",
    title: "Scalable Ride-Sharing Platform (like Pathao/Uber)",
    description: "Designed and implemented a high-level architecture for a ride-sharing service handling 1M+ daily rides with low latency. Covered microservices, real-time matching, payment integration, fault tolerance, and scaling strategies.",
    keyFeatures: [
      "Microservices (User, Ride, Driver, Payment)",
      "Kafka for event-driven communication",
      "Redis caching + PostgreSQL + MongoDB",
      "Load balancing, Circuit breakers, Rate limiting",
      "Real-time updates via WebSockets",
    ],
    diagramUrl: "/images/system-design/ride-sharing-diagram.png", 
    github: "https://github.com/meheraj786/ride-sharing-system-design", 
    learnings: "Learned trade-offs between monolith vs microservices, eventual consistency in distributed systems.",
  },
  {
slug: "ai-powered-recommendation-system",
    title: "AI-Powered Recommendation System",
    description: "Built a scalable recommendation engine similar to Netflix/YouTube suggestions. Focused on collaborative filtering, content-based filtering, hybrid approach, and handling cold-start problems.",
    keyFeatures: [
      "User-Item matrix with collaborative filtering",
      "TensorFlow/PyTorch for ML models",
      "Cassandra/Redis for fast retrieval",
      "A/B testing framework",
      "Offline batch processing + real-time updates",
    ],
    diagramUrl: "/images/system-design/recommendation-system-diagram.png",
    github: "https://github.com/meheraj786/ai-recommendation-system",
    learnings: "Understood data pipelines, model serving, personalization at scale.",
  },
  {
slug: "youtube-like-video-streaming-platform",
    title: "YouTube-like Video Streaming Platform",
    description: "High-level design for a video upload, processing, storage, and streaming service. Handled transcoding, CDN distribution, adaptive bitrate, search, and recommendations.",
    keyFeatures: [
      "Video upload + transcoding pipeline (FFmpeg/Lambda)",
      "S3 + CloudFront CDN",
      "Elasticsearch for search",
      "Microservices for metadata, comments, likes",
      "DASH/HLS streaming protocols",
    ],
    diagramUrl: "/images/system-design/youtube-clone-diagram.png",
    github: null,
    learnings: "Mastered content delivery networks, eventual consistency, and high-throughput systems.",
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
