import React from "react";
import { siteConfig } from "@/config/site";
import { Button, HalftonePortrait } from "@/components/ui";
import { ArrowDownRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="scroll-mt-24 w-full relative overflow-hidden bg-canvas-cream border-b-4 border-ink-black outline-none"
    >
      {/* Background Subtle Editorial Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Role & Status Eyebrow Row */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-ink-black">
                FRONTEND DEVELOPER · FULL-STACK EXPLORER
              </span>

              {/* Status Anchor & Neo-brutalist Availability Sticker */}
              <div
                className="inline-flex items-center select-none"
                role="status"
                aria-label="Availability status: Open to Opportunities"
              >
                {/* Visual Anchor Dot */}
                <span
                  className="w-2.5 h-2.5 rounded-full bg-ink-black border border-ink-black shrink-0 relative z-10 -mr-1 shadow-sm"
                  aria-hidden="true"
                />

                {/* Sticker Body: Wide, low-profile cinematic Neo-brutalist sticker */}
                <div
                  className="hover-sticker-wiggle inline-flex items-center justify-center w-auto max-w-full sm:w-[275px] h-[30px] sm:h-[34px] px-3.5 sm:px-5 bg-pop-red border-2 border-ink-black rounded-r-md rounded-l-none origin-left cursor-default transition-transform duration-200"
                  style={{
                    transform: "rotate(-1.5deg)",
                    boxShadow: "2.5px 2.5px 0px #22C55E",
                  }}
                >
                  <span className="font-mono text-[11px] sm:text-xs font-black tracking-wider sm:tracking-widest text-surface-white uppercase leading-none">
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Personal Handwritten Greeting & Primary H1 Editorial Headline */}
            <div className="space-y-3">
              <p className="font-handwriting text-2xl sm:text-3xl text-ink-black/90 font-medium select-none tracking-normal">
                Hi, I&apos;m Kalendra Yadav <span className="inline-block hover:scale-110 transition-transform">👋</span>
              </p>
              <h1
                id="hero-heading"
                className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl uppercase tracking-tight text-ink-black leading-[1.05]"
              >
                Building Digital{" "}
                <span className="inline-block bg-cyber-yellow text-ink-black px-2 sm:px-2.5 py-0.5 border-3 border-ink-black shadow-brutal-sm -rotate-1 mt-1">
                  Systems.
                </span>
              </h1>
            </div>

            {/* 3. Concise Supporting Narrative */}
            <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 max-w-2xl leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* 4. Action Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                href="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowDownRight className="w-5 h-5" />}
                className="w-full sm:w-auto text-center"
              >
                EXPLORE PROJECTS
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
                className="w-full sm:w-auto text-center"
              >
                GET IN TOUCH
              </Button>
            </div>

            {/* 5. Refined Technology & Focus Summary */}
            <div className="pt-4 border-t-2 border-ink-black/15 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-ink-black uppercase tracking-wider">CORE STACK:</span>
                <span className="text-ink-black/85">TypeScript · React · Next.js · Node.js</span>
              </div>
              <span className="hidden sm:inline text-ink-black/25" aria-hidden="true">|</span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-ink-black uppercase tracking-wider">FOCUS:</span>
                <span className="text-ink-black/85">Frontend Engineering · AI-Assisted Full-Stack Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Pop-Art Portrait Composition (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HalftonePortrait
              src={siteConfig.portrait.src}
              alt="Halftone pop-art portrait of Kalendra Yadav, Full-Stack Software Engineer"
              aspectRatio="square"
              backingVariant="cyan"
              badgeText="ENGINEERING"
              statusText="Kalendra Yadav"
              captionLeft="Systems & Web Architecture"
              captionRight="India"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
