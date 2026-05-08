'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, FileCode, Clock } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  duration: string;
  git: string;
  link: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  duration,
  git,
  link,
  slug,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 p-1"
    >
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Left: Thumbnail with "Scanning" Effect */}
        <Link
          href={`/projects/${slug}`}
          className="relative w-full md:w-56 h-40 shrink-0 overflow-hidden border border-primary/10"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
          {/* Scanning line for project */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-primary/40 z-10 pointer-events-none"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </Link>

        {/* Right: Content - IDE Style */}
        <div className="flex-1 space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <FileCode size={16} className="text-secondary" />
              <Link href={`/projects/${slug}`}>
                <h3 className="text-lg font-primary font-bold text-white group-hover:text-primary transition-colors">
                  {title}.tsx
                </h3>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-primary text-offWhite/40 uppercase">
              <Clock size={12} />
              {duration}
            </div>
          </div>

          <div className="font-body text-sm text-offWhite/70 line-clamp-2 min-h-[2.5rem]">
             <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-primary bg-primary/10 text-primary px-2 py-0.5 border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-primary/10">
            <div className="flex items-center gap-1 text-[10px] font-primary text-primary/60">
              <Folder size={12} />
              <span>root/projects/{slug}</span>
            </div>
            
            <div className="flex gap-4">
              <Link 
                href={git} 
                target="_blank"
                className="text-offWhite/50 hover:text-primary transition-colors"
                title="View Source"
              >
                <Github size={18} />
              </Link>
              <Link 
                href={link} 
                target="_blank"
                className="text-offWhite/50 hover:text-secondary transition-colors"
                title="Live Preview"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hover corner decorations */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/0 group-hover:border-primary/60 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/0 group-hover:border-primary/60 transition-all duration-300" />
    </motion.div>
  );
};

export default ProjectCard;
