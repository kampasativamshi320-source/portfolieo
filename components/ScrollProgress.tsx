"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentScroll = (window.scrollY / totalHeight) * 100;
        setScrollWidth(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-900/50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
}
