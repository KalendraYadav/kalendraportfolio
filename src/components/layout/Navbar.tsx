"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, Badge, ResumeNoticeModal } from "@/components/ui";
import { Menu, X, Download, FileText } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeNoticeOpen, setResumeNoticeOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close menu on Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isOpen) {
          closeMenu();
        }
        if (resumeNoticeOpen) {
          setResumeNoticeOpen(false);
        }
      }
    },
    [isOpen, resumeNoticeOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface-white border-b-3 border-ink-black shadow-brutal-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Wordmark Brand */}
            <Link
              href="/#home"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 font-display font-black text-xl md:text-2xl tracking-tighter text-ink-black hover:bg-cyber-yellow px-2 py-1 border-2 border-transparent hover:border-ink-black transition-all select-none"
            >
              <span>{siteConfig.brand}</span>
              <span
                className="w-2.5 h-2.5 rounded-full bg-accent-green border border-ink-black shrink-0"
                aria-label="Status: Open for roles"
                title="Status: Open for roles"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6"
            >
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-sm font-bold uppercase tracking-wider text-ink-black hover:bg-cyber-yellow hover:text-ink-black px-2 py-1 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <Badge size="sm" variant="pink">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {siteConfig.resume.isAvailable ? (
                <Button
                  href={siteConfig.resume.url}
                  variant="primary"
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                >
                  {siteConfig.resume.label}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  icon={<FileText className="w-4 h-4" />}
                  onClick={() => setResumeNoticeOpen(true)}
                  title="Click to view résumé availability status"
                >
                  {"RÉSUMÉ"}
                </Button>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-2 border-2 border-ink-black bg-surface-white hover:bg-cyber-yellow active:translate-x-0.5 active:translate-y-0.5 transition-all text-ink-black"
              >
                {isOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="lg:hidden border-t-3 border-ink-black bg-canvas-cream px-4 py-6 shadow-brutal-md space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="font-mono text-base font-bold uppercase tracking-wider text-ink-black bg-surface-white border-2 border-ink-black p-3 hover:bg-cyber-yellow transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <Badge size="sm" variant="pink">
                      {item.badge}
                    </Badge>
                  ) : (
                    <span className="font-mono text-xs text-text-muted">
                      {item.sectionStatus === "upcoming" ? "// UPCOMING" : "➔"}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t-2 border-ink-black">
              {siteConfig.resume.isAvailable ? (
                <Button
                  href={siteConfig.resume.url}
                  variant="primary"
                  fullWidth
                  icon={<Download className="w-4 h-4" />}
                >
                  {siteConfig.resume.label}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  fullWidth
                  icon={<FileText className="w-4 h-4" />}
                  onClick={() => {
                    closeMenu();
                    setResumeNoticeOpen(true);
                  }}
                >
                  {"VIEW RÉSUMÉ STATUS"}
                </Button>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Résumé Status Notice Dialog (Avoids fake 404 download) */}
      <ResumeNoticeModal
        isOpen={resumeNoticeOpen}
        onClose={() => setResumeNoticeOpen(false)}
      />
    </>
  );
}
