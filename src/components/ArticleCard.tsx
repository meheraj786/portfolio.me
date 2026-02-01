"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Flex from "@/layouts/Flex";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];            
  date: string;               
  github?: string;            
  link: string;  
  slug: string;             
  author?: string;             
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  tags,
  date,
  slug,
  author = "By Meheraj Hosen",  
}) => {
  return (
    <Link href={"/articles/" + slug} >
    <div className="flex group flex-col md:flex-row cursor-pointer items-start gap-4 bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
      {/* Left: Thumbnail / Cover Image */}
      <div className="w-full md:w-48 h-32 relative shrink-0 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1">
        {/* Title & Date + Author */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold font-primary line-clamp-1 pr-2 text-black">
              {title}
            </h3>
            {author && (
              <p className="text-sm text-gray-600 mt-0.5 font-body">
                {author}
              </p>
            )}
          </div>
          <span className="text-xs  text-background">{date}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-background mt-2 font-body line-clamp-3">
          {description}
        </p>

        {/* Tags + Links */}
        <Flex className="mt-3 justify-between items-end">
          {/* Tags */}
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
      </div>
    </div>
    </Link>
  );
};

export default ArticleCard;