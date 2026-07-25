"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, FileText, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, EDUCATIONS, SKILLS, EXPERIENCES } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel bg-slate-900/95 border border-white/10 rounded-3xl overflow-hidden z-10 shadow-2xl my-8 print:my-0 print:border-none print:shadow-none print:bg-white print:text-black print:rounded-none"
        >
          {/* Header Action Bar (Hidden in Print) */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 print:hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
                <p className="text-xs text-slate-400 font-mono">Kampasati Vamshi - Official Resume</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
              >
                <Printer className="w-4 h-4 text-blue-400" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 text-slate-200 print:max-h-none print:p-8 print:text-black print:space-y-6">
            {/* Header / Contact Info */}
            <div className="text-center border-b border-slate-800 print:border-black pb-6">
              <h1 className="text-3xl font-extrabold text-white print:text-black uppercase tracking-wide">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono text-slate-400 print:text-gray-700 mt-2">
                <span>{PERSONAL_INFO.phone}</span>
                <span>|</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-400 print:text-black">
                  {PERSONAL_INFO.email}
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-blue-400 print:text-black">
                  LinkedIn
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" className="text-blue-400 print:text-black">
                  GitHub
                </a>
                <span>|</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-4">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {EDUCATIONS.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs">
                    <div>
                      <div className="font-bold text-white print:text-black">{edu.degree}</div>
                      <div className="text-slate-400 print:text-gray-600">{edu.institution}</div>
                      {edu.percentageOrGpa && (
                        <div className="text-purple-400 print:text-black font-semibold mt-0.5">
                          Percentage: {edu.percentageOrGpa}
                        </div>
                      )}
                    </div>
                    <div className="font-mono text-slate-400 print:text-gray-700 shrink-0">
                      {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
                SKILLS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
                <div>
                  <strong>Programming Language:</strong> Python, SQL
                </div>
                <div>
                  <strong>Libraries:</strong> Pandas, NumPy, Matplotlib, OpenCV, TensorFlow
                </div>
                <div>
                  <strong>Developer Tools:</strong> Git, GitHub, VS Code, Excel, Vercel
                </div>
                <div>
                  <strong>Database Technologies:</strong> MySQL, RDBMS
                </div>
                <div className="sm:col-span-2">
                  <strong>Core Concepts:</strong> Data Analysis, Data Cleaning, Data Visualization, OOP, Data Structures, Problem Solving
                </div>
                <div className="sm:col-span-2">
                  <strong>Soft Skills:</strong> Communication, Team Collaboration, Time Management, Analytical Thinking
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
                PROJECTS
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-white print:text-black text-xs">
                    Enhanced framework for realtime vehicle detection and tracking
                  </div>
                  <div className="text-[11px] font-mono text-purple-400 print:text-gray-700 mb-2">
                    Technologies: YOLOv8 (You Only Look Once), LSTM (Long Short-Term Memory networks), Python, TensorFlow, OpenCV, NumPy
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 space-y-1">
                    <li>Developed hybrid traffic management system integrating YOLOv8 for real-time vehicle detection and LSTM for traffic forecasting improving congestion prediction accuracy.</li>
                    <li>Implemented Python-based modules for data collection, traffic prediction, and system evaluation, leveraging libraries such as TensorFlow, OpenCV, and NumPy.</li>
                    <li>Designed and validated system architecture using UML diagrams, ensuring clear functional requirements and robust integration of machine learning components.</li>
                    <li>Conducted testing and performance evaluation to verify accuracy, scalability, and reliability of the framework.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications & Activities */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 print:text-black border-b border-slate-800 print:border-black pb-1 mb-3">
                CERTIFICATIONS & ACTIVITIES
              </h2>
              <div className="text-xs text-slate-300 print:text-gray-800 space-y-1">
                <div>
                  <strong>Certificates:</strong> Deloitte Data Analytics Job Simulation
                </div>
                <div>
                  <strong>Languages Known:</strong> English, Telugu, Hindi
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
