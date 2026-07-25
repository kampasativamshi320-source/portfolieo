"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu } from "lucide-react";

export default function LoadingScreen({ onFinish }: { onFinish?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onFinish) onFinish();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          {/* Animated Background Glow */}
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

          {/* Logo & Symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] shadow-[0_0_40px_rgba(59,130,246,0.4)]"
          >
            <div className="w-full h-full bg-[#0b1329] rounded-[14px] flex items-center justify-center">
              <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KV
              </span>
            </div>
          </motion.div>

          {/* Status message */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6 font-mono text-sm text-slate-400"
          >
            <Terminal className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Initializing Vamshi's Portfolio...</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage Indicator */}
          <div className="mt-3 font-mono text-xs text-blue-400/80">
            {Math.min(progress, 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
