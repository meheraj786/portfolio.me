'use client'

import { ArrowLeft, GithubIcon, Layout, Terminal, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export default function CaseStudyDetailClient({ systemDesign }: { systemDesign: any }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-10"
    >
      {/* Navigation */}
      <div className="flex items-center justify-between font-primary text-[10px] text-primary/60 uppercase tracking-widest">
        <Link href="/system-designs" className="flex items-center gap-2 hover:text-primary transition-colors">
          <ArrowLeft size={14} />
          cd .. /system-designs
        </Link>
        <div className="flex items-center gap-2">
          <Layout size={14} />
          DESIGN_ID: {systemDesign._id?.toString().slice(-8) || "INTERNAL"}
        </div>
      </div>

      {/* Header Block */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-secondary font-primary text-xs tracking-widest uppercase">
          <Terminal size={14} />
          <span>High_Level_Design_Document</span>
        </div>
        <h1 className="leading-tight">
          {systemDesign.title}
        </h1>
        <div className="h-1 w-20 bg-primary/30" />
      </div>

      {/* Content Window */}
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="w-2 h-2 rounded-full bg-accent/50" />
          <div className="w-2 h-2 rounded-full bg-secondary/50" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="ml-auto font-primary text-[10px] text-primary/50">architecture_spec.v2</div>
        </div>
        
        <div className="prose prose-invert max-w-none font-body text-offWhite/80 leading-relaxed">
          <div 
            className="prose-headings:text-primary prose-strong:text-secondary"
            dangerouslySetInnerHTML={{ __html: systemDesign.description }} 
          />
        </div>
      </div>

      {/* Actions */}
      {systemDesign.githubLink && (
        <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
          <Link
            href={systemDesign.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-secondary text-secondary font-primary text-xs hover:bg-secondary hover:text-background transition-all duration-300"
          >
            <GithubIcon size={18} />
            <span className="uppercase tracking-[0.2em] font-bold">Inspect Source Code</span>
            <div className="absolute -inset-1 border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity scale-105" />
          </Link>

          <div className="flex items-center gap-2 font-primary text-[10px] text-offWhite/40">
            <Code size={14} />
            <span>STACK_ANALYSIS: COMPLETE</span>
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="pt-12 border-t border-primary/10">
        <Link href="/system-designs">
          <button className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-primary text-[10px] uppercase tracking-widest">
            <ArrowLeft size={12} />
            Return_to_Vault
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
