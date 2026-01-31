"use client";
import React from "react";
import Flex from "@/layouts/Flex";
import { FaGithub, FaNpm } from "react-icons/fa"; // FaNpm আছে react-icons এ
import Link from "next/link";

interface NpmPackageCardProps {
  title: string;               // Package name, e.g. "smooth-cursor-follower"
  description: string;
  tags?: string[];             // optional: ["React", "Animation", "UI"]
  github: string;              // GitHub repo URL
  npm: string;                 // Full NPM page URL, e.g. "https://www.npmjs.com/package/smooth-cursor-follower"
  downloads?: string;          // optional: "1.2k weekly downloads"
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
    <div className="flex flex-col bg-white rounded-2xl p-6 pb-2 hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Title & Downloads/Date */}
      <div className="flex justify-between items-start mb-2">
        <h3 className=" font-semibold font-primary text-black">
          {title}
        </h3>
        {downloads && (
          <span className="text-xs text-gray-500 font-body">
            {downloads}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-background mt-1 font-body line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <Flex className="mt-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-body bg-background text-gray-300 px-2 py-1 rounded-md border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </Flex>
      )}

      {/* Links */}
      <Flex className=" justify-end items-center gap-x-4 text-background text-[20px]">
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaGithub size={18} />
        </Link>
        <Link
          href={npm}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 transition-colors" 
        >
          <FaNpm size={20} />
        </Link>
      </Flex>
    </div>
  );
};

export default NpmPackageCard;