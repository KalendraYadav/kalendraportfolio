"use client";

import React, { useState, useRef } from "react";
import { achievementsData, Achievement } from "@/data/achievements";
import { ExperienceEvidenceItem } from "@/data/experience";
import { AchievementCard } from "./AchievementCard";
import { EvidenceLightboxModal } from "./EvidenceLightboxModal";
import { Button } from "@/components/ui";
import {
  Trophy,
  ArrowRight,
  ShieldCheck,
  Compass,
  Briefcase,
  Sparkles,
} from "lucide-react";

export interface AchievementsSectionProps {
  headingAs?: "h1" | "h2";
}

export function AchievementsSection({ headingAs = "h2" }: AchievementsSectionProps = {}) {
  const HeadingComponent = headingAs;

  // Lightbox modal state for inspecting evidence
  const [activeEvidence, setActiveEvidence] = useState<ExperienceEvidenceItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleInspectEvidence = (
    item: ExperienceEvidenceItem,
    triggerNode?: HTMLButtonElement | null
  ) => {
    if (triggerNode) {
      activeTriggerRef.current = triggerNode;
    }
    setActiveEvidence(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setActiveEvidence(null);
  };

  const hasAchievements = achievementsData.length > 0;

  return (
    <section
      id="achievements"
      tabIndex={-1}
      aria-labelledby="achievements-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              ACHIEVEMENTS
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · HONORS &amp; COMPETITIONS
            </span>
          </div>

          <HeadingComponent
            id="achievements-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Achievements &amp; Recognition.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            Milestones that reflect what I&apos;ve learned, built, and accomplished.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Documented Recognitions &amp; Verified Honors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
              <span>Authentic Records Without Exaggeration</span>
            </div>
          </div>
        </div>

        {/* B. MAIN CONTENT: CARDS OR INTENTIONAL EMPTY STATE */}
        {hasAchievements ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {achievementsData.map((item: Achievement) => (
                <AchievementCard
                  key={item.id}
                  achievement={item}
                  onInspectEvidence={handleInspectEvidence}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Intentional, Polished Neo-Brutalist Empty State */
          <div className="border-4 border-ink-black bg-surface-white p-8 sm:p-12 md:p-16 shadow-brutal-xl text-center space-y-8 max-w-3xl mx-auto">
            {/* Geometric Brutalist Graphic Badge */}
            <div className="w-20 h-20 mx-auto bg-cyber-yellow border-4 border-ink-black shadow-brutal-md flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform">
              <Trophy className="w-10 h-10 text-ink-black" aria-hidden="true" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <div className="inline-block font-mono text-xs font-black uppercase tracking-widest text-cobalt-blue bg-cobalt-blue/10 border border-cobalt-blue px-3 py-1">
                AUTHENTICITY COMMITMENT
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-ink-black leading-tight">
                Every achievement starts with a challenge.
              </h3>

              <p className="font-body text-base sm:text-lg text-ink-black/80 leading-relaxed">
                New milestones, competition placements, and awards will appear here as I earn them. No placeholder accolades, no inflated claims.
              </p>
            </div>

            {/* Quick Actions to Verified Sections */}
            <div className="pt-4 border-t-2 border-ink-black/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Button
                href="/projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                data-avatar-trigger="explore-projects"
                className="w-full sm:w-auto text-center"
              >
                EXPLORE PROJECTS
              </Button>
              <Button
                href="/experience"
                variant="secondary"
                size="md"
                icon={<Briefcase className="w-4 h-4" />}
                data-avatar-trigger="view-experience"
                className="w-full sm:w-auto text-center hover:bg-canvas-cream"
              >
                VIEW EXPERIENCE &amp; CERTIFICATES
              </Button>
            </div>
          </div>
        )}

        {/* C. FOOTER CONNECT BANNER */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              COLLABORATION // HACKATHONS
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              Interested in Teaming Up for a Hackathon or Engineering Challenge?
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              I actively seek competitive engineering hackathons and open-source challenges that push system boundaries and practical execution.
            </p>
          </div>

          <div className="pt-2">
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Sparkles className="w-4 h-4 text-cobalt-blue" />}
              data-avatar-trigger="get-in-touch"
              className="hover:bg-canvas-cream"
            >
              CONNECT FOR COMPETITIONS
            </Button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR EVIDENCE INSPECTION */}
      <EvidenceLightboxModal
        item={activeEvidence}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        triggerRef={activeTriggerRef}
      />
    </section>
  );
}
