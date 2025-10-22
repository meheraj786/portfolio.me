'use client'
import React from "react";
import { Code2, Palette, Database, Smartphone, Zap, Cpu, Globe, Layers } from "lucide-react";


interface SkillCardProps {
  icon: React.ElementType;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name }) => {
  return (
    <div className="group relative w-22 h-22 bg-background  rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:rotate-10 hover:-translate-y-2  hover:scale-105 cursor-pointer">
      {/* Floating Icon */}
      <div className="text-white text-4xl mb-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        <Icon />
      </div>
      {/* Skill Name */}
      <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-all duration-300">
        {name}
      </p>
    </div>
  );
};



const Skill = () => {
  const skills = [
    { icon: Code2, name: "Coding" },
    { icon: Palette, name: "Design" },
    { icon: Database, name: "Database" },
    { icon: Smartphone, name: "Mobile" },
    { icon: Zap, name: "Speed" },
    { icon: Cpu, name: "AI/ML" },
    { icon: Globe, name: "Web" },
    { icon: Layers, name: "Stack" },
  ];
  
  return (
    <div className="min-h-screen  py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className='relative text-3xl font-bold text-black mb-12
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
        >
          &#123; My Skills &#125;
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;