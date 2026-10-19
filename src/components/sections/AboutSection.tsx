import React from "react";
import { siteConfig } from "@/config/site";
import { Badge, Button, HalftonePortrait } from "@/components/ui";
import {
  Terminal,
  ShieldCheck,
  Sparkles,
  Compass,
  CheckCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

export interface AboutSectionProps {
  headingAs?: "h1" | "h2";
}

export function AboutSection({ headingAs = "h2" }: AboutSectionProps = {}) {
  const HeadingComponent = headingAs;

  const principles = [
    {
      number: "01",
      title: "Systems Over Quick Fixes",
      subtitle: "ARCHITECTURAL INTEGRITY",
      description:
        "Building resilient software starts with sound data modeling, predictable state flow, and decoupled services. I prioritize clean contracts and defensive error boundaries over fragile shortcuts.",
      icon: <Terminal className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accent: "bg-cyber-yellow",
    },
    {
      number: "02",
      title: "Tactile & Accessible Craft",
      subtitle: "HIGH-CONTRAST UX",
      description:
        "A user interface must be memorable, responsive, and thoroughly accessible. I combine bold editorial aesthetics with semantic HTML, visible keyboard focus, and WCAG AA standards.",
      icon: <Sparkles className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accent: "bg-cyber-cyan",
    },
    {
      number: "03",
      title: "Empirical Verification",
      subtitle: "HONEST ENGINEERING",
      description:
        "Real engineering speaks through working code, reproducible architectures, and verifiable milestones. I avoid vanity numbers and focus on building systems that solve tangible problems.",
      icon: <ShieldCheck className="w-5 h-5 text-ink-black" aria-hidden="true" />,
      accent: "bg-pop-pink",
    },
  ];

  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              BACKGROUND &amp; ETHOS
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · MEET THE ENGINEER
            </span>
          </div>

          <HeadingComponent
            id="about-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            About &amp; Engineering Philosophy.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            A grounded perspective on software craftsmanship, systems architecture, and the discipline of building durable digital products.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
              <span>Full-Stack Engineering Focus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Verifiable Project Artifacts</span>
            </div>
          </div>
        </div>

        {/* B. DUAL-COLUMN HERO BIO: PORTRAIT & NARRATIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Signature Halftone Pop-Art Portrait (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="w-full max-w-sm sm:max-w-md mx-auto">
              <HalftonePortrait
                src={siteConfig.portrait.src}
                alt="Halftone pop-art portrait of Kalendra Yadav, software engineer focused on systems and web architecture"
                aspectRatio="square"
                backingVariant="yellow"
                badgeText="PHILOSOPHY"
                statusText="Kalendra Yadav // Profile"
                captionLeft="Full-Stack Systems & IoT"
                captionRight="Open to Remote"
                priority
              />
            </div>

            {/* Factual Snapshot Quick Card */}
            <div className="w-full border-3 border-ink-black bg-surface-white shadow-brutal-md">
              <div className="flex items-center justify-between border-b-2 border-ink-black/15 bg-canvas-cream px-4 py-2.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                  ENGINEER PROFILE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-green inline-block border border-ink-black" aria-hidden="true" />
              </div>

              <div className="p-4 sm:p-5 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-ink-black/10">
                  <span className="text-text-muted">NAME:</span>
                  <span className="font-bold text-ink-black">{siteConfig.name}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-ink-black/10">
                  <span className="text-text-muted">ROLE:</span>
                  <span className="font-bold text-ink-black">{siteConfig.role}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-ink-black/10">
                  <span className="text-text-muted">LOCATION:</span>
                  <span className="font-bold text-ink-black">{siteConfig.location} (Remote Open)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-ink-black/10">
                  <span className="text-text-muted">STATUS:</span>
                  <span className="font-bold text-accent-green">{siteConfig.contact.statusText}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-text-muted">CORE DOMAIN:</span>
                  <span className="font-bold text-cobalt-blue">Web Systems &amp; IoT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Engineering Narrative (Cols 6-12) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 md:p-10 bg-surface-white border-3 border-ink-black shadow-brutal-lg space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                <Compass className="w-4 h-4 text-cobalt-blue" aria-hidden="true" />
                <span>HOW I APPROACH COMPUTING</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-ink-black leading-snug">
                Building reliable software through continuous inquiry and systematic design.
              </h3>

              <div className="space-y-4 font-body text-base sm:text-lg text-ink-black/85 leading-relaxed">
                <p>
                  I am a software engineer focused on constructing full-stack systems that balance
                  structural reliability with intuitive, memorable user experiences. Rather than
                  relying on superficial abstractions or fragile shortcuts, I prioritize
                  understanding the underlying data flows, runtime constraints, and architectural
                  tradeoffs behind every layer of an application.
                </p>
                <p>
                  My engineering practice is grounded in hands-on implementation: designing IoT
                  compliance audit pipelines, architecting low-latency computer vision prototypes, and
                  building optimistic local-first web applications. I approach each technical challenge with
                  curiosity, precision, and an insistence on verifiable code.
                </p>
                <p className="text-sm sm:text-base text-ink-black/80">
                  Whether establishing normalized relational schemas, streaming WebSocket spatial cues,
                  or designing tactile Neo-Brutalist design systems with strict WCAG AA accessibility,
                  my objective is simple: create software that performs predictably, solves tangible
                  problems, and endures in real-world environments.
                </p>
              </div>

              <div className="pt-4 border-t-2 border-ink-black/15 flex flex-wrap items-center gap-2.5">
                <Badge variant="yellow" size="sm">
                  FULL-STACK SYSTEMS
                </Badge>
                <Badge variant="cyan" size="sm">
                  ACCESSIBLE ERGONOMICS
                </Badge>
                <Badge variant="outline" size="sm">
                  VERIFIABLE ARTIFACTS
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* C. THREE GUIDING ENGINEERING PRINCIPLES */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b-3 border-ink-black pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                METHODOLOGY &amp; STANDARDS
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
                Core Engineering Principles
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-text-muted">
              3 Foundational Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {principles.map((p) => (
              <article
                key={p.number}
                className="flex flex-col justify-between border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:hover:transform-none"
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
                  <div className="p-1 border border-ink-black bg-surface-white shadow-brutal-sm" aria-hidden="true">
                    {p.icon}
                  </div>
                </div>

                {/* Accent line */}
                <div className={`h-2 w-full border-b-2 border-ink-black ${p.accent}`} aria-hidden="true" />

                {/* Body */}
                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <h4 className="font-display font-black text-xl uppercase tracking-tight text-ink-black">
                    {p.title}
                  </h4>
                  <p className="font-body text-sm text-ink-black/80 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* D. CLOSING NAVIGATION */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              NEXT STEPS // CONNECT
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              Ready to Explore the Work or Start a Conversation?
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              Examine the systems architectures and technical challenges behind my projects, or reach out to discuss prospective engineering roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              className="w-full sm:w-auto text-center"
            >
              EXPLORE PROJECT CASE STUDIES
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
