import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Code2, Terminal, Sparkles } from "lucide-react";

export function PersonalIntroSection() {
  return (
    <section
      id="intro"
      tabIndex={-1}
      aria-label="Personal introduction"
      className="w-full relative bg-surface-white border-b-4 border-ink-black py-14 sm:py-16 md:py-20 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Eyebrow, Heading & Architectural Ethos Callout (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <h2 className="flex items-baseline gap-3 sm:gap-4 md:gap-5 font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight text-ink-black leading-none">
              <span className="inline-block bg-cyber-yellow px-3 py-1.5 border-3 border-ink-black shadow-brutal-sm">
                WHO I AM
              </span>
              <span
                tabIndex={0}
                role="img"
                aria-label="Question mark representing curiosity and continuous inquiry"
                className="inline-block font-display font-black text-[1.28em] text-pop-red select-none cursor-pointer transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black focus-visible:-translate-y-2 focus-visible:scale-110 motion-reduce:hover:transform-none motion-reduce:focus-visible:transform-none"
                style={{
                  textShadow: "4px 4px 0px #FFE600, 6px 6px 0px #0A0A0A",
                }}
              >
                ?
              </span>
            </h2>

            {/* Tactile Engineering Philosophy Card */}
            <div className="border-3 border-ink-black bg-canvas-cream p-4 sm:p-5 shadow-brutal-sm space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                <Compass className="w-4 h-4 text-cobalt-blue shrink-0" aria-hidden="true" />
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-ink-black/85 leading-relaxed">
                Prioritizing sound data modeling, predictable state flow, and high-contrast accessibility over fragile trends.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Quote, Signature, Badges & About Link (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* 1. Bold Quoted Introduction */}
            <blockquote className="relative">
              <p className="font-display font-black text-xl sm:text-2xl md:text-3xl text-ink-black leading-snug sm:leading-relaxed tracking-tight">
                <span className="text-cobalt-blue font-serif mr-1 text-2xl sm:text-3xl select-none" aria-hidden="true">“</span>
                I craft thoughtful frontend experiences, engineer reliable web interfaces, and explore the possibilities of AI-powered full-stack development—one meaningful problem at a time.
                <span className="text-cobalt-blue font-serif ml-1 text-2xl sm:text-3xl select-none" aria-hidden="true">”</span>
              </p>
            </blockquote>

            {/* 2. Personal Handwritten Signature */}
            <div className="flex justify-end pt-1">
              <div className="inline-flex flex-col items-end">
                <span
                  className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-ink-black font-semibold tracking-wide select-none -rotate-2"
                  aria-label="Handwritten signature of Kalendra Yadav"
                >
                  Kalendra Yadav
                </span>
                <span
                  className="w-24 sm:w-28 h-0.5 bg-cobalt-blue mt-0.5 -rotate-1 rounded-full opacity-80"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 3. Three Refined Technology Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 font-mono text-xs font-bold">
              <span className="bg-surface-white border-2 border-ink-black px-3 py-1.5 shadow-brutal-sm text-ink-black inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5">
                <Code2 className="w-3.5 h-3.5 text-cobalt-blue shrink-0" aria-hidden="true" />
                React · TypeScript
              </span>
              <span className="bg-surface-white border-2 border-ink-black px-3 py-1.5 shadow-brutal-sm text-ink-black inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-yellow shrink-0" aria-hidden="true" />
                Next.js · App Router
              </span>
              <span className="bg-surface-white border-2 border-ink-black px-3 py-1.5 shadow-brutal-sm text-ink-black inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5">
                <Sparkles className="w-3.5 h-3.5 text-pop-red shrink-0" aria-hidden="true" />
                Frontend → AI + Full-Stack
              </span>
            </div>

            {/* 4. Link to Full About Page */}
            <div className="pt-3 border-t-2 border-ink-black/15">
              <Link
                href="/about"
                data-avatar-trigger="nav-about"
                className="inline-flex items-center gap-2 flex-wrap font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-ink-black hover:text-cobalt-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-black transition-colors py-1 min-h-[36px]"
              >
                <span>READ MORE ABOUT MY PHILOSOPHY &amp; BACKGROUND</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
