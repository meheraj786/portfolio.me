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
  tags,
  duration,
  git,
  link,
  slug,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 ">
      {/* Left: Thumbnail */}
      <Link
        href={`/projects/${slug}`}
        className="w-full mr-5 md:w-48 h-32 relative shrink-0 rounded-xl overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Right: Content */}
      <div className="flex-1">
        {/* Title & Date */}
        <div className="flex justify-between items-start">
          <Link href={`/projects/${slug}`}>
            <h3 className="text-lg font-semibold font-primary text-black hover:text-blue-600 transition-colors">
              {title}
            </h3>
          </Link>
          <span className="text-xs text-background">{duration}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-background mt-1 font-body line-clamp-2">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>

        {/* Tags */}
        <Flex className="mt-2">
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-body bg-background text-gray-300 px-2 py-1 rounded-md border border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <Flex className="text-background flex-row text-[18px] justify-end  w-full gap-x-3">
            <Link href={git} target="_blank">
              <FaGithub />
            </Link>
            <Link href={link} target="_blank">
              <FaLink />
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ProjectCard;
