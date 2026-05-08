'use client'

import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Terminal, Send, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createContactMessage } from "@/app/actions/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await createContactMessage(formData);
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">06.</span>
            ESTABLISH_UPLINK
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: System Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="terminal-container bg-primary/5!">
              <p className="font-body text-offWhite/80 leading-relaxed">
                Have a project in mind? Want to collaborate? Or just say hi? 
                Initiate a secure connection below. Responses are typically 
                delivered within 24 standard cycles.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "meherajhosen786@gmail.com", href: "mailto:meherajhosen786@gmail.com" },
                { icon: <FaPhone />, label: "Comms", value: "+880 1989162543", href: "tel:+8801989162543" },
                { icon: <FaMapMarkerAlt />, label: "Base", value: "Dhaka, Bangladesh", href: null },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-primary/20 flex items-center justify-center bg-primary/5 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="font-primary">
                    <p className="text-[10px] text-primary/40 uppercase tracking-tighter">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-offWhite hover:text-secondary transition-colors uppercase">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-offWhite uppercase">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Uplinks */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/meheraj786" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/meheraj-hosen" },
                { icon: <FaTwitter />, link: "https://twitter.com/meheraj786" },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.link} 
                  target="_blank"
                  className="w-10 h-10 border border-secondary/20 flex items-center justify-center bg-secondary/5 text-secondary hover:bg-secondary hover:text-background transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Command Terminal (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="terminal-container p-0! overflow-hidden"
          >
            <div className="terminal-header">
              <Terminal size={14} className="text-primary" />
              <span className="text-[10px] font-primary text-primary/50 ml-2 uppercase">comms_terminal.exe</span>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-primary text-primary/60 uppercase ml-1">IDENTIFIER</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="NAME_OR_ORG"
                  className="w-full bg-primary/5 border border-primary/20 p-3 font-primary text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-primary/20"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-primary text-primary/60 uppercase ml-1">REPLY_ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL_HOST_ADDR"
                  className="w-full bg-primary/5 border border-primary/20 p-3 font-primary text-sm text-white focus:outline-none focus:border-primary transition-all placeholder:text-primary/20"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-primary text-primary/60 uppercase ml-1">MESSAGE_PAYLOAD</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="SYSTEM_MESSAGE_INPUT..."
                  className="w-full bg-primary/5 border border-primary/20 p-3 font-primary text-sm text-white focus:outline-none focus:border-primary transition-all resize-none placeholder:text-primary/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 transition-transform -translate-x-full group-hover:translate-x-0 duration-500" />
                <div className="relative border border-primary text-primary font-primary py-3 flex items-center justify-center gap-3 group-hover:text-background transition-colors duration-300">
                  {status === "loading" ? (
                    <span className="animate-pulse">TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      INITIATE_UPLINK
                    </>
                  )}
                </div>
              </button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-primary font-primary text-[10px] bg-primary/10 p-2 border border-primary/20"
                  >
                    <ShieldCheck size={14} />
                    SUCCESS: TRANSMISSION_RECEIVED_SECURELY
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-accent font-primary text-[10px] bg-accent/10 p-2 border border-accent/20"
                  >
                    <AlertCircle size={14} />
                    ERROR: UPLINK_INTERRUPTED_RETRY_LATER
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;