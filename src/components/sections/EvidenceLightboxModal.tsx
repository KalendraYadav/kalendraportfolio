"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ExperienceEvidenceItem } from "@/data/experience";
import { X, ExternalLink, ShieldCheck, FileText, ZoomIn } from "lucide-react";

export interface EvidenceLightboxModalProps {
  item: ExperienceEvidenceItem | null;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function EvidenceLightboxModal({
  item,
  isOpen,
  onClose,
  triggerRef,
}: EvidenceLightboxModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [failedItemId, setFailedItemId] = React.useState<string | null>(null);
  const imageFailed = item ? failedItemId === item.id : false;

  // Keyboard Escape & Tab trap listener
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (dialogRef.current && e.key === "Tab") {
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
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const triggerNode = triggerRef?.current;

    window.addEventListener("keydown", handleKeyDown);

    // Focus close button on open
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);

      // Return focus to trigger button
      if (triggerNode) {
        triggerNode.focus();
      }
    };
  }, [isOpen, handleKeyDown, triggerRef]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="evidence-dialog-title"
      aria-describedby="evidence-dialog-description"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-ink-black/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-4xl max-h-[92vh] flex flex-col bg-surface-white border-4 border-ink-black shadow-brutal-xl overflow-hidden focus:outline-none"
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-cyber-yellow border-b-4 border-ink-black shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="p-1 bg-surface-white border-2 border-ink-black shadow-brutal-xs shrink-0" aria-hidden="true">
              <ShieldCheck className="w-4 h-4 text-ink-black" />
            </span>
            <div className="truncate">
              <span className="font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase text-ink-black/80 block">
                {item.badgeLabel}
              </span>
              <h2
                id="evidence-dialog-title"
                className="font-display font-black text-base sm:text-lg md:text-xl uppercase tracking-tight text-ink-black truncate"
              >
                {item.title}
              </h2>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close evidence inspection viewer"
            className="p-1.5 sm:p-2 bg-surface-white border-2 border-ink-black shadow-brutal-sm hover:bg-pop-red hover:text-surface-white transition-colors cursor-pointer shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ink-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Inspection Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 bg-canvas-cream/50">
          {/* Certificate View Container */}
          <div className="relative border-3 border-ink-black bg-surface-white shadow-brutal-md p-2 sm:p-4 flex flex-col items-center justify-center min-h-[300px]">
            {!imageFailed ? (
              <div className="relative w-full flex flex-col items-center">
                <div className="relative w-full max-h-[62vh] flex items-center justify-center overflow-auto bg-ink-black/5 p-2">
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    width={1600}
                    height={1100}
                    className="max-h-[58vh] w-auto h-auto object-contain border-2 border-ink-black shadow-brutal-sm"
                    priority
                    onError={() => setFailedItemId(item.id)}
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-text-muted">
                  <ZoomIn className="w-3.5 h-3.5 text-cobalt-blue" aria-hidden="true" />
                  <span>High-resolution view. You can also open the original file below.</span>
                </div>
              </div>
            ) : (
              /* Informative Neo-brutalist Pending State */
              <div className="p-6 sm:p-8 text-center space-y-3 max-w-lg">
                <div className="w-12 h-12 mx-auto bg-cyber-yellow border-3 border-ink-black shadow-brutal-sm flex items-center justify-center">
                  <FileText className="w-6 h-6 text-ink-black" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-pop-red bg-pop-red/10 px-2 py-0.5 border border-pop-red inline-block">
                    DOCUMENT RECORD REGISTERED
                  </span>
                  <h3 className="font-display font-black text-lg uppercase text-ink-black">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ink-black/80 leading-relaxed">
                    This verified evidence entry is wired to:
                  </p>
                  <code className="block font-mono text-xs bg-ink-black text-cyber-yellow px-2 py-1.5 border border-ink-black select-all break-all text-left">
                    {item.imageSrc}
                  </code>
                </div>
                <p className="font-mono text-[11px] text-text-muted">
                  Place the original screenshot asset at this path to render the full image view.
                </p>
              </div>
            )}
          </div>

          {/* Description & Metadata Card */}
          <div className="border-3 border-ink-black bg-surface-white p-4 sm:p-5 shadow-brutal-sm space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-black/15 pb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt-blue">
                Verified Documentary Evidence
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {item.certificateId && (
                  <span className="font-mono text-xs font-bold text-ink-black bg-surface-white border border-ink-black px-2 py-0.5 shadow-brutal-xs">
                    ID: {item.certificateId}
                  </span>
                )}
                {item.issueDate && (
                  <span className="font-mono text-xs font-bold text-ink-black bg-canvas-cream border border-ink-black px-2 py-0.5 shadow-brutal-xs">
                    Issued: {item.issueDate}
                  </span>
                )}
              </div>
            </div>

            <p id="evidence-dialog-description" className="font-body text-xs sm:text-sm text-ink-black/90 leading-relaxed">
              {item.description || item.altText}
            </p>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-surface-white border-t-4 border-ink-black shrink-0">
          <a
            href={item.imageSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-ink-black bg-canvas-cream border-2 border-ink-black px-3 py-2 shadow-brutal-sm hover:bg-cyber-yellow transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Open Asset In New Tab</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center font-mono text-xs font-black uppercase tracking-wider text-ink-black bg-cyber-yellow border-2 border-ink-black px-4 py-2 shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
          >
            Done Inspecting
          </button>
        </div>
      </div>
    </div>
  );
}
