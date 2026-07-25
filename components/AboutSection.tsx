"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Target,
  Award,
  BookOpen,
  Code,
  Brain,
  Sparkles,
  TrendingUp,
  Check,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  const highlights = [
    {
      title: "Analytical & Problem Solver",
      desc: "Skilled in decomposing complex datasets and business processes into actionable insights and structured solutions.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Real-Time AI & Computer Vision",
      desc: "Designed and implemented a hybrid YOLOv8 and LSTM framework for real-time vehicle detection and traffic prediction.",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Deloitte Certified Data Simulation",
      desc: "Hands-on experience in data cleaning, exploratory data analysis (EDA), and executive report generation.",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Academic Excellence",
      desc: "Achieved 100% score in Secondary Education and pursuing B.Tech in Computer Science & Engineering (2022 - 2026).",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Empowering Decisions Through <span className="gradient-text">Data & AI</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
          />
        </div>

        {/* Top Split Layout: Biography + Career Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-white/10"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Professional Summary</h3>
                  <p className="text-xs text-slate-400 font-mono">Kampasati Vamshi | CS Undergraduate</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {PERSONAL_INFO.summary}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-semibold text-white uppercase font-mono tracking-wider">
                  Key Focus Areas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  {PERSONAL_INFO.bioHighlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Quick Info */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>
                <span>Degree:</span> <strong className="text-slate-200">B.Tech (CSE)</strong>
              </div>
              <div>
                <span>Location:</span> <strong className="text-slate-200">Hyderabad, India</strong>
              </div>
              <div>
                <span>Languages:</span> <strong className="text-slate-200">English, Telugu, Hindi</strong>
              </div>
            </div>
          </motion.div>

          {/* Right Goals & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Career Goals */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Career Objective</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Seeking an entry-level opportunity as a Data Analyst or Software Engineer to gain industry experience, collaborate with cross-functional teams, and build high-performance data-driven products that deliver measurable business impact.
              </p>
            </div>

            {/* Growth Mindset Card */}
            <div className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-blue-950/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Continuous Growth</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Strong advocate for clean code, continuous learning, and structured software architecture. Constantly updating skills with modern frameworks, cloud deployments, and advanced machine learning algorithms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} p-[1px] mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full bg-[#0b1329] rounded-[15px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
