"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface SystemDesignCardProps {
  title: string;
  description: string;
  keyFeatures?: string[];
  diagramUrl?: string;
  github?: string | null;
  learnings?: string;
  slug: string;
}

const SystemDesignCard: React.FC<SystemDesignCardProps> = ({
  title,
  description,
  // keyFeatures,
  github,
  slug,
  // learnings,
}) => {
  return (
    <Link href={`/system-designs/${slug}`} className="block group">
      <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
        {/* Content Area - min-w-0 is CRITICAL for flex containers to prevent overflow */}
        <div className="flex-1 min-w-0 w-full">
          <h3 className="font-semibold text-lg text-black mb-2 group-hover:text-gray-500 transition-colors">
            {title}
          </h3>

          {/* 
            Fixed: Changed from <p> to <div> because dangerouslySetInnerHTML 
            can contain block elements. Line-clamp is applied to this container.
          */}
          <div className="text-sm text-gray-600 line-clamp-3 overflow-hidden break-words">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500 group-hover:underline">
              Read Case Study →
            </span>
            
            {github && (
              <div className="flex justify-end pt-2">
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all"
                  onClick={(e) => e.stopPropagation()} // Prevent card click when clicking GitHub icon
                >
                  <FaGithub className="text-xl" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SystemDesignCard;