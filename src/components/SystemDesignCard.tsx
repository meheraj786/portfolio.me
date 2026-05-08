'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Layout, ArrowRight, Binary } from "lucide-react";

interface SystemDesignCardProps {
  title: string;
  description: string;
  github?: string | null;
  slug: string;
}

const SystemDesignCard: React.FC<SystemDesignCardProps> = ({
  title,
  description,
  github,
  slug,
}) => {
  return (
    <Link href={`/system-designs/${slug}`} className="block group">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 p-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon Area */}
          <div className="w-12 h-12 shrink-0 border border-secondary/30 bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background transition-all duration-300">
            <Binary size={24} />
          </div>

          {/* Content Area */}
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-primary font-bold text-white group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-[10px] font-primary text-offWhite/30 uppercase tracking-widest">
                <Layout size={12} />
                HLD_SPEC
              </div>
            </div>

            <div className="font-body text-sm text-offWhite/60 line-clamp-2 overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-primary/10">
              <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300 text-[10px] font-primary uppercase font-bold tracking-widest">
                Explore_Architecture
                <ArrowRight size={14} />
              </div>
              
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-offWhite/40 hover:text-primary transition-all"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <Github size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 -z-10" />
      </motion.div>
    </Link>
  );
};

export default SystemDesignCard;