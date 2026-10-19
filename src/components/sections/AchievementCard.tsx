"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Achievement } from "@/data/achievements";
import { ExperienceEvidenceItem } from "@/data/experience";
import {
  Trophy,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ZoomIn,
  ExternalLink,
  ShieldCheck,
  FileText,
  Calendar,
} from "lucide-react";

export interface AchievementCardProps {
  achievement: Achievement;
  onInspectEvidence?: (
    item: ExperienceEvidenceItem,
    triggerNode?: HTMLButtonElement | null
  ) => void;
}

const accentVariants: Record<string, string> = {
  yellow: "bg-cyber-yellow",
  cyan: "bg-cyber-cyan",
  pink: "bg-pop-pink",
  blue: "bg-cobalt-blue text-surface-white",
  white: "bg-surface-white",
};

export function AchievementCard({
  achievement,
  onInspectEvidence,
}: AchievementCardProps) {
  const [isEvidenceExpanded, setIsEvidenceExpanded] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const hasEvidence =
    achievement.evidence && achievement.evidence.length > 0;
  const evidencePanelId = `achievement-evidence-${achievement.id}`;

  return (
    <article className="border-3 border-ink-black bg-surface-white shadow-brutal-md transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg motion-reduce:hover:transform-none">
      {/* 1. Header Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink-black/15 bg-canvas-cream px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`p-1.5 border border-ink-black shadow-brutal-xs ${
              accentVariants[achievement.accentVariant || "yellow"]
            }`}
            aria-hidden="true"
          >
            {achievement.category === "hackathon" || achievement.category === "competition" ? (
              <Trophy className="w-3.5 h-3.5 text-ink-black" />
            ) : (
              <Award className="w-3.5 h-3.5 text-ink-black" />
            )}
          </span>

          <span className="font-mono text-xs font-black uppercase tracking-wider text-ink-black bg-surface-white border border-ink-black px-2 py-0.5 shadow-brutal-xs">
            {achievement.achievementType}
          </span>

          {achievement.result && (
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-cyber-yellow border border-ink-black px-2 py-0.5 text-ink-black">
              {achievement.result}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-black bg-surface-white border border-ink-black/40 px-2.5 py-0.5 shadow-brutal-xs">
          <Calendar className="w-3 h-3 text-cobalt-blue" aria-hidden="true" />
          <span>{achievement.date}</span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-5 sm:p-7 md:p-8 space-y-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs sm:text-sm font-black text-cobalt-blue uppercase tracking-wider">
              {achievement.eventName || achievement.organization}
            </span>
            {achievement.organization && achievement.eventName && (
              <span className="font-mono text-xs text-text-muted font-bold">
                by {achievement.organization}
              </span>
            )}
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink-black leading-snug">
            {achievement.title}
          </h3>
        </div>

        {/* Scan-Friendly Description */}
        <p className="font-body text-sm sm:text-base text-ink-black/90 leading-relaxed max-w-4xl">
          {achievement.description}
        </p>

        {/* Supporting Details (Bullet highlights) */}
        {achievement.supportingDetails && achievement.supportingDetails.length > 0 && (
          <div className="space-y-2.5 pt-4 border-t-2 border-ink-black/10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted block">
              Key Highlights:
            </span>
            <ul className="space-y-2">
              {achievement.supportingDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink-black/90 leading-relaxed"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-accent-green shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Project or External URL */}
        {(achievement.relatedProject || achievement.externalUrl) && (
          <div className="pt-4 border-t-2 border-ink-black/10 flex flex-wrap items-center gap-3">
            {achievement.relatedProject && (
              <span className="font-mono text-xs text-text-muted">
                Related Project:{" "}
                <strong className="text-ink-black">
                  {achievement.relatedProject.name}
                </strong>
              </span>
            )}

            {achievement.externalUrl && (
              <a
                href={achievement.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs font-bold text-cobalt-blue hover:underline"
              >
                <span>Official Result / Event Link</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            )}
          </div>
        )}

        {/* 3. Expandable Evidence Section */}
        {hasEvidence && achievement.evidence && (
          <div className="pt-5 border-t-2 border-ink-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsEvidenceExpanded((prev) => !prev)}
                aria-expanded={isEvidenceExpanded}
                aria-controls={evidencePanelId}
                data-avatar-trigger="evidence-view"
                className={`inline-flex items-center justify-between sm:justify-start gap-2 font-mono text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 border-2 border-ink-black transition-all cursor-pointer select-none ${
                  isEvidenceExpanded
                    ? "bg-ink-black text-cyber-yellow shadow-brutal-sm"
                    : "bg-cyber-yellow text-ink-black shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                }`}
              >
                <span>
                  {isEvidenceExpanded
                    ? "Hide Evidence"
                    : `View Certificate & Evidence (${achievement.evidence.length})`}
                </span>
                {isEvidenceExpanded ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                )}
              </button>

              <span className="font-mono text-xs text-text-muted">
                {isEvidenceExpanded
                  ? "Click any document below to inspect high-resolution preview"
                  : `${achievement.evidence.length} verified item(s) on file`}
              </span>
            </div>

            {/* Collapsible Panel */}
            {isEvidenceExpanded && (
              <div
                id={evidencePanelId}
                role="region"
                aria-label={`Evidence for ${achievement.title}`}
                className="mt-6 pt-5 border-t-2 border-dashed border-ink-black/30 space-y-4 animate-in fade-in duration-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-cobalt-blue flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent-green" aria-hidden="true" />
                    <span>Verified Documentary Evidence</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {achievement.evidence.map((evItem) => {
                    const isImgFailed = failedImages[evItem.id];

                    return (
                      <div
                        key={evItem.id}
                        className="border-2 border-ink-black bg-canvas-cream/60 p-3.5 sm:p-4 shadow-brutal-sm flex flex-col justify-between space-y-3 group/card hover:bg-surface-white transition-colors"
                      >
                        <div className="space-y-2.5">
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

                          <h4 className="font-display font-black text-sm sm:text-base uppercase tracking-tight text-ink-black leading-snug">
                            {evItem.title}
                          </h4>

                          <button
                            type="button"
                            onClick={(e) => onInspectEvidence?.(evItem, e.currentTarget)}
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
                                  sizes="(max-width: 640px) 100vw, 50vw"
                                  className="object-contain p-2 group-hover/btn:scale-105 transition-transform duration-200"
                                  onError={() =>
                                    setFailedImages((prev) => ({
                                      ...prev,
                                      [evItem.id]: true,
                                    }))
                                  }
                                />
                                <div className="absolute inset-0 bg-ink-black/60 opacity-0 group-hover/btn:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyber-yellow bg-ink-black border border-cyber-yellow px-2 py-1 shadow-brutal-xs">
                                    <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>Click to Inspect</span>
                                  </span>
                                </div>
                              </>
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center space-y-1.5 bg-canvas-cream">
                                <FileText className="w-6 h-6 text-cobalt-blue" aria-hidden="true" />
                                <span className="font-mono text-[10px] font-black uppercase text-ink-black">
                                  Document Record
                                </span>
                              </div>
                            )}
                          </button>

                          {evItem.description && (
                            <p className="font-body text-xs text-ink-black/80 leading-relaxed">
                              {evItem.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 border-t border-ink-black/15 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={(e) => onInspectEvidence?.(evItem, e.currentTarget)}
                            data-avatar-trigger="evidence-view"
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-black bg-surface-white border border-ink-black px-2.5 py-1.5 shadow-brutal-xs hover:bg-cyber-yellow transition-colors cursor-pointer"
                          >
                            <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Inspect Full Evidence</span>
                          </button>

                          <a
                            href={evItem.imageSrc}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-avatar-trigger="evidence-view"
                            aria-label={`Open original ${evItem.title} in new tab`}
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
    </article>
  );
}
