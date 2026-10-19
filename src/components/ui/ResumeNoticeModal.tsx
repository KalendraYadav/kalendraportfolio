"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "./Button";
import { X, FileText, AlertCircle } from "lucide-react";

export interface ResumeNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  notice?: string;
}

export function ResumeNoticeModal({
  isOpen,
  onClose,
  title = "Official Résumé Coming Soon",
  notice = siteConfig.resume.notice,
}: ResumeNoticeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      aria-describedby="resume-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-black/70 backdrop-blur-none"
    >
      {/* Backdrop Dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Box */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md bg-surface-white border-3 sm:border-4 border-ink-black shadow-brutal-xl flex flex-col overflow-hidden outline-none animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Retro Window Header Strip */}
        <div className="flex items-center justify-between border-b-3 border-ink-black bg-ink-black text-surface-white px-3 sm:px-4 py-2 sm:py-2.5 select-none shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-pop-red border border-ink-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-cyber-yellow border border-ink-black" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black" />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-surface-white">
              Résumé Status
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close résumé notice dialog"
            className="p-1.5 border border-surface-white text-surface-white hover:bg-pop-red hover:text-surface-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-yellow transition-colors cursor-pointer min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-cyber-yellow border-2 border-ink-black shadow-brutal-sm shrink-0">
              <FileText className="w-6 h-6 text-ink-black" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3
                id="resume-modal-title"
                className="font-display font-black text-2xl uppercase tracking-tight text-ink-black"
              >
                {title}
              </h3>
              <span className="font-mono text-xs font-bold text-text-muted">
                {"STATUS: PENDING OFFICIAL EXPORT"}
              </span>
            </div>
          </div>

          <div className="p-4 bg-canvas-cream border-2 border-ink-black space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink-black">
              <AlertCircle className="w-3.5 h-3.5 text-pop-red shrink-0" aria-hidden="true" />
              <span>CONTENT INTEGRITY POLICY</span>
            </div>
            <p
              id="resume-modal-desc"
              className="font-body text-sm text-ink-black/85 leading-relaxed"
            >
              {notice}
            </p>
          </div>

          <p className="font-body text-xs text-text-muted leading-relaxed">
            To prevent dead links or placeholder PDF files, the download button will automatically activate once the verified curriculum vitae PDF is confirmed in the repository.
          </p>

          <div className="pt-2 flex justify-end gap-3 border-t-2 border-ink-black/10">
            <Button variant="primary" size="sm" onClick={onClose}>
              Acknowledge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
