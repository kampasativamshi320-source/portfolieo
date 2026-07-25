"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Database,
  Brain,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenResume: () => void;
}

const ROLES = [
  "Data Analyst",
  "Machine Learning Engineer",
  "Computer Vision Developer",
  "Python & SQL Specialist",
];

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => role.substring(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayText === role) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* High Tech Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Data Analyst & Software Engineer Roles</span>
            </motion.div>

            {/* Main Greeting */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4"
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Typewriter Professional Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-12 text-xl sm:text-3xl font-semibold text-slate-300 mb-6 flex items-center gap-2 font-mono"
            >
              <span className="text-purple-400">&gt;</span>
              <span className="text-white border-b-2 border-blue-500 min-h-[36px] inline-block">
                {displayText}
              </span>
              <span className="animate-pulse text-blue-400">|</span>
            </motion.div>

            {/* Brief Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
            >
              Computer Science Undergraduate focused on turning complex datasets into intelligent, actionable insights. Specialist in <strong className="text-slate-200">Python, SQL, Machine Learning (YOLOv8, LSTM)</strong>, and modern full-stack web applications.
            </motion.p>

            {/* Key Tech Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {["Python", "SQL", "Pandas", "YOLOv8", "React", "Next.js", "MySQL", "Deloitte Certified"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-400 hover:text-white border border-transparent hover:border-slate-800 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs text-slate-500 font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 ml-auto text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Portrait Avatar with Floating Tech Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Outer Animated Glow Ring */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 animate-spin-slow opacity-60 blur-md" />
              
              {/* Card Container */}
              <div className="absolute inset-[3px] rounded-full bg-[#0b1329] p-2 flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <Image
                  src="/images/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-full filter contrast-[1.05]"
                />
              </div>

              {/* Floating Orbiting Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 border border-blue-500/30 shadow-lg"
              >
                <Database className="w-4 h-4 text-blue-400" />
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Data & SQL</div>
                  <div className="text-xs font-bold text-white">Expert</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-2 glass-panel px-4 py-2 rounded-2xl flex items-center gap-2 border border-purple-500/30 shadow-lg"
              >
                <Brain className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">YOLOv8 + LSTM</div>
                  <div className="text-xs font-bold text-white">AI Realtime System</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 glass-panel px-3 py-1.5 rounded-xl flex items-center gap-2 border border-cyan-500/30 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white">Deloitte Certified</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 sm:p-5 rounded-2xl text-center flex flex-col items-center justify-center border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <span className="text-2xl sm:text-4xl font-extrabold gradient-text font-mono mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
