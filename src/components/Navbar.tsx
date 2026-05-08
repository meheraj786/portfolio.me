'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal, Shield, Menu, X } from "lucide-react";
import Container from "@/layouts/Container";

const navItems = [
  { name: "HOME", path: "/", id: "01" },
  { name: "ABOUT", path: "/about", id: "02" },
  { name: "PROJECTS", path: "/projects", id: "03" },
  { name: "SYSTEM_DESIGNS", path: "/system-designs", id: "04" },
  { name: "ARTICLES", path: "/articles", id: "05" },
  { name: "CONTACT", path: "/contact", id: "06" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-primary/20" : "py-6 bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo / System ID */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border border-primary flex items-center justify-center bg-primary/5 group-hover:bg-primary group-hover:text-background transition-all duration-300">
              <Terminal size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-primary text-sm font-bold tracking-tighter text-primary group-hover:text-white transition-colors">
                MH_CORE_v2.0
              </span>
              <span className="font-primary text-[10px] text-primary/50 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                SYSTEM_ONLINE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative font-primary text-xs tracking-widest group px-2 py-1 ${
                  pathname === item.path ? "text-primary bg-primary/10" : "text-offWhite/60 hover:text-primary"
                }`}
              >
                <span className="text-[10px] text-primary/30 mr-1">{item.id}</span>
                <span className="glitch-hover">{item.name}</span>
                {pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="h-8 w-[1px] bg-primary/20 mx-2" />
            <Link 
              href="/login" 
              className="flex items-center gap-2 px-4 py-1.5 border border-secondary/50 text-secondary font-primary text-[10px] hover:bg-secondary hover:text-background transition-all duration-300"
            >
              <Shield size={12} />
              ROOT_ACCESS
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-primary/20 px-6 py-8"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-primary text-sm tracking-widest ${
                  pathname === item.path ? "text-primary" : "text-offWhite/60"
                }`}
              >
                <span className="text-primary/30 mr-2">{item.id}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
