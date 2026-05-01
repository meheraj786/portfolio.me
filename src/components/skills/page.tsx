"use client";
import React from "react";
import Flex from "@/layouts/Flex";
import { skills } from "@/layouts/seed";
import SkillCard from "@/components/SkillCard";

const categories = ["Frontend", "Backend", "Database", "Tools"];

const Skill = () => {
  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className='relative font-primary font-bold text-black mb-10 inline-block
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-full after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <div key={cat} className="flex flex-col gap-4">
              <h3 className="text-gray-500 text-[11px] font-bold uppercase tracking-[3px] border-b border-gray-200 pb-1 w-fit">
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
      </div>
    </div>
  );
};

export default Skill;