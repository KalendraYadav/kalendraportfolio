"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold uppercase tracking-wider bg-cyber-yellow text-ink-black border-2 border-ink-black px-4 py-2.5 min-h-[44px] shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:ring-offset-2"
    >
      <span>Back To Top</span>
      <ArrowUp className="w-4 h-4 shrink-0" aria-hidden="true" />
    </button>
  );
}
