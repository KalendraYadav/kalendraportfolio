"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { Project } from "@/data/projects";
import { Badge, Button } from "@/components/ui";
import { X, Layers, AlertCircle, Wrench, ExternalLink, GitBranch } from "lucide-react";

export interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function CaseStudyModal({
  project,
  isOpen,
  onClose,
  triggerRef,
}: CaseStudyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number | null>(null);
  const touchMoved = useRef(false);

  // Keyboard Escape & Tab trap listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      // Restore focus to trigger element on close
      triggerRef?.current?.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown, triggerRef]);

  // Isolate wheel events on the modal card so they never leak to the background page
  const handleModalCardWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      // If scrolling over non-scrollable header or footer, redirect to the modal scrollable body
      if (!scrollContainerRef.current.contains(e.target as Node)) {
        scrollContainerRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    }
    // Stop propagation so modal scrolling never moves the underlying window
    e.stopPropagation();
  };

  // Enable smooth touch scrolling on backdrop without accidentally triggering onClose
  const handleBackdropTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchMoved.current = false;
  };

  const handleBackdropTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current !== null) {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;
      if (Math.abs(deltaY) > 2) {
        touchMoved.current = true;
        window.scrollBy(0, deltaY);
        touchStartY.current = currentY;
      }
    }
  };

  const handleBackdropTouchEnd = () => {
    touchStartY.current = null;
    setTimeout(() => {
      touchMoved.current = false;
    }, 60);
  };

  const handleBackdropClick = () => {
    if (touchMoved.current) {
      return;
    }
    onClose();
  };

  if (!isOpen || !project) return null;

  const statusBadgeVariant: Record<string, "yellow" | "cyan" | "pink" | "green"> = {
    CASE_STUDY: "yellow",
    PROTOTYPE: "cyan",
    IN_DEVELOPMENT: "pink",
    VERIFIED_LIVE: "green",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      aria-describedby={`modal-desc-${project.id}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleBackdropClick();
        }
      }}
      onTouchStart={handleBackdropTouchStart}
      onTouchMove={handleBackdropTouchMove}
      onTouchEnd={handleBackdropTouchEnd}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/70 backdrop-blur-none"
    >
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        ref={dialogRef}
        onWheel={handleModalCardWheel}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-surface-white border-3 sm:border-4 border-ink-black shadow-brutal-xl flex flex-col overflow-hidden outline-none animate-in fade-in zoom-in-95 duration-150 overscroll-contain"
      >
        {/* Retro Window Header Bar */}
        <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-3 sm:px-4 py-2 sm:py-2.5 shrink-0 select-none">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-pop-red inline-block border border-ink-black" />
              <span className="w-3 h-3 rounded-full bg-cyber-yellow inline-block border border-ink-black" />
              <span className="w-3 h-3 rounded-full bg-accent-green inline-block border border-ink-black" />
            </div>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-surface-white truncate">
              {project.name}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study dialog"
            className="p-1.5 border border-surface-white text-surface-white hover:bg-pop-red hover:text-surface-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-yellow transition-colors cursor-pointer min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center shrink-0 ml-2"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div
          ref={scrollContainerRef}
          className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1 overscroll-contain"
        >
          {/* Header & Badges */}
          <div className="space-y-3 border-b-2 border-ink-black/15 pb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={statusBadgeVariant[project.status] || "yellow"} size="sm">
                {project.statusLabel}
              </Badge>
              <Badge variant="outline" size="sm">
                {project.category}
              </Badge>
              <span className="font-mono text-xs text-text-muted">
                {`ROLE: ${project.role}`}
              </span>
            </div>

            <h2
              id={`modal-title-${project.id}`}
              className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-ink-black"
            >
              {project.name}
            </h2>

            <p
              id={`modal-desc-${project.id}`}
              className="font-body text-base sm:text-lg text-ink-black/90 font-medium leading-relaxed"
            >
              {project.tagline}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-pop-red shrink-0" aria-hidden="true" />
              <h3 className="font-display font-bold text-lg uppercase tracking-tight text-ink-black">
                Problem Statement
              </h3>
            </div>
            <div className="p-4 bg-canvas-cream border-2 border-ink-black">
              <p className="font-body text-sm sm:text-base text-ink-black/90 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Solution & Architecture */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cobalt-blue shrink-0" aria-hidden="true" />
              <h3 className="font-display font-bold text-lg uppercase tracking-tight text-ink-black">
                Solution Architecture
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-ink-black/90 leading-relaxed">
              {project.solutionOverview}
            </p>
            <ul className="space-y-2 pt-1 font-body text-sm text-ink-black/85">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-cobalt-blue shrink-0">➔</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Technical Challenges */}
          {project.keyChallenges.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-ink-black shrink-0" aria-hidden="true" />
                <h3 className="font-display font-bold text-lg uppercase tracking-tight text-ink-black">
                  Key Technical Challenges Overcome
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {project.keyChallenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-surface-white border-2 border-ink-black shadow-brutal-sm space-y-1.5"
                  >
                    <h4 className="font-display font-bold text-sm uppercase text-ink-black">
                      {challenge.title}
                    </h4>
                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-text-muted">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold uppercase tracking-wider bg-canvas-cream border border-ink-black px-2.5 py-1 text-ink-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verified External Links (Strictly omitted if not verified) */}
          {(project.repositoryUrl || project.liveUrl) && (
            <div className="pt-4 border-t-2 border-ink-black/15 flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  external
                  variant="primary"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  View Live Deployment
                </Button>
              )}
              {project.repositoryUrl && (
                <Button
                  href={project.repositoryUrl}
                  external
                  variant="secondary"
                  size="sm"
                  icon={<GitBranch className="w-4 h-4" />}
                >
                  Inspect Source Code
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t-3 border-ink-black bg-canvas-cream p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <span className="font-mono text-xs text-text-muted truncate max-w-full">
            {"// CONFIDENTIAL CASE STUDY · KALENDRA YADAV"}
          </span>
          <Button variant="outline" size="sm" onClick={onClose} className="w-full sm:w-auto text-center">
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
