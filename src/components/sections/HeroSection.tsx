import React from "react";
import { siteConfig } from "@/config/site";
import { Button, Badge, HalftonePortrait } from "@/components/ui";
import { ArrowDownRight, Mail, Sparkles, Terminal } from "lucide-react";

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Status Eyebrow Row */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="green" statusDot className="shadow-brutal-sm">
                STATUS: AVAILABLE FOR ROLES
              </Badge>
              <Badge variant="yellow" tilt="right">
                {siteConfig.name.toUpperCase()}
              </Badge>
            </div>

            {/* 2. Primary H1 Editorial Headline */}
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-text-muted uppercase block">
                {`// ${siteConfig.role.toUpperCase()} · SYSTEMS BUILDER`}
              </span>

              <h1
                id="hero-heading"
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl uppercase tracking-tighter text-ink-black leading-[0.92] select-none"
              >
                BUILDING <br />
                DIGITAL <br />
                <span className="inline-block bg-cyber-yellow text-ink-black px-3 py-1 border-3 border-ink-black shadow-brutal-md -rotate-1 mt-1">
                  SYSTEMS.
                </span>
              </h1>
            </div>

            {/* 3. Concise Supporting Narrative */}
            <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/80 max-w-2xl leading-relaxed">
              {siteConfig.tagline}
            </p>

            {/* 4. Action Calls to Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDownRight className="w-5 h-5" />}
              >
                EXPLORE PROJECTS
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                GET IN TOUCH
              </Button>
            </div>

            {/* 5. Editorial Metadata Strip */}
            <div className="pt-4 border-t-2 border-ink-black/15 flex flex-wrap items-center gap-6 font-mono text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-ink-black shrink-0" aria-hidden="true" />
                <span className="font-bold text-ink-black">STACK:</span>
                <span>TypeScript · React · Next.js · Node</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-ink-black shrink-0" aria-hidden="true" />
                <span className="font-bold text-ink-black">FOCUS:</span>
                <span>Resilient Web &amp; Scalable Systems</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Pop-Art Portrait Composition (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HalftonePortrait
              src={siteConfig.portrait.src}
              alt={siteConfig.portrait.alt}
              aspectRatio="square"
              backingVariant="cyan"
              badgeText="// KY_DEV: 01"
              statusText="STATUS: ACTIVE"
              stickerText="POP ART // DUOTONE"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
