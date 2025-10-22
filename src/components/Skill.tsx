"use client";
import React from "react";
import SkillCard from "./SkillCard";
import Flex from "@/layouts/Flex";
import { skills } from "@/layouts/seed";

const Skill = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2
          className='relative font-primary text-3xl font-bold text-black mb-12
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <Flex className="gap-5">
          {skills.slice(0,8).map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              link={skill.link}
            />
          ))}
        </Flex>
        <button className='text-white font-body cursor-pointer bg-background px-5 py-1 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black'>View More</button>
      </div>
    </div>
  );
};

export default Skill;
