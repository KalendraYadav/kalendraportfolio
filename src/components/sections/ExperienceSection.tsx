"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  experienceEntries,
  ExperienceEntry,
  ExperienceEvidenceItem,
} from "@/data/experience";
import { Button } from "@/components/ui";
import { EvidenceLightboxModal } from "./EvidenceLightboxModal";
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Clock,
  ArrowRight,
  Mail,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ZoomIn,
  FileText,
  MapPin,
  ExternalLink,
} from "lucide-react";

const categoryIcon: Record<string, React.ReactNode> = {
  Internship: <Briefcase className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  Education: <GraduationCap className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Full-time": <Briefcase className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  "Part-time": <Briefcase className="w-4 h-4 text-ink-black" aria-hidden="true" />,
  Contract: <Briefcase className="w-4 h-4 text-ink-black" aria-hidden="true" />,
};

const accentNodeBg: Record<string, string> = {
  yellow: "bg-cyber-yellow",
  cyan: "bg-cyber-cyan",
  pink: "bg-pop-pink",
  blue: "bg-cobalt-blue text-surface-white",
  white: "bg-surface-white",
};

export interface ExperienceSectionProps {
  headingAs?: "h1" | "h2";
}

export function ExperienceSection({ headingAs = "h2" }: ExperienceSectionProps = {}) {
  const HeadingComponent = headingAs;

  // Track which evidence panels are expanded (default: all collapsed)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Lightbox modal state
  const [activeEvidence, setActiveEvidence] = useState<ExperienceEvidenceItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  // Image load failure tracking for clean fallbacks
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const toggleEvidence = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openLightbox = (
    item: ExperienceEvidenceItem,
    triggerElement?: HTMLButtonElement | null
  ) => {
    if (triggerElement) {
      activeTriggerRef.current = triggerElement;
    }
    setActiveEvidence(item);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setActiveEvidence(null);
  };

  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="scroll-mt-24 w-full relative bg-canvas-cream border-b-4 border-ink-black py-14 sm:py-16 md:py-24 outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* A. EDITORIAL PAGE HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-black bg-cyber-yellow px-2.5 py-1 border-2 border-ink-black shadow-brutal-sm">
              VERIFIED RECORD
            </span>
            <span className="font-mono text-xs text-text-muted font-bold tracking-wider uppercase">
              · REAL EXPERIENCE &amp; EVIDENCE
            </span>
          </div>

          <HeadingComponent
            id="experience-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-ink-black leading-[1.05]"
          >
            Professional Experience &amp; Education.
          </HeadingComponent>

          <p className="font-body text-base sm:text-lg md:text-xl text-ink-black/85 leading-relaxed">
            Documented internships, practical web development training, and undergraduate computer science studies — supported by verified certificates and tangible deliverables.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" />
              <span>Supported by Documented Certificates &amp; Records</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
              <span>Strict Chronological Accuracy</span>
            </div>
          </div>
        </div>

        {/* B. TIMELINE SPINE WITH DATA-DRIVEN EXPERIENCE CARDS */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-4 border-ink-black ml-3 sm:ml-6 md:ml-8 space-y-12 sm:space-y-14">
          {experienceEntries.map((item: ExperienceEntry) => {
            const isExpanded = !!expandedItems[item.id];
            const hasEvidence = item.evidence && item.evidence.length > 0;
            const evidencePanelId = `evidence-panel-${item.id}`;

            return (
              <article key={item.id} className="relative group">
                {/* Timeline Geometric Node Marker */}
                <div
                  className={`absolute -left-[38px] sm:-left-[58px] md:-left-[66px] top-2 w-7 h-7 sm:w-8 sm:h-8 border-3 border-ink-black shadow-brutal-sm flex items-center justify-center select-none ${
                    accentNodeBg[item.accentVariant] || "bg-cyber-yellow"
                  }`}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 bg-ink-black rounded-none" />
                </div>

                {/* Experience Entry Card */}
                <div className="border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:hover:transform-none">
                  {/* Entry Header Ribbon */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink-black/15 bg-canvas-cream px-4 sm:px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="p-1.5 bg-surface-white border border-ink-black shadow-brutal-sm"
                        aria-hidden="true"
                      >
                        {categoryIcon[item.experienceType] || (
                          <Briefcase className="w-3.5 h-3.5 text-ink-black" />
                        )}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-black">
                        {item.experienceType.toUpperCase()}
                      </span>
                      {item.workArrangement && (
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider bg-surface-white border border-ink-black/40 px-2 py-0.5 text-ink-black">
                          {item.workArrangement}
                        </span>
                      )}
                      {item.location && (
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted">
                          <MapPin className="w-3 h-3 text-cobalt-blue" aria-hidden="true" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>

                    <div>
                      {item.isOngoing ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-ink-black bg-cyber-yellow border border-ink-black px-2.5 py-0.5 shadow-brutal-sm">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          <span>{item.duration}</span>
                        </span>
                      ) : (
                        <span className="font-mono text-xs font-bold text-ink-black bg-surface-white border border-ink-black/40 px-2.5 py-0.5 shadow-brutal-xs">
                          {item.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-7 md:p-8 space-y-6">
                    {/* Organization & Role */}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs sm:text-sm font-black text-cobalt-blue uppercase tracking-wider">
                          {item.organization}
                        </span>
                        <span className="font-mono text-xs text-text-muted font-bold">
                          {item.startDate} — {item.endDate}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-ink-black leading-snug">
                        {item.role}
                      </h3>
                    </div>

                    {/* Concise Human Description */}
                    <p className="font-body text-sm sm:text-base text-ink-black/90 leading-relaxed max-w-4xl">
                      {item.description}
                    </p>

                    {/* Key Learning Outcomes (Grounding deliverables in actual evidence) */}
                    {item.learningOutcomes && item.learningOutcomes.length > 0 && (
                      <div className="space-y-3 pt-5 border-t-2 border-ink-black/10">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted block">
                          What I Learned &amp; Practiced:
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {item.learningOutcomes.map((outcome, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink-black/90 leading-relaxed bg-canvas-cream/50 p-2.5 border border-ink-black/15"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-accent-green shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Optional Responsibilities (When supported) */}
                    {item.responsibilities && item.responsibilities.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t-2 border-ink-black/10">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted block">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink-black/90 leading-relaxed"
                            >
                              <CheckCircle2
                                className="w-4 h-4 text-cobalt-blue shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Tag Ribbon */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-5 border-t-2 border-ink-black/10 flex flex-wrap gap-2 items-center">
                        <span className="font-mono text-xs font-bold text-text-muted mr-1">
                          Technologies:
                        </span>
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs font-bold uppercase tracking-wider bg-canvas-cream border border-ink-black px-2.5 py-1 text-ink-black shadow-brutal-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* EXPANDABLE EVIDENCE ACCORDION DISCLOSURE */}
                    {hasEvidence && item.evidence && (
                      <div className="pt-6 border-t-2 border-ink-black">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => toggleEvidence(item.id)}
                            aria-expanded={isExpanded}
                            aria-controls={evidencePanelId}
                            data-avatar-trigger="evidence-view"
                            className={`inline-flex items-center justify-between sm:justify-start gap-2 font-mono text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2.5 border-2 border-ink-black transition-all cursor-pointer select-none ${
                              isExpanded
                                ? "bg-ink-black text-cyber-yellow shadow-brutal-sm"
                                : "bg-cyber-yellow text-ink-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                            }`}
                          >
                            <span>
                              {isExpanded
                                ? "Hide Certificates & Evidence"
                                : `View Certificates & Evidence (${item.evidence.length})`}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" aria-hidden="true" />
                            ) : (
                              <ChevronDown className="w-4 h-4" aria-hidden="true" />
                            )}
                          </button>

                          <span className="font-mono text-xs text-text-muted">
                            {isExpanded
                              ? "Click any certificate to inspect in high-resolution"
                              : `${item.evidence.length} verified certificates on file`}
                          </span>
                        </div>

                        {/* Expandable Evidence Grid Panel (Hidden by default) */}
                        {isExpanded && (
                          <div
                            id={evidencePanelId}
                            role="region"
                            aria-labelledby={`evidence-heading-${item.id}`}
                            className="mt-6 pt-6 border-t-2 border-dashed border-ink-black/30 space-y-4 animate-in fade-in duration-200"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <h4
                                id={`evidence-heading-${item.id}`}
                                className="font-mono text-xs font-black uppercase tracking-widest text-cobalt-blue flex items-center gap-1.5"
                              >
                                <ShieldCheck className="w-4 h-4 text-accent-green" aria-hidden="true" />
                                <span>Verified Documentary Evidence ({item.evidence.length} Certificates)</span>
                              </h4>
                              <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                                Click certificate to inspect in full resolution
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                              {item.evidence.map((evItem) => {
                                const isImgFailed = failedImages[evItem.id];

                                return (
                                  <div
                                    key={evItem.id}
                                    className="border-2 border-ink-black bg-canvas-cream/60 p-3.5 sm:p-4 shadow-brutal-sm flex flex-col justify-between space-y-3 group/card hover:bg-surface-white transition-colors"
                                  >
                                    <div className="space-y-2.5">
                                      {/* Item Header Badge */}
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-surface-white border border-ink-black px-2 py-0.5 shadow-brutal-xs">
                                          {evItem.badgeLabel}
                                        </span>
                                        {evItem.issueDate && (
                                          <span className="font-mono text-[10px] text-text-muted font-bold">
                                            {evItem.issueDate}
                                          </span>
                                        )}
                                      </div>

                                      {/* Item Title */}
                                      <h5 className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-ink-black leading-snug">
                                        {evItem.title}
                                      </h5>

                                      {/* Image / Thumbnail Preview */}
                                      <button
                                        type="button"
                                        onClick={(e) => openLightbox(evItem, e.currentTarget)}
                                        aria-label={`Inspect ${evItem.title} in high resolution viewer`}
                                        data-avatar-trigger="evidence-view"
                                        className="relative aspect-[4/3] w-full overflow-hidden border-2 border-ink-black bg-surface-white block group/btn cursor-pointer text-left focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink-black"
                                      >
                                        {!isImgFailed ? (
                                          <>
                                            <Image
                                              src={evItem.imageSrc}
                                              alt={evItem.altText}
                                              fill
                                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                              className="object-contain p-2 group-hover/btn:scale-105 transition-transform duration-200"
                                              onError={() =>
                                                setFailedImages((prev) => ({
                                                  ...prev,
                                                  [evItem.id]: true,
                                                }))
                                              }
                                            />
                                            {/* Hover Zoom Overlay */}
                                            <div className="absolute inset-0 bg-ink-black/60 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                                              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyber-yellow bg-ink-black border border-cyber-yellow px-2 py-1 shadow-brutal-xs">
                                                <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                                                <span>Click to Inspect</span>
                                              </span>
                                            </div>
                                          </>
                                        ) : (
                                          /* Neo-brutalist Pending State */
                                          <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center space-y-1.5 bg-canvas-cream">
                                            <FileText className="w-6 h-6 text-cobalt-blue" aria-hidden="true" />
                                            <span className="font-mono text-[10px] font-black uppercase text-ink-black">
                                              Document on File
                                            </span>
                                            <span className="font-mono text-[9px] text-text-muted leading-tight">
                                              Click to view asset path details
                                            </span>
                                          </div>
                                        )}
                                      </button>

                                      {/* Short Description */}
                                      {evItem.description && (
                                        <p className="font-body text-xs text-ink-black/80 leading-relaxed">
                                          {evItem.description}
                                        </p>
                                      )}
                                    </div>

                                    {/* Card Action Button */}
                                    <div className="pt-2 border-t border-ink-black/15 flex items-center justify-between gap-2">
                                      <button
                                        type="button"
                                        onClick={(e) => openLightbox(evItem, e.currentTarget)}
                                        data-avatar-trigger="evidence-view"
                                        className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-black bg-surface-white border border-ink-black px-2.5 py-1.5 shadow-brutal-xs hover:bg-cyber-yellow transition-colors cursor-pointer"
                                      >
                                        <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                                        <span>Inspect Certificate</span>
                                      </button>

                                      <a
                                        href={evItem.imageSrc}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-avatar-trigger="evidence-view"
                                        aria-label={`Open original ${evItem.title} file in new tab`}
                                        className="p-1.5 bg-surface-white border border-ink-black text-ink-black hover:bg-canvas-cream transition-colors"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                                      </a>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* C. TIMELINE INTEGRITY NOTE */}
        <div className="p-4 sm:p-5 border-3 border-ink-black bg-surface-white shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-ink-black">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-green shrink-0" aria-hidden="true" />
            <span>
              Every record is verified against original completion documents, academic credentials, and authentic code repositories.
            </span>
          </div>
          <span className="font-bold text-cobalt-blue shrink-0">
            ZERO EXAGGERATIONS · VERIFIABLE FACTS
          </span>
        </div>

        {/* D. CLOSING NAVIGATION */}
        <div className="border-3 border-ink-black bg-surface-white p-6 sm:p-8 shadow-brutal-md space-y-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
              NEXT STEPS // CONNECT
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-ink-black">
              Want to Review Technical Case Studies or Discuss Opportunities?
            </h3>
            <p className="font-body text-sm text-text-muted max-w-2xl leading-relaxed">
              Explore hands-on software challenges in the projects showcase, inspect verified repository codebases, or reach out directly for internships and junior engineering roles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Button
              href="/projects"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              data-avatar-trigger="explore-projects"
              className="w-full sm:w-auto text-center"
            >
              EXPLORE PROJECT CASE STUDIES
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              icon={<Mail className="w-4 h-4" />}
              data-avatar-trigger="get-in-touch"
              className="w-full sm:w-auto text-center hover:bg-canvas-cream"
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <EvidenceLightboxModal
        item={activeEvidence}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        triggerRef={activeTriggerRef}
      />
    </section>
  );
}
