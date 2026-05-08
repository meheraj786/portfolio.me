'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Terminal, Cpu, Globe } from "lucide-react";
import img from "../../public/image.png";

const socials = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/meheraj786", label: "github.exe" },
  { id: 2, icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mehraj-h", label: "linkedin.exe" },
  { id: 3, icon: <FaTwitter />, link: "https://twitter.com/meherajhosen", label: "twitter.exe" },
  { id: 4, icon: <FaFacebook />, link: "https://www.facebook.com/mehrajh786", label: "facebook.exe" },
];

const Banner = () => {
  const [booting, setBooting] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Meheraj Hosen";

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!booting) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [booting]);

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between gap-12 py-10">
      <AnimatePresence>
        {booting && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-background flex flex-col items-center justify-center font-primary text-primary"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-2xl mb-4"
            >
              &gt; INITIALIZING_SYSTEM_
            </motion.div>
            <div className="w-64 h-2 border border-primary overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-primary mb-4">
          <Terminal size={14} className="animate-pulse" />
          <span>STATUS: OPERATIONAL</span>
        </div>

        <h1 className="text-white font-bold md:text-6xl text-4xl font-primary leading-tight">
          <span className="text-primary">&gt;</span> {typedText}
          <span className="animate-pulse">_</span>
        </h1>

        <div className="space-y-4 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
            className="flex gap-4 items-start"
          >
            <div className="p-2 border border-secondary/50 rounded bg-secondary/5 text-secondary">
              <Cpu size={20} />
            </div>
            <p className="text-offWhite/80 text-sm md:text-base leading-relaxed font-body">
              Passionate <span className="text-secondary">Software Engineer</span> specializing in 
              <span className="text-primary"> MERN Stack</span>. Architecting scalable, distributed 
              systems with a focus on high-level design and performance optimization.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7 }}
            className="flex gap-4 items-start"
          >
            <div className="p-2 border border-accent/50 rounded bg-accent/5 text-accent">
              <Globe size={20} />
            </div>
            <p className="text-offWhite/60 text-xs font-primary uppercase tracking-widest">
              Location: Dhaka, Bangladesh // Timezone: UTC+6
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {socials.map(({ id, icon, link, label }, index) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.1 }}
              className="group relative flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-background transition-all duration-300 font-primary text-xs"
            >
              {icon}
              <span className="hidden md:inline">{label}</span>
              <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="relative group"
      >
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-primary z-20 shadow-[0_0_15px_#00ff9f]"
          />
          
          {/* Cyber Frames */}
          <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
          <div className="absolute -inset-2 border border-secondary/20 pointer-events-none rotate-45" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-30" />

          <div className="absolute inset-0 overflow-hidden grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500">
            <Image
              fill
              className="object-cover opacity-80"
              src={img}
              alt="Meheraj Hosen"
              priority
            />
            {/* Digital Overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>

        {/* Data readout */}
        <div className="absolute -bottom-10 -right-4 font-primary text-[10px] text-primary/50 text-right space-y-1">
          <div>LAT: 23.8103° N</div>
          <div>LONG: 90.4125° E</div>
          <div>SYS_ID: MH_001</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
