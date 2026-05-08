'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FileText, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags?: string[];
  date: string;
  github?: string;
  link?: string;
  slug: string;
  author?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  date,
  slug,
  author = "Meheraj_H",
}) => {
  return (
    <Link href={"/articles/" + slug} className="block group">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative border border-primary/20 bg-primary/5 hover:border-primary/50 transition-all duration-300 p-4"
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
          <div className="relative w-full md:w-48 h-32 shrink-0 overflow-hidden border border-primary/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                <h3 className="text-lg font-primary font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-primary text-offWhite/40 uppercase">
                <Calendar size={12} />
                {date}
              </div>
            </div>

            <div className="font-body text-sm text-offWhite/60 line-clamp-2">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-primary/10">
              <div className="flex items-center gap-3 text-[10px] font-primary text-primary/60 uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  <span>{author}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300 text-[10px] font-primary uppercase font-bold tracking-widest">
                Read_More
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Terminal corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />
      </motion.div>
    </Link>
  );
};

export default ArticleCard;