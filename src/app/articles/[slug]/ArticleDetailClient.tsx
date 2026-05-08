'use client'

import Image from "next/image";
import { Calendar, User, ArrowLeft, Share2, Terminal as TerminalIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";

export default function ArticleDetailClient({ article, formattedDate }: { article: any, formattedDate: string }) {
  return (
    <main className="min-h-screen py-12">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Navigation / Status */}
        <div className="flex items-center justify-between font-primary text-[10px] text-primary/60 uppercase tracking-widest">
          <Link href="/articles" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft size={14} />
            cd .. /articles
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            READING: {article.slug}.md
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="terminal-container p-1!">
          <div className="terminal-header">
            <div className="w-2 h-2 rounded-full bg-accent/50" />
            <div className="w-2 h-2 rounded-full bg-secondary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="ml-auto font-primary text-[10px] text-primary/50 flex items-center gap-2">
              <Share2 size={10} />
              DATA_VISUALIZATION_01
            </div>
          </div>
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            <div className="absolute inset-0 bg-scanline pointer-events-none opacity-10" />
          </div>
        </div>

        {/* Title Block */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-secondary font-primary text-xs tracking-widest uppercase">
            <TerminalIcon size={14} />
            <span>Article_Entry_v1.0</span>
          </div>
          <h1 className="leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-offWhite/50 font-primary text-[10px] uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <User size={14} className="text-primary" />
              <span>Author: Meheraj_Hosen</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-primary" />
              <span>Timestamp: {formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 border border-primary/20 bg-primary/5 text-primary">
                {article.category}
              </span>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/10" />

        {/* Content Area */}
        <div className="terminal-container bg-background/30!">
           <div className="prose prose-invert max-w-none font-body text-offWhite/80 leading-relaxed text-sm md:text-base">
            <div 
              className="prose-headings:font-primary prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary transition-colors"
              dangerouslySetInnerHTML={{ __html: article.description }} 
            />
          </div>
        </div>

        {/* Interaction Footer */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-primary text-[10px] text-primary/40 uppercase tracking-widest">Share_Entry_To_Grid</p>
              <ShareButtons
                articleUrl={`${process.env.NEXT_PUBLIC_BASE_URL || "http://meherajdev.vercel.app"}/articles/${article.slug}`}
                title={article.title}
                description={article.title}
              />
            </div>
            
            <Link href="/articles">
              <button className="px-6 py-2 border border-primary/50 text-primary font-primary text-xs hover:bg-primary hover:text-background transition-all duration-300 flex items-center gap-2 group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                RETURN_TO_DATABASE
              </button>
            </Link>
          </div>
        </div>
      </motion.article>
    </main>
  );
}
