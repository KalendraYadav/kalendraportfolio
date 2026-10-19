import React from "react";
import { Search, Layers, Sparkles } from "lucide-react";

export function HowIBuildSection() {
  const principles = [
    {
      number: "01",
      title: "UNDERSTAND BEFORE BUILDING",
      description:
        "I first figure out what the problem really is, who needs it solved, and what constraints matter. Then I choose a solution that makes sense instead of rushing into code.",
      icon: <Search className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accentColor: "bg-cyber-yellow",
      tagline: "SOLVE THE RIGHT PROBLEM FIRST",
    },
    {
      number: "02",
      title: "LOOK BEYOND THE INTERFACE",
      description:
        "A good interface is only part of the job. I also care about what happens behind it—how data moves, how the pieces connect, and what happens when something goes wrong.",
      icon: <Layers className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accentColor: "bg-cyber-cyan",
      tagline: "MAKE IT WORK BEYOND THE HAPPY PATH",
    },
    {
      number: "03",
      title: "MAKE IT EASY TO USE",
      description:
        "Software should feel natural to use, not make people work harder. I focus on clear layouts, accessible interactions, responsive design, and details that make an experience feel right.",
      icon: <Sparkles className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accentColor: "bg-pop-pink",
      tagline: "MAKE EVERY INTERACTION COUNT",
    },
  ];

  return (
    <section
      id="how-i-build"
      tabIndex={-1}
      aria-labelledby="how-i-build-heading"
      className="w-full relative bg-canvas-cream border-b-4 border-ink-black py-16 sm:py-20 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-surface-white px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              MY APPROACH
            </span>
          </div>

          <h2
            id="how-i-build-heading"
            className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            HOW I APPROACH THE WORK.
          </h2>

          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
            Three things I keep in mind when building software: solve the right problem, understand what happens behind the scenes, and make the result easy to use.
          </p>
        </div>

        {/* 3 Balanced Principles (Desktop: Horizontal 3-Col, Mobile: Stacked) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col justify-between border-3 border-ink-black bg-surface-white p-6 sm:p-7 shadow-brutal-md transition-all duration-150 hover:-translate-y-1 hover:shadow-brutal-lg motion-reduce:hover:transform-none"
            >
              <div className="space-y-5">
                {/* Header Row: Accent Number Marker + Icon */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-ink-black/15">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs font-black uppercase tracking-wider text-ink-black ${item.accentColor} px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm select-none`}
                    >
                      {item.number}
                    </span>
                  </div>
                  <div
                    className="p-2 border-2 border-ink-black bg-canvas-cream shadow-brutal-sm"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Principle Title */}
                <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-ink-black leading-snug">
                  {item.title}
                </h3>

                {/* Narrative */}
                <p className="font-body text-sm sm:text-base text-ink-black/85 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tagline Descriptor */}
              <div className="pt-6 mt-6 border-t-2 border-ink-black/10">
                <span className="font-mono text-xs text-text-muted font-bold tracking-tight uppercase">
                  → {item.tagline}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
