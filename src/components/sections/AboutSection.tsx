import React from "react";
import { SectionHeading, Badge } from "@/components/ui";
import { Terminal, ShieldCheck, Sparkles, Compass, CheckCircle } from "lucide-react";

export function AboutSection() {
  const principles = [
    {
      number: "01",
      title: "Systems Over Quick Fixes",
      subtitle: "ARCHITECTURAL INTEGRITY",
      description:
        "Building resilient software starts with sound data modeling, predictable state flow, and decoupled services. I prioritize clean contracts and defensive error boundaries over fragile shortcuts.",
      icon: <Terminal className="w-5 h-5 text-cyber-yellow" aria-hidden="true" />,
      accent: "bg-cyber-yellow",
    },
    {
      number: "02",
      title: "Tactile & Accessible Craft",
      subtitle: "HIGH-CONTRAST UX",
      description:
        "A user interface must be memorable, responsive, and thoroughly accessible. I combine bold editorial aesthetics with semantic HTML, visible keyboard focus, and WCAG AA standards.",
      icon: <Sparkles className="w-5 h-5 text-cyber-cyan" aria-hidden="true" />,
      accent: "bg-cyber-cyan",
    },
    {
      number: "03",
      title: "Empirical Verification",
      subtitle: "HONEST ENGINEERING",
      description:
        "Real engineering speaks through working code, reproducible architectures, and verifiable milestones. I avoid vanity numbers and focus on building systems that solve tangible problems.",
      icon: <ShieldCheck className="w-5 h-5 text-pop-pink" aria-hidden="true" />,
      accent: "bg-pop-pink",
    },
  ];

  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading
            number="// 04"
            title="About & Engineering Philosophy"
            as="h2"
            description="A grounded perspective on software craftsmanship, systems architecture, and the discipline of building durable digital products."
          />
        </div>

        {/* Two-Column Editorial Narrative & Profile Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-surface-white border-3 border-ink-black shadow-brutal-lg space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                <Compass className="w-4 h-4 text-cobalt-blue" aria-hidden="true" />
                <span>{"// ENGINEERING MINDSET & APPROACH"}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink-black leading-snug">
                Building reliable software through continuous inquiry and systematic design.
              </h3>

              <div className="space-y-4 font-body text-base sm:text-lg text-ink-black/90 leading-relaxed">
                <p>
                  I am a software engineer focused on constructing full-stack systems that balance
                  structural reliability with intuitive, memorable user experiences. Rather than
                  relying on superficial abstractions or cargo-cult development, I believe in
                  understanding the underlying data flows, runtime constraints, and architectural
                  tradeoffs behind every layer of an application.
                </p>
                <p>
                  My engineering journey is driven by practical implementation: designing IoT
                  compliance audit pipelines, architecting low-latency computer vision prototypes, and
                  building optimistic local-first web applications. I approach each challenge with
                  curiosity, precision, and an insistence on verifiable code.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-ink-black/10 flex flex-wrap items-center gap-3">
                <Badge variant="yellow" size="sm">
                  FULL-STACK SYSTEMS
                </Badge>
                <Badge variant="cyan" size="sm">
                  ACCESSIBLE INTERFACES
                </Badge>
                <Badge variant="outline" size="sm">
                  VERIFIABLE ARTIFACTS
                </Badge>
              </div>
            </div>
          </div>

          {/* Core Profile Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-3 border-ink-black bg-surface-white shadow-brutal-md">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-4 py-2.5 select-none">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
                  SPEC // ENGINEER_PROFILE
                </span>
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-pop-red border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow border border-ink-black" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black" />
                </div>
              </div>

              {/* Profile Details List */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-ink-black/15">
                    <span className="text-text-muted">NAME:</span>
                    <span className="font-bold text-ink-black">Kalendra Yadav</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-ink-black/15">
                    <span className="text-text-muted">ROLE:</span>
                    <span className="font-bold text-ink-black">Full-Stack Software Engineer</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-ink-black/15">
                    <span className="text-text-muted">LOCATION:</span>
                    <span className="font-bold text-ink-black">India</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-ink-black/15">
                    <span className="text-text-muted">AVAILABILITY:</span>
                    <span className="font-bold text-accent-green flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                      Open to Opportunities
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-text-muted">FOCUS:</span>
                    <span className="font-bold text-cobalt-blue">Web Systems & Architecture</span>
                  </div>
                </div>

                <div className="p-3 bg-canvas-cream border-2 border-ink-black font-mono text-xs text-ink-black/80 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-ink-black">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-green shrink-0" aria-hidden="true" />
                    <span>VERIFICATION STANDARD</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-text-muted">
                    No fabricated corporate claims or exaggerated metrics. All project entries are supported by real architectural design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Principles ("How I Build") Grid */}
        <div className="space-y-6">
          <div className="border-b-2 border-ink-black/20 pb-3">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-text-muted">
              {"// HOW I BUILD · CORE ENGINEERING PRINCIPLES"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {principles.map((p) => (
              <div
                key={p.number}
                className="flex flex-col justify-between border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg"
              >
                {/* Header with accent indicator */}
                <div className="p-4 border-b-2 border-ink-black flex items-center justify-between bg-canvas-cream">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black bg-ink-black text-surface-white px-2 py-0.5">
                      {p.number}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                      {p.subtitle}
                    </span>
                  </div>
                  {p.icon}
                </div>

                {/* Accent line */}
                <div className={`h-1.5 w-full border-b-2 border-ink-black ${p.accent}`} aria-hidden="true" />

                {/* Body */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <h4 className="font-display font-black text-xl uppercase tracking-tight text-ink-black">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
