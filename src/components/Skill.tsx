"use client";
import React from "react";
import SkillCard from "./SkillCard";
import Flex from "@/layouts/Flex";
import { skills } from "@/layouts/seed";
import Link from "next/link";

const Skill = () => {
  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <div className="py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className='relative font-primary font-bold text-primary mb-10 inline-block
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-primary after:w-0
          hover:after:w-full after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat} className="space-y-4">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-[3px]">
                {cat}
              </h3>

              <Flex className="gap-3 flex-wrap justify-start">
                {skills
                  .filter((skill) => skill.category === cat)
                  .map((skill, index) => (
                    <SkillCard
                      key={index}
                      icon={skill.icon}
                      name={skill.name}
                      link={skill.link}
                      color={skill.color || "#333"}
                    />
                  ))}
              </Flex>
            </div>
          ))}
        </div>

        {/* <div className="text-center md:text-left mt-10">
          <Link href="/skills">
            <button className="text-primary font-primary cursor-pointer bg-transparent px-6 py-2 rounded-sm transition-all duration-200 border border-primary hover:bg-primary hover:text-white uppercase text-sm font-bold tracking-widest">
              View All Skills
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Skill;
