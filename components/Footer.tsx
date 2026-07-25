"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <div className="w-full h-full bg-[#0b1329] rounded-[10px] flex items-center justify-center font-bold text-lg text-white">
                  KV
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-slate-400 font-mono">Data Analyst & ML Specialist</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building intelligent computer vision systems, predictive data pipelines, and responsive web platforms. Always open to discussing new technical challenges.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#hero" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-4">
                More
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#experience" className="hover:text-purple-400 transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-purple-400 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#certifications" className="hover:text-purple-400 transition-colors">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-4">
              Social Channels
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved. Built with Next.js & Tailwind CSS.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
