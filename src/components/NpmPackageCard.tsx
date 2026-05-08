'use client'

import React from "react";
import { motion } from "framer-motion";
import { Github, Package, ExternalLink, Box } from "lucide-react";
import Link from "next/link";

interface NpmPackageCardProps {
  title: string;
  description: string;
  tags?: string[];
  github: string;
  npm: string;
  downloads?: string;
}

const NpmPackageCard: React.FC<NpmPackageCardProps> = ({
  title,
  description,
  tags = [],
  github,
  npm,
  downloads,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 p-5 group"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Package size={18} className="text-primary" />
            <h3 className="text-lg font-primary font-bold text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          {downloads && (
            <div className="text-[10px] font-primary text-secondary/60 bg-secondary/5 px-2 py-0.5 border border-secondary/20 uppercase tracking-tighter">
              {downloads}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="font-body text-sm text-offWhite/70 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="text-[9px] font-primary text-primary/40 uppercase tracking-widest"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
          <div className="flex items-center gap-2 font-primary text-[10px] text-primary/30 uppercase">
            <Box size={12} />
            <span>NPM_PACKAGE_V1.0</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href={github} 
              target="_blank"
              className="text-offWhite/40 hover:text-primary transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link 
              href={npm} 
              target="_blank"
              className="text-offWhite/40 hover:text-secondary transition-colors" 
            >
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Terminal decorative bits */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40" />
    </motion.div>
  );
};

export default NpmPackageCard;