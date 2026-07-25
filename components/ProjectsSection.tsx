"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Folder, Eye, Sparkles, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types";
import ProjectModal from "./ProjectModal";

const PROJECT_CATEGORIES = ["All", "AI & ML", "Data Analytics", "Full Stack"] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    return activeCategory === "All" || project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4"
          >
            <Folder className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          <div className="glass-panel p-1.5 rounded-2xl border border-white/10 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-blue-500/40"
              >
                <div>
                  {/* Project Image & Overlay */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-blue-400 text-[10px] font-mono">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Overlay Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-slate-900 text-slate-400 text-[10px] font-mono">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                        title="GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
