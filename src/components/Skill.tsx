'use client'

import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "@/layouts/seed";
import { Cpu, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Skill = () => {
  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">01.</span>
            CORE_CAPABILITIES
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, catIdx) => (
            <motion.div 
              key={cat} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="terminal-container p-0! overflow-hidden"
            >
              <div className="terminal-header">
                <Cpu size={14} className="text-secondary" />
                <span className="text-[10px] font-primary text-secondary/50 ml-2 uppercase tracking-widest">{cat}_MODULES</span>
              </div>
              
              <div className="p-6 flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === cat)
                  .map((skill, index) => (
                    <SkillCard
                      key={index}
                      icon={skill.icon}
                      name={skill.name}
                      link={skill.link}
                      color={skill.color || "#00ff9f"}
                    />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Line */}
        <div className="flex items-center gap-4 pt-6 text-[10px] font-primary text-primary/30 uppercase tracking-[0.3em]">
          <Terminal size={14} />
          <span>Skills_Index: 100%_Mapped // Ready_For_Deployment</span>
        </div>
      </div>
    </section>
  );
};

export default Skill;

