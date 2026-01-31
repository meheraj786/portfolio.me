"use client";
import React from "react";
import Flex from "@/layouts/Flex";
import { skills } from "@/layouts/seed";
import SkillCard from "@/components/SkillCard";

const Skills = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className='relative font-primary  font-bold text-black mb-3
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <Flex className="gap-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              link={skill.link}
            />
          ))}
        </Flex>
    </div>
    </div>
  );
};

export default Skills;
