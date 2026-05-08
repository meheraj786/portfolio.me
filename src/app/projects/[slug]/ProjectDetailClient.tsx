'use client'

import Image from "next/image";
import { Github, ExternalLink, ArrowLeft, Terminal, Cpu, Box, Code } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectDetailClient({ project }: { project: any }) {
  return (
    <main className="min-h-screen py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4 flex-1">
             <div className="flex items-center gap-2 text-primary/60 font-primary text-[10px] uppercase tracking-widest">
              <Link href="/projects" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft size={12} /> PROJECTS
              </Link>
              <span>/</span>
              <span className="text-secondary">{project.slug}.exe</span>
            </div>
            
            <h1 className="leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, idx: number) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 border border-primary/20 bg-primary/5 text-primary font-primary text-[10px] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={project.githubLink} target="_blank" className="group">
              <button className="flex items-center gap-2 px-6 py-2 border border-primary/50 text-primary font-primary text-xs hover:bg-primary hover:text-background transition-all duration-300">
                <Github size={16} />
                SOURCE_CODE
              </button>
            </Link>
            <Link href={project.liveLink} target="_blank">
              <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-background font-primary text-xs font-bold hover:bg-white transition-all duration-300">
                <ExternalLink size={16} />
                LIVE_DEMO
              </button>
            </Link>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((image: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="terminal-container p-1!"
            >
              <div className="terminal-header">
                <div className="ml-auto font-primary text-[10px] text-primary/40 uppercase tracking-tighter">
                  IMG_BUFFER_{idx + 1}.RAW
                </div>
              </div>
              <div className="relative h-72 md:h-96 overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - ${idx + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-scanline pointer-events-none opacity-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specification Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 terminal-container">
            <div className="terminal-header">
              <Terminal size={14} className="text-primary" />
              <span className="text-[10px] font-primary text-primary/50 ml-2">PROJECT_DESCRIPTION.md</span>
            </div>
            <div className="prose prose-invert max-w-none font-body text-offWhite/80">
              <div 
                className="prose-headings:text-primary prose-strong:text-secondary prose-a:text-secondary"
                dangerouslySetInnerHTML={{ __html: project.description }} 
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="terminal-container">
              <div className="terminal-header">
                <Cpu size={14} className="text-secondary" />
                <span className="text-[10px] font-primary text-secondary/50 ml-2">SYSTEM_REQUIREMENTS</span>
              </div>
              <ul className="space-y-3 font-primary text-[10px] text-offWhite/60 uppercase tracking-widest">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary" />
                  RUNTIME: NODE_JS_v20+
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary" />
                  UI_ENGINE: REACT_18
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary" />
                  STYLING: TAILWIND_V4
                </li>
              </ul>
            </div>

            <div className="terminal-container bg-primary/5!">
              <div className="terminal-header border-primary/10!">
                <Box size={14} className="text-primary/40" />
                <span className="text-[10px] font-primary text-primary/40 ml-2">METRICS</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2">
                  <div className="text-primary font-primary text-lg font-bold leading-none">100%</div>
                  <div className="text-[8px] text-offWhite/30 uppercase mt-1">Efficiency</div>
                </div>
                <div className="text-center p-2">
                  <div className="text-secondary font-primary text-lg font-bold leading-none">A+</div>
                  <div className="text-[8px] text-offWhite/30 uppercase mt-1">Audit</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Nav */}
        <div className="flex justify-between items-center pt-12 border-t border-primary/10">
          <Link href="/projects">
            <button className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-primary text-[10px] uppercase tracking-widest">
              <ArrowLeft size={12} />
              Return_to_Projects_List
            </button>
          </Link>
          <div className="flex items-center gap-2 font-primary text-[10px] text-primary/20 tracking-tighter">
            <Code size={12} />
            END_OF_MODULE
          </div>
        </div>
      </motion.div>
    </main>
  );
}
