"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // https://web3forms.com থেকে free key নাও
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact from Portfolio",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <div className="py-12 px-4 md:px-8 bg-white rounded-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2
          className="relative  font-primary font-bold text-black text-center mb-12
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
            hover:after:w-48 after:transition-all after:duration-300"
        >
          [Get In Touch]
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 font-body">
              Have a project in mind? Want to collaborate? Or just say hi? Feel free to reach out — I reply within 24 hours!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaEnvelope className="text-xl text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:meherajhosen786@gmail.com" className="text-black hover:text-blue-600 transition-colors">
                    meherajhosen786@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaPhone className="text-xl text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+88017xxxxxxxx" className="text-black hover:text-blue-600 transition-colors">
                    +880 17XXXXXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <FaMapMarkerAlt className="text-xl text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-black">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <Link href="https://github.com/meheraj786" target="_blank" className="text-2xl text-black hover:text-gray-600 transition-colors">
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com/in/meheraj-hosen" target="_blank" className="text-2xl text-black hover:text-blue-600 transition-colors">
                <FaLinkedin />
              </Link>
              <Link href="https://twitter.com/meheraj786" target="_blank" className="text-2xl text-black hover:text-sky-500 transition-colors">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                placeholder="Meheraj Hosen"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                placeholder="Hi Meheraj, I have an interesting project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-black text-white font-body py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Try Again" : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center mt-2">Thanks! I&apos;ll get back to you soon 🚀</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;