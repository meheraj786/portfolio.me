'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Info, User, Code2, Server, Command } from "lucide-react";
import image from "../../public/meherajImg.png";

const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">02.</span>
          ABOUT_ME
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Terminal Window for Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/3"
        >
          <div className="border border-primary/30 bg-background/50 rounded-lg overflow-hidden group">
            {/* Terminal Header */}
            <div className="h-8 bg-primary/10 border-b border-primary/30 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="w-2 h-2 rounded-full bg-secondary/50" />
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <div className="ml-auto font-primary text-[10px] text-primary/50">profile.jpg</div>
            </div>
            
            <div className="relative aspect-square grayscale group-hover:grayscale-0 transition-all duration-700 p-4">
              <div className="absolute inset-0 border-[20px] border-background z-10" />
              <Image
                src={image}
                alt="Meheraj"
                fill
                className="object-cover"
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/20 -z-10" />
        </motion.div>

        {/* Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary font-primary text-sm uppercase tracking-wider">
              <User size={16} />
              <span>Bio_Report.exe</span>
            </div>
            
            <p className="text-offWhite/80 leading-relaxed font-body">
              Hi, I&apos;m <span className="text-primary font-bold">Meheraj</span> — a passionate full-stack developer 
              specializing in <span className="text-secondary">MERN</span> and <span className="text-secondary">PERN</span> stacks. 
              I build scalable, high-performance web applications with clean code, responsive UIs, and robust backends.
            </p>
            
            <p className="text-offWhite/80 leading-relaxed font-body">
              I&apos;ve successfully delivered multiple freelance projects — from startups to mid-sized businesses — including e-commerce platforms, SaaS dashboards, and real-time features. I also enjoy system design, performance optimization, and API architecture.
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              { icon: <Code2 size={18} />, title: "Full-Stack Dev", desc: "React, Node, Express, MongoDB/Postgres" },
              { icon: <Server size={18} />, title: "Architecture", desc: "System Design, HLD, Scalability" },
              { icon: <Command size={18} />, title: "Automation", desc: "CI/CD, Performance Tuning" },
              { icon: <Info size={18} />, title: "Problem Solving", desc: "Algorithm Optimization, Debugging" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 border border-primary/10 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center gap-3 text-primary mb-2">
                  {item.icon}
                  <h3 className="text-xs font-primary font-bold uppercase tracking-widest">{item.title}</h3>
                </div>
                <p className="text-[10px] text-offWhite/60 font-body uppercase tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-6">
            <button className="px-6 py-2 border border-primary text-primary font-primary text-xs hover:bg-primary hover:text-background transition-all duration-300 relative group overflow-hidden">
              <span className="relative z-10 uppercase tracking-widest flex items-center gap-2">
                Download_CV.pdf
              </span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-primary/20 group-hover:left-0 transition-all duration-500" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
