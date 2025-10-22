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
