"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Database, Globe, ExternalLink, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS, PERSONAL_INFO } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Code2,
  Database,
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & LANGUAGES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Certifications & <span className="gradient-text">Proficiencies</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = ICON_MAP[cert.icon] || Award;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {cert.year && (
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-400 mb-4">{cert.issuer}</div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages & Soft Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Languages Known</h4>
                <p className="text-xs text-slate-400 font-mono">Multilingual Communication</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {PERSONAL_INFO.languages.map((lang) => (
                <div
                  key={lang}
                  className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-base font-bold text-white mb-1">Professional Soft Skills</h4>
            <p className="text-xs text-slate-400 font-mono mb-4">Collaborative Execution</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Communication",
                "Team Collaboration",
                "Time Management",
                "Analytical Thinking",
                "Problem Solving",
                "Adaptability",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
