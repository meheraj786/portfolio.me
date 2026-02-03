"use client";
import React from "react";
import SkillCard from "./SkillCard";
import Flex from "@/layouts/Flex";
import { skills } from "@/layouts/seed";

const Skill = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2
          className='relative font-primary  font-bold text-black mb-3
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <Flex className="md:gap-5 gap-2 justify-center md:justify-between flex-row flex-wrap">
          {skills.slice(0, 8).map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              link={skill.link}
            />
          ))}
        </Flex>
        <button className="text-white font-body cursor-pointer bg-background px-5 py-1 mt-10 mx-auto rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black">
          View More
        </button>
      </div>
    </div>
  );
};

export default Skill;
