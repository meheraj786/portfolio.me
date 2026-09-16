"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Flex from "@/layouts/Flex";
import { FaGithub, FaLink } from "react-icons/fa";
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
  tags = [],
  duration,
  git,
  link,
  slug,
}) => {
  const cleanDescription = description
    ? description.replace(/<[^>]*>?/gm, "")
    : "";

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 w-full overflow-hidden">
      <Link
        href={`/projects/${slug}`}
        className="w-full md:w-48 h-48 md:h-32 relative shrink-0 rounded-xl overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex-1 w-full min-w-0">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/projects/${slug}`}>
            <h3 className="text-lg font-semibold font-primary text-black hover:text-gray-600 transition-colors">
              {title}
            </h3>
          </Link>
          <span className="text-xs text-gray-500 shrink-0">{duration}</span>
        </div>

        <Link href={`/projects/${slug}`}>
          <p className="text-sm text-gray-600 mt-1 font-body line-clamp-2">
            {cleanDescription}
          </p>
        </Link>

        <Flex className="mt-3 flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-body bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md border border-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-gray-600 text-[18px] gap-x-3 ml-auto">
            {git && (
              <Link
                href={git}
                target="_blank"
                className="hover:text-black transition-colors"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </Link>
            )}
            {link && (
              <Link
                href={link}
                target="_blank"
                className="hover:text-black transition-colors"
                aria-label="Live Demo"
              >
                <FaLink />
              </Link>
            )}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default ProjectCard;
