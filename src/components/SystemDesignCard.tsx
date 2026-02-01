"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface SystemDesignCardProps {
  title: string;
  description: string;
  keyFeatures: string[];
  diagramUrl: string;
  github?: string | null;
  learnings: string;
  slug: string;
}

const SystemDesignCard: React.FC<SystemDesignCardProps> = ({
  title,
  description,
  keyFeatures,
  github,
  slug,
  learnings,
}) => {
  return (
    <Link href={`/system-designes/${slug}`}>
    <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Left: Diagram Image */}
      {/* <div className="w-full md:w-64 h-48 relative shrink-0 rounded-xl overflow-hidden">
        <Image
          src={diagramUrl}
          alt={`${title} Architecture Diagram`}
          fill
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div> */}

      {/* Right: Content */}
      <div className="flex-1">
        <h3 className=" font-semibold font-primary text-black mb-2">
          {title}
        </h3>

        <p className="text-sm text-background font-body mb-4 line-clamp-3">
          {description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-background mb-2">Key Components & Choices:</h4>
          <ul className="list-disc pl-5 text-sm text-background font-body">
            {keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <p className="text-sm text-gray-600 italic mb-4">
          <strong>Learnings:</strong> {learnings}
        </p>

        {/* Links */}
        {github && (
          <div className="flex justify-end">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background text-xl hover:text-blue-600 transition-colors"
            >
              <FaGithub />
            </Link>
          </div>
        )}
      </div>
    </div>
    </Link>
  );
};

export default SystemDesignCard;