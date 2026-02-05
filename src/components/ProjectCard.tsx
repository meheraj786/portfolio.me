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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  duration,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 ">
      {/* Left: Thumbnail */}
      <div className="w-full mr-5 md:w-48 h-32 relative shrink-0 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        {/* Title & Date */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold font-primary text-black">
            {title}
          </h3>
          <span className="text-xs text-background">{duration}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-background mt-1 font-body line-clamp-2">
          {description}
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
          <Flex className="text-background flex-row text-[18px] justify-end mt-3 w-full gap-x-3">
            <Link href="#">
              <FaGithub />
            </Link>
            <Link href="#">
              <FaLink />
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ProjectCard;
