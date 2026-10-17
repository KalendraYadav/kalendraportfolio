import React from "react";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyber-yellow focus:text-ink-black focus:font-mono focus:font-bold focus:uppercase focus:text-sm focus:border-3 focus:border-ink-black focus:shadow-brutal-md focus:outline-none transition-none"
    >
      Skip to main content
    </a>
  );
}
