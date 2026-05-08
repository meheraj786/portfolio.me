'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Terminal, Code2 } from "lucide-react";
import image from "../../../public/meherajImg.png";
import Skill from "@/components/Skill";

const AboutPage = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-4 mb-12">
        <h1 className="text-primary font-primary text-3xl md:text-4xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">02.</span>
          WHO_AM_I
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-full md:w-1/3"
        >
          <div className="border border-primary/30 bg-background/50 rounded-lg overflow-hidden group">
            <div className="h-8 bg-primary/10 border-b border-primary/30 flex items-center px-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="w-2 h-2 rounded-full bg-secondary/50" />
              <div className="w-2 h-2 rounded-full bg-primary/50" />
              <div className="ml-auto font-primary text-[10px] text-primary/50">about_me.sys</div>
            </div>
            
            <div className="relative aspect-square grayscale group-hover:grayscale-0 transition-all duration-700 p-4">
              <div className="absolute inset-0 border-[20px] border-background z-10" />
              <Image
                src={image}
                alt="Meheraj"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-secondary font-primary text-sm uppercase tracking-wider">
              <Terminal size={16} />
              <span>System_Identification</span>
            </div>
            
            <p className="text-offWhite/80 leading-relaxed font-body">
              I&apos;m <span className="text-primary font-bold">Meheraj</span> — a Full Stack Developer based in Dhaka, Bangladesh. I
              specialize in building modern web applications using the <span className="text-secondary">MERN</span> and
              <span className="text-secondary"> PERN</span> stack.
            </p>
            
            <p className="text-offWhite/80 leading-relaxed font-body">
              From designing beautiful interfaces with React and Tailwind to creating robust backends with Node.js, Express, and
              databases like MongoDB or PostgreSQL — I enjoy every part of the journey. I&apos;m deeply interested in writing clean, maintainable code
              and understanding how large-scale systems work.
            </p>

            <p className="text-offWhite/80 leading-relaxed font-body">
              Constantly learning and experimenting with new tools and best practices is what keeps me
              motivated. If you&apos;re working on something interesting or just want
              to connect, don&apos;t hesitate to say hi!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="flex items-center gap-3 text-offWhite/60">
              <MapPin size={18} className="text-primary" />
              <span className="font-primary text-xs uppercase tracking-widest">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-offWhite/60">
              <Code2 size={18} className="text-primary" />
              <span className="font-primary text-xs uppercase tracking-widest">Software Engineer</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Skill />
    </div>
  );
};

export default AboutPage;
