import React from "react";
import { siteConfig } from "@/config/site";
import { Button, Badge } from "@/components/ui";
import { ArrowRight, Mail, Sparkles, MapPin } from "lucide-react";

export function HomeCtaSection() {
  return (
    <section
      id="closing-cta"
      tabIndex={-1}
      aria-labelledby="cta-heading"
      className="w-full relative bg-canvas-cream py-16 sm:py-20 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-4 border-ink-black bg-cyber-yellow p-6 sm:p-10 md:p-16 shadow-brutal-xl overflow-hidden">
          {/* Subtle Accent Background Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
            {/* Status & Availability Eyebrow */}
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="dark" size="sm">
                NEXT STEPS
              </Badge>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-green inline-block" aria-hidden="true" />
                Available for Engineering Roles
              </span>
            </div>

            {/* Section Heading */}
            <h2
              id="cta-heading"
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
            >
              Let&apos;s Build Something Useful.
            </h2>

            {/* Natural Supporting Narrative */}
            <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/90 font-medium leading-relaxed max-w-2xl">
              Whether you want to discuss full-stack engineering, explore systems architecture, or review technical case studies, I&apos;m always open to meaningful conversations.
            </p>

            {/* Two Clear Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="/projects"
                variant="dark"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                data-avatar-trigger="explore-projects"
                className="w-full sm:w-auto text-center"
              >
                EXPLORE PROJECTS
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
                data-avatar-trigger="get-in-touch"
                className="w-full sm:w-auto text-center shadow-brutal-md hover:bg-canvas-cream"
              >
                GET IN TOUCH
              </Button>
            </div>

            {/* Quick Context Footer Meta */}
            <div className="pt-6 border-t-2 border-ink-black/20 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-ink-black/80 font-bold">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{siteConfig.location} (Open to Remote)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Full-Stack &amp; Systems Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
