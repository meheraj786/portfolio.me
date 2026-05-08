'use client'

import React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ZoomIn, GraduationCap, Calendar, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import image from "../../public/icCer.png";

const edu = [
  {
    id: 1,
    title: "MERN Stack Development",
    duration: "2025-2026",
    institute: "Creative IT Institute",
    certificate: image,
  },
  {
    id: 2,
    title: "MERN Stack Development",
    duration: "2025-2025",
    institute: "Interactive Cares",
    certificate: "https://res.cloudinary.com/dlrycnxnh/image/upload/v1777489532/Certificate_tomvqg.png",
  },
  {
    id: 3,
    title: "System Design: Theory to Implementation",
    duration: "2026-2026",
    institute: "Interactive Cares",
    certificate: "https://res.cloudinary.com/dlrycnxnh/image/upload/v1777489528/Certificate_1_q2qs9q.png",
  },
];

const Edu = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">07.</span>
            EDUCATION_&_CERTIFICATIONS
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {edu.map((item, idx) => (
            <Dialog key={item.id}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="terminal-container p-0! group overflow-hidden"
              >
                <div className="terminal-header">
                  <GraduationCap size={14} className="text-secondary" />
                  <span className="text-[10px] font-primary text-secondary/50 ml-2 uppercase tracking-widest">Training_Record_{item.id}</span>
                </div>
                
                <div className="p-6 flex justify-between items-center gap-4">
                  <div className="space-y-3 flex-1">
                    <h3 className="text-white font-primary font-bold text-sm md:text-base leading-tight">
                      {item.title}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-offWhite/60 text-[10px] font-primary">
                        <Landmark size={12} className="text-primary" />
                        {item.institute}
                      </div>
                      <div className="flex items-center gap-2 text-offWhite/40 text-[10px] font-primary">
                        <Calendar size={12} className="text-primary" />
                        {item.duration}
                      </div>
                    </div>
                  </div>

                  <DialogTrigger asChild>
                    <div className="relative w-20 h-20 shrink-0 border border-primary/20 cursor-pointer overflow-hidden group/img">
                      <Image
                        src={item.certificate}
                        alt="certificate"
                        fill
                        className="object-cover grayscale group-hover/img:grayscale-0 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                </div>
              </motion.div>

              <DialogContent className="max-w-4xl bg-background border-primary/20 p-0 overflow-hidden">
                <div className="terminal-header mb-0!">
                  <span className="text-[10px] font-primary text-primary/60 ml-2 uppercase tracking-widest">Preview_Mode: {item.title}</span>
                </div>
                <div className="relative aspect-[1.414/1] w-full">
                  <Image
                    src={item.certificate}
                    alt="certificate"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edu;

